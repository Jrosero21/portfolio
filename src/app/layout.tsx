import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MotionProvider from '@/components/MotionProvider';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });

const description =
  'Jonny Rosero is a data, BI and AI systems builder: Power BI and SQL platforms, Azure data infrastructure, and policy-gated AI agents for operations-heavy businesses.';

export const metadata: Metadata = {
  metadataBase: new URL('https://jonnyrosero.com'),
  title: { default: 'Jonny Rosero · Data, BI & AI Systems', template: '%s · Jonny Rosero' },
  description,
  authors: [{ name: 'Jonny Rosero' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://jonnyrosero.com',
    siteName: 'Jonny Rosero',
    title: 'Jonny Rosero · Data, BI & AI Systems',
    description,
  },
  twitter: { card: 'summary_large_image', title: 'Jonny Rosero · Data, BI & AI Systems', description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0b0d' },
    { media: '(prefers-color-scheme: light)', color: '#f6f6f3' },
  ],
};

// Applies a saved theme choice before paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink">
          Skip to content
        </a>
        <MotionProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
