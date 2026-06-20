# kashkit-web

Public marketing site for KashKit — production domain `kashkit.us`.

## First-time setup

```bash
cd "/Users/msmmour/Desktop/All Kashkit/kashkit-web"
npm install
cp .env.local.example .env.local      # then paste the anon key (same as admin)
npm run dev                            # → http://localhost:3000
```

The Supabase URL + **anon** key are the same values the admin and iOS app already use. The anon key is public-safe — the `waitlist` table is protected by RLS so anon can only INSERT, never read.

## Stack

- **Next.js 14** App Router + TypeScript
- **Plus Jakarta Sans** + **Instrument Serif** via `next/font/google`
- **Pure custom CSS** (no Tailwind in marketing site — Tailwind dep is kept in `package.json` for future routes)
- **Supabase JS** (anon client) for the waitlist write — see `lib/supabase.ts → joinWaitlist()`
- **No external animation libraries** — all interactions (scroll-reveal, magnetic buttons, counters, FAQ tabs, mobile drawer) live in `components/site/ClientScripts.tsx` as a single `useEffect` and respect `prefers-reduced-motion`.

## File map

```
app/
  layout.tsx           # next/font + metadata + viewport
  globals.css          # imports the four design CSS files below
  page.tsx             # home (server component, all 9 sections inline)
  icon.svg             # 32×32 favicon — red square + white K
  apple-icon.svg       # 180×180 Apple touch icon
  opengraph-image.tsx  # dynamic OG (1200×630) — runs on edge
  terms/page.tsx       # DRAFT placeholder
  privacy/page.tsx     # DRAFT placeholder
  occc-notice/page.tsx # OCCC complaint notice (verbatim regulator contact info)
  design/
    styles.css         # tokens (colors, typography, buttons, reveal system)
    sections.css       # header, hero, gradient mesh, iPhone mockup, notif cards
    sections2.css      # marquee, how-it-works, products, FAQ, contact, CTA, footer
    legal.css          # typography for the legal pages
components/site/
  Header.tsx           # shared sticky header + drawer (server component)
  Footer.tsx           # shared footer with marching red accent line
  WaitlistForm.tsx     # client component — actually inserts into public.waitlist
  ClientScripts.tsx    # all client-side JS (scroll, drawer, reveal, counters, magnetic, FAQ tabs, contact form, marquee clone)
lib/
  supabase.ts          # public anon client + joinWaitlist() + fetchActiveLoanProducts()
  utils.ts             # cn() helper
```

## Pages

- `/` home — hero with iPhone mockup, schools marquee, how-it-works, loan products, FAQ tabs, contact (cards + form), CTA waitlist, footer
- `/terms` — Terms of Service (DRAFT pending counsel review)
- `/privacy` — Privacy Policy (DRAFT pending counsel review)
- `/occc-notice` — Texas OCCC consumer complaint notice (verbatim regulator info; surrounding language draft)

## Waitlist

`<WaitlistForm />` (`components/site/WaitlistForm.tsx`) is a client component that calls `joinWaitlist(email, 'web_marketing_home')` from `lib/supabase.ts`. That helper performs:

```ts
supabase.from('waitlist').insert({ email, source });
```

The Supabase RLS policy `Anyone can join waitlist` on `public.waitlist` allows the anon role to INSERT (and only INSERT — reads are blocked at the row level by default). Rows land in the admin Waitlist page, where they can be invited or bulk-invited.

There is no UNIQUE constraint on `email`, so if a user resubmits we just get a second row — the admin page dedupes by email when listing.

## Verify a production build locally

```bash
npm run build
npm run start        # → http://localhost:3000 (serves the built output)
```

Run Lighthouse against the started server (target: 95+ on Performance / SEO / Accessibility).

## Deploy (Vercel)

1. Push this folder to a GitHub repo (e.g. `kashkit-web`).
2. In Vercel → New Project → import the repo. Vercel auto-detects Next.js 14 (no config needed).
3. Vercel → Project Settings → Environment Variables, add both for **Production**, **Preview**, and **Development**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Trigger the first deploy.
5. Add the custom domain `kashkit.us` (and `www.kashkit.us`) in Vercel → Domains.
6. In **Network Solutions** Advanced DNS Records for `kashkit.us`:
   - `A` record on apex `@` → `76.76.21.21`
   - `CNAME` on `www` → `cname.vercel-dns.com`
   - Allow propagation (usually < 1 hour; can be up to 24h).
7. Vercel auto-issues a Let's Encrypt cert once DNS resolves.

## Things to do before launch

- [ ] Replace DRAFT text in `/terms` and `/privacy` with attorney-reviewed copy
- [ ] Have legal confirm the `/occc-notice` wording matches current OCCC guidance
- [ ] Verify the OG image renders correctly when shared on iMessage, Twitter, and LinkedIn
- [ ] Add a `robots.txt` and `sitemap.xml` (Next.js conventions: `app/robots.ts` + `app/sitemap.ts`)
- [ ] Add Plausible or Vercel Analytics for traffic visibility (no third-party cookies; privacy-preserving)
- [ ] Run a full Lighthouse pass and address any Perf/SEO/A11y items below 95
- [ ] Smoke-test the waitlist form against production Supabase
- [ ] Confirm Resend `noreply@kashkit.us` welcome-email flow if you wire the waitlist to send a confirmation email
