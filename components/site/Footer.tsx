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
            <div style={{ marginTop: 18 }}>
              <span className="appstore-badge" aria-label="Download on the App Store — coming soon">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.05 12.04c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.64 1.1-4.58 1.1-.96 0-2.4-1.08-3.96-1.05-2.03.03-3.92 1.18-4.97 3-2.12 3.69-.54 9.13 1.52 12.12 1.01 1.47 2.21 3.12 3.79 3.06 1.52-.06 2.1-.99 3.94-.99 1.83 0 2.36.99 3.97.96 1.64-.03 2.68-1.49 3.68-2.97 1.16-1.7 1.64-3.36 1.66-3.44-.04-.02-3.18-1.22-3.21-4.84zM14 4.18c.82-1 1.38-2.39 1.23-3.78-1.18.05-2.65.79-3.5 1.77-.76.87-1.43 2.29-1.25 3.65 1.33.1 2.69-.67 3.52-1.64z"/></svg>
                <span className="as-lines">
                  <span className="as-eyebrow">Download on the</span>
                  <span className="as-title">App Store</span>
                </span>
                <span className="as-soon">Soon</span>
              </span>
            </div>
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
          KashKit is a DBA of Mak &amp; Brothers Development LLC · Texas OCCC Regulated Lender · NMLS #2780724 · San Antonio, TX · © 2026
        </div>
      </footer>
    </>
  );
}
