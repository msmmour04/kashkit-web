import type { Metadata } from 'next';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { ClientScripts } from '@/components/site/ClientScripts';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'KashKit privacy policy. Effective July 13, 2026.',
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-shell">
        <div className="wrap">
          <article className="legal-doc">
            <div className="legal-eyebrow">Privacy Policy</div>
            <h1>What we collect, why, and what you control.</h1>
            <div className="legal-meta">
              <span>Effective: <b>July 13, 2026</b></span>
            </div>

            <h2>1. Who we are</h2>
            <p>
              KashKit is operated by <b>Mak &amp; Brothers Development LLC</b>, a Texas LLC. Our mailing
              address is 14 Carriage Hills Dr, San Antonio, TX 78257. For privacy questions, email{' '}
              <a href="mailto:legal@kashkit.us">legal@kashkit.us</a>.
            </p>

            <h2>2. What we collect</h2>
            <h3>From you</h3>
            <ul>
              <li>Your name, email address (school <code>.edu</code> and personal), phone number, date of birth, and mailing address.</li>
              <li>School verification: enrollment status, school name, and a photo of your student ID.</li>
            </ul>
            <h3>From your bank</h3>
            <ul>
              <li>Via Stripe Financial Connections, read-only access to your linked checking account: account/routing numbers (tokenized), balances, and transaction history used to assess affordability and schedule repayment.</li>
              <li>We never see or store your bank login credentials. You can disconnect your bank from the app at any time.</li>
            </ul>
            <h3>Automatically</h3>
            <ul>
              <li>Device information (model, OS, app version), IP address, and basic interaction events for fraud prevention and product quality.</li>
            </ul>

            <h2>3. How we use it</h2>
            <ul>
              <li>To verify your eligibility and process loans.</li>
              <li>To send funds to and collect payments from your linked bank account.</li>
              <li>To send you required loan disclosures, payment reminders, and product updates.</li>
              <li>To detect and prevent fraud and to comply with our legal obligations as a Texas-licensed lender.</li>
            </ul>

            <h2>4. Who we share it with</h2>
            <p>
              We share information only with the service providers necessary to operate KashKit and only
              under data-protection agreements:
            </p>
            <ul>
              <li><b>Stripe, Inc.</b> — payment processing and bank linking (Financial Connections).</li>
              <li><b>Supabase, Inc.</b> — hosted database and authentication.</li>
              <li><b>Resend, Inc.</b> — transactional email delivery.</li>
              <li><b>Expo (EAS)</b> — mobile push notifications.</li>
              <li><b>Apple, Inc. / Google LLC</b> — app distribution and push routing.</li>
              <li>Regulators, including the Texas OCCC, when required by law.</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2>5. Data retention</h2>
            <p>
              We retain account and loan records for at least 36 months after your last loan as required
              by Texas consumer-credit regulations, then delete or anonymize. You may request earlier
              deletion of marketing data at any time by emailing <a href="mailto:legal@kashkit.us">legal@kashkit.us</a>.
            </p>

            <h2>6. Security</h2>
            <p>
              Data is encrypted in transit (TLS 1.2+) and at rest. Bank linking uses bank-grade
              encryption and read-only OAuth tokens. Internal access is least-privilege and audited.
            </p>

            <h2>7. Your rights</h2>
            <p>You can:</p>
            <ul>
              <li>Request a copy of the personal information we hold about you.</li>
              <li>Correct inaccurate information.</li>
              <li>Disconnect your bank account from the app.</li>
              <li>Request deletion (subject to our retention obligations as a licensed lender).</li>
              <li>Opt out of marketing communications. Transactional emails (payment reminders, receipts) cannot be opted out of while you have an active loan.</li>
            </ul>
            <p>Email <a href="mailto:legal@kashkit.us">legal@kashkit.us</a> to exercise any of these.</p>

            <h2>8. Children</h2>
            <p>KashKit is not directed to anyone under 18 and we do not knowingly collect data from minors.</p>

            <h2>9. Changes to this policy</h2>
            <p>
              We will notify you of material changes by email at least 30 days before they take effect.
              Older versions of this policy are archived and available on request.
            </p>

            <hr />

            <p style={{ fontSize: 13, color: 'var(--soft)' }}>
              Privacy questions: <a href="mailto:legal@kashkit.us">legal@kashkit.us</a>. To file a
              regulator complaint, see our <a href="/occc-notice">OCCC Notice</a>.
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
