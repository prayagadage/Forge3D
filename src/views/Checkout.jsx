'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { items, cartTotal, clearCart, itemCount } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '',
    address: '', apartment: '', city: '',
    state: '', zip: '', country: 'US',
  });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  if (itemCount === 0) {
    return (
      <main>
        <div className="container">
          <div className="empty-state" style={{ minHeight: '60vh' }}>
            <div className="empty-state__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            </div>
            <h3 className="empty-state__title">Your cart is empty</h3>
            <p className="empty-state__desc">Add some products before checking out.</p>
            <Link to="/explore" className="btn btn--primary">Browse Products</Link>
          </div>
        </div>
      </main>
    );
  }

  const shipping = cartTotal >= 50 ? 0 : 5.99;
  const total = cartTotal + shipping;

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: null }));
  };

  const validate = () => {
    const errs = {};
    if (!form.email.includes('@')) errs.email = 'Please enter a valid email';
    if (!form.firstName.trim()) errs.firstName = 'Required';
    if (!form.lastName.trim()) errs.lastName = 'Required';
    if (!form.address.trim()) errs.address = 'Required';
    if (!form.city.trim()) errs.city = 'Required';
    if (!form.zip.trim()) errs.zip = 'Required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setProcessing(true);
    // ponytail: simulate order — replace with real payment + API
    setTimeout(() => { clearCart(); router.push('/order-confirmation'); }, 1500);
  };

  const renderField = (name, label, opts = {}) => (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={opts.type || 'text'} className={`input ${errors[name] ? 'input--error' : ''}`} placeholder={opts.placeholder || ''} value={form[name]} onChange={handleChange} required={opts.required !== false} autoComplete={opts.autoComplete || name} />
      {errors[name] && <span className="input-error-text">{errors[name]}</span>}
    </div>
  );

  return (
    <main>
      <div className="container" style={{ paddingBottom: 'var(--sp-16)' }}>
        <div className="page-header">
          <h1 className="page-header__title">Checkout</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="checkout-layout">
            <div>
              <div className="checkout-section">
                <h2 className="checkout-section__title">Contact</h2>
                {renderField('email', 'Email', { type: 'email', placeholder: 'your@email.com', autoComplete: 'email' })}
              </div>

              <div className="checkout-section">
                <h2 className="checkout-section__title">Shipping Address</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
                  <div className="form-row">
                    {renderField('firstName', 'First name', { autoComplete: 'given-name' })}
                    {renderField('lastName', 'Last name', { autoComplete: 'family-name' })}
                  </div>
                  {renderField('address', 'Address', { autoComplete: 'address-line1' })}
                  {renderField('apartment', 'Apartment, suite, etc. (optional)', { required: false, autoComplete: 'address-line2' })}
                  <div className="form-row">
                    {renderField('city', 'City', { autoComplete: 'address-level2' })}
                    {renderField('zip', 'ZIP code', { autoComplete: 'postal-code' })}
                  </div>
                  <div className="form-row">
                    {renderField('state', 'State / Province', { autoComplete: 'address-level1' })}
                    <div className="input-group">
                      <label htmlFor="country">Country</label>
                      <select id="country" name="country" className="select" value={form.country} onChange={handleChange}>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="checkout-section">
                <h2 className="checkout-section__title">Payment</h2>
                <div style={{ padding: 'var(--sp-8)', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: 'var(--fs-small)' }}>
                  <div style={{ marginBottom: 'var(--sp-3)' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                  </div>
                  <p style={{ fontWeight: 'var(--fw-semibold)', color: 'var(--text-primary)', marginBottom: 'var(--sp-1)' }}>Payment Integration</p>
                  <p>Payment processing will be connected here. For now, click "Place Order" to simulate.</p>
                </div>
              </div>

              <button type="submit" className="btn btn--primary btn--lg btn--full" disabled={processing}>
                {processing ? 'Processing...' : `Place Order — $${total.toFixed(2)}`}
              </button>
            </div>

            <div className="order-summary-card">
              <h2 className="order-summary-card__title">Order Summary ({itemCount})</h2>
              {items.map(item => (
                <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--sp-3) 0', borderBottom: '1px solid var(--border)', fontSize: 'var(--fs-small)' }}>
                  <div>
                    <div style={{ fontWeight: 'var(--fw-medium)' }}>{item.product.name}</div>
                    <div style={{ color: 'var(--text-tertiary)', fontSize: 'var(--fs-caption)' }}>Qty: {item.quantity}</div>
                  </div>
                  <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="price-summary" style={{ background: 'transparent', padding: 'var(--sp-4) 0 0' }}>
                <div className="price-summary__row"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                <div className="price-summary__row"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
                {shipping > 0 && <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--primary-accent)', marginBottom: 'var(--sp-2)' }}>Free shipping on orders over $50</div>}
                <div className="price-summary__total"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
