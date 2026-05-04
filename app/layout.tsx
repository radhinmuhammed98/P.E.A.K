import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'P.E.A.K | Precision Engineered Automotive Kinetics',
  description: 'Engineered to the Peak of Perfection. Discover the future of luxury automotive excellence with P.E.A.K — where precision meets passion.',
  keywords: ['luxury cars', 'electric vehicles', 'hypercar', 'P.E.A.K', 'Aether', 'Stratos', 'Vertex', 'performance cars'],
  authors: [{ name: 'P.E.A.K Automotive' }],
  openGraph: {
    title: 'P.E.A.K | Precision Engineered Automotive Kinetics',
    description: 'Engineered to the Peak of Perfection.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'P.E.A.K | Precision Engineered Automotive Kinetics',
    description: 'Engineered to the Peak of Perfection.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⬡</text></svg>" />
      </head>
      <body className="antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
