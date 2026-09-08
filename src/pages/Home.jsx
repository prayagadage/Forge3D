import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

// SVG icon components — replace all emoji usage
const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
const IconUpload = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconPalette = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
);
const IconHeadphones = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>
);
const IconShoppingBag = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
);
const IconPencilRuler = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l4-4"/><path d="M12.22 2.22a2.121 2.121 0 013.56 0l3 3a2.121 2.121 0 010 3l-9.56 9.56a2 2 0 01-1.42.59H5a1 1 0 01-1-1v-2.8a2 2 0 01.59-1.42z"/><path d="M14 6l4 4"/><path d="M18 2l4 4"/></svg>
);

export default function Home() {
  const featured = products.filter(p => p.badge === 'popular' || p.badge === 'new').slice(0, 8);

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Premium 3D Printing Service
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
              <IconArrowRight />
            </Link>
            <Link to="/custom-print" className="btn btn--secondary btn--lg">
              Upload Your Model
              <IconUpload />
            </Link>
          </div>
        </div>
        <div className="hero__image-strip">
          <div className="container">
            <img src="/images/hero.jpg" alt="Collection of 3D printed products" className="hero__banner" />
          </div>
        </div>
      </section>

      {/* Two Paths */}
      <section className="section--compact">
        <div className="container">
          <div className="paths">
            <Link to="/explore" className="path-card">
              <div className="path-card__icon">
                <IconShoppingBag />
              </div>
              <h2 className="path-card__title">Explore Products</h2>
              <p className="path-card__desc">
                Browse our curated catalog of ready-to-order 3D printed items. From home decor to desk accessories — find something you love.
              </p>
              <span className="path-card__link">
                Shop now <IconArrowRight />
              </span>
            </Link>
            <Link to="/custom-print" className="path-card">
              <div className="path-card__icon">
                <IconPencilRuler />
              </div>
              <h2 className="path-card__title">Print Your Own Model</h2>
              <p className="path-card__desc">
                Have a 3D design? Upload it and we'll print it for you. Choose your material, color, and quality — get an instant price.
              </p>
              <span className="path-card__link">
                Upload model <IconArrowRight />
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
                <span className="category-card__name">{cat.name}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-tertiary)' }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
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
              <div className="feature__icon"><IconZap /></div>
              <h3 className="feature__title">Fast Turnaround</h3>
              <p className="feature__desc">Most orders ship within 3–5 business days. Rush options available for time-sensitive projects.</p>
            </div>
            <div className="feature">
              <div className="feature__icon"><IconTarget /></div>
              <h3 className="feature__title">Precision Printing</h3>
              <p className="feature__desc">Professional-grade printers with layer resolution as fine as 0.05mm for incredible detail.</p>
            </div>
            <div className="feature">
              <div className="feature__icon"><IconPalette /></div>
              <h3 className="feature__title">Material Variety</h3>
              <p className="feature__desc">Choose from PLA, ABS, PETG, TPU, and resin — each suited for different needs.</p>
            </div>
            <div className="feature">
              <div className="feature__icon"><IconHeadphones /></div>
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
