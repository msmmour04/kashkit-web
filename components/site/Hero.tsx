'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { AnimatedCounter, GradientMesh, MagneticButton } from '@/components/animations';

// Lazy-load the 3D scene so it doesn't block first paint.
const HeroScene = dynamic(() => import('@/components/3d/HeroScene').then((m) => m.HeroScene), {
  ssr: false,
  loading: () => null,
});

const STAGGER = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const RISE = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32">
      <GradientMesh variant="hero" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Copy column */}
          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 relative z-10"
          >
            <motion.div variants={RISE} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper border border-hairline shadow-card">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-red animate-pulse-soft" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-red" />
              </span>
              <span className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-ink/80">
                Now onboarding · Texas-licensed
              </span>
            </motion.div>

            <motion.h1
              variants={RISE}
              className="mt-7 text-display-2xl font-extrabold text-ink"
            >
              Small loans, <span className="font-display italic text-red font-normal">made for students.</span>
            </motion.h1>

            <motion.p
              variants={RISE}
              className="mt-7 max-w-xl text-[17px] md:text-[19px] leading-[1.55] text-muted font-medium"
            >
              Verify your .edu, link your bank, get <span className="text-ink font-bold">$25 to $100</span> in minutes.
              No hidden fees. No surprises. You see every dollar you'll owe before you sign.
            </motion.p>

            <motion.div variants={RISE} className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
              <MagneticButton className="group inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-red text-white text-[14.5px] font-extrabold tracking-tight shadow-red transition hover:bg-redDeep">
                <Link href="/waitlist" className="inline-flex items-center gap-2.5">
                  Join the waitlist
                  <ArrowRight size={16} strokeWidth={2.6} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </MagneticButton>
              <Link href="/about"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-[13.5px] font-extrabold text-ink/85 hover:text-ink hover:bg-bone2/70 transition">
                <Sparkles size={14} strokeWidth={2.4} />
                How it works
              </Link>
            </motion.div>

            {/* Stat strip */}
            <motion.div variants={RISE} className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: 5,   suffix: ' min', label: 'Approval' },
                { v: 0,   prefix: '$',     label: 'Hidden fees' },
                { v: 100, suffix: '%',     label: 'Transparent' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[34px] md:text-[42px] font-extrabold text-ink leading-none -tracking-[0.02em]">
                    <AnimatedCounter value={s.v} prefix={s.prefix || ''} suffix={s.suffix || ''} />
                  </div>
                  <div className="mt-2 text-[11px] font-extrabold tracking-[0.14em] uppercase text-muted">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D scene column */}
          <div className="lg:col-span-5 relative h-[420px] md:h-[520px] lg:h-[600px]">
            {/* Soft ground glow */}
            <div aria-hidden className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full bg-red/25 blur-3xl" />
            <HeroScene />

            {/* Floating compliance card — overlay */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-4 left-2 md:left-4 max-w-[260px] rounded-2xl bg-paper border border-hairline shadow-elevated px-4 py-3.5"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-emerald/15 grid place-items-center">
                  <ShieldCheck size={15} className="text-emerald2" strokeWidth={2.4} />
                </span>
                <div className="min-w-0">
                  <div className="text-[12.5px] font-extrabold text-ink truncate">Bank-grade encryption</div>
                  <div className="text-[10.5px] text-muted font-semibold">NMLS #2780724 · OCCC licensed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
