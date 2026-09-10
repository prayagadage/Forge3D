import Link from 'next/link';

const EyeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const ChevronDown = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>;

export default function ProductCard({ product }) {
  const categoryLabel = product.category ? product.category.replace('-', ' ') : 'PRINT';
  
  // Create a shortened description for the card
  const desc = product.shortDescription || product.description || '';
  const displayDesc = desc.length > 90 ? desc.substring(0, 90) + '...' : desc;

  // Render price in INR format for Bengaluru theme
  const inrPrice = Math.round(product.price * 83).toLocaleString('en-IN');

  return (
    <Link href={`/product/${product.slug}`} className="product-card" aria-label={product.name}>
      <div className="product-card__image-wrap">
        <span className="product-card__category-badge">
          {categoryLabel}
        </span>
        {product.badge && (
          <span className="product-card__icon-badge">
            <EyeIcon />
          </span>
        )}
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="product-card__body">
        <div className="product-card__header">
          <h3 className="product-card__name">{product.name}</h3>
          <div className="product-card__price">
            <span className="product-card__price-current">₹{inrPrice}</span>
          </div>
        </div>
        <p className="product-card__desc">{displayDesc}</p>
        <div className="product-card__actions">
          <div className="product-card__dropdown">
            <span>PLA+</span>
            <ChevronDown />
          </div>
          <button className="product-card__add-btn" onClick={(e) => { e.preventDefault(); /* Add to cart logic */ }}>
            + Add
          </button>
        </div>
      </div>
    </Link>
  );
}
