import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo" aria-label="Forge3D Home">
            <span className="navbar__logo-icon" aria-hidden="true">△</span>
            Forge3D
          </Link>

          <div className="navbar__links">
            <Link
              to="/explore"
              className={`navbar__link ${isActive('/explore') ? 'navbar__link--active' : ''}`}
            >
              Explore
            </Link>
            <Link
              to="/custom-print"
              className={`navbar__link ${isActive('/custom-print') ? 'navbar__link--active' : ''}`}
            >
              Custom Print
            </Link>
          </div>

          <div className="navbar__actions">
            <button
              className="navbar__cart-btn"
              onClick={() => setIsOpen(true)}
              aria-label={`Shopping cart, ${itemCount} items`}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {itemCount > 0 && (
                <span className="navbar__cart-count" aria-hidden="true">{itemCount}</span>
              )}
            </button>

            <button
              className="navbar__mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? 'mobile-nav--open' : ''}`}>
        <Link to="/explore" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Explore Products
        </Link>
        <Link to="/custom-print" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Custom Print
        </Link>
      </div>
    </>
  );
}
