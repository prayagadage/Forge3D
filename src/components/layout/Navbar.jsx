'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

import { SignInButton, UserButton, useAuth } from '@clerk/nextjs';

export default function Navbar() {
  const { itemCount, setIsOpen } = useCart();
  const { isSignedIn } = useAuth();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/explore', label: 'Shop' },
    { href: '/custom-print', label: 'Custom Print' },
    { href: '/materials', label: 'Material Guide' },
    { href: '/get-quote', label: 'Get a Quote' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner">
          <Link href="/" className="navbar__logo" aria-label="Forge3D home">
            <div className="navbar__logo-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <span className="navbar__logo-text">FORGE<span>3D</span></span>
          </Link>

          <div className="navbar__links">
            {links.map(link => (
              <Link key={link.href} href={link.href} className={`navbar__link ${pathname === link.href ? 'navbar__link--active' : ''}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar__actions" style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-4)' }}>
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button className="btn-brutalist-white" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>Login</button>
              </SignInButton>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
            
            <button className="navbar__order-btn" onClick={() => setIsOpen(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              <span>Order</span>
            </button>

            <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? 'mobile-nav--open' : ''}`}>
        {links.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</Link>
        ))}
      </div>
    </>
  );
}
