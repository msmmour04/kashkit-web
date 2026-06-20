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
    'A Texas-licensed micro-lender built for college students. Verify your .edu, link your bank, get $25–$75 in minutes. No hidden fees, no surprises.',
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
    description: 'Verify your .edu, link your bank, get $25–$75 in minutes. No hidden fees.',
    url: 'https://kashkit.us',
    siteName: 'KashKit',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KashKit — Small loans, made for students.',
    description: 'Verify your .edu, link your bank, get $25–$75 in minutes. No hidden fees.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#F4F1EC',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
