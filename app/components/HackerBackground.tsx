"use client";

import { useEffect, useRef } from "react";

const PURPLE = "157, 78, 221";
const GREEN = "0, 255, 65";

export default function HackerBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    let drops: number[] = [];
    let dropColors: string[] = [];
    let connectDistance = 150;
    let logicalWidth = 0;
    let logicalHeight = 0;

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    const randomColor = (greenChance = 0.25) =>
      Math.random() < greenChance ? GREEN : PURPLE;

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      logicalWidth = window.innerWidth;
      logicalHeight = window.innerHeight;

      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = logicalWidth * logicalHeight;
      const particleCount = Math.floor(Math.max(45, Math.min(140, area / 17647)));

      connectDistance = Math.max(150, Math.min(logicalWidth, logicalHeight) * 0.18);

      const baseSpeed = Math.max(0.2, Math.min(0.5, 0.3 + Math.min(logicalWidth, logicalHeight) / 8000));

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * logicalWidth,
          y: Math.random() * logicalHeight,
          vx: (Math.random() - 0.5) * baseSpeed,
          vy: (Math.random() - 0.5) * baseSpeed,
          size: Math.random() * 2 + 1,
          color: randomColor(0.25),
        });
      }

      const columns = Math.floor(logicalWidth / 25);
      drops = [];
      dropColors = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
        dropColors[i] = randomColor(0.25);
      }
    };

    init();
    window.addEventListener("resize", init);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, logicalWidth, logicalHeight);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > logicalWidth) p.vx *= -1;
        if (p.y < 0 || p.y > logicalHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color}, 0.3)`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${p.color}, ${0.08 * (1 - dist / connectDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      ctx.font = "14px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 25;
        const y = drops[i] * 20;

        if (y > 0 && y < logicalHeight) {
          const alpha = Math.max(0, 0.04 - (y / logicalHeight) * 0.03);
          ctx.fillStyle = `rgba(${dropColors[i]}, ${alpha})`;
          ctx.fillText(text, x, y);
        }

        drops[i]++;
        if (drops[i] * 20 > logicalHeight && Math.random() > 0.98) {
          drops[i] = 0;
          dropColors[i] = randomColor(0.25);

        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ filter: "blur(1px)" }}
    />
  );
}
