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
        <div
          className="product-card__image"
          style={{
            background: `linear-gradient(135deg, var(--surface) 0%, var(--border) 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
          }}
          aria-hidden="true"
        >
          {getCategoryEmoji(product.category)}
        </div>
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

function getCategoryEmoji(cat) {
  const map = {
    'home-decor': '🏠',
    desk: '🖥️',
    toys: '🎮',
    art: '🎨',
    organizers: '📦',
    functional: '⚙️',
    gifts: '🎁',
  };
  return map[cat] || '✦';
}
