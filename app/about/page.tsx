import type { Metadata } from 'next';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { ClientScripts } from '@/components/site/ClientScripts';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hi, I’m Mak. My brothers and I built KashKit in San Antonio after watching too many friends drown in overdraft fees. Here’s why we did it this way.',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* ============ HERO ============ */}
        <section className="about-hero">
          <div className="mesh"><span className="blob b1"></span><span className="blob b2"></span><span className="blob b3"></span></div>
          <div className="grain"></div>
          <div className="wrap">
            <h1 className="reveal" data-d="1">
              Hi — I&apos;m Mak. <span className="serif red">Here&apos;s why we built this.</span>
            </h1>
            <p className="lede reveal" data-d="2">
              My brothers and I started KashKit because the options for college students who needed $50 between paychecks were genuinely bad. So we built a Texas-licensed loan product capped at $75, with every dollar disclosed up front, and a tier ladder that rewards paying on time instead of punishing being broke.
            </p>
          </div>
        </section>

        {/* ============ THE WHY ============ */}
        <section className="section-pad">
          <div className="wrap">
            <div className="about-why-grid">
              <div className="reveal">
                <span className="eyebrow red">The why</span>
                <h2 style={{ marginTop: 18 }}>The week between paychecks shouldn&apos;t cost <span className="serif">$35 overdraft fees.</span></h2>
              </div>
              <div className="body reveal" data-d="1">
                <p>
                  When I was in college, I watched friends lose $35 every time their checking account dipped below zero. I watched the same friends pay $9 fees on $40 cash advances — which, in case you&apos;re keeping score, is a 580% APR. The options for a student who just needed to bridge a few days were genuinely bad: overdrafts, payday lenders, or those new &quot;tip-and-instant-transfer&quot; apps that quietly make money the same way.
                </p>
                <p>
                  My brothers and I sat with that for a while and thought: what if the loan was capped low enough that you could actually pay it back? What if the price was all in writing before you signed? What if a 5% late fee replaced the $35 flat overdraft? What if paying on time unlocked a higher tier, instead of leaving you in the same spot you started?
                </p>
                <p>
                  We built KashKit, applied for a Texas Office of Consumer Credit Commissioner license, got approved as NMLS #2780724, and here we are. Small loans. Honest amounts. Not a debt cycle.
                </p>
              </div>
            </div>

            <div className="pull-quote reveal">
              <blockquote>
                We&apos;re not trying to maximize how much you borrow. We&apos;re trying to get you through the week without it costing more than the original gap.
              </blockquote>
              <cite>— The whole point of KashKit, in one sentence</cite>
            </div>
          </div>
        </section>

        {/* ============ PRINCIPLES ============ */}
        <section className="section-pad" style={{ background: 'var(--paper)', borderBlock: '1px solid var(--hairline)' }}>
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow red">Our principles</span>
              <h2>Four rules we won&apos;t break.</h2>
              <p>Every product decision passes through these. If a feature can&apos;t survive one of them, we don&apos;t ship it.</p>
            </div>
            <div className="principles-grid">
              <article className="principle-card reveal" data-d="1">
                <div className="p-num">01</div>
                <h3>No hard credit pull. Ever.</h3>
                <p>Applying for a KashKit loan will never lower your credit score. We verify enrollment and your linked bank account. That&apos;s the whole check.</p>
              </article>
              <article className="principle-card reveal" data-d="2">
                <div className="p-num">02</div>
                <h3>5% of the payment, never a flat fee.</h3>
                <p>If you&apos;re late past the 10-day grace period, the fee is 5% of that specific scheduled payment. Not a $35 charge. Not compounding. Not a surprise.</p>
              </article>
              <article className="principle-card reveal" data-d="3">
                <div className="p-num">03</div>
                <h3>Total cost shown before you sign.</h3>
                <p>You&apos;ll see the exact dollar amount you&apos;ll owe — including every fee — in your TILA statement before any signature is collected. No fine print after the fact.</p>
              </article>
              <article className="principle-card reveal" data-d="3">
                <div className="p-num">04</div>
                <h3>Pay on time, unlock more.</h3>
                <p>$25 → $50 → $75 as you build a clean history. We&apos;d rather lend you the right amount as your record grows than push the max up front.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ============ TIMELINE ============ */}
        <section className="section-pad">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow red">How we got here</span>
              <h2>Texas-licensed in one year.</h2>
              <p>We&apos;re not a venture-backed pivot project. We&apos;re a small team that took the long route through Texas consumer-credit licensing because that&apos;s what doing this right requires.</p>
            </div>
            <div className="timeline">
              <div className="timeline-item reveal" data-d="1">
                <div className="t-when">April 2026</div>
                <h3>An idea, on a napkin.</h3>
                <p>My brothers and I started sketching the tier ladder over coffee. The whole insight was simple: cap the loan amount, cap the fee structure, and let trust build over time instead of front-loading the risk.</p>
              </div>
              <div className="timeline-item reveal" data-d="2">
                <div className="t-when">April – May 2026</div>
                <h3>Mak &amp; Brothers Development LLC, filed in Texas.</h3>
                <p>We filed the LLC ourselves, submitted the NMLS application ourselves, and built the borrower app + admin panel + payment infrastructure in parallel. iOS, Stripe Financial Connections, and a Supabase backend went from zero to feature-complete in about five weeks of evenings.</p>
              </div>
              <div className="timeline-item reveal" data-d="3">
                <div className="t-when">May 2026</div>
                <h3>OCCC License #2780724 issued.</h3>
                <p>Approved by the Texas Office of Consumer Credit Commissioner. NMLS #2780724 active in the national registry. Compliance review done, regulator notices wired into every borrower-facing screen.</p>
              </div>
              <div className="timeline-item future reveal" data-d="3">
                <div className="t-when">Late 2026 — coming up</div>
                <h3>First borrowers, one school at a time.</h3>
                <p>We&apos;re onboarding Texas universities one by one. Verified .edu, real student, real bank — funds in 1–3 days. The waitlist tells us where to launch next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TEAM ============ */}
        <section className="section-pad team-section">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow red">Who built this</span>
              <h2>Mak &amp; Brothers. <span className="serif">A small team in San Antonio.</span></h2>
              <p>We&apos;re a family of brothers, not a startup with a slide deck. No VCs, no growth-at-all-costs mandate, no quarterly earnings to chase. Just a team small enough to remember every borrower&apos;s name.</p>
            </div>

            <div className="family-note reveal">
              <div className="avatars" aria-hidden>
                <div className="av">M</div>
                <div className="av b">&amp;</div>
                <div className="av c">…</div>
              </div>
              <p>
                We&apos;re a family of brothers from San Antonio, and we didn&apos;t get here through an accelerator. We filed the Texas LLC ourselves. We sat through the OCCC regulator interview ourselves. We wrote every line of the loan disclosure, then read it out loud to each other to make sure it didn&apos;t sound like fine print.
              </p>
              <p>
                If you email <a href="mailto:support@kashkit.us" style={{ color: 'var(--red)', fontWeight: 700 }}>support@kashkit.us</a> in the first six months, there&apos;s a real chance one of us is replying. That&apos;s the point — we don&apos;t want a customer-service maze between you and the people who built this.
              </p>
              <p>
                We&apos;re not trying to grow KashKit into a billion-dollar lender. We&apos;re trying to build something honest at the scale of one school, then another, then another. If that sounds slow, it&apos;s because it is. We&apos;re fine with that.
              </p>
              <div className="signature">
                — Mak &amp; brothers <span className="city">San Antonio, TX · 2026</span>
              </div>
            </div>

            {/* If you later want to introduce specific brothers (names + roles + bios),
               you can either: (a) add `<div className="team-lead">` cards below this note —
               styling already exists in about.css — or (b) extend the .avatars cluster
               above to show real initials for each sibling. Until then, the family note
               keeps the page honest without inventing details. */}
          </div>
        </section>

        {/* ============ COMPLIANCE FACTS ============ */}
        <section className="section-pad">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow red">The boring bits, on the record</span>
              <h2>Licensed, examined, and accountable.</h2>
              <p>Everything below is a matter of public record with the State of Texas. If something doesn&apos;t match what we say on this site, the regulator wins.</p>
            </div>

            <div className="compliance-grid">
              <div className="compliance-fact reveal" data-d="1">
                <div className="c-eyebrow">Legal entity</div>
                <div className="c-value">Mak &amp; Brothers Development LLC</div>
                <div className="c-sub">DBA &quot;KashKit&quot; · Texas LLC</div>
              </div>
              <div className="compliance-fact reveal" data-d="2">
                <div className="c-eyebrow">Texas OCCC license</div>
                <div className="c-value">#2780724</div>
                <div className="c-sub">Office of Consumer Credit Commissioner</div>
              </div>
              <div className="compliance-fact reveal" data-d="3">
                <div className="c-eyebrow">NMLS registration</div>
                <div className="c-value">#2780724</div>
                <div className="c-sub">Nationwide Multistate Licensing System</div>
              </div>
              <div className="compliance-fact reveal" data-d="1">
                <div className="c-eyebrow">Headquartered</div>
                <div className="c-value">San Antonio, TX</div>
                <div className="c-sub">Hours: Mon–Fri · 9am–6pm CT</div>
              </div>
              <div className="compliance-fact reveal" data-d="2">
                <div className="c-eyebrow">Support</div>
                <div className="c-value" style={{ fontSize: 17 }}>support@kashkit.us</div>
                <div className="c-sub">Reply within 2 business hours</div>
              </div>
              <div className="compliance-fact reveal" data-d="3">
                <div className="c-eyebrow">Regulator complaints</div>
                <div className="c-value" style={{ fontSize: 17 }}>(800) 538-1579</div>
                <div className="c-sub">Texas OCCC consumer complaints line</div>
              </div>
            </div>

            <div className="about-cta-strip reveal">
              <div>
                <h3>Be the first KashKit borrower at your school.</h3>
                <p>Drop your .edu and we&apos;ll let you know the day KashKit opens at your university.</p>
              </div>
              <a className="btn btn-red" href="/#waitlist" data-magnetic>Join the waitlist <span className="arrow">→</span></a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ClientScripts />
    </>
  );
}
