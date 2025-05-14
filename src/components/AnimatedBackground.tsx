import React, { useEffect, useRef } from 'react';
import './AnimatedBackgroundStyles.css';

/**
 * AnimatedBackground - A React component that creates a dynamic, animated particle
 * background effect that will appear behind all content on the website.
 * 
 * This component renders a fixed-position canvas with interactive particles and
 * subtle connection lines to create a technology-themed backdrop.
 */
const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const animationContainer = containerRef.current;
    
    if (!canvas || !animationContainer) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
      // Track mouse position for interactive effects (only on desktop)
    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 200 // Increased interaction radius for more noticeable effect
    };    // Particle settings
    let particles: any[] = [];
    // Check if mobile device based on screen width to adjust particle count for performance
    const isMobile = window.innerWidth < 768;
    const numParticles = isMobile ? 80 : 150; // Increased particle count for better visibility
    const particleSpeed = isMobile ? 0.2 : 0.3; // Slower on mobile
    const connectionDistance = isMobile ? 100 : 120; // Increased connection distance for more visible network

    // Particle class
    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      baseAlpha: number;

      constructor(x: number, y: number, radius: number, color: string, velocity: { x: number; y: number }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color; // This 'color' parameter is passed but overridden in draw
        this.velocity = velocity;        // MODIFIED: Increased baseAlpha for much brighter particles
        this.baseAlpha = 0.3 + Math.random() * 0.4; // Range: 0.3 to 0.7 for better visibility
      }      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        
        // MODIFIED: Use the particle's actual color for more variety and brightness
        const particleBaseColor = hexToRgb(this.color); // Use the assigned color from particle creation
        ctx.fillStyle = `rgba(${particleBaseColor.r}, ${particleBaseColor.g}, ${particleBaseColor.b}, ${this.baseAlpha})`;
        ctx.fill();
        
        // Add a subtle glow effect for higher visibility
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 1.5, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${particleBaseColor.r}, ${particleBaseColor.g}, ${particleBaseColor.b}, ${this.baseAlpha * 0.3})`;
        ctx.fill();
      }update() {
        // Mouse interaction (only on desktop)
        if (!isMobile && mouse.x !== undefined && mouse.y !== undefined) {
          // Calculate distance to mouse position
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // If the particle is within the mouse's influence radius
          if (distance < mouse.radius) {
            // Create a subtle push effect - particles gently move away from the mouse
            const pushFactor = 0.01 * (1 - distance / mouse.radius);
            this.velocity.x -= dx * pushFactor;
            this.velocity.y -= dy * pushFactor;
            
            // Enhance particle visibility when near mouse
            this.baseAlpha = Math.min(0.6, this.baseAlpha + 0.2);
          } else {
            // Gradually return to original alpha
            this.baseAlpha = Math.max(0.15 + Math.random() * 0.35, this.baseAlpha - 0.01);
          }
        }
        
        // Apply velocity (with speed limiting)
        const maxSpeed = 2;
        const speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
        if (speed > maxSpeed) {
          this.velocity.x = (this.velocity.x / speed) * maxSpeed;
          this.velocity.y = (this.velocity.y / speed) * maxSpeed;
        }
        
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Add slight drag/friction for more natural movement
        this.velocity.x *= 0.98;
        this.velocity.y *= 0.98;

        // Boundary check (bounce off edges)
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.velocity.x *= -1;
          this.x = Math.max(this.radius, Math.min(this.x, canvas.width - this.radius));
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
          this.velocity.y *= -1;
          this.y = Math.max(this.radius, Math.min(this.y, canvas.height - this.radius));
        }
        
        this.draw();
      }
    }

    // Utility to convert hex color to RGB
    function hexToRgb(hex: string) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    }    // Initialize particles
    function initParticles() {
      particles = [];      // We'll create multiple colors of particles for visual interest - using brighter colors
      const particleColors = ['#A7C1E7', '#8ABAFF', '#7FB1F9', '#6EC0FF'];
      
      // Create a distribution of particle sizes - more small ones, fewer large ones
      const particleSizes = [
        { radius: 0.5, weight: 40 }, // Many tiny particles
        { radius: 1.0, weight: 40 }, // Medium particles
        { radius: 1.5, weight: 20 }  // Fewer larger particles
      ];
      
      // Function to pick a random size based on weights
      const getRandomSize = () => {
        const weights = particleSizes.map(size => size.weight);
        const totalWeight = weights.reduce((a, b) => a + b, 0);
        let random = Math.random() * totalWeight;
        
        for (let i = 0; i < particleSizes.length; i++) {
          if (random < particleSizes[i].weight) {
            return particleSizes[i].radius + (Math.random() * 0.3); // Add slight variation
          }
          random -= particleSizes[i].weight;
        }
        return particleSizes[0].radius; // Fallback
      };
      
      for (let i = 0; i < numParticles; i++) {
        const radius = getRandomSize();
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const angle = Math.random() * Math.PI * 2;
        
        // Add slight speed variation to each particle
        const speedVariation = 0.75 + (Math.random() * 0.5); // 0.75 to 1.25
        
        const velocity = {
          x: Math.cos(angle) * particleSpeed * speedVariation,
          y: Math.sin(angle) * particleSpeed * speedVariation
        };
        
        // Randomly select one of our defined colors
        const colorIndex = Math.floor(Math.random() * particleColors.length);
        particles.push(new Particle(x, y, radius, particleColors[colorIndex], velocity));
      }
    }// Draw connections between nearby particles
    function drawConnections() {
      // Optimization: Use a more efficient approach for connections
      // On mobile, we'll reduce the number of connections checked for better performance
      const increment = isMobile ? 2 : 1; // Skip every other particle on mobile
      
      // Limit total connections drawn for performance
      let connectionsDrawn = 0;
      const maxConnections = isMobile ? 100 : 250;
      
      for (let i = 0; i < particles.length; i += increment) {
        // Only check a limited number of particles ahead for better performance
        const checkLimit = isMobile ? 15 : 30;
        const limit = Math.min(i + checkLimit, particles.length);
        
        // Skip some particles randomly for better distribution of connections
        if (Math.random() > 0.8) continue;
        
        for (let j = i + 1; j < limit; j += increment) {
          // Stop if we've reached the max connections
          if (connectionsDrawn >= maxConnections) break;
          
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          // Square distance comparison is faster than using sqrt
          const squareDistance = dx * dx + dy * dy;
          const squareConnectionDistance = connectionDistance * connectionDistance;
          
          if (squareDistance < squareConnectionDistance) {
            connectionsDrawn++;
            const distance = Math.sqrt(squareDistance); // Only calculate sqrt when needed
            const opacity = 1 - (distance / connectionDistance);
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Make connection lines more visible
            ctx.strokeStyle = `rgba(120, 160, 220, ${opacity * 0.3})`; // Brighter lines 
            ctx.lineWidth = isMobile ? 0.4 : 0.6; // Thicker lines for visibility
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => particle.update());

      // Draw connections
      drawConnections();

      // Request the next frame
      animationFrameId = requestAnimationFrame(animate);
    }

    // Resize canvas and re-initialize particles
    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;

      // For full background, animation container should be viewport sized
      animationContainer.style.width = '100vw';
      animationContainer.style.height = '100vh';

      // Set canvas style dimensions to fill the container
      canvas.style.width = animationContainer.clientWidth + 'px';
      canvas.style.height = animationContainer.clientHeight + 'px';

      // Set actual canvas drawing surface size, considering device pixel ratio for sharpness
      canvas.width = animationContainer.clientWidth * dpr;
      canvas.height = animationContainer.clientHeight * dpr;

      // Scale the context to account for DPR
      ctx.scale(dpr, dpr);

      initParticles();
    }

    // Initial setup
    resizeCanvas();
    let animationFrameId = requestAnimationFrame(animate);

    // Handle window resize with a debounce to avoid excessive re-initializations
    let resizeTimeout: number | undefined;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        resizeCanvas();
      }, 100); // Debounce resize event
    };    // Set up mouse event listeners for desktop
    let handleMouseMove: (event: MouseEvent) => void;
    let handleMouseOut: () => void;
    
    if (!isMobile) {
      handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
      };
      
      handleMouseOut = () => {
        // Reset mouse position when cursor leaves canvas
        mouse.x = undefined;
        mouse.y = undefined;
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseout', handleMouseOut);
    }
    
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (!isMobile && handleMouseMove && handleMouseOut) {
        window.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseout', handleMouseOut);
      }
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);
  return (
    <div id="animation-container" ref={containerRef}>
      <canvas id="techCanvas" ref={canvasRef} />
      <div id="messageBox" className="message-box" style={{ display: 'none' }}></div>
    </div>
  );
};

export default AnimatedBackground;