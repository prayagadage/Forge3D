import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link to="/" className="navbar__logo" style={{ color: '#fff', marginBottom: '4px', display: 'inline-flex' }}>
              <span className="navbar__logo-icon" aria-hidden="true">△</span>
              Forge3D
            </Link>
            <p className="footer__brand-desc">
              Premium 3D printing service. Browse our catalog or upload your own design — we bring your ideas to life.
            </p>
          </div>
          <div>
            <h3 className="footer__heading">Shop</h3>
            <Link to="/explore" className="footer__link">All Products</Link>
            <Link to="/explore?cat=home-decor" className="footer__link">Home Decor</Link>
            <Link to="/explore?cat=desk" className="footer__link">Desk Accessories</Link>
            <Link to="/explore?cat=toys" className="footer__link">Toys & Games</Link>
            <Link to="/explore?cat=art" className="footer__link">Art & Figurines</Link>
          </div>
          <div>
            <h3 className="footer__heading">Services</h3>
            <Link to="/custom-print" className="footer__link">Custom Printing</Link>
            <Link to="/explore" className="footer__link">Materials Guide</Link>
            <Link to="/custom-print" className="footer__link">Get a Quote</Link>
          </div>
          <div>
            <h3 className="footer__heading">Company</h3>
            <a href="#" className="footer__link">About Us</a>
            <a href="#" className="footer__link">Contact</a>
            <a href="#" className="footer__link">FAQ</a>
            <a href="#" className="footer__link">Shipping Policy</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Forge3D. All rights reserved.</span>
          <span>Made with precision, layer by layer.</span>
        </div>
      </div>
    </footer>
  );
}
