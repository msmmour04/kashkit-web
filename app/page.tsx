import { ClientScripts } from '@/components/site/ClientScripts';
import { WaitlistForm } from '@/components/site/WaitlistForm';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">

        {/* ============ HERO ============ */}
        <section className="hero" data-screen-label="Hero">
          <div className="mesh"><span className="blob b1"></span><span className="blob b2"></span><span className="blob b3"></span></div>
          <div className="grain"></div>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="pulse-pill reveal"><span className="pulse-dot"></span>Now onboarding · Texas-licensed</span>
              <h1 className="reveal" data-d="1">Small loans,<span className="serif red">made for students.</span></h1>
              <p className="hero-sub reveal" data-d="2">Verify your .edu, link your bank, get $25 to $75 in minutes. No hidden fees. No surprises. You see every dollar you&apos;ll owe before you sign.</p>
              <div className="hero-actions reveal" data-d="2">
                <a className="btn btn-red" href="#waitlist" data-magnetic>Join the waitlist <span className="arrow">→</span></a>
                <a className="btn btn-ghost" href="#how">How it works</a>
              </div>
              <div className="stat-strip reveal" data-d="3">
                <div className="stat"><div className="num"><span data-count="5">0</span> min</div><div className="lbl">Approval</div></div>
                <div className="stat"><div className="num"><span data-count="0" data-prefix="$">$0</span></div><div className="lbl">Hidden fees</div></div>
                <div className="stat"><div className="num"><span data-count="100" data-suffix="%">0%</span></div><div className="lbl">Transparent</div></div>
              </div>
            </div>

            <div className="hero-visual reveal" data-d="1">
              <div className="phone-float">
                <div className="phone">
                  <div className="phone-screen">
                    <div className="dynamic-island"></div>
                    <div className="status-bar">
                      <span>9:41</span>
                      <span className="icons">
                        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg>
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><path d="M8 2.2c2 0 3.8.8 5.2 2.1l1.1-1.2A9.4 9.4 0 0 0 8 .6 9.4 9.4 0 0 0 1.7 3.1l1.1 1.2A7.4 7.4 0 0 1 8 2.2Zm0 3.1c1.1 0 2.2.4 3 1.2l1.1-1.2A6.2 6.2 0 0 0 8 4.5a6.2 6.2 0 0 0-4.1 1.8L5 7.5c.8-.8 1.9-1.2 3-1.2Zm0 3 2 2-2 .1-2-.1 2-2Z"/></svg>
                        <svg width="25" height="11" viewBox="0 0 25 11" fill="none"><rect x="0.5" y="0.8" width="21" height="9.4" rx="3" stroke="currentColor" strokeOpacity="0.4"/><rect x="2" y="2.3" width="17" height="6.4" rx="1.5" fill="currentColor"/><rect x="22.5" y="3.5" width="1.6" height="4" rx="0.8" fill="currentColor" fillOpacity="0.5"/></svg>
                      </span>
                    </div>
                    <div className="app">
                      <div className="app-top">
                        <div><div className="hi">Welcome back</div><div className="name">Maya R.</div></div>
                        <div className="avatar">M</div>
                      </div>
                      <div className="loan-card">
                        <div className="tag">Active loan · $15 remaining</div>
                        <div className="amt">$15<small> / $30 borrowed</small></div>
                        <div className="progress"><span></span></div>
                        <button className="pay">Pay $15 now
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                        </button>
                      </div>
                      <div className="app-stats">
                        <div className="app-stat"><div className="v am">Tier 2</div><div className="k">Current</div></div>
                        <div className="app-stat"><div className="v em">6 / 6</div><div className="k">On time</div></div>
                        <div className="app-stat"><div className="v">+18</div><div className="k">Score</div></div>
                      </div>
                    </div>
                    <div className="dock">
                      <div className="item active">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>
                        <span>Home</span>
                      </div>
                      <div className="item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
                        <span>Cards</span>
                      </div>
                      <div className="item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l5-5 4 3 6-7"/><path d="M21 8v5h-5"/></svg>
                        <span>Activity</span>
                      </div>
                      <div className="item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>
                        <span>You</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="notif top reveal" data-d="3">
                <div className="ic em"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                <div><div className="t">Payment received</div><div className="s">$15.00 · just now</div></div>
              </div>
              <div className="notif bottom reveal" data-d="3">
                <div className="ic rd"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg></div>
                <div><div className="t">$25 disbursed</div><div className="s">Arrives in 1–3 days</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SCHOOLS MARQUEE ============ */}
        <section className="schools" aria-label="Schools onboarding">
          <div className="wrap schools-inner">
            <span className="eyebrow red schools-eyebrow">Schools onboarding</span>
            <div className="marquee">
              <div className="marquee-track">
                <span className="school-pill" style={{ background: '#FCE3E1', color: 'var(--red)' }}>UTSA</span>
                <span className="school-pill" style={{ background: 'var(--ink)', color: '#fff' }}>Texas A&amp;M</span>
                <span className="school-pill" style={{ background: '#FCEFD6', color: 'var(--amber-deep)' }}>UT Austin</span>
                <span className="school-pill" style={{ background: '#D7F2E7', color: 'var(--emerald-deep)' }}>Rice</span>
                <span className="school-pill" style={{ background: '#fff', color: 'var(--ink)', boxShadow: 'inset 0 0 0 1px var(--hairline)' }}>SMU</span>
                <span className="school-pill" style={{ background: '#FCE3E1', color: 'var(--red)' }}>Baylor</span>
                <span className="school-pill" style={{ background: '#FCEFD6', color: 'var(--amber-deep)' }}>U Houston</span>
                <span className="school-pill" style={{ background: 'var(--ink)', color: '#fff' }}>TCU</span>
                <span className="school-pill" style={{ background: '#D7F2E7', color: 'var(--emerald-deep)' }}>Texas Tech</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section className="section-pad" id="how" data-screen-label="How it works">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow red">How it works</span>
              <h2>Three steps. About five minutes.</h2>
              <p>No paperwork, no waiting room, no credit check. Get verified once and your tier follows you.</p>
            </div>
            <div className="steps-grid">
              <article className="step-card accent-red reveal" data-d="1">
                <span className="bg-num">01</span><span className="blob-corner"></span>
                <div className="step-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 2.5 9 2.5 12 0v-5"/></svg></div>
                <h3>Verify your .edu</h3>
                <p>Confirm you&apos;re an enrolled student with your school email. That&apos;s the whole application.</p>
                <span className="step-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 11-13h-7z"/></svg>Instant</span>
              </article>
              <article className="step-card accent-amber reveal" data-d="2">
                <span className="bg-num">02</span><span className="blob-corner"></span>
                <div className="step-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg></div>
                <h3>Link your bank</h3>
                <p>Connect your checking account read-only so we can send funds and schedule your repayment.</p>
                <span className="step-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>Bank-grade</span>
              </article>
              <article className="step-card accent-emerald reveal" data-d="3">
                <span className="bg-num">03</span><span className="blob-corner"></span>
                <div className="step-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.2c0-1 .9-1.7 2.5-1.7s2.5.8 2.5 1.9c0 2.4-5 1.6-5 4 0 1.1 1 1.9 2.5 1.9s2.5-.7 2.5-1.7"/></svg></div>
                <h3>Borrow $25–$75</h3>
                <p>Pick your amount and repayment plan. Funds land in 1–3 days. Pay on time, unlock more.</p>
                <span className="step-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>1–3 days</span>
              </article>
            </div>
          </div>
        </section>

        {/* ============ PRODUCTS ============ */}
        <section className="section-pad" id="products" style={{ background: 'var(--paper)', borderBlock: '1px solid var(--hairline)' }} data-screen-label="Loan products">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow amber">Loan products</span>
              <h2>Start at $25. <span className="serif">Earn your way up.</span></h2>
              <p>Every tier shows the total you&apos;ll repay before you sign. Pay it back on time and the next tier opens.</p>
            </div>
            <div className="products-grid">
              <article className="product-card accent-emerald reveal" data-d="1">
                <div className="product-head"><span className="product-tier">Tier 1</span></div>
                <div className="product-amt">$25</div>
                <div className="product-opts">
                  <div className="opt"><div className="opt-k">Single</div><div className="opt-v">$30</div><div className="opt-s">due in 30 days</div></div>
                  <div className="opt"><div className="opt-k">Biweekly</div><div className="opt-v">2 × $15</div><div className="opt-s">over 30 days</div></div>
                </div>
                <div className="product-foot"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Best for a first loan</div>
              </article>

              <article className="product-card featured accent-red reveal" data-d="2">
                <span className="product-badge">Most picked</span>
                <div className="product-head"><span className="product-tier">Tier 2</span></div>
                <div className="product-amt">$50</div>
                <div className="product-opts">
                  <div className="opt"><div className="opt-k">Single</div><div className="opt-v">$57</div><div className="opt-s">due in 30 days</div></div>
                  <div className="opt"><div className="opt-k">Biweekly</div><div className="opt-v">2 × $28.50</div><div className="opt-s">over 30 days</div></div>
                </div>
                <div className="product-foot"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Covers the week&apos;s gap</div>
              </article>

              <article className="product-card accent-ink reveal" data-d="3" style={{ ['--accent' as string]: 'var(--ink)' } as React.CSSProperties}>
                <div className="product-head"><span className="product-tier">Tier 3</span></div>
                <div className="product-amt">$75</div>
                <div className="product-opts">
                  <div className="opt"><div className="opt-k">Single</div><div className="opt-v">$85</div><div className="opt-s">due in 30 days</div></div>
                  <div className="opt"><div className="opt-k">Biweekly</div><div className="opt-v">2 × $42.50</div><div className="opt-s">over 30 days</div></div>
                </div>
                <div className="product-foot"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Unlocked after on-time history</div>
              </article>
            </div>
            <p className="tila">Example: borrow $50, repay $57 in 30 days. Late fee is 5% of the scheduled payment after a 10-day grace period — never a flat charge. NMLS #2780724 · OCCC #2780724.</p>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="section-pad" id="faq" data-screen-label="FAQ">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow red">FAQ</span>
              <h2>The questions <span className="serif">students actually ask.</span></h2>
            </div>
            <div className="faq-layout">
              <div className="faq-list reveal">
                <button className="faq-q active" data-faq="1"><span className="qn">01</span><span className="qt">Will this hurt my credit?</span></button>
                <button className="faq-q" data-faq="2"><span className="qn">02</span><span className="qt">What if I pay late?</span></button>
                <button className="faq-q" data-faq="3"><span className="qn">03</span><span className="qt">Is my bank info safe?</span></button>
                <button className="faq-q" data-faq="4"><span className="qn">04</span><span className="qt">Why are the loans so small?</span></button>
                <button className="faq-q" data-faq="5"><span className="qn">05</span><span className="qt">Who can sign up?</span></button>
              </div>
              <div className="faq-answer reveal" data-d="1">
                <div className="faq-panel show" data-panel="1">
                  <span className="eyebrow red">Credit</span>
                  <h3>No hard pull. Ever.</h3>
                  <p>We don&apos;t run a hard credit check, so applying never dings your score. We verify you&apos;re a student and look at your linked account — that&apos;s it. Pay on time and we report the good history, which can actually help you build credit.</p>
                </div>
                <div className="faq-panel" data-panel="2">
                  <span className="eyebrow amber">Late payments</span>
                  <h3>10-day grace, then 5%.</h3>
                  <p>Life happens. If a payment is late you get a 10-day grace period with no penalty. After that, the late fee is 5% of the scheduled payment — not a flat dollar charge, and never compounding. We&apos;ll always text you before anything is due.</p>
                </div>
                <div className="faq-panel" data-panel="3">
                  <span className="eyebrow emerald">Security</span>
                  <h3>Bank-grade. Read-only.</h3>
                  <p>We connect through the same encrypted infrastructure your other finance apps use. Access is read-only — we can see balances to schedule repayment, but we can never move money you didn&apos;t authorize. Your login credentials never touch our servers.</p>
                </div>
                <div className="faq-panel" data-panel="4">
                  <span className="eyebrow red">Loan sizes</span>
                  <h3>Small amounts you can pay back.</h3>
                  <p>We&apos;re not trying to put you in a debt cycle — we&apos;re trying to get you through the week without overdraft fees. $25 to $75 covers the real gaps: gas, groceries, a textbook. Pay it back on time and your tier grows with you.</p>
                </div>
                <div className="faq-panel" data-panel="5">
                  <span className="eyebrow amber">Eligibility</span>
                  <h3>Enrolled Texas students.</h3>
                  <p>You need a valid .edu email from a participating Texas school, a U.S. checking account, and to be 18 or older. We&apos;re onboarding schools one at a time — join the waitlist and we&apos;ll tell you the day KashKit opens at yours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section className="section-pad" id="contact" style={{ background: 'var(--paper)', borderTop: '1px solid var(--hairline)' }} data-screen-label="Contact">
          <div className="wrap">
            <div className="section-head reveal" style={{ maxWidth: 'none' }}>
              <span className="eyebrow red">Contact</span>
              <h2>Talk to us. <span className="serif">Real humans, fast replies.</span></h2>
            </div>
            <div className="contact-cards">
              <article className="contact-card reveal" data-d="1" style={{ ['--accent' as string]: 'var(--red)' } as React.CSSProperties}>
                <div className="c-ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
                <h3>Support</h3>
                <p>Stuck on a payment or verification? We&apos;ll get you sorted.</p>
                <a className="c-mail" href="mailto:support@kashkit.us">support@kashkit.us</a>
              </article>
              <article className="contact-card reveal" data-d="2" style={{ ['--accent' as string]: 'var(--emerald-deep)' } as React.CSSProperties}>
                <div className="c-ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6z"/></svg></div>
                <h3>Legal &amp; compliance</h3>
                <p>Licensing, disclosures, and consumer credit questions.</p>
                <a className="c-mail" href="mailto:legal@kashkit.us">legal@kashkit.us</a>
              </article>
              <article className="contact-card reveal" data-d="3" style={{ ['--accent' as string]: 'var(--amber-deep)' } as React.CSSProperties}>
                <div className="c-ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 13zM11.6 16.8a3 3 0 0 1-5.8-1.6"/></svg></div>
                <h3>Press &amp; partners</h3>
                <p>Campus partnerships, media, and school onboarding.</p>
                <a className="c-mail" href="mailto:press@kashkit.us">press@kashkit.us</a>
              </article>
            </div>

            <div className="info-strip reveal">
              <span className="it"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Mon–Fri · 9am–6pm CT</span>
              <span className="it"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>San Antonio, TX</span>
              <span className="it"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h5"/></svg>NMLS #2780724</span>
              <span className="it"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>OCCC #2780724</span>
            </div>

            <div className="contact-form-wrap reveal">
              <div className="form-aside">
                <div className="blob-red"></div>
                <span className="ico">Response time</span>
                <h3>Typical first response: <b>2 hours.</b></h3>
                <p>Drop us a note and a real person on the team will read it. No tickets bouncing into a void.</p>
              </div>
              <form className="form-body contact-form">
                <div className="form-row">
                  <div className="field"><label htmlFor="cf-name">Name</label><input id="cf-name" type="text" placeholder="Maya Rodriguez" required /></div>
                  <div className="field"><label htmlFor="cf-email">Email</label><input id="cf-email" type="email" placeholder="you@school.edu" required /></div>
                </div>
                <div className="field"><label htmlFor="cf-msg">Message</label><textarea id="cf-msg" placeholder="What's on your mind?" required /></div>
                <button className="btn btn-red" type="submit" data-magnetic>Send message <span className="arrow">→</span></button>
              </form>
            </div>
          </div>
        </section>

        {/* ============ CTA / WAITLIST ============ */}
        <section className="section-pad cta" id="waitlist" data-screen-label="Waitlist">
          <div className="mesh-red"><span className="blob br"></span><span className="blob ba"></span></div>
          <div className="wrap">
            <h2 className="reveal">Get on the list. <span className="serif red">We launch by school.</span></h2>
            <p className="reveal" data-d="1">Drop your .edu and we&apos;ll let you know the day KashKit opens at your school. No spam — one email when it&apos;s live.</p>
            <WaitlistForm />
          </div>
        </section>

      </main>

      <Footer />
      <ClientScripts />
    </>
  );
}
