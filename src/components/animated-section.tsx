
"use client";

import { useRef, useEffect, type ReactNode } from "react";
import anime from "animejs";

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

    // Set initial state to be invisible and offset
    anime.set(currentRef, {
      opacity: 0,
      translateX: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      translateY: direction === "up" ? 40 : 0,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate to the final state when in view
          anime({
            targets: currentRef,
            opacity: 1,
            translateX: 0,
            translateY: 0,
            duration: 800,
            easing: "easeOutExpo",
            delay: delay,
          });
          observer.unobserve(currentRef); // Ensure the animation runs only once
        }
      },
      {
        rootMargin: "0px 0px -10% 0px", // Trigger animation when 10% of the element is visible
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
