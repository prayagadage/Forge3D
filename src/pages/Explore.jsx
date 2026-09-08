import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { products, categories, searchProducts } from '../data/products';

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'all';

  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState(initialCat);
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let result = search ? searchProducts(search) : [...products];

    if (activeCat !== 'all') {
      result = result.filter(p => p.category === activeCat);
    }

    switch (sort) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: break; // 'featured' = default order
    }

    return result;
  }, [search, activeCat, sort]);

  const handleCatChange = (catId) => {
    setActiveCat(catId);
    if (catId === 'all') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', catId);
    }
    setSearchParams(searchParams);
  };

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
            value={sort}
            onChange={e => setSort(e.target.value)}
            aria-label="Sort products"
            style={{ width: 'auto', minWidth: '160px' }}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
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
