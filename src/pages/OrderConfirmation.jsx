import { Link } from 'react-router-dom';

export default function OrderConfirmation() {
  const orderId = `FRG-${Date.now().toString(36).toUpperCase()}`;

  return (
    <main>
      <div className="confirmation">
        <div className="confirmation__icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h1 style={{ fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-bold)', marginBottom: 'var(--sp-3)' }}>
          Order Confirmed!
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-relaxed)' }}>
          Thank you for your order. We'll send you a confirmation email with tracking details once your items begin production.
        </p>
        <div className="confirmation__order-id">Order ID: {orderId}</div>

        <div style={{ marginTop: 'var(--sp-10)', padding: 'var(--sp-6)', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', textAlign: 'left' }}>
          <h3 style={{ fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-semibold)', marginBottom: 'var(--sp-4)' }}>What happens next?</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', fontSize: 'var(--fs-small)' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 'var(--radius-md)', background: 'var(--primary-accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 'var(--fw-medium)' }}>Confirmation email</div>
                <div style={{ color: 'var(--text-secondary)' }}>You'll receive an email with your order details shortly.</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', fontSize: 'var(--fs-small)' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 'var(--radius-md)', background: 'var(--primary-accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 3h-2l-2 4H8L6 3H4"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 'var(--fw-medium)' }}>Production starts</div>
                <div style={{ color: 'var(--text-secondary)' }}>We'll begin printing your items within 24 hours.</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', fontSize: 'var(--fs-small)' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 'var(--radius-md)', background: 'var(--primary-accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 'var(--fw-medium)' }}>Shipped to you</div>
                <div style={{ color: 'var(--text-secondary)' }}>Once printed and inspected, we'll ship your order with tracking.</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--sp-8)', display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/explore" className="btn btn--primary btn--lg">Continue Shopping</Link>
          <Link to="/" className="btn btn--secondary btn--lg">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
