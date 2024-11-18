// Initialize AOS for animations with more advanced settings
AOS.init({
  offset: 200,            // Trigger animation when the element is 200px from the top of the viewport
  duration: 1200,         // Increased animation duration for smoother effects
  easing: 'ease-out-cubic', // A cubic easing for smoother, slower animations
  once: true,             // Animate only once when scrolling
  mirror: true,           // Allow animations to play when scrolling back up
  anchorPlacement: 'top-bottom', // Start animation at the bottom of the element
  delay: 100,             // Slight delay to stagger animations
});

// Typed.js initialization with even more engaging settings
var options = {
  strings: [
    "MERN STACK DEVELOPER", 
    "Full Stack Developer", 
    "JavaScript Enthusiast", 
    "Web Developer",
    "UI/UX Designer", 
    "Open Source Contributor", 
    "React Native Developer", 
    "Code Magician", 
    "Tech Explorer", 
    "Creative Coder"
  ],
  typeSpeed: 70,           // Faster typing speed for a more energetic feel
  backSpeed: 40,           // Faster backspacing for smoother transitions
  backDelay: 1000,         // Delay before starting to delete
  startDelay: 800,         // Initial delay before starting typing
  loop: true,              // Keep typing indefinitely
  showCursor: true,        // Show the cursor for added realism
  cursorChar: '/>',         // Solid block cursor
  contentType: 'html',     // Allow HTML tags within strings
};

var typed = new Typed('.typed', options);


// Tech Icons Random Movement and Animation with Extra Interactivity
document.addEventListener("DOMContentLoaded", function() {
  const techIcons = document.querySelectorAll('.tech-icon');

  // Function to randomly show and animate the icons with smooth transitions
  function snoopAround(icon) {
    const randomX = Math.random() * (window.innerWidth - 100);  // Account for icon width
    const randomY = Math.random() * (window.innerHeight - 100);

    // Randomize position and apply smooth fade-in
    icon.style.left = `${randomX}px`;
    icon.style.top = `${randomY}px`;
    icon.style.opacity = 1;
    icon.style.transition = 'opacity 0.5s ease, transform 0.5s ease, color 0.3s ease';  // Smooth transition for opacity, transform, and color

    // Add random scaling effect (pulse effect)
    const scaleEffect = Math.random() * 0.5 + 0.8;  // Scale between 0.8 and 1.3
    icon.style.transform = `scale(${scaleEffect}) rotate(${Math.random() * 30 - 15}deg)`;  // Added rotation to enhance animation

    // Add a subtle glowing effect randomly
    const glow = Math.random() > 0.7 ? '0px 0px 15px 5px rgba(255, 255, 255, 0.8)' : 'none'; 
    icon.style.boxShadow = glow;

    // Random movement duration for continuous floating
    const duration = Math.random() * 10 + 5; // Random duration between 5 and 15 seconds
    icon.style.animation = `randomFloat ${duration}s ease-in-out infinite`;

    // Add a color change effect on hover
    icon.addEventListener('mouseover', () => {
      icon.style.transition = 'color 0.3s ease, transform 0.5s ease';
      icon.style.color = `hsl(${Math.random() * 360}, 100%, 60%)`;  // Random color on hover
      icon.style.transform = `scale(${Math.random() * 0.4 + 1.2}) rotate(${Math.random() * 30 - 15}deg)`;  // Slightly scale and rotate
    });

    // Hide icon after random time (fading out)
    setTimeout(() => {
      icon.style.opacity = 0;
    }, Math.random() * 7000 + 3000); // Random time between 3 and 10 seconds for fade-out
  }

  // Loop through each icon and apply the snooping behavior
  function startSnooping() {
    techIcons.forEach(icon => {
      setInterval(() => {
        snoopAround(icon);
      }, Math.random() * 5000 + 2000); // Random interval between 2 and 7 seconds
    });
  }

  // Initialize snooping effect
  startSnooping();
});


// Enhanced Background with Random Particle Animation (Stars)
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("starsCanvas");
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 300;

  const particleCount = 1000; // Increased particles for a denser effect
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

    // Assign random color for each particle for a colorful effect
    colors[i * 3] = Math.random();
    colors[i * 3 + 1] = Math.random();
    colors[i * 3 + 2] = Math.random();
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 2,
    vertexColors: true, // Use color from particles' colors array
    opacity: 0.8, // Slight opacity for a glowing effect
    transparent: true, // Enable transparency for fade effects
  });

  const stars = new THREE.Points(particles, particleMaterial);
  scene.add(stars);

  function animate() {
    stars.rotation.x += 0.001;
    stars.rotation.y += 0.002;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
});


// Custom Cursor Effect
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
  cursor.style.opacity = 1;

  // Adding a trailing effect (cursor leaves a subtle trail)
  setTimeout(() => {
    cursor.style.opacity = 0;
  }, 100); // Cursor fades out after 100ms
});

// CSS for the custom cursor
document.styleSheets[0].insertRule(`
  .cursor {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
`, document.styleSheets[0].cssRules.length);


