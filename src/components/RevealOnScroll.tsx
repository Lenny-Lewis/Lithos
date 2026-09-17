import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number; // seconds
  stagger?: boolean;
  className?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  delay = 0,
  stagger = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (stagger) {
    const childArray = React.Children.toArray(children);
    return (
      <div ref={containerRef} className={className}>
        {childArray.map((child, index) => (
          <div
            key={index}
            className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{
              animationDelay: `${delay + index * 0.08}s`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        animationDelay: delay ? `${delay}s` : undefined,
      }}
    >
      {children}
    </div>
  );
};
