import Link from 'next/link';

function TickerStrip({ variant = '' }) {
  const items = ['PLA+', 'PETG', 'ABS', 'TPU FLEX', 'HIGH-DETAIL RESIN', 'SILK & DUAL-TONE'];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className={`ticker ${variant}`}>
      <div className="ticker__track">
        <div className="ticker__content">
          {repeated.map((item, i) => (
            <span key={i}>
              <span className="ticker__item">{item}</span>
              <span className="ticker__dot" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TickerStrip };

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__accent-bar" />

      <div className="container">
        <div className="footer__inner">
          <div className="footer__grid">
            {/* Brand */}
            <div>
              <Link href="/" className="navbar__logo" style={{ display: 'inline-flex' }}>
                <div className="navbar__logo-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>
                <span className="navbar__logo-text">FORGE<span>3D</span></span>
              </Link>
              <p className="footer__brand-desc">
                A print lab turning sketches, STL files and wild ideas into precision parts, decor and desk toys — one layer at a time.
              </p>
              <div className="footer__socials">
                <a href="#" className="footer__social-icon" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" className="footer__social-icon" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/></svg>
                </a>
                <a href="#" className="footer__social-icon" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="footer__column-title">Explore</h4>
              <Link href="/explore" className="footer__link">Shop Models</Link>
              <Link href="/custom-print" className="footer__link">Print Custom</Link>
              <Link href="/explore" className="footer__link">Material Guide</Link>
            </div>

            {/* Support */}
            <div>
              <h4 className="footer__column-title">Support</h4>
              <Link href="/custom-print" className="footer__link">Get a Quote</Link>
              <a href="#" className="footer__link">About Us</a>
              <a href="#" className="footer__link">Contact</a>
              <a href="#" className="footer__link">Shipping</a>
              <a href="#" className="footer__link">Refund Policy</a>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer__column-title">Talk to the Lab</h4>
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <span>+91 98765 43210</span>
              </div>
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
                <span>hello@forge3d.in</span>
              </div>
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Workshop 12, Makers Quarter,<br />Bengaluru, Karnataka 560001</span>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Forge3D. All rights reserved.</span>
            <span>Layer by layer.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
