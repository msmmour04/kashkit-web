import type { Metadata } from 'next';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { ClientScripts } from '@/components/site/ClientScripts';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'KashKit terms of service. Draft pending attorney review.',
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal-shell">
        <div className="wrap">
          <article className="legal-doc">
            <div className="legal-eyebrow">Terms of Service</div>
            <h1>The fine print, in plain English.</h1>
            <div className="legal-meta">
              <span>Last updated: <b>June 9, 2026</b></span>
              <span>Effective: <b>Pending launch</b></span>
            </div>

            <div className="draft-banner">
              <b>Draft — pending attorney review.</b> This is a working template for the KashKit Terms of Service. It is not legally binding and has not been reviewed by counsel. Final terms will be posted before any loan is originated.
            </div>

            <h2>1. Who we are</h2>
            <p>
              KashKit is a marketing name for <b>Mak &amp; Brothers Development LLC</b>, a Texas limited
              liability company licensed by the Texas Office of Consumer Credit Commissioner under OCCC
              License #2780724 and registered with the Nationwide Multistate Licensing System under NMLS
              #2780724. Our address is San Antonio, Texas. Contact: <a href="mailto:support@kashkit.us">support@kashkit.us</a>.
            </p>

            <h2>2. Eligibility</h2>
            <p>To use KashKit, you must:</p>
            <ul>
              <li>Be at least 18 years old.</li>
              <li>Be enrolled at a participating Texas college or university and have a valid <code>.edu</code> email address from that school.</li>
              <li>Have a U.S. checking account at a bank we support, in your name.</li>
              <li>Be a U.S. resident with a valid Social Security Number.</li>
            </ul>

            <h2>3. Loan products</h2>
            <p>
              KashKit offers small consumer loans of $25, $50, or $75 with single-payment (30-day) or
              biweekly repayment schedules. Every loan&apos;s total cost — including any acquisition fee,
              interest, and finance charge — is disclosed before signing in your TILA statement, as
              required by federal Truth in Lending Act regulations.
            </p>

            <h2>4. Late payments</h2>
            <p>
              If a scheduled payment is late, you have a 10-day grace period during which no late fee
              applies. After day 10, a late fee equal to <b>5% of the scheduled payment</b> is assessed.
              The late fee is never a flat dollar charge, and never compounds. We will notify you in
              advance of each due date by text and email.
            </p>

            <h2>5. Tier system</h2>
            <p>
              New borrowers begin at Tier 1 ($25 maximum). Successful on-time repayment unlocks Tier 2
              ($50) and Tier 3 ($75). Tier increases are not guaranteed and may be revoked for missed
              payments, suspected fraud, or other risk factors at our discretion.
            </p>

            <h2>6. Your account</h2>
            <p>
              You are responsible for keeping your login credentials secure and for all activity that
              occurs under your account. Notify us immediately at <a href="mailto:support@kashkit.us">support@kashkit.us</a>
              if you suspect unauthorized access.
            </p>

            <h2>7. Prohibited uses</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Provide false, misleading, or fraudulent information.</li>
              <li>Use KashKit on behalf of another person without authorization.</li>
              <li>Attempt to bypass tier limits, link an account that isn&apos;t yours, or otherwise circumvent our verification.</li>
              <li>Use KashKit in violation of any applicable law.</li>
            </ul>

            <h2>8. Disclosures and consents</h2>
            <p>
              By signing a loan agreement you consent to electronic delivery of all required disclosures,
              including your TILA statement, the OCCC consumer notice, payment reminders, and any change
              of terms notices. Paper copies are available on request at no charge.
            </p>

            <h2>9. Disputes</h2>
            <p>
              Any disputes will be governed by the laws of the State of Texas. Before initiating any
              formal claim, please contact <a href="mailto:legal@kashkit.us">legal@kashkit.us</a> so we
              can attempt to resolve it directly. See our <a href="/occc-notice">OCCC Notice</a> for how
              to file a complaint with the Texas regulator.
            </p>

            <h2>10. Changes to these terms</h2>
            <p>
              We may update these terms from time to time. If changes are material, we will notify you by
              email at least 30 days before they take effect. Continued use after the effective date
              constitutes acceptance.
            </p>

            <hr />

            <p style={{ fontSize: 13, color: 'var(--soft)' }}>
              Questions? Email <a href="mailto:legal@kashkit.us">legal@kashkit.us</a>. For complaints,
              see our <a href="/occc-notice">OCCC Notice</a>.
            </p>

            <a className="legal-foot-back" href="/">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 5l-7 7 7 7"/></svg>
              Back to home
            </a>
          </article>
        </div>
      </main>
      <Footer />
      <ClientScripts />
    </>
  );
}
