'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const { itemCount, setIsOpen } = useCart();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: '/explore', label: 'Shop' },
    { to: '/custom-print', label: 'Custom Print' },
    { to: '/materials', label: 'Material Guide' },
    { to: '/get-quote', label: 'Get a Quote' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo" aria-label="Forge3D home">
            <div className="navbar__logo-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <span className="navbar__logo-text">FORGE<span>3D</span></span>
          </Link>

          <div className="navbar__links">
            {links.map(link => (
              <Link key={link.to} to={link.to} className={`navbar__link ${pathname === link.to ? 'navbar__link--active' : ''}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar__actions">
            <button className="navbar__cart-btn" onClick={() => setIsOpen(true)} aria-label={`Shopping cart with ${itemCount} items`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
              {itemCount > 0 && <span className="navbar__cart-count">{itemCount}</span>}
            </button>
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
          <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>{link.label}</Link>
        ))}
      </div>
    </>
  );
}
