import { ClerkProvider } from "@clerk/nextjs";
import '@/index.css';
import { Suspense } from 'react';
import Providers from './providers';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Forge3D — Premium 3D Printing, Bengaluru',
  description: 'Custom 3D printing service in Bengaluru. PLA, ABS, PETG, TPU, and resin prints with doorstep delivery across India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ClerkProvider>
          <Suspense>
          <Providers>{children}</Providers>
          </Suspense>
        </ClerkProvider>
      </body>
    </html>
  );
}