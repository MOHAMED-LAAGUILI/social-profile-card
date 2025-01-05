const canvas = document.getElementById("starsCanvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.z = 1500;

const colorPalette = [0xFF6B6B, 0x4ECDC4, 0x45B7D1, 0xFFA07A, 0x98FB98, 0xDDA0DD, 0x40E0D0];
const starCount = 100000;
const galaxyRadius = 1000;

function createStarField() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        const r = Math.random() * galaxyRadius;
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() - 0.5) * Math.PI * 0.5;

        positions[i3] = r * Math.sin(theta) * Math.cos(phi);
        positions[i3 + 1] = r * Math.sin(phi);
        positions[i3 + 2] = r * Math.cos(theta) * Math.cos(phi);

        const color = new THREE.Color(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;

        sizes[i] = Math.random() * 3 + 1;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
        size: 2,
        sizeAttenuation: true,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
    });

    return new THREE.Points(geometry, material);
}

function createNebula() {
    const geometry = new THREE.SphereGeometry(galaxyRadius * 0.8, 64, 64);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
        },
        vertexShader: `
            varying vec3 vNormal;
            void main() {
                vNormal = normal;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            varying vec3 vNormal;
            float noise(vec3 p) {
                return fract(sin(dot(p, vec3(12.9898, 78.233, 45.5432))) * 43758.5453);
            }
            void main() {
                vec3 color1 = vec3(0.5, 0.0, 0.5);
                vec3 color2 = vec3(0.0, 0.5, 0.5);
                float n = noise(vNormal * 10.0 + time * 0.1);
                vec3 color = mix(color1, color2, n);
                gl_FragColor = vec4(color, 0.2);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
    });
    return new THREE.Mesh(geometry, material);
}

const starField = createStarField();
scene.add(starField);

const nebula = createNebula();
scene.add(nebula);

let mouseX = 0, mouseY = 0;
document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

let time = 0;
function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    const positions = starField.geometry.attributes.position.array;
    const sizes = starField.geometry.attributes.size.array;
    for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];

        const distance = Math.sqrt(x * x + y * y + z * z);
        const angle = 0.0005 * (galaxyRadius - distance) / galaxyRadius;
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);

        positions[i3] = cosAngle * x - sinAngle * z;
        positions[i3 + 2] = sinAngle * x + cosAngle * z;

        // Black hole pull effect
        const blackHoleEffect = 5 / (distance * distance + 0.1);
        positions[i3] -= x * blackHoleEffect;
        positions[i3 + 1] -= y * blackHoleEffect;
        positions[i3 + 2] -= z * blackHoleEffect;

        // Depth effect
        sizes[i] = Math.max(1, 3 * (1 - distance / galaxyRadius));
    }
    starField.geometry.attributes.position.needsUpdate = true;
    starField.geometry.attributes.size.needsUpdate = true;

    nebula.material.uniforms.time.value = time;

    camera.position.x = Math.sin(time * 0.1) * 100;
    camera.position.y = Math.cos(time * 0.1) * 100;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

canvas.addEventListener("click", () => {
    gsap.to(starField.material, { size: 6, duration: 0.5, yoyo: true, repeat: 1 });
});