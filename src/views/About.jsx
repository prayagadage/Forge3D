'use client';
import Link from 'next/link';

const machines = [
  { name: 'Bambu Lab X1 Carbon', count: 4, desc: 'Multicolour speed demons for decor & toys', image: '/images/hero.jpg' },
  { name: 'Prusa MK4', count: 6, desc: 'The reliable workhorses of the farm', image: '/images/hero.jpg' },
  { name: 'Elegoo Saturn 3 Ultra', count: 2, desc: '0.05mm resin rigs for miniatures', image: '/images/hero.jpg' },
  { name: 'Voron 2.4 (custom)', count: 1, desc: 'ABS/ASA enclosed engineering beast', image: '/images/hero.jpg' },
];

const processes = [
  {
    num: '01',
    title: 'Layer by layer QC',
    desc: 'First-layer checks, mid-print inspections and a final fit-and-finish review before anything ships.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  },
  {
    num: '02',
    title: 'Replacement promise',
    desc: "A warped or broken print gets reprinted or refunded — no forms, no fights.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  },
  {
    num: '03',
    title: 'Filament recycling',
    desc: 'Failed prints and purge waste are shredded and re-extruded into our recycled PLA line.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
  },
  {
    num: '04',
    title: 'Humans on the phone',
    desc: 'Every order is confirmed by a real person who knows your print by name.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  },
];

export default function About() {
  return (
    <main>
      {/* ===== ABOUT THE LAB ===== */}
      <section className="section">
        <div className="container">
          <div className="about-hero">
            <div>
              <div className="section-label">
                <span className="section-label__num">04</span>
                <span className="section-label__text">About the Lab</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-bold)', marginBottom: 'var(--sp-6)' }}>
                A small lab with <span className="highlight">big layers</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--sp-4)', maxWidth: '480px' }}>
                Forge3D started in 2021 with a single second-hand printer in a Bengaluru garage and a stubborn belief: manufacturing should feel personal, not industrial.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--sp-10)', maxWidth: '480px' }}>
                Today our farm runs 13 machines around the clock — printing everything from wedding-return gifts to drone prototypes for startups. We still confirm every single order ourselves, on a real phone call.
              </p>
              <div className="about-stats">
                <div>
                  <div className="about-stats__value">13</div>
                  <div className="about-stats__label">Machines in the Farm</div>
                </div>
                <div>
                  <div className="about-stats__value">5,000+</div>
                  <div className="about-stats__label">Parts Delivered</div>
                </div>
                <div>
                  <div className="about-stats__value">4.9★</div>
                  <div className="about-stats__label">Customer Rating</div>
                </div>
              </div>
            </div>
            <div className="about-hero__image">
              <img src="/images/hero.jpg" alt="Forge3D print farm" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE MACHINES ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-label">
            <span className="section-label__num">05</span>
            <span className="section-label__text">The Machines</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-bold)', marginBottom: 'var(--sp-8)' }}>
            Meet the print farm
          </h2>

          <div className="machine-grid">
            {machines.map(m => (
              <div className="machine-card" key={m.name}>
                <div className="machine-card__image-wrap">
                  <img src={m.image} alt={m.name} />
                  <span className="machine-card__count">×{m.count}</span>
                </div>
                <div className="machine-card__body">
                  <h3 className="machine-card__name">{m.name}</h3>
                  <p className="machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="section">
        <div className="container">
          <div className="section-label">
            <span className="section-label__num">06</span>
            <span className="section-label__text">How We Work</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-bold)', marginBottom: 'var(--sp-8)' }}>
            Obsession, standardised
          </h2>

          <div className="process-grid">
            {processes.map(p => (
              <div className="process-card" key={p.num}>
                <span className="process-card__num">{p.num}</span>
                <div className="process-card__icon">{p.icon}</div>
                <h3 className="process-card__title">{p.title}</h3>
                <p className="process-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">Want to visit the lab?</h2>
            <p className="cta-banner__desc">
              We love showing off our machines. Drop us a line and come say hello.
            </p>
            <Link to="/get-quote" className="btn btn--primary btn--lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
