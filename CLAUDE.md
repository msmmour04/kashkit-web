# kashkit-web — design + build brief

You are a **senior product designer and senior frontend engineer** building the public marketing site for KashKit, a Texas-licensed micro-lender for verified students.

## Non-negotiable quality bar
- This must NOT look like an AI-generated template. The bar is Stripe / Linear / Mercury / Revolut — editorial, motion-driven, considered.
- Every section earns its place. Every animation has a reason.
- Mobile-first. 60fps target. Lighthouse 95+ on perf / SEO / a11y.

## Brand (locked, in tailwind.config.ts)
- **Canvas:** bone `#F4F1EC` / bone2 `#EBE6DE`
- **Ink:** `#1A1A1A` text / muted `#6E6B66` secondary
- **Signature:** red `#E7352C` (use sparingly — single hero CTA, accent strokes)
- **Accent:** emerald `#10B981` (success / verified states)
- **Typography:** Plus Jakarta Sans body, Instrument Serif display (editorial italic for hero headlines)

## Stack
- Next.js 14 App Router, TypeScript, Tailwind, Radix primitives where needed
- **Framer Motion** for micro-interactions (hover, magnetic, page transitions)
- **GSAP + ScrollTrigger** for scroll storytelling (parallax, reveal-on-scroll, counters)
- **react-three-fiber + drei** for bespoke 3D (hero scene, CTA accent)
- **@supabase/supabase-js** anon client for the waitlist write
- Lucide icons only — no other icon libs

## Patterns
- All client components animated with motion or GSAP. Server components for data fetch (loan products from Supabase).
- Use `AnimatedSection` wrapper for reveal-on-scroll. Use `MagneticButton` for primary CTAs. Use `AnimatedCounter` for stats.
- Backgrounds: animated gradient mesh (CSS, blurred blobs) is the default; layer 3D only where it earns it.
- Type scale: `font-display` italic for hero/section titles, `font-sans` for body. Use `text-display-2xl` etc. from tailwind.config.

## File layout
```
app/
  layout.tsx          # next/font + metadata
  globals.css         # base styles + animation utilities
  page.tsx            # /
  about/page.tsx
  faq/page.tsx
  contact/page.tsx
  waitlist/page.tsx
  terms/page.tsx      # DRAFT placeholder
  privacy/page.tsx    # DRAFT placeholder
  occc-notice/page.tsx# DRAFT placeholder
components/
  site/               # site chrome: Header, Footer, Hero, etc.
  animations/         # AnimatedSection, MagneticButton, AnimatedCounter, GradientMesh
  3d/                 # HeroScene, CTAMesh
  ui/                 # primitives (Accordion, Button)
lib/
  supabase.ts         # public anon client
  utils.ts            # cn() helper
```

## Anti-patterns (don't)
- Don't use stock-photo-looking gradients with rainbow colors.
- Don't pile every animation on every element — restraint.
- Don't write generic SaaS copy ("Unlock the power of..."). Write like a person.
- Don't use any color outside the brand palette.
- Don't ship a card without considered padding, border, hover state.
