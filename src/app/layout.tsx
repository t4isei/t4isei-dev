import { Nunito_Sans } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import type { Metadata } from 'next';

import './globals.css';

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 't4isei',
  description: 'Return to nature.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${nunitoSans.variable} flex min-h-dvh flex-col font-sans antialiased`}
      >
        <Header />
        <main className='mx-auto my-10 max-w-3xl flex-grow px-5 sm:px-10'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
