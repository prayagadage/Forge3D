import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

export default function Home() {
  const featured = products.filter(p => p.badge === 'popular' || p.badge === 'new').slice(0, 8);

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__eyebrow">
            <span>✦</span> Premium 3D Printing Service
          </div>
          <h1 className="hero__title">
            Your ideas,<br /><span>printed to perfection</span>
          </h1>
          <p className="hero__subtitle">
            Browse our curated collection of 3D printed products or upload your own design. We handle the printing — you get a beautifully crafted piece.
          </p>
          <div className="hero__actions">
            <Link to="/explore" className="btn btn--primary btn--lg">
              Browse Products
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link to="/custom-print" className="btn btn--secondary btn--lg">
              Upload Your Model
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Two Paths */}
      <section className="section--compact">
        <div className="container">
          <div className="paths">
            <Link to="/explore" className="path-card">
              <div className="path-card__icon">🛍️</div>
              <h2 className="path-card__title">Explore Products</h2>
              <p className="path-card__desc">
                Browse our curated catalog of ready-to-order 3D printed items. From home decor to desk accessories — find something you love.
              </p>
              <span className="btn btn--ghost" style={{ alignSelf: 'start', padding: 0, color: 'var(--primary-accent)' }}>
                Shop now →
              </span>
            </Link>
            <Link to="/custom-print" className="path-card">
              <div className="path-card__icon">📐</div>
              <h2 className="path-card__title">Print Your Own Model</h2>
              <p className="path-card__desc">
                Have a 3D design? Upload it and we'll print it for you. Choose your material, color, and quality — get an instant price.
              </p>
              <span className="btn btn--ghost" style={{ alignSelf: 'start', padding: 0, color: 'var(--primary-accent)' }}>
                Upload model →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-header__label">Featured</p>
            <h2 className="section-header__title">Popular Products</h2>
            <p className="section-header__desc">
              Hand-picked favorites from our collection. Quality crafted, ready to ship.
            </p>
          </div>
          <div className="product-grid">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--sp-10)' }}>
            <Link to="/explore" className="btn btn--secondary btn--lg">View All Products</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="section-header">
            <p className="section-header__label">How It Works</p>
            <h2 className="section-header__title">Three simple steps</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step__number">1</div>
              <h3 className="step__title">Choose or Upload</h3>
              <p className="step__desc">
                Pick a product from our catalog or upload your own 3D model file.
              </p>
            </div>
            <div className="step">
              <div className="step__number">2</div>
              <h3 className="step__title">Configure & Order</h3>
              <p className="step__desc">
                Select your material, color, and finish. See the price instantly and place your order.
              </p>
            </div>
            <div className="step">
              <div className="step__number">3</div>
              <h3 className="step__title">Receive Your Print</h3>
              <p className="step__desc">
                We carefully print and ship your item. Track your order from production to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-header__label">Categories</p>
            <h2 className="section-header__title">Browse by Category</h2>
          </div>
          <div className="categories-grid">
            {categories.filter(c => c.id !== 'all').map(cat => (
              <Link to={`/explore?cat=${cat.id}`} className="category-card" key={cat.id}>
                <span className="category-card__icon">{cat.icon}</span>
                <span className="category-card__name">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="section-header">
            <p className="section-header__label">Why Forge3D</p>
            <h2 className="section-header__title">Quality you can feel</h2>
          </div>
          <div className="features">
            <div className="feature">
              <div className="feature__icon">⚡</div>
              <h3 className="feature__title">Fast Turnaround</h3>
              <p className="feature__desc">Most orders ship within 3–5 business days. Rush options available for time-sensitive projects.</p>
            </div>
            <div className="feature">
              <div className="feature__icon">🎯</div>
              <h3 className="feature__title">Precision Printing</h3>
              <p className="feature__desc">Professional-grade printers with layer resolution as fine as 0.05mm for incredible detail.</p>
            </div>
            <div className="feature">
              <div className="feature__icon">🎨</div>
              <h3 className="feature__title">Material Variety</h3>
              <p className="feature__desc">Choose from PLA, ABS, PETG, TPU, and resin — each suited for different needs.</p>
            </div>
            <div className="feature">
              <div className="feature__icon">💬</div>
              <h3 className="feature__title">Expert Support</h3>
              <p className="feature__desc">Our team reviews every custom order to ensure the best possible result. We'll reach out if we spot any issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">Have a 3D model ready?</h2>
            <p className="cta-banner__desc">
              Upload your design and get an instant quote. We support STL, OBJ, 3MF, and STEP files.
            </p>
            <Link to="/custom-print" className="btn btn--primary btn--lg">
              Upload & Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
