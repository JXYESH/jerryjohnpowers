import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { COMPANY_INFO } from '../data/jjpData';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], prefersReduced ? ['0%', '0%'] : ['0%', '22%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : [1.05, 1.14]);
  const textY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -32]);

  return (
    <section
      ref={heroRef}
      className="relative bg-[#071B3D] overflow-hidden pt-36 pb-44 sm:pt-40 sm:pb-52 lg:pt-44 lg:pb-60"
    >
      {/* Full-Width Genuine Solar Infrastructure Photography with Scroll Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08, opacity: 0.9 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            y: bgY,
            scale: bgScale,
            willChange: 'transform',
          }}
          src="/assets/jjp/hero_b3.jpg"
          alt="Elevated view of utility-scale solar farm arrays engineered by Jerry John Powers"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Left-heavy navy directional overlay preserving bright solar field on center/right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(7,27,61,0.93) 0%, rgba(7,27,61,0.8) 38%, rgba(7,27,61,0.38) 72%, rgba(7,27,61,0.45) 100%)',
          }}
        />
        {/* Bottom seamless anchor into overlapping panels */}
        <div
          className="absolute inset-x-0 bottom-0 h-52"
          style={{
            background:
              'linear-gradient(to top, #071B3D 0%, rgba(7,27,61,0.68) 45%, rgba(7,27,61,0) 100%)',
          }}
        />
      </div>

      {/* Left-Aligned Editorial Hero Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[650px]"
        >
          <h1
            className="font-serif font-medium text-white leading-[1.1] tracking-[-0.01em]"
            style={{
              fontSize: 'clamp(2.45rem, 4.4vw, 3.85rem)',
              textWrap: 'balance',
            }}
          >
            {COMPANY_INFO.heroHeadline}
          </h1>

          <p className="mt-5 text-[16px] lg:text-[18px] text-[#D7E2F0] font-normal leading-relaxed">
            {COMPANY_INFO.heroSubheadline}
          </p>

          <div className="mt-8">
            <a
              href="#overview"
              className="inline-flex items-center justify-center bg-[#2389E8] hover:bg-[#1B76CC] text-white text-[14px] font-medium px-7 py-3 rounded-[3px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_10px_28px_rgba(35,137,232,0.28)] whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
