"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setShown(true); observer.disconnect(); } }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${shown ? "is-visible" : ""} ${className}`} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>{children}</div>;
}

export function FadeUp(props: { children: ReactNode; delay?: number; className?: string }) { return <Reveal {...props} />; }

export function FloatingDevice({ children, duration = 9, delay = 0, className = "" }: { children: ReactNode; duration?: number; delay?: number; className?: string }) {
  return <div className={`floating-device ${className}`} style={{ "--float-duration": `${duration}s`, "--float-delay": `${delay}s` } as React.CSSProperties}>{children}</div>;
}

export function Parallax({ children, speed = "secondary", className = "" }: { children: ReactNode; speed?: "bg" | "secondary" | "primary"; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const amount = speed === "bg" ? 0.25 : speed === "secondary" ? 0.45 : 0.15;
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = node.getBoundingClientRect().top - window.innerHeight / 2;
      node.style.transform = `translateY(${Math.max(-40, Math.min(40, -distance * amount))}px)`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, [speed]);
  return <div ref={ref} className={`parallax parallax-${speed} ${className}`}>{children}</div>;
}
