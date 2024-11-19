// Initialize AOS for animations with more advanced settings
AOS.init({
    offset: 200,              // Trigger animation when the element is 200px from the top of the viewport
    duration: 1200,           // Increased animation duration for smoother effects
    easing: 'ease-out-cubic', // A cubic easing for smoother, slower animations
    once: true,               // Animate only once when scrolling
    mirror: true,             // Allow animations to play when scrolling back up
    anchorPlacement: 'top-bottom', // Start animation at the bottom of the element
    delay: 100,               // Slight delay to stagger animations
  });
  