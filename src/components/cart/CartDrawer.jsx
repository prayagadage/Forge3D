import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, itemCount, cartTotal } = useCart();

  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? 'drawer-overlay--open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`drawer ${isOpen ? 'drawer--open' : ''}`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        <div className="drawer__header">
          <h2 className="drawer__title">Cart ({itemCount})</h2>
          <button
            className="btn btn--ghost btn--icon"
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="drawer__body">
          {items.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state__icon">🛒</div>
              <h3 className="empty-state__title">Your cart is empty</h3>
              <p className="empty-state__desc">Browse our products or upload your own 3D model to get started.</p>
              <button className="btn btn--primary" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map(item => (
              <div className="cart-item" key={item.key}>
                <div className="cart-item__image">
                  <div style={{ width: '100%', height: '100%', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    {item.product.category === 'custom' ? '📄' : '🎨'}
                  </div>
                </div>
                <div className="cart-item__details">
                  <div className="cart-item__name">{item.product.name}</div>
                  {item.options && Object.keys(item.options).length > 0 && (
                    <div className="cart-item__options">
                      {Object.entries(item.options).map(([k, v]) => `${k}: ${v}`).join(' · ')}
                    </div>
                  )}
                  <div className="cart-item__bottom">
                    <div className="cart-item__qty">
                      <button onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity">+</button>
                    </div>
                    <div className="cart-item__price">${(item.product.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
                <button
                  className="file-info__remove"
                  onClick={() => removeItem(item.key)}
                  aria-label={`Remove ${item.product.name}`}
                  style={{ alignSelf: 'start', padding: '4px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="drawer__footer">
            <div className="price-summary">
              <div className="price-summary__row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="price-summary__row">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="price-summary__total">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="btn btn--primary btn--lg btn--full"
              style={{ marginTop: 'var(--sp-4)' }}
              onClick={() => setIsOpen(false)}
            >
              Checkout — ${cartTotal.toFixed(2)}
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
