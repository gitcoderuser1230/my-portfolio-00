
"use client";

import { useRef, useEffect, type ReactNode } from "react";
import anime from "animejs";
import { cn } from "@/lib/utils";

type AnimationDirection = "up" | "left" | "right";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Set initial state to be invisible
    anime.set(currentRef, {
      opacity: 0,
      translateX: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      translateY: direction === "up" ? 40 : 0,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: currentRef,
            opacity: 1,
            translateX: 0,
            translateY: 0,
            duration: 800,
            easing: "easeOutExpo",
            delay: delay,
          });
          observer.unobserve(currentRef); // Animate only once
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
