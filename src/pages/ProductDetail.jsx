import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getProductBySlug, colors as allColors } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState(null);

  if (!product) {
    return (
      <main>
        <div className="container">
          <div className="empty-state" style={{ minHeight: '60vh' }}>
            <div className="empty-state__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            </div>
            <h3 className="empty-state__title">Product not found</h3>
            <p className="empty-state__desc">We couldn't find the product you're looking for.</p>
            <Link to="/explore" className="btn btn--primary">Browse Products</Link>
          </div>
        </div>
      </main>
    );
  }

  if (!selectedColor && product.colors.length > 0) {
    setSelectedColor(product.colors[0]);
    return null;
  }
  if (!selectedSize && product.sizes.length > 0) {
    setSelectedSize(product.sizes[0]);
    return null;
  }

  const productColors = allColors.filter(c => product.colors.includes(c.id));

  const handleAddToCart = () => {
    addItem(product, {
      color: productColors.find(c => c.id === selectedColor)?.name || '',
      size: selectedSize || '',
    }, quantity);
  };

  const toggleSection = (id) => setOpenSection(prev => prev === id ? null : id);

  return (
    <main>
      <div className="container" style={{ paddingTop: 'var(--sp-6)', paddingBottom: 'var(--sp-16)' }}>
        {/* Breadcrumb */}
        <nav className="product-info__breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: 'var(--sp-6)' }}>
          <Link to="/">Home</Link>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          <Link to="/explore">Products</Link>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          <span style={{ color: 'var(--text-primary)' }}>{product.name}</span>
        </nav>

        <div className="product-detail">
          {/* Gallery */}
          <div className="gallery">
            <div className="gallery__main">
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Info */}
          <div className="product-info">
            {product.badge && (
              <span className={`badge badge--${product.badge}`} style={{ alignSelf: 'start' }}>
                {product.badge}
              </span>
            )}

            <h1 style={{ fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-bold)' }}>{product.name}</h1>

            <div className="product-info__price">
              <span className="product-info__price-current">${product.price.toFixed(2)}</span>
              {product.comparePrice && (
                <span className="product-info__price-compare">${product.comparePrice.toFixed(2)}</span>
              )}
            </div>

            <p className="product-info__desc">{product.shortDescription}</p>

            {/* Color Selection */}
            {productColors.length > 0 && (
              <div className="option-group">
                <span className="option-group__label">
                  Color — {productColors.find(c => c.id === selectedColor)?.name}
                </span>
                <div className="color-swatches">
                  {productColors.map(c => (
                    <button
                      key={c.id}
                      className={`color-swatch ${selectedColor === c.id ? 'color-swatch--active' : ''}`}
                      style={{ background: c.hex }}
                      onClick={() => setSelectedColor(c.id)}
                      aria-label={c.name}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <div className="option-group">
                <span className="option-group__label">Size</span>
                <div className="option-chips">
                  {product.sizes.map(s => (
                    <button
                      key={s}
                      className={`option-chip ${selectedSize === s ? 'option-chip--active' : ''}`}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Material */}
            <div style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Material:</strong> {product.material}
            </div>

            {/* Quantity + ATC */}
            <div style={{ display: 'flex', gap: 'var(--sp-4)', alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="quantity-control">
                <button className="quantity-control__btn" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">−</button>
                <input className="quantity-control__value" type="text" value={quantity} readOnly aria-label="Quantity" />
                <button className="quantity-control__btn" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">+</button>
              </div>
              <button className="btn btn--primary btn--lg" onClick={handleAddToCart} style={{ flex: 1 }}>
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Delivery info */}
            <div style={{ display: 'flex', gap: 'var(--sp-6)', flexWrap: 'wrap', fontSize: 'var(--fs-small)', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                {product.printTime}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                {product.dimensions}
              </span>
            </div>

            {/* Expandable sections */}
            <div style={{ borderTop: '1px solid var(--border)', marginTop: 'var(--sp-2)' }}>
              <div className={`expandable ${openSection === 'desc' ? 'expandable--open' : ''}`}>
                <button className="expandable__trigger" onClick={() => toggleSection('desc')}>
                  Description
                  <svg className="expandable__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {openSection === 'desc' && (
                  <div className="expandable__content">{product.description}</div>
                )}
              </div>

              <div className={`expandable ${openSection === 'features' ? 'expandable--open' : ''}`}>
                <button className="expandable__trigger" onClick={() => toggleSection('features')}>
                  Features
                  <svg className="expandable__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {openSection === 'features' && (
                  <div className="expandable__content">
                    <ul style={{ listStyle: 'disc', paddingLeft: 'var(--sp-5)' }}>
                      {product.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              <div className={`expandable ${openSection === 'specs' ? 'expandable--open' : ''}`}>
                <button className="expandable__trigger" onClick={() => toggleSection('specs')}>
                  Specifications
                  <svg className="expandable__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {openSection === 'specs' && (
                  <div className="expandable__content">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-2)' }}>
                      <span style={{ fontWeight: 500 }}>Weight</span><span>{product.specs.weight}</span>
                      <span style={{ fontWeight: 500 }}>Layer Height</span><span>{product.specs.layerHeight}</span>
                      <span style={{ fontWeight: 500 }}>Infill</span><span>{product.specs.infill}</span>
                      <span style={{ fontWeight: 500 }}>Dimensions</span><span>{product.dimensions}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className={`expandable ${openSection === 'ship' ? 'expandable--open' : ''}`}>
                <button className="expandable__trigger" onClick={() => toggleSection('ship')}>
                  Shipping & Returns
                  <svg className="expandable__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {openSection === 'ship' && (
                  <div className="expandable__content">
                    <p>Free shipping on orders over $50. Standard shipping typically takes 5–8 business days after production. Each item is made to order and carefully packed to ensure it arrives in perfect condition.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky mobile ATC */}
      <div className="sticky-atc">
        <span className="sticky-atc__price">${(product.price * quantity).toFixed(2)}</span>
        <button className="btn btn--primary" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </main>
  );
}
