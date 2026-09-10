'use client';
import { useState } from 'react';

const materialsData = [
  {
    id: 'pla',
    name: 'PLA+',
    badge: 'The Crowd Favourite',
    price: 12,
    description: 'Plant-based, crisp and reliable. PLA+ takes stunning detail and rich colour, making it perfect for decor, prototypes, cosplay props and gifts.',
    bestFor: ['Decor', 'Prototypes', 'Cosplay', 'Gifts'],
    stats: { durability: 3, flexibility: 2, heatResistance: 2, surfaceFinish: 4, ecoFriendly: 5 },
  },
  {
    id: 'petg',
    name: 'PETG',
    badge: 'The All-Rounder',
    price: 14,
    description: 'Tough, weather-friendly and food-safe. PETG handles outdoor use, mechanical stress and everyday wear without breaking a sweat.',
    bestFor: ['Outdoor parts', 'Containers', 'Functional', 'Engineering'],
    stats: { durability: 4, flexibility: 3, heatResistance: 3, surfaceFinish: 3, ecoFriendly: 3 },
  },
  {
    id: 'abs',
    name: 'ABS',
    badge: 'The Workhorse',
    price: 15,
    description: 'Heat resistant and impact-tough. ABS is the go-to for automotive parts, enclosures and anything that needs to survive real-world abuse.',
    bestFor: ['Automotive', 'Enclosures', 'Mechanical', 'Heat-resistant'],
    stats: { durability: 4, flexibility: 2, heatResistance: 4, surfaceFinish: 3, ecoFriendly: 2 },
  },
  {
    id: 'tpu',
    name: 'TPU Flex',
    badge: 'The Bendy One',
    price: 22,
    description: 'Rubbery, bendable and shock-absorbing. TPU Flex is perfect for phone cases, gaskets, wearables and anything that needs to flex without snapping.',
    bestFor: ['Phone cases', 'Gaskets', 'Wearables', 'Grips'],
    stats: { durability: 4, flexibility: 5, heatResistance: 2, surfaceFinish: 2, ecoFriendly: 3 },
  },
  {
    id: 'resin',
    name: 'High-Detail Resin',
    badge: 'The Perfectionist',
    price: 35,
    description: 'Ultra-fine 0.05mm layer resolution for jaw-dropping detail. Resin prints capture every micro-surface, ideal for miniatures, jewellery masters and display figurines.',
    bestFor: ['Miniatures', 'Jewellery', 'Figurines', 'Dental'],
    stats: { durability: 2, flexibility: 1, heatResistance: 2, surfaceFinish: 5, ecoFriendly: 1 },
  },
];

const statLabels = {
  durability: 'Durability',
  flexibility: 'Flexibility',
  heatResistance: 'Heat Resistance',
  surfaceFinish: 'Surface Finish',
  ecoFriendly: 'Eco Friendly',
};

function StatBar({ label, value }) {
  return (
    <div className="stat-bar">
      <span className="stat-bar__label">{label}</span>
      <div className="stat-bar__track">
        <div className="stat-bar__fill" style={{ width: `${(value / 5) * 100}%` }} />
      </div>
      <span className="stat-bar__value">{value}/5</span>
    </div>
  );
}

export default function MaterialGuide() {
  const [active, setActive] = useState('pla');
  const mat = materialsData.find(m => m.id === active);

  return (
    <main>
      <div className="container" style={{ paddingBottom: 'var(--sp-16)' }}>
        {/* Header */}
        <div style={{ padding: 'var(--sp-8) 0 var(--sp-6)' }}>
          <div className="section-label">
            <span className="section-label__num">03</span>
            <span className="section-label__text">Material Guide</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-bold)', marginBottom: 'var(--sp-3)' }}>
            Pick your filament wisely
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '460px', lineHeight: 'var(--lh-relaxed)' }}>
            Five materials, five personalities. Compare strength, flex, heat tolerance and finish before you commit your model.
          </p>
        </div>

        {/* Material Tabs */}
        <div className="material-tabs">
          {materialsData.map(m => (
            <button
              key={m.id}
              className={`material-tab ${active === m.id ? 'material-tab--active' : ''}`}
              onClick={() => setActive(m.id)}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Material Detail Card */}
        {mat && (
          <div className="material-detail">
            <div className="material-detail__info">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', marginBottom: 'var(--sp-4)', flexWrap: 'wrap' }}>
                <span className="material-detail__badge">{mat.badge}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-medium)' }}>₹{mat.price}/g</span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 'var(--fw-bold)', marginBottom: 'var(--sp-4)' }}>
                {mat.name}
              </h2>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--sp-6)' }}>
                {mat.description}
              </p>

              <div>
                <span className="config-section__label" style={{ marginBottom: 'var(--sp-3)', display: 'block' }}>Best For</span>
                <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap' }}>
                  {mat.bestFor.map(tag => (
                    <span key={tag} className="best-for-chip">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="material-detail__stats">
              {Object.entries(mat.stats).map(([key, val]) => (
                <StatBar key={key} label={statLabels[key]} value={val} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
