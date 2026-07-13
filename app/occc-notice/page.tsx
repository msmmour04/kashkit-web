import type { Metadata } from 'next';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { ClientScripts } from '@/components/site/ClientScripts';

export const metadata: Metadata = {
  title: 'OCCC Notice',
  description: 'Texas Office of Consumer Credit Commissioner consumer complaint notice for KashKit borrowers.',
  robots: { index: true, follow: true },
};

export default function OcccNoticePage() {
  return (
    <>
      <Header />
      <main className="legal-shell">
        <div className="wrap">
          <article className="legal-doc">
            <div className="legal-eyebrow">OCCC Notice</div>
            <h1>Texas consumer complaint notice.</h1>
            <div className="legal-meta">
              <span>Texas OCCC <b>Regulated Lender</b></span>
              <span>NMLS: <b>#2780724</b></span>
              <span>Last updated: <b>July 13, 2026</b></span>
            </div>

            <h2>About this notice</h2>
            <p>
              KashKit is operated by <b>Mak &amp; Brothers Development LLC</b>, a Texas limited liability
              company licensed and examined by the State of Texas Office of Consumer Credit Commissioner
              (OCCC) as a Regulated Lender, identified by NMLS <b>#2780724</b>. As a Texas-licensed
              lender, we are required to provide consumers with the following complaint notice.
            </p>

            <h2>How to file a complaint about KashKit</h2>
            <p>
              If you have a question or complaint about this business that we have not been able to
              resolve, you may contact the Texas Office of Consumer Credit Commissioner. Before doing so,
              please give us a chance to make it right — email <a href="mailto:support@kashkit.us">support@kashkit.us</a> or{' '}
              <a href="mailto:legal@kashkit.us">legal@kashkit.us</a> and a human will respond within
              business hours.
            </p>

            <h2>Texas OCCC contact information</h2>
            <p>
              You may file a complaint or request information about regulated lenders directly with the
              regulator at no cost.
            </p>
            <ul>
              <li><b>Office of Consumer Credit Commissioner</b></li>
              <li>2601 N. Lamar Boulevard, Austin, Texas 78705</li>
              <li>Phone: <a href="tel:+18005381579">(800) 538-1579</a></li>
              <li>Fax: (512) 936-7610</li>
              <li>Email: <a href="mailto:consumer.complaints@occc.texas.gov">consumer.complaints@occc.texas.gov</a></li>
              <li>Website: <a href="https://occc.texas.gov" target="_blank" rel="noopener noreferrer">occc.texas.gov</a></li>
            </ul>

            <h2>What to include in your complaint</h2>
            <ul>
              <li>Your name and the best way to reach you.</li>
              <li>The name of the business: KashKit (Mak &amp; Brothers Development LLC).</li>
              <li>Our NMLS ID: #2780724.</li>
              <li>A short description of what happened and what resolution you&apos;re seeking.</li>
              <li>Copies of any relevant documents, communications, or receipts.</li>
            </ul>

            <h2>Other federal resources</h2>
            <p>
              You may also file consumer-finance complaints with the federal Consumer Financial
              Protection Bureau at <a href="https://www.consumerfinance.gov/complaint" target="_blank" rel="noopener noreferrer">consumerfinance.gov/complaint</a>.
            </p>

            <hr />

            <p style={{ fontSize: 13, color: 'var(--soft)' }}>
              This notice is required by Texas regulation. The complaint contact information above is
              maintained by the Texas OCCC and is accurate as of the last updated date.
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
