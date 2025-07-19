document.addEventListener("DOMContentLoaded", () => {
  // Create floating moons
  const createFloatingMoons = () => {
    const moods = ['calm', 'focus', 'energize', 'relax', 'motivate', 'reflect'];
    const currentMood = document.body.classList.contains('homepage') ? 
      'all' : 
      moods.find(mood => document.body.classList.contains(mood));
    
    const moonCount = currentMood === 'all' ? 5 : 3;
    
    for (let i = 0; i < moonCount; i++) {
      const moon = document.createElement('div');
      moon.className = `floating-moon moon-${i+1}`;
      
      // Random positioning
      moon.style.left = `${Math.random() * 80 + 10}%`;
      moon.style.top = `${Math.random() * 80 + 10}%`;
      
      // Random animation duration
      moon.style.animationDuration = `${Math.random() * 3 + 4}s`;
      
      // Mood-specific moon colors
      if (currentMood !== 'all') {
        moon.style.filter = `hue-rotate(${moods.indexOf(currentMood) * 60}deg)`;
      }
      
      document.body.appendChild(moon);
    }
  };

  // Animate task items sequentially
  const animateTaskItems = () => {
    const taskItems = document.querySelectorAll('#taskList li');
    taskItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
    });
  };

  // Initialize animations
  createFloatingMoons();
  animateTaskItems();

  // Add hover effect to mood cards
  const moodCards = document.querySelectorAll('.mood-card');
  moodCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) rotate(2deg)';
      card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) rotate(0)';
      card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
  });
});