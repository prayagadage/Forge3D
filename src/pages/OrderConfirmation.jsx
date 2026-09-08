import { Link } from 'react-router-dom';

export default function OrderConfirmation() {
  const orderId = `FRG-${Date.now().toString(36).toUpperCase()}`;

  return (
    <main>
      <div className="confirmation">
        <div className="confirmation__icon">✓</div>
        <h1 style={{ fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-bold)', marginBottom: 'var(--sp-3)' }}>
          Order Confirmed!
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-relaxed)' }}>
          Thank you for your order. We'll send you a confirmation email with tracking details once your items begin production.
        </p>
        <div className="confirmation__order-id">
          Order ID: {orderId}
        </div>

        <div style={{
          marginTop: 'var(--sp-10)',
          padding: 'var(--sp-6)',
          background: 'var(--surface)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'left',
        }}>
          <h3 style={{ fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-semibold)', marginBottom: 'var(--sp-4)' }}>
            What happens next?
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', fontSize: 'var(--fs-small)' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>📧</span>
              <div>
                <div style={{ fontWeight: 'var(--fw-medium)' }}>Confirmation email</div>
                <div style={{ color: 'var(--text-secondary)' }}>You'll receive an email with your order details shortly.</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', fontSize: 'var(--fs-small)' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>🖨️</span>
              <div>
                <div style={{ fontWeight: 'var(--fw-medium)' }}>Production starts</div>
                <div style={{ color: 'var(--text-secondary)' }}>We'll begin printing your items within 24 hours.</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', fontSize: 'var(--fs-small)' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>📦</span>
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
