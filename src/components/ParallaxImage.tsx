import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  intensity?: number;
  scale?: number;
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  intensity = 10,
  scale = 1.18,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  const y = useTransform(
    smoothProgress,
    [0, 1],
    prefersReduced ? ['0%', '0%'] : [`-${intensity}%`, `${intensity}%`]
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        style={{
          y,
          scale: prefersReduced ? 1 : scale,
          willChange: 'transform',
        }}
        className={`w-full h-full object-cover object-center ${imgClassName}`}
      />
    </div>
  );
}
