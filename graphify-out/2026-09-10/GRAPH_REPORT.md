# Graph Report - .  (2026-09-10)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 139 nodes · 134 edges · 26 communities (19 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fb8a2d12`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- views/Home.jsx
- react
- package.json
- products.js
- views/CustomPrint.jsx
- dependencies
- layout.jsx
- .oxlintrc.json
- views/About.jsx
- compilerOptions
- middleware.js
- next.config.mjs
- proxy.js

## God Nodes (most connected - your core abstractions)
1. `react` - 10 edges
2. `useCart()` - 9 edges
3. `scripts` - 5 edges
4. `plugins` - 3 edges
5. `rules` - 3 edges
6. `ProductCard()` - 3 edges
7. `react/only-export-components` - 2 edges
8. `Providers()` - 2 edges
9. `compilerOptions` - 2 edges
10. `@clerk/nextjs` - 2 edges

## Surprising Connections (you probably didn't know these)
- `CartDrawer()` --calls--> `useCart()`  [EXTRACTED]
  src/components/cart/CartDrawer.jsx → src/context/CartContext.jsx
- `Navbar()` --calls--> `useCart()`  [EXTRACTED]
  src/components/layout/Navbar.jsx → src/context/CartContext.jsx
- `Checkout()` --calls--> `useCart()`  [EXTRACTED]
  src/views/Checkout.jsx → src/context/CartContext.jsx
- `ProductDetail()` --calls--> `useCart()`  [EXTRACTED]
  src/views/ProductDetail.jsx → src/context/CartContext.jsx

## Import Cycles
- None detected.

## Communities (26 total, 7 thin omitted)

### Community 1 - "react"
Cohesion: 0.18
Nodes (12): plugins, oxc, react, CartDrawer(), Navbar(), CartContext, CartProvider(), loadCart() (+4 more)

### Community 2 - "package.json"
Cohesion: 0.12
Nodes (16): oxlint, devDependencies, oxlint, @types/react, @types/react-dom, name, private, scripts (+8 more)

### Community 3 - "products.js"
Cohesion: 0.18
Nodes (7): categories, colors, infillOptions, materials, printQualities, products, uploadFormats

### Community 4 - "views/CustomPrint.jsx"
Cohesion: 0.18
Nodes (5): filamentColors, layerOptions, materialPricing, materialsData, statLabels

### Community 5 - "dependencies"
Cohesion: 0.22
Nodes (9): @clerk/nextjs, next, dependencies, @clerk/nextjs, next, react, react-dom, react (+1 more)

### Community 7 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): rules, react/only-export-components, react/rules-of-hooks, $schema, warn

## Knowledge Gaps
- **41 isolated node(s):** `$schema`, `oxc`, `react/rules-of-hooks`, `warn`, `categories` (+36 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `views/Home.jsx`, `views/CustomPrint.jsx`, `layout.jsx`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Why does `plugins` connect `react` to `.oxlintrc.json`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **What connects `$schema`, `oxc`, `react/rules-of-hooks` to the rest of the system?**
  _41 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `views/Home.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10952380952380952 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._