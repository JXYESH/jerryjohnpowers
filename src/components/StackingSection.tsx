import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

interface StackingSectionProps {
  children: ReactNode;
  zIndex: number;
  anchorId?: string;
  dwellVh?: number;
  fullViewport?: boolean;
  bgClassName?: string;
  elevatedEdge?: boolean;
  isLast?: boolean;
}

/**
 * True CSS sticky stacked-pages curtain.
 * Renders the anchor sentinel, sticky page layer, optional dwell spacer, and exit trigger
 * as direct siblings inside <main> so position: sticky pins across the entire page height.
 */
export default function StackingSection({
  children,
  zIndex,
  anchorId,
  dwellVh = 0,
  fullViewport = false,
  bgClassName = '',
  elevatedEdge = true,
  isLast = false,
}: StackingSectionProps) {
  const stickyRef = useRef<HTMLDivElement>(null);
  const exitTriggerRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const updateLayout = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop((prev) => (prev === desktop ? prev : desktop));

      if (!desktop || !stickyRef.current) {
        setStickyTop(0);
        return;
      }
      const elH = stickyRef.current.offsetHeight;
      const vh = window.innerHeight;
      const nextTop = elH > vh ? -(elH - vh) : 0;
      setStickyTop((prev) => (Math.abs(prev - nextTop) < 2 ? prev : nextTop));
    };

    updateLayout();
    const observer = new ResizeObserver(updateLayout);
    if (stickyRef.current) {
      observer.observe(stickyRef.current);
    }
    window.addEventListener('resize', updateLayout);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  // Track the non-sticky exit trigger placed right where the NEXT section enters the viewport
  const { scrollYProgress } = useScroll({
    target: exitTriggerRef,
    offset: ['start end', 'start start'],
  });

  const active = isDesktop && !prefersReduced && !isLast;

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    active ? [1, 0.96] : [1, 1]
  );
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    active ? [0, 0, 0.24] : [0, 0, 0]
  );

  return (
    <>
      {anchorId && (
        <div
          id={anchorId}
          aria-hidden="true"
          className="h-0 w-full pointer-events-none"
        />
      )}

      <div
        ref={stickyRef}
        style={{
          zIndex,
          top: isDesktop && !prefersReduced ? `${stickyTop}px` : undefined,
        }}
        className={`relative ${
          isDesktop && !prefersReduced ? 'lg:sticky bg-[#05142E]' : bgClassName
        } ${fullViewport ? 'lg:min-h-screen flex flex-col justify-center' : ''}`}
      >
        <motion.div
          style={{
            scale,
            transformOrigin: stickyTop < 0 ? 'bottom center' : 'top center',
            willChange: active ? 'transform' : undefined,
          }}
          className={`relative w-full ${fullViewport ? 'lg:min-h-screen flex flex-col justify-center' : ''} ${bgClassName} ${
            elevatedEdge ? 'shadow-[0_-24px_60px_rgba(4,16,38,0.32)]' : ''
          }`}
        >
          {children}

          {active && (
            <motion.div
              aria-hidden="true"
              style={{ opacity: overlayOpacity }}
              className="pointer-events-none absolute inset-0 bg-[#05142E] z-40"
            />
          )}
        </motion.div>
      </div>

      {/* Extra dwell runway behind the pinned sticky page (zIndex lower than stickyRef) */}
      {dwellVh > 0 && isDesktop && !prefersReduced && (
        <div
          aria-hidden="true"
          style={{ height: `${dwellVh}vh`, zIndex: Math.max(1, zIndex - 1) }}
          className="hidden lg:block w-full pointer-events-none relative"
        />
      )}

      {/* Non-sticky sentinel positioned exactly where the next stacked page begins */}
      <div
        ref={exitTriggerRef}
        aria-hidden="true"
        className="h-0 w-full pointer-events-none"
      />
    </>
  );
}
