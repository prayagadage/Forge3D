import { useState, useCallback } from 'react';
import { useCart } from '../context/CartContext';
import { materials, colors as allColors, printQualities, infillOptions, uploadFormats } from '../data/products';

const STEPS = ['Upload', 'Configure', 'Review'];

export default function CustomPrint() {
  const { addItem } = useCart();
  const [step, setStep] = useState(0);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

  const [material, setMaterial] = useState('pla');
  const [color, setColor] = useState('white');
  const [quality, setQuality] = useState('standard');
  const [infill, setInfill] = useState('standard');
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const basePrice = 15.00;
  const materialMult = material === 'resin' ? 2.5 : material === 'tpu' ? 1.6 : material === 'abs' ? 1.2 : material === 'petg' ? 1.3 : 1;
  const qualityMult = printQualities.find(q => q.id === quality)?.multiplier || 1;
  const infillMult = infillOptions.find(i => i.id === infill)?.multiplier || 1;
  const unitPrice = Math.round(basePrice * materialMult * qualityMult * infillMult * 100) / 100;
  const totalPrice = Math.round(unitPrice * quantity * 100) / 100;

  const handleFile = useCallback((f) => {
    const ext = '.' + f.name.split('.').pop().toUpperCase();
    if (!uploadFormats.includes(ext)) {
      alert(`Unsupported format. Please upload ${uploadFormats.join(', ')} files.`);
      return;
    }
    setUploading(true);
    setUploadProgress(0);
    // ponytail: simulate upload — replace with real upload
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 30;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setUploading(false);
        setFile(f);
        setStep(1);
      }
      setUploadProgress(Math.min(p, 100));
    }, 200);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, [handleFile]);

  const handleFileInput = (e) => {
    const f = e.target.files[0];
    if (f) handleFile(f);
  };

  const handleAddToCart = () => {
    const customProduct = {
      id: `custom-${Date.now()}`,
      name: `Custom Print: ${file.name}`,
      price: unitPrice,
      category: 'custom',
      image: null,
    };
    addItem(customProduct, {
      material: materials.find(m => m.id === material)?.name,
      color: allColors.find(c => c.id === color)?.name,
      quality: printQualities.find(q => q.id === quality)?.name,
      infill: infillOptions.find(i => i.id === infill)?.name,
    }, quantity);
    setFile(null);
    setStep(0);
    setQuantity(1);
    setNotes('');
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const selectedMaterial = materials.find(m => m.id === material);
  const selectedColor = allColors.find(c => c.id === color);

  return (
    <main>
      <div className="container" style={{ paddingBottom: 'var(--sp-16)' }}>
        <div className="page-header">
          <h1 className="page-header__title">Custom Print</h1>
          <p className="page-header__desc">Upload your 3D model and we'll print it for you.</p>
        </div>

        {/* Stepper */}
        <div className="stepper" role="navigation" aria-label="Upload steps">
          {STEPS.map((s, i) => (
            <div className="stepper__step" key={s} style={{ flex: i < STEPS.length - 1 ? 1 : 'none', display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
              <span className={`stepper__dot ${i === step ? 'stepper__dot--active' : i < step ? 'stepper__dot--done' : ''}`}>
                {i < step ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                ) : i + 1}
              </span>
              <span className={`stepper__label ${i === step ? 'stepper__label--active' : ''}`}>{s}</span>
              {i < STEPS.length - 1 && (
                <span className={`stepper__line ${i < step ? 'stepper__line--done' : ''}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 0: Upload */}
        {step === 0 && !uploading && (
          <div
            className={`upload-zone ${dragging ? 'upload-zone--dragging' : ''}`}
            onDragOver={e => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input').click()}
            role="button"
            tabIndex={0}
            aria-label="Upload your 3D model"
            onKeyDown={e => { if (e.key === 'Enter') document.getElementById('file-input').click(); }}
          >
            <div className="upload-zone__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
            </div>
            <h2 className="upload-zone__title">Upload your 3D model</h2>
            <p className="upload-zone__desc">Drag and drop your file here, or click to browse</p>
            <p className="upload-zone__formats">Supported formats: {uploadFormats.join(', ')} · Max 50 MB</p>
            <input id="file-input" type="file" accept=".stl,.obj,.3mf,.step,.stp" onChange={handleFileInput} style={{ display: 'none' }} aria-hidden="true" />
          </div>
        )}

        {/* Uploading */}
        {uploading && (
          <div className="upload-progress">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--fs-small)' }}>
              <span>Uploading...</span>
              <span>{Math.round(uploadProgress)}%</span>
            </div>
            <div className="upload-progress__bar-wrap">
              <div className="upload-progress__bar" style={{ width: `${uploadProgress}%` }} />
            </div>
          </div>
        )}

        {/* Step 1: Configure */}
        {step === 1 && file && (
          <div>
            <div className="file-info" style={{ marginBottom: 'var(--sp-8)' }}>
              <div className="file-info__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div className="file-info__details">
                <div className="file-info__name">{file.name}</div>
                <div className="file-info__meta">
                  <span>{formatFileSize(file.size)}</span>
                  <span>·</span>
                  <span>{file.name.split('.').pop().toUpperCase()}</span>
                </div>
              </div>
              <button className="file-info__remove" onClick={() => { setFile(null); setStep(0); }} aria-label="Remove file">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-semibold)', marginBottom: 'var(--sp-6)' }}>
              Choose how you want it printed
            </h2>

            <div className="config-panel">
              <div className="input-group">
                <label htmlFor="material">Material</label>
                <select id="material" className="select" value={material} onChange={e => setMaterial(e.target.value)}>
                  {materials.map(m => <option key={m.id} value={m.id}>{m.name} — {m.desc}</option>)}
                </select>
              </div>

              <div className="input-group">
                <label>Color — {selectedColor?.name}</label>
                <div className="color-swatches">
                  {allColors.map(c => (
                    <button key={c.id} className={`color-swatch ${color === c.id ? 'color-swatch--active' : ''}`} style={{ background: c.hex }} onClick={() => setColor(c.id)} aria-label={c.name} title={c.name} />
                  ))}
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="quality">Print Quality</label>
                <select id="quality" className="select" value={quality} onChange={e => setQuality(e.target.value)}>
                  {printQualities.map(q => <option key={q.id} value={q.id}>{q.name} — {q.desc}</option>)}
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="infill">
                  Strength
                  <span style={{ fontWeight: 'var(--fw-regular)', color: 'var(--text-tertiary)', marginLeft: '4px', fontSize: 'var(--fs-caption)' }}>(how solid the print is)</span>
                </label>
                <select id="infill" className="select" value={infill} onChange={e => setInfill(e.target.value)}>
                  {infillOptions.map(i => <option key={i.id} value={i.id}>{i.name} — {i.desc}</option>)}
                </select>
              </div>
            </div>

            <div style={{ marginTop: 'var(--sp-6)' }}>
              <label className="option-group__label" style={{ display: 'block', marginBottom: 'var(--sp-3)', fontSize: 'var(--fs-small)', fontWeight: 600 }}>Quantity</label>
              <div className="quantity-control">
                <button className="quantity-control__btn" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease">−</button>
                <input className="quantity-control__value" type="text" value={quantity} readOnly aria-label="Quantity" />
                <button className="quantity-control__btn" onClick={() => setQuantity(quantity + 1)} aria-label="Increase">+</button>
              </div>
            </div>

            <div className="input-group" style={{ marginTop: 'var(--sp-6)' }}>
              <label htmlFor="notes">Special instructions (optional)</label>
              <textarea id="notes" className="input" rows="3" placeholder="Any specific requirements for your print..." value={notes} onChange={e => setNotes(e.target.value)} style={{ resize: 'vertical' }} />
            </div>

            <div style={{ display: 'flex', gap: 'var(--sp-4)', marginTop: 'var(--sp-8)', justifyContent: 'flex-end' }}>
              <button className="btn btn--secondary" onClick={() => { setFile(null); setStep(0); }}>Start Over</button>
              <button className="btn btn--primary btn--lg" onClick={() => setStep(2)}>Review & Price →</button>
            </div>
          </div>
        )}

        {/* Step 2: Review */}
        {step === 2 && file && (
          <div style={{ maxWidth: '640px' }}>
            <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-semibold)', marginBottom: 'var(--sp-6)' }}>Review your order</h2>

            <div className="file-info" style={{ marginBottom: 'var(--sp-6)' }}>
              <div className="file-info__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div className="file-info__details">
                <div className="file-info__name">{file.name}</div>
                <div className="file-info__meta"><span>{formatFileSize(file.size)}</span></div>
              </div>
            </div>

            <div className="price-summary" style={{ marginBottom: 'var(--sp-6)' }}>
              <div className="price-summary__row"><span>Material</span><span>{selectedMaterial?.name}</span></div>
              <div className="price-summary__row">
                <span>Color</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: selectedColor?.hex, display: 'inline-block', border: '1px solid var(--border)' }} />
                  {selectedColor?.name}
                </span>
              </div>
              <div className="price-summary__row"><span>Quality</span><span>{printQualities.find(q => q.id === quality)?.name}</span></div>
              <div className="price-summary__row"><span>Strength</span><span>{infillOptions.find(i => i.id === infill)?.name}</span></div>
              <div className="price-summary__row"><span>Quantity</span><span>×{quantity}</span></div>
              {quantity > 1 && <div className="price-summary__row"><span>Unit price</span><span>${unitPrice.toFixed(2)}</span></div>}
              <div className="price-summary__total"><span>Estimated Total</span><span>${totalPrice.toFixed(2)}</span></div>
            </div>

            <p style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-tertiary)', marginBottom: 'var(--sp-6)' }}>
              * Final price may vary based on model complexity and size. We'll confirm the exact price before printing.
            </p>

            <div style={{ display: 'flex', gap: 'var(--sp-4)' }}>
              <button className="btn btn--secondary" onClick={() => setStep(1)}>← Back</button>
              <button className="btn btn--primary btn--lg" onClick={handleAddToCart} style={{ flex: 1 }}>Add to Cart — ${totalPrice.toFixed(2)}</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
