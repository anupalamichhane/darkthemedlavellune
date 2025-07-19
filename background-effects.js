/*
 * Lavellune Background Effects
 * Creates animated starry background and floating message
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==============================================
  // FLOATING WELCOME MESSAGE
  // ==============================================
  
  // Create floating welcome message element
  const floatingMsg = document.createElement("div");
  floatingMsg.className = "lavellune-floating-message";
  floatingMsg.textContent = "Welcome back, gentle soul 🌙";
  document.body.appendChild(floatingMsg);

  // ==============================================
  // STARRY BACKGROUND ANIMATION
  // ==============================================
  
  // Create canvas element for star animation
  const canvas = document.createElement("canvas");
  canvas.id = "lavelluneSky";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let stars = [];

  // Resize canvas to fit window dimensions
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Initialize canvas size and handle window resize
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Star class for creating and managing individual stars
  class Star {
    constructor() {
      this.reset();
    }
    
    // Reset star position and properties
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 100; // Start below viewport
      this.radius = Math.random() * 1.2 + 0.3;
      this.alpha = Math.random() * 0.4 + 0.1;
      this.speed = Math.random() * 0.3 + 0.1;
      this.twinkle = 0; // For twinkling effect
    }
    
    // Update star position and animation state
    update() {
      this.y -= this.speed; // Move upward
      this.twinkle += 0.03; // Increment twinkle counter
      
      // Reset star if it goes above viewport
      if (this.y < -10) this.reset();
    }
    
    // Draw star on canvas
    draw() {
      ctx.beginPath();
      // Create twinkling effect by varying radius with sine wave
      const currentRadius = this.radius + Math.sin(this.twinkle) * 0.3;
      ctx.arc(this.x, this.y, currentRadius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
      ctx.fill();
    }
  }

  // Create initial stars
  for (let i = 0; i < 120; i++) {
    stars.push(new Star());
  }

  // Main animation loop
  function animateSky() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw each star
    stars.forEach(star => {
      star.update();
      star.draw();
    });
    
    // Continue animation loop
    requestAnimationFrame(animateSky);
  }

  // Start animation
  animateSky();

  // ==============================================
  // SOFT MIST SHIMMER OVERLAY
  // ==============================================
  
  // Create mist overlay element
  const mistOverlay = document.createElement("div");
  mistOverlay.className = "lavellune-mist-overlay";
  document.body.appendChild(mistOverlay);
});