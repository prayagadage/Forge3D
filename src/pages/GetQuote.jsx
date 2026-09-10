import { useState } from 'react';

const projectTypes = [
  'Bulk printing (50+ parts)',
  'Single prototype',
  'Custom design from sketch',
  'Replacement / spare part',
  'Corporate gifting',
  'Other',
];

export default function GetQuote() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', quantity: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitted(true);
    // ponytail: simulate — replace with real API
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main>
      <div className="container" style={{ paddingBottom: 'var(--sp-16)' }}>
        {/* Header */}
        <div style={{ padding: 'var(--sp-8) 0 var(--sp-6)' }}>
          <div className="section-label">
            <span className="section-label__num">07</span>
            <span className="section-label__text">Get a Quote & Contact</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-bold)' }}>
            Big idea? Bulk order? <span style={{ color: '#7C3AED' }}>Let's talk.</span>
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="quote-layout">
          {/* LEFT: Form */}
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input className="input" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              <input className="input" name="phone" type="tel" placeholder="Phone / WhatsApp" value={form.phone} onChange={handleChange} />
            </div>
            <input className="input" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <div className="form-row">
              <select className="select" name="type" value={form.type} onChange={handleChange} style={{ borderRadius: 'var(--radius-lg)' }}>
                <option value="" disabled>Project type...</option>
                {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <input className="input" name="quantity" placeholder="Approx. quantity (e.g. 200)" value={form.quantity} onChange={handleChange} />
            </div>
            <textarea className="input" name="details" rows="5" placeholder="Tell us about the project — dimensions, deadline, material preference..." value={form.details} onChange={handleChange} style={{ resize: 'vertical' }} />
            <button type="submit" className="btn btn--primary btn--lg btn--full" disabled={submitted}>
              {submitted ? 'Request Sent!' : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Request my quote
                </>
              )}
            </button>
          </form>

          {/* RIGHT: Contact cards */}
          <div className="quote-sidebar">
            {/* Human contact card */}
            <div className="quote-contact-card">
              <span className="config-section__label" style={{ color: 'var(--navy-400)' }}>Prefer a Human?</span>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', margin: 'var(--sp-4) 0' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-bold)', color: '#fff' }}>+91 98765 43210</span>
              </div>

              <a href="https://wa.me/919876543210" className="quote-whatsapp-btn" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.418A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.313-.726-5.994-1.957l-.42-.311-2.79.846.88-2.72-.34-.543A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Chat on WhatsApp
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', marginTop: 'var(--sp-4)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-small)', color: 'var(--navy-300)' }}>hello@forge3d.in</span>
              </div>
            </div>

            {/* Location + Hours card */}
            <div className="quote-info-card">
              <div style={{ display: 'flex', gap: 'var(--sp-3)', marginBottom: 'var(--sp-6)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <strong style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)' }}>The lab</strong>
                  <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', marginTop: 'var(--sp-1)', lineHeight: 'var(--lh-relaxed)' }}>
                    Workshop 12, Makers Quarter,<br />Bengaluru, Karnataka 560001
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <div>
                  <strong style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)' }}>Hours</strong>
                  <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', marginTop: 'var(--sp-1)', fontFamily: 'var(--font-mono)', lineHeight: 'var(--lh-relaxed)' }}>
                    MON-SAT · 10:00–20:00<br />PRINT FARM · 24×7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
