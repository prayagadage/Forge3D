'use client';
import { useState, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ProductCard from '../components/product/ProductCard';
import { products, categories, searchProducts } from '../data/products';

export default function Explore() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialCat = searchParams.get('cat') || 'all';

  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState(initialCat);
  const [sortBy, setSortBy] = useState('featured');

  const filtered = useMemo(() => {
    let result = activeCat === 'all'
      ? products
      : products.filter(p => p.category === activeCat);

    if (search.trim()) {
      const matches = searchProducts(search);
      const matchIds = new Set(matches.map(m => m.id));
      result = result.filter(p => matchIds.has(p.id));
    }

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'name') result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [activeCat, search, sortBy]);

  const handleCatChange = useCallback((catId) => {
    setActiveCat(catId);
    const params = new URLSearchParams(searchParams.toString());
    if (catId === 'all') {
      params.delete('cat');
    } else {
      params.set('cat', catId);
    }
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  }, [searchParams, router, pathname]);

  return (
    <main>
      <div className="container">
        <div className="page-header">
          <h1 className="page-header__title">Explore Products</h1>
          <p className="page-header__desc">Browse our collection of 3D printed products.</p>
        </div>

        {/* Search + Sort */}
        <div className="explore-header">
          <div className="search-bar">
            <span className="search-bar__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
            <input
              type="search"
              className="input search-bar__input"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search products"
            />
          </div>
          <select
            className="select"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            aria-label="Sort products"
            style={{ width: 'auto', minWidth: '160px' }}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="filter-bar" role="tablist" aria-label="Filter by category">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-pill ${activeCat === cat.id ? 'filter-pill--active' : ''}`}
              onClick={() => handleCatChange(cat.id)}
              role="tab"
              aria-selected={activeCat === cat.id}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="explore-toolbar">
          <span className="results-count">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        {filtered.length > 0 ? (
          <div className="product-grid" style={{ paddingBottom: 'var(--sp-16)' }}>
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state__icon">🔍</div>
            <h3 className="empty-state__title">No products found</h3>
            <p className="empty-state__desc">
              Try a different search term or browse all categories.
            </p>
            <button className="btn btn--secondary" onClick={() => { setSearch(''); handleCatChange('all'); }}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
