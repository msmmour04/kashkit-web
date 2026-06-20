'use client';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// ────────────────────────────────────────────────────────────────────────────────
// AnimatedSection — reveal on scroll. Fade + small translate. The single most
// important primitive: every major section is wrapped in this.
// ────────────────────────────────────────────────────────────────────────────────
export function AnimatedSection({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// MagneticButton — the cursor "pulls" the element subtly. Use for primary CTAs
// (one to two per page; over-using is the cliché).
// ────────────────────────────────────────────────────────────────────────────────
export function MagneticButton({
  children,
  className,
  strength = 18,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set((mx / rect.width) * strength);
    y.set((my / rect.height) * strength);
  }
  function reset() { x.set(0); y.set(0); }

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={className}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// AnimatedCounter — counts from 0 → value when scrolled into view. For stats.
// ────────────────────────────────────────────────────────────────────────────────
export function AnimatedCounter({
  value,
  duration = 1.4,
  prefix = '',
  suffix = '',
  className,
  decimals = 0,
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(eased * value);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// GradientMesh — drifting blurred blobs. Brand-aligned. The default "background
// has weight" without needing a hero image. Layer behind hero + CTA sections.
// ────────────────────────────────────────────────────────────────────────────────
export function GradientMesh({ variant = 'hero' }: { variant?: 'hero' | 'cta' | 'soft' }) {
  const palette =
    variant === 'cta'
      ? ['#E7352C', '#F59E0B', '#1A1A1A']
      : variant === 'soft'
      ? ['#FCE7E5', '#FEF3C7', '#DCFCE7']
      : ['#FCE7E5', '#FEE2D3', '#E0E7FF']; // hero: peach / cream / lavender
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-1/3 -left-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-70 animate-blob-1"
        style={{ background: `radial-gradient(closest-side, ${palette[0]}, transparent 70%)` }}
      />
      <div
        className="absolute top-1/4 -right-1/4 w-[55vw] h-[55vw] rounded-full blur-3xl opacity-60 animate-blob-2"
        style={{ background: `radial-gradient(closest-side, ${palette[1]}, transparent 70%)` }}
      />
      <div
        className="absolute -bottom-1/4 left-1/3 w-[50vw] h-[50vw] rounded-full blur-3xl opacity-50 animate-blob-3"
        style={{ background: `radial-gradient(closest-side, ${palette[2]}, transparent 70%)` }}
      />
      <div className="grain" />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// TiltCard — 3D tilt on hover. Used for the loan-product cards.
// ────────────────────────────────────────────────────────────────────────────────
export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const transform = useTransform([rx, ry], ([rxv, ryv]: any) =>
    `perspective(900px) rotateX(${rxv}deg) rotateY(${ryv}deg)`
  );

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  }
  function reset() { rx.set(0); ry.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transform }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}
