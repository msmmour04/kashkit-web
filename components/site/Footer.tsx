/**
 * Shared marketing footer with the marching red accent line on top.
 * Server component, no interactivity.
 */
export function Footer() {
  return (
    <>
      <div className="foot-accent"></div>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <a href="/#top" className="brand" aria-label="KashKit home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kashkit-mark.png" alt="" className="brand-mark" width={36} height={36} />
              <span className="brand-wordmark">kashkit<span className="dot">·</span></span>
            </a>
            <p>Small loans, made for students. Honest amounts you can actually pay back.</p>
            <span className="compliance-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
              Bank-grade encryption · Texas-licensed
            </span>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <a href="/#top">Home</a>
            <a href="/#how">How it works</a>
            <a href="/about">About</a>
            <a href="/#waitlist">Waitlist</a>
          </div>
          <div className="foot-col">
            <h4>Support</h4>
            <a href="/#faq">FAQ</a>
            <a href="mailto:support@kashkit.us">support@kashkit.us</a>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/occc-notice">OCCC Notice</a>
          </div>
        </div>
        <div className="wrap footer-bottom">
          KashKit is a DBA of Mak &amp; Brothers Development LLC · NMLS #2780724 · OCCC License #2780724 · San Antonio, TX · © 2026
        </div>
      </footer>
    </>
  );
}
