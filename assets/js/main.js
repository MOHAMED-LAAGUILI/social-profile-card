  // Initialize AOS for animations with advanced settings
  AOS.init({
    offset: 200,                   // Trigger animation when the element is 200px from the top of the viewport
    duration: 1500,                // Increased animation duration for smoother and more dramatic effects
    easing: 'ease-in-out-quart',   // Advanced easing for a refined and natural animation flow
    delay: 150,                    // Stagger animations with a slight delay
    once: true,                    // Play animations only once during the scroll
    mirror: true,                  // Re-trigger animations when scrolling back up
    anchorPlacement: 'center-center', // Animate when the element's center is in the viewport center
    disable: function () {         // Advanced logic for disabling animations
      return window.innerWidth < 768; // Disable animations on small screens
    },
    debounceDelay: 50,             // Optimize performance by debouncing resize and scroll events
    throttleDelay: 99,             // Throttle execution to improve performance
  });
  
  // Optional: Customize individual elements with data attributes
  document.querySelectorAll('[data-aos]').forEach((el) => {
    el.dataset.aosDelay = Math.floor(Math.random() * 300); // Randomize delay for staggered effects
    el.dataset.aosDuration = 1000 + Math.floor(Math.random() * 500); // Vary duration for dynamic animations
    el.dataset.aosEasing = 'ease-out-back'; // Add a "bounce-back" easing for some elements
  });