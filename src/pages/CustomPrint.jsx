import { useState, useCallback } from 'react';
import { materials, colors as allColors, uploadFormats } from '../data/products';

const materialPricing = [
  { id: 'pla', name: 'PLA+', price: 12, desc: 'Crisp detail, everyday parts' },
  { id: 'petg', name: 'PETG', price: 14, desc: 'Tough, weather-friendly' },
  { id: 'abs', name: 'ABS', price: 15, desc: 'Heat resistant, engineering' },
  { id: 'tpu', name: 'TPU Flex', price: 22, desc: 'Rubbery, bendable' },
  { id: 'resin', name: 'Resin', price: 35, desc: 'Ultra-fine 0.05mm detail' },
];

const layerOptions = [
  { id: '0.30', label: '0.30mm · Draft' },
  { id: '0.20', label: '0.20mm · Standard' },
  { id: '0.12', label: '0.12mm · Fine' },
  { id: '0.05', label: '0.05mm · Ultra' },
];

const filamentColors = [
  { id: 'charcoal', name: 'Charcoal', hex: '#2D2D2D' },
  { id: 'white', name: 'White', hex: '#F5F5F5' },
  { id: 'orange', name: 'Orange', hex: '#F97316' },
  { id: 'purple', name: 'Purple', hex: '#7C3AED' },
  { id: 'green', name: 'Green', hex: '#22C55E' },
  { id: 'cyan', name: 'Cyan', hex: '#06B6D4' },
  { id: 'pink', name: 'Pink', hex: '#EC4899' },
  { id: 'gold', name: 'Gold', hex: '#D4A574' },
];

export default function CustomPrint() {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [material, setMaterial] = useState('pla');
  const [infill, setInfill] = useState(20);
  const [layer, setLayer] = useState('0.20');
  const [color, setColor] = useState('charcoal');
  const [quantity, setQuantity] = useState(1);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Live estimate calculation
  const mat = materialPricing.find(m => m.id === material);
  const baseWeight = 200; // grams (simulated)
  const infillMult = 0.5 + (infill / 100) * 1.5;
  const layerMult = layer === '0.05' ? 2.2 : layer === '0.12' ? 1.5 : layer === '0.20' ? 1 : 0.8;
  const estimatedPrice = Math.round(baseWeight * (mat?.price || 12) / 100 * infillMult * layerMult * quantity);
  const estPrintTime = Math.round(baseWeight * 0.55 * layerMult * quantity * 10) / 10;

  const selectedColor = filamentColors.find(c => c.id === color);

  const handleFile = useCallback((f) => {
    const ext = '.' + f.name.split('.').pop().toUpperCase();
    if (!uploadFormats.includes(ext)) {
      alert(`Unsupported format. Please upload ${uploadFormats.join(', ')} files.`);
      return;
    }
    setUploading(true);
    setUploadProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 30;
      if (p >= 100) { p = 100; clearInterval(interval); setUploading(false); setFile(f); }
      setUploadProgress(Math.min(p, 100));
    }, 200);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, [handleFile]);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
    // ponytail: simulate — replace with real API
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main>
      <div className="container" style={{ paddingBottom: 'var(--sp-16)' }}>
        {/* Header */}
        <div style={{ padding: 'var(--sp-8) 0 var(--sp-6)' }}>
          <div className="section-label">
            <span className="section-label__num">02</span>
            <span className="section-label__text">Custom Print Lab</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-bold)', marginBottom: 'var(--sp-3)' }}>
            Print your own model
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '460px', lineHeight: 'var(--lh-relaxed)' }}>
            Drop your 3D file, dial in the specs, and watch the estimate react. The request — with your file — lands straight in the owner's inbox.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="custom-print-layout">
          {/* LEFT: Upload + Config */}
          <div className="custom-print-config">
            {/* Upload Zone */}
            {!file && !uploading && (
              <div
                className={`upload-zone ${dragging ? 'upload-zone--dragging' : ''}`}
                onDragOver={e => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById('file-input').click()}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') document.getElementById('file-input').click(); }}
              >
                <div className="upload-zone__icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </div>
                <h2 className="upload-zone__title">Drag & drop your 3D file</h2>
                <p className="upload-zone__formats">.STL · .OBJ · .3MF · .STEP — UP TO 100 MB</p>
                <input id="file-input" type="file" accept=".stl,.obj,.3mf,.step,.stp" onChange={e => { if (e.target.files[0]) handleFile(e.target.files[0]); }} style={{ display: 'none' }} />
              </div>
            )}

            {uploading && (
              <div className="upload-progress" style={{ padding: 'var(--sp-16) 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)' }}>
                  <span>Uploading...</span>
                  <span>{Math.round(uploadProgress)}%</span>
                </div>
                <div className="upload-progress__bar-wrap">
                  <div className="upload-progress__bar" style={{ width: `${uploadProgress}%` }} />
                </div>
              </div>
            )}

            {file && (
              <div className="file-info" style={{ marginBottom: 'var(--sp-4)' }}>
                <div className="file-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div className="file-info__details">
                  <div className="file-info__name">{file.name}</div>
                  <div className="file-info__meta"><span>{(file.size / 1048576).toFixed(1)} MB</span></div>
                </div>
                <button className="file-info__remove" onClick={() => setFile(null)} aria-label="Remove file">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            )}

            {/* Material Selection */}
            <div className="config-section">
              <label className="config-section__label">Material</label>
              <div className="material-grid">
                {materialPricing.map(m => (
                  <button
                    key={m.id}
                    className={`material-card ${material === m.id ? 'material-card--active' : ''}`}
                    onClick={() => setMaterial(m.id)}
                  >
                    <div className="material-card__top">
                      <span className="material-card__name">{m.name}</span>
                      <span className="material-card__price">₹{m.price}/g</span>
                    </div>
                    <span className="material-card__desc">{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Infill Density */}
            <div className="config-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="config-section__label" style={{ marginBottom: 0 }}>Infill Density</label>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', color: 'var(--primary-accent)', fontWeight: 'var(--fw-medium)' }}>{infill}%</span>
              </div>
              <input
                type="range"
                min="5" max="100" step="5"
                value={infill}
                onChange={e => setInfill(Number(e.target.value))}
                className="infill-slider"
              />
            </div>

            {/* Layer Height + Quantity row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-6)' }}>
              <div className="config-section">
                <label className="config-section__label">Layer Height</label>
                <select className="select" value={layer} onChange={e => setLayer(e.target.value)} style={{ borderRadius: 'var(--radius-lg)' }}>
                  {layerOptions.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
                </select>
              </div>
              <div className="config-section">
                <label className="config-section__label">Quantity</label>
                <div className="quantity-control" style={{ width: '100%', justifyContent: 'space-between' }}>
                  <button className="quantity-control__btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <input className="quantity-control__value" type="text" value={quantity} readOnly style={{ flex: 1 }} />
                  <button className="quantity-control__btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            {/* Filament Colour */}
            <div className="config-section">
              <label className="config-section__label">Filament Colour</label>
              <div className="color-swatches">
                {filamentColors.map(c => (
                  <button
                    key={c.id}
                    className={`color-swatch ${color === c.id ? 'color-swatch--active' : ''}`}
                    style={{ background: c.hex, width: 40, height: 40 }}
                    onClick={() => setColor(c.id)}
                    aria-label={c.name}
                    title={c.name}
                  />
                ))}
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', color: 'var(--text-secondary)', marginTop: 'var(--sp-2)', display: 'block' }}>
                {selectedColor?.name}
              </span>
            </div>
          </div>

          {/* RIGHT: Live Estimate + Contact */}
          <div className="custom-print-sidebar">
            {/* Live Estimate Card */}
            <div className="estimate-card">
              <div className="estimate-card__label">Live Estimate</div>
              <div className="estimate-card__price">₹{estimatedPrice.toLocaleString()}</div>
              <div className="estimate-card__specs">
                <div className="estimate-card__spec">
                  <span>Est. weight</span>
                  <span>{Math.round(baseWeight * infillMult)}g</span>
                </div>
                <div className="estimate-card__spec">
                  <span>Est. print time</span>
                  <span>{estPrintTime}h</span>
                </div>
                <div className="estimate-card__spec">
                  <span>Material</span>
                  <span>{mat?.name} · {selectedColor?.name}</span>
                </div>
                <div className="estimate-card__spec">
                  <span>Setup fee</span>
                  <span>₹99 included</span>
                </div>
              </div>
              <p className="estimate-card__disclaimer">
                Final quote is confirmed by the owner after checking your file's geometry.
              </p>
            </div>

            {/* Contact Form */}
            <div className="contact-card">
              <label className="config-section__label">Your Details</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', marginTop: 'var(--sp-3)' }}>
                <input className="input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }}>
                  <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                  <input className="input" type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <textarea className="input" rows="3" placeholder="Notes — deadlines, post-processing, anything..." value={notes} onChange={e => setNotes(e.target.value)} style={{ resize: 'vertical' }} />
                <button className="btn btn--primary btn--lg btn--full" onClick={handleSubmit} disabled={submitted}>
                  {submitted ? 'Request Sent!' : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      Send print request to owner
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
