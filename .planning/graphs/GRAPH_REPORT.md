# Graph Report - .  (2026-09-10)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 108 nodes · 162 edges · 8 communities
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fa85351a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.jsx
- products.js
- Home.jsx
- package.json
- react
- devDependencies
- .oxlintrc.json

## God Nodes (most connected - your core abstractions)
1. `useCart()` - 11 edges
2. `react` - 10 edges
3. `scripts` - 5 edges
4. `ProductDetail()` - 4 edges
5. `plugins` - 3 edges
6. `rules` - 3 edges
7. `CartDrawer()` - 3 edges
8. `Navbar()` - 3 edges
9. `ProductCard()` - 3 edges
10. `CartProvider()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Toast()` --calls--> `useCart()`  [EXTRACTED]
  src/App.jsx → src/context/CartContext.jsx
- `ProductDetail()` --calls--> `useCart()`  [EXTRACTED]
  src/pages/ProductDetail.jsx → src/context/CartContext.jsx
- `CartDrawer()` --calls--> `useCart()`  [EXTRACTED]
  src/components/cart/CartDrawer.jsx → src/context/CartContext.jsx
- `Navbar()` --calls--> `useCart()`  [EXTRACTED]
  src/components/layout/Navbar.jsx → src/context/CartContext.jsx
- `Checkout()` --calls--> `useCart()`  [EXTRACTED]
  src/pages/Checkout.jsx → src/context/CartContext.jsx

## Import Cycles
- None detected.

## Communities (8 total, 0 thin omitted)

### Community 0 - "App.jsx"
Cohesion: 0.18
Nodes (12): Toast(), CartDrawer(), Navbar(), CartContext, CartProvider(), loadCart(), useCart(), About() (+4 more)

### Community 1 - "products.js"
Cohesion: 0.15
Nodes (15): categories, colors, getProductBySlug(), infillOptions, materials, printQualities, products, searchProducts() (+7 more)

### Community 2 - "Home.jsx"
Cohesion: 0.12
Nodes (4): Footer(), TickerStrip(), ProductCard(), Home()

### Community 3 - "package.json"
Cohesion: 0.12
Nodes (16): dependencies, react, react-dom, react-router-dom, name, private, scripts, build (+8 more)

### Community 4 - "react"
Cohesion: 0.15
Nodes (9): plugins, oxc, react, App(), GetQuote(), projectTypes, MaterialGuide(), materialsData (+1 more)

### Community 5 - "devDependencies"
Cohesion: 0.18
Nodes (11): oxlint, devDependencies, oxlint, @types/react, @types/react-dom, vite, @vitejs/plugin-react, @types/react (+3 more)

### Community 6 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): rules, react/only-export-components, react/rules-of-hooks, $schema, warn

## Knowledge Gaps
- **31 isolated node(s):** `$schema`, `oxc`, `react/rules-of-hooks`, `warn`, `name` (+26 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `App.jsx`, `products.js`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Why does `plugins` connect `react` to `.oxlintrc.json`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **What connects `$schema`, `oxc`, `react/rules-of-hooks` to the rest of the system?**
  _31 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Home.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11695906432748537 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._