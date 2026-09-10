import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { TickerStrip } from '../components/layout/Footer';
import { products, categories } from '../data/products';

// Inline SVG icons
const Arrow = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const Upload = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>;
const FileUp = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>;
const Calculator = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="10" y2="18"/><line x1="14" y1="18" x2="16" y2="18"/></svg>;
const Printer = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>;
const Truck = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
const Zap = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const Target = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const Palette = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>;
const Headphones = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>;

export default function Home() {
  const featured = products.filter(p => p.badge === 'popular' || p.badge === 'new').slice(0, 8);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero__layout">
            <div>
              <div className="hero__eyebrow">
                <span className="hero__eyebrow-dot" />
                EXTRUDING PLA+ @ 215°C · LAYER 042/318
              </div>

              <h1 className="hero__title">
                Your ideas,<br />
                printed in <span className="highlight-3d">3D</span>,<br />
                shipped <span className="highlight-to-you">to you.</span>
              </h1>

              <p className="hero__subtitle">
                Pick from our catalogue of ready-to-print models, or send us your own file. No prepayment — we confirm every order on call or WhatsApp first.
              </p>

              <div className="hero__actions">
                <Link to="/explore" className="btn-brutalist-orange">
                  Explore 3D Models <Arrow />
                </Link>
                <Link to="/custom-print" className="btn-brutalist-white">
                  Print Your File
                </Link>
              </div>

              <div className="hero__stats">
                <div>
                  <div className="hero__stat-value">5,000+</div>
                  <div className="hero__stat-label">Parts Delivered</div>
                </div>
                <div>
                  <div className="hero__stat-value">0.05mm</div>
                  <div className="hero__stat-label">Layer Precision</div>
                </div>
                <div>
                  <div className="hero__stat-value">24h</div>
                  <div className="hero__stat-label">Express Dispatch</div>
                </div>
              </div>
            </div>

            <div className="hero__image-wrap">
              <div className="hero__image">
                <img src="/images/hero.jpg" alt="3D printed products collection" />
              </div>
              <div className="hero__image-overlay">
                <div className="hero__image-overlay-label">Now Printing</div>
                <div>BENCHY_04.STL · 0.12mm</div>
                <div className="hero__print-bar">
                  <div className="hero__print-bar-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MATERIAL TICKER ===== */}
      <TickerStrip />

      {/* ===== SECTION 01: PRODUCTS ===== */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--sp-10)', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
            <div>
              <div className="section-label">
                <span className="section-label__num">01</span>
                <span className="section-label__text">Fresh Off The Print Bed</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-h1)' }}>
                Ready-made prints,<br />made to order
              </h2>
            </div>
            <Link to="/explore" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-2)', color: 'var(--primary-accent)', fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-small)' }}>
              Browse the full catalogue <Arrow />
            </Link>
          </div>

          <div className="product-grid">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ===== SECTION 02: CUSTOM PRINT ===== */}
      <section className="section section--lavender" style={{ background: '#F4EFFF' }}>
        <div className="container">
          <div className="custom-print-section">
            <div className="custom-print-section__image-col">
              <div className="brutalist-image-card">
                <img src="/images/hero.jpg" alt="3D printing in action" />
              </div>
            </div>

            <div className="custom-print-section__content-col">
              <div className="section-label" style={{ marginBottom: 'var(--sp-4)' }}>
                <span className="section-label__num">02</span>
                <span className="section-label__text section-label__text--orange">Print Your Own File</span>
              </div>
              <h2 className="custom-print-section__title">
                Got an STL gathering dust?
              </h2>
              <p className="custom-print-section__desc">
                Send us your model and watch the estimate build itself. Every custom job goes straight to the owner's inbox — confirmed personally before a single layer is laid.
              </p>

              <div className="step-grid">
                <div className="step-card">
                  <div className="step-card__label">Step 1</div>
                  <div className="step-card__icon"><FileUp /></div>
                  <div className="step-card__title">Upload your file</div>
                  <div className="step-card__desc">STL, OBJ, 3MF or STEP — drag it in and tell us the specs.</div>
                </div>
                <div className="step-card">
                  <div className="step-card__label">Step 2</div>
                  <div className="step-card__icon"><Calculator /></div>
                  <div className="step-card__title">Instant estimate</div>
                  <div className="step-card__desc">See weight, print time and a ₹ price update live as you tweak.</div>
                </div>
                <div className="step-card">
                  <div className="step-card__label">Step 3</div>
                  <div className="step-card__icon"><Printer /></div>
                  <div className="step-card__title">We print it</div>
                  <div className="step-card__desc">Tuned profiles on calibrated machines, checked layer by layer.</div>
                </div>
                <div className="step-card">
                  <div className="step-card__label">Step 4</div>
                  <div className="step-card__icon"><Truck /></div>
                  <div className="step-card__title">Doorstep delivery</div>
                  <div className="step-card__desc">Packed safe, shipped pan-India within 24–48 hours.</div>
                </div>
              </div>

              <div style={{ marginTop: 'var(--sp-8)' }}>
                <Link to="/custom-print" className="btn-brutalist-dark-purple">
                  Start a custom print <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 03: MANIFESTO ===== */}
      <section className="section" style={{ borderTop: '2px solid var(--navy-900)', background: '#FAFAFA' }}>
        <div className="container">
          <div className="manifesto">
            <div>
              <div className="section-label">
                <span className="section-label__num">03</span>
                <span className="section-label__text">The Forge3D Manifesto</span>
              </div>
              <p className="manifesto__quote">
                "Every sketch deserves a <span className="highlight-orange-box">third</span><br/><span className="highlight-orange-box">dimension</span> . We obsess over<br/>layers so you can obsess over<br/>ideas."
              </p>
              <p className="manifesto__attribution">— The Forge3D Lab, Bengaluru</p>
              <div className="manifesto__chips">
                <span className="manifesto__chip">PLA+</span>
                <span className="manifesto__chip">PETG</span>
                <span className="manifesto__chip">ABS</span>
                <span className="manifesto__chip">TPU FLEX</span>
                <span className="manifesto__chip">RESIN</span>
              </div>
            </div>
            <div className="manifesto__image-card">
              <img src="/images/hero.jpg" alt="Forge3D Lab" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ORANGE MARQUEE ===== */}
      <div className="scrolling-marquee">
        <div className="scrolling-marquee__track">
          <span>+ 0.05MM LAYER ACCURACY + PRECISION 3D PRINTING + CUSTOM PROTOTYPING + PAN-INDIA SHIPPING + HIGH-DETAIL RESIN </span>
          <span>+ 0.05MM LAYER ACCURACY + PRECISION 3D PRINTING + CUSTOM PROTOTYPING + PAN-INDIA SHIPPING + HIGH-DETAIL RESIN </span>
        </div>
      </div>


    </main>
  );
}
