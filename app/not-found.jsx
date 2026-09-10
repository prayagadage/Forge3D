'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '6rem 2rem' }}>
      <h1 style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>404</h1>
      <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>Page not found</p>
      <Link href="/" className="btn btn--primary">Back to Home</Link>
    </main>
  );
}
