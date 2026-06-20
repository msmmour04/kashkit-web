import type { Metadata } from 'next';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { ClientScripts } from '@/components/site/ClientScripts';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'That page doesn’t exist. Head back to KashKit.',
  robots: { index: false, follow: true },
};

/**
 * Custom 404 — Next.js auto-renders this when no matching route is found.
 * Uses the shared marketing shell so the experience stays on-brand instead
 * of dropping users on the default Next placeholder.
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="about-hero" style={{ paddingTop: 124, paddingBottom: 'clamp(56px, 8vw, 96px)' }}>
          <div className="mesh"><span className="blob b1"></span><span className="blob b2"></span><span className="blob b3"></span></div>
          <div className="grain"></div>

          <div className="wrap" style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'var(--font-instrument-serif), Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(120px, 22vw, 240px)',
                lineHeight: 0.85,
                letterSpacing: '-0.05em',
                color: 'var(--red)',
              }}
            >
              404
            </div>

            <h1
              style={{
                fontSize: 'clamp(34px, 5vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.02,
                marginTop: 20,
                maxWidth: 720,
                marginInline: 'auto',
              }}
            >
              That page doesn&apos;t exist. <span className="serif">Or it moved.</span>
            </h1>

            <p
              style={{
                marginTop: 22,
                color: 'var(--muted)',
                fontSize: 'clamp(15px, 1.6vw, 18px)',
                fontWeight: 500,
                maxWidth: 520,
                marginInline: 'auto',
                lineHeight: 1.55,
              }}
            >
              You might have followed an old link, or we may have renamed something on our way to launch. Either way, here&apos;s the way home.
            </p>

            <div
              style={{
                marginTop: 36,
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a className="btn btn-red" href="/" data-magnetic>
                Back to home <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="/#waitlist">
                Join the waitlist
              </a>
            </div>

            <div
              style={{
                marginTop: 56,
                display: 'flex',
                gap: 28,
                justifyContent: 'center',
                flexWrap: 'wrap',
                fontSize: 13,
                fontWeight: 700,
                color: 'var(--soft)',
              }}
            >
              <a href="/#how" style={{ color: 'inherit' }}>How it works</a>
              <span style={{ color: 'var(--hairline)' }}>·</span>
              <a href="/#products" style={{ color: 'inherit' }}>Products</a>
              <span style={{ color: 'var(--hairline)' }}>·</span>
              <a href="/#faq" style={{ color: 'inherit' }}>FAQ</a>
              <span style={{ color: 'var(--hairline)' }}>·</span>
              <a href="/about" style={{ color: 'inherit' }}>About</a>
              <span style={{ color: 'var(--hairline)' }}>·</span>
              <a href="/#contact" style={{ color: 'inherit' }}>Contact</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ClientScripts />
    </>
  );
}
