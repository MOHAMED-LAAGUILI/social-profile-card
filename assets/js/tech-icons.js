document.addEventListener("DOMContentLoaded", function() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    // Function to randomly animate and position icons with smooth transitions
    function snoopAround(icon) {
      const randomX = Math.random() * (window.innerWidth - 100);  
      const randomY = Math.random() * (window.innerHeight - 100);
  
      // Randomize initial position with smooth fade-in and random transition timing
      icon.style.left = `${randomX}px`;
      icon.style.top = `${randomY}px`;
      icon.style.opacity = 1;
      icon.style.transition = 'opacity 1s ease, transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55), box-shadow 0.5s ease-out';
  
      // Random scaling effect (pulse effect) with smooth transition
      const scaleEffect = Math.random() * 0.6 + 0.8; 
      icon.style.transform = `scale(${scaleEffect}) rotate(${Math.random() * 30 - 15}deg)`; 
  
      // Add a subtle glowing effect with randomized intensity
      const glowIntensity = Math.random() * 0.6 + 0.2; // Random glow intensity
      const glow = Math.random() > 0.7 ? `0px 0px ${glowIntensity * 15}px ${glowIntensity * 5}px rgba(255, 255, 255, 0.8)` : 'none'; 
      icon.style.boxShadow = glow;
  
      // Float effect (randomized but smooth)
      const floatDuration = Math.random() * 10 + 5; // Randomize the duration for continuous floating
      const floatKeyframes = `
        @keyframes randomFloat-${Math.random().toString(36).substr(2, 5)} {
          0% { transform: translate(0, 0); }
          50% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px); }
          100% { transform: translate(0, 0); }
        }
      `;
      
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(floatKeyframes, styleSheet.cssRules.length);
      
      // Apply the float animation with unique animation name
      icon.style.animation = `randomFloat-${Math.random().toString(36).substr(2, 5)} ${floatDuration}s ease-in-out infinite`;
  
      // Hover effect to change color and scale (pulse effect)
      icon.addEventListener('mouseover', () => {
        icon.style.transition = 'color 0.3s ease, transform 0.5s ease-out';
        icon.style.color = `hsl(${Math.random() * 360}, 100%, 60%)`;  // Random color
        icon.style.transform = `scale(${Math.random() * 0.4 + 1.2}) rotate(${Math.random() * 30 - 15}deg)`; 
      });
  
      // Fade out icon after random time to give it a disappearing effect
      setTimeout(() => {
        icon.style.transition = 'opacity 1s ease-out'; // Ensure smooth fade-out
        icon.style.opacity = 0;
      }, Math.random() * 7000 + 3000); // Random time between 3 and 10 seconds for fade-out
    }
  
    // Loop through each icon and apply the snooping behavior at random intervals
    function startSnooping() {
      techIcons.forEach(icon => {
        setInterval(() => {
          snoopAround(icon);
        }, Math.random() * 5000 + 2000); // Random interval between 2 and 7 seconds
      });
    }
  
    // Initialize the snooping effect
    startSnooping();
  });
  