  // Initialize AOS for animations
  AOS.init();

  // Typed.js initialization
  var options = {
    strings: ["MERN STACK DEVELOPER", "Full Stack Developer", "JavaScript Enthusiast", 'Web Developer'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  };
  var typed = new Typed('.typed', options);



// 

document.addEventListener("DOMContentLoaded", function() {
  const techIcons = document.querySelectorAll('.tech-icon');

  // Function to randomly show and hide the icons
  function snoopAround(icon) {
    // Randomize position within window bounds
    const randomX = Math.random() * (window.innerWidth - 100);  // Leaving a bit of margin for the icon size
    const randomY = Math.random() * (window.innerHeight - 100);

    // Set random position and apply fade-in
    icon.style.left = `${randomX}px`;
    icon.style.top = `${randomY}px`;
    icon.style.opacity = 1;

    // Random movement effect with keyframe animation
    const duration = Math.random() * 10 + 5; // Random duration between 5 and 15 seconds
    icon.style.animation = `randomFloat ${duration}s ease-in-out infinite`;

    // Hide icon after random time
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
