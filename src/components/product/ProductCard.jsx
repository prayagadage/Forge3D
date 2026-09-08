import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const badgeClass = product.badge ? `badge badge--${product.badge}` : '';

  return (
    <Link to={`/product/${product.slug}`} className="card product-card" aria-label={product.name}>
      <div className="product-card__image-wrap">
        {product.badge && (
          <span className={`product-card__badge ${badgeClass}`}>
            {product.badge}
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
        <span className="product-card__category">{product.category.replace('-', ' ')}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__price">
          <span className="product-card__price-current">${product.price.toFixed(2)}</span>
          {product.comparePrice && (
            <span className="product-card__price-compare">${product.comparePrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
