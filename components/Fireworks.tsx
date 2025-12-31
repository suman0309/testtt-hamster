import React, { useEffect, useRef } from 'react';

export const Fireworks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.color = color;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05; // gravity
        this.alpha -= 0.01;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let particles: Particle[] = [];

    const colors = ['#fbbf24', '#ef4444', '#22c55e', '#3b82f6', '#d946ef'];

    const createFirework = () => {
      const x = Math.random() * w;
      const y = Math.random() * (h * 0.6); // Top 60% of screen
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle(x, y, color));
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)'; // Trail effect
      ctx.fillRect(0, 0, w, h);

      if (Math.random() < 0.05) {
        createFirework();
      }

      particles.forEach((p, index) => {
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) {
          particles.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};