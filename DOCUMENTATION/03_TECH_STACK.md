# 03 — Technology Stack

## Core Framework

| Technology | Version | Role |
|---|---|---|
| **React** | `^19.2.0` | UI framework, component rendering |
| **Vite** | `^7.3.1` | Build tool and development server |
| **ESM Modules** | — | `"type": "module"` in package.json |

---

## Styling

| Technology | Version | Role |
|---|---|---|
| **TailwindCSS** | `^3.4.17` | Utility-first CSS system |
| **PostCSS** | `^8.5.6` | CSS processing pipeline |
| **Autoprefixer** | `^10.4.24` | Cross-browser vendor prefixes |

### TailwindCSS Configuration (`tailwind.config.js`)

- **Content scanning**: `./index.html` and `./src/**/*.{js,ts,jsx,tsx}`
- **Custom font family**: `funnel` → `'Funnel Display', sans-serif`
- **Custom animation**: `pulse-fast` for certain indicator elements

---

## 3D Graphics

| Technology | Version | Role |
|---|---|---|
| **Three.js** | `^0.183.1` | WebGL 3D rendering |
| **@types/three** | `^0.183.1` | TypeScript type definitions |

The Three.js sphere is rendered in a `<canvas>` element injected into a `ref`-controlled `<div>`. It uses:
- `BufferGeometry` with dynamic position updates per frame
- `LineBasicMaterial` with transparency for the latitude rings
- `requestAnimationFrame` animation loop
- `WebGLRenderer` with `alpha: true` for transparent background

---

## Icon System

| Technology | Version | Role |
|---|---|---|
| **Lucide React** | `^0.575.0` | SVG icon components |

Icons used: `Activity`, `ShieldCheck`, `Zap`, `Globe`, `Cpu`, `ChevronRight`.

---

## Typography

| Font | Source | Weights | Usage |
|---|---|---|---|
| **Funnel Display** | Google Fonts | 300, 500, 700, 800, 900 | All UI text |
| **JetBrains Mono** | Google Fonts | 400, 700 | Available (not actively used in current build) |

Font is imported in `src/index.css` via `@import url(...)`.

---

## Additional Libraries (Installed but not actively used in primary component)

| Library | Version | Notes |
|---|---|---|
| **Framer Motion** | `^12.34.3` | Installed; animations currently handled via Tailwind + CSS |
| **Axios** | `^1.13.5` | Installed; no API calls implemented yet |

---

## Dev Dependencies

| Tool | Version | Purpose |
|---|---|---|
| `@vitejs/plugin-react` | `^5.1.1` | React fast refresh in Vite |
| `eslint` | `^9.39.1` | Code linting |
| `eslint-plugin-react-hooks` | `^7.0.1` | Hooks rules enforcement |
| `eslint-plugin-react-refresh` | `^0.4.24` | Hot reload safety |

---

## NPM Scripts

```bash
npm run dev       # Start Vite dev server at http://localhost:5173
npm run build     # Build production bundle to /dist
npm run preview   # Preview production build locally
npm run lint      # Run ESLint on all source files
```
