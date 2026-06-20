/**
 * Shared sticky marketing header + mobile drawer. Used by the home page
 * and the legal stub pages. Server component — interactivity (scroll
 * backdrop, hamburger toggle) is wired by <ClientScripts /> via querySelector.
 */
export function Header() {
  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="/#top" className="brand" aria-label="KashKit home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/kashkit-mark.png" alt="" className="brand-mark" width={28} height={28} />
            <span className="brand-wordmark">kashkit<span className="dot">·</span></span>
          </a>
          <nav className="nav-desktop" aria-label="Primary">
            <a className="nav-link" href="/#how">How it works</a>
            <a className="nav-link" href="/#products">Products</a>
            <a className="nav-link" href="/about">About</a>
            <a className="nav-link" href="/#faq">FAQ</a>
            <a className="nav-link" href="/#contact">Contact</a>
          </nav>
          <div className="header-cta">
            <a className="btn btn-ink" href="/#waitlist" data-magnetic>Join waitlist</a>
            <button className="hamburger" aria-label="Menu" aria-expanded="false"><span></span></button>
          </div>
        </div>
      </header>

      <div className="drawer" id="drawer">
        <a className="nav-link" href="/#how">How it works</a>
        <a className="nav-link" href="/#products">Products</a>
        <a className="nav-link" href="/about">About</a>
        <a className="nav-link" href="/#faq">FAQ</a>
        <a className="nav-link" href="/#contact">Contact</a>
        <a className="btn btn-ink" href="/#waitlist">Join waitlist</a>
      </div>
    </>
  );
}
