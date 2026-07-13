import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'KashKit — Small loans, made for students.', template: '%s · KashKit' },
  description:
    'A Texas-licensed micro-lender built for college students. Verify your .edu, link your bank, get $25–$100 in minutes. No hidden fees, no surprises.',
  applicationName: 'KashKit',
  metadataBase: new URL('https://kashkit.us'),
  alternates: { canonical: '/' },
  keywords: ['student loans', 'micro loans', 'Texas lender', 'college loans', '.edu loans', 'NMLS 2780724'],
  authors: [{ name: 'Mak & Brothers Development LLC' }],
  creator: 'Mak & Brothers Development LLC',
  publisher: 'Mak & Brothers Development LLC',
  openGraph: {
    type: 'website',
    title: 'KashKit — Small loans, made for students.',
    description: 'Verify your .edu, link your bank, get $25–$100 in minutes. No hidden fees.',
    url: 'https://kashkit.us',
    siteName: 'KashKit',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KashKit — Small loans, made for students.',
    description: 'Verify your .edu, link your bank, get $25–$100 in minutes. No hidden fees.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#F4F1EC',
  width: 'device-width',
  initialScale: 1,
};

/**
 * JSON-LD structured data — Organization + FinancialService schema for Google rich results.
 * Lets Google show a knowledge panel (license, address, contact) and tie KashKit to
 * Mak & Brothers Development LLC as the legal entity. Lives in <head> via Next.js.
 */
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://kashkit.us/#org',
      name: 'KashKit',
      legalName: 'Mak & Brothers Development LLC',
      alternateName: 'Mak & Brothers Development LLC',
      url: 'https://kashkit.us',
      logo: 'https://kashkit.us/kashkit-mark.png',
      foundingDate: '2026',
      foundingLocation: {
        '@type': 'Place',
        name: 'San Antonio, Texas, USA',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '14 Carriage Hills Dr',
        addressLocality: 'San Antonio',
        addressRegion: 'TX',
        postalCode: '78257',
        addressCountry: 'US',
      },
      contactPoint: [
        { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@kashkit.us', availableLanguage: ['English'] },
        { '@type': 'ContactPoint', contactType: 'legal', email: 'legal@kashkit.us', availableLanguage: ['English'] },
        { '@type': 'ContactPoint', contactType: 'press', email: 'press@kashkit.us', availableLanguage: ['English'] },
      ],
      identifier: [
        { '@type': 'PropertyValue', propertyID: 'NMLS', value: '2780724' },
      ],
    },
    {
      '@type': 'FinancialService',
      '@id': 'https://kashkit.us/#service',
      name: 'KashKit Student Microloans',
      provider: { '@id': 'https://kashkit.us/#org' },
      areaServed: { '@type': 'State', name: 'Texas' },
      url: 'https://kashkit.us',
      description: 'Texas-licensed small consumer loans of $25, $50, and $100 for verified college students.',
      openingHours: 'Mo-Fr 09:00-18:00',
      currenciesAccepted: 'USD',
      paymentAccepted: 'ACH, Debit Card',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://kashkit.us/#website',
      url: 'https://kashkit.us',
      name: 'KashKit',
      publisher: { '@id': 'https://kashkit.us/#org' },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
