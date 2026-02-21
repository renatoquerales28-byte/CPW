# 02 — Architecture & File Structure

## Repository Root

```
CENTHROPY WEBSITE/
│
├── DOCUMENTATION/              ← This documentation suite
│   ├── README.md
│   ├── 01_PROJECT_OVERVIEW.md
│   ├── 02_ARCHITECTURE.md
│   ├── 03_TECH_STACK.md
│   ├── 04_COMPONENTS.md
│   ├── 05_STATE_LOGIC.md
│   ├── 06_ANIMATIONS.md
│   ├── 07_DESIGN_SYSTEM.md
│   ├── 08_SOLUTIONS_SECTION.md
│   └── 09_DEV_GUIDE.md
│
├── public/
│   ├── Unifyprotocol.jpg       ← Product illustration: Unify Protocol
│   ├── Unifydc.jpg             ← Product illustration: Unify Data Center
│   ├── Unifyagent3.0.jpg       ← Product illustration: Unify Agent
│   └── Unifyteam.jpg           ← Product illustration: Unify Team
│
├── src/
│   ├── main.jsx                ← React DOM entry point
│   ├── App.jsx                 ← Root component wrapper
│   ├── CenthropyApp.jsx        ← Primary application component (ALL UI LOGIC)
│   ├── index.css               ← Global CSS, Tailwind directives, animations
│   └── assets/                 ← Static assets (SVGs, etc.)
│
├── mockup_centrhopy_web.html   ← Original static HTML mockup (reference only)
├── index.html                  ← Vite HTML entry point
├── package.json                ← Dependencies and scripts
├── vite.config.js              ← Vite bundler configuration
├── tailwind.config.js          ← TailwindCSS configuration
├── postcss.config.js           ← PostCSS configuration
├── eslint.config.js            ← ESLint linting rules
└── .gitignore
```

---

## Application Architecture

The application is a **single-component monolith** by design at this stage. All UI, state, and logic live inside `CenthropyApp.jsx`.

### Rendering Layers (z-index Stack)

The interface is built as a strict z-index layer stack to allow the 3D canvas background and fixed UI elements to coexist with a scrollable content area.

| Layer | z-index | Element | Behavior |
|---|---|---|---|
| Canvas | `0` | Three.js WebGL canvas | Fixed, full-screen, no pointer events |
| Floating HUD | `40` | Sphere tooltip | Follows sphere surface point |
| Right Data HUD | `1000` | Five metric modules | Fixed right panel |
| Left Accordion | `1000` | Five value pillars | Fixed left panel |
| Content | `5000` | Scrollable `<main>` | White background, scroll-based |
| Header | `10000` | Top navigation bar | Fixed, glass-morphism blur |

### Content Flow (Scroll)

```
┌─────────────────────────────────────────────────────┐
│  SECTION 1: HERO (100vh)                            │
│  → Empty spacer that reveals the sphere canvas      │
│  → Fixed sidebars (left accordion, right HUD)       │
│     are visible here                                │
├─────────────────────────────────────────────────────┤
│  SECTION 2: STATUS PANEL (#status-panel)            │
│  → White bg slides up over the sphere              │
│  → Status recap bar (Sync, Encryption, Location)   │
│  → Main manifesto text (inertia physics)           │
│  → Energy arrow guide (SVG animation)              │
│  → Unify Ecosystem Grid (4 products)               │
│  → Soluciones horizontal accordion (3 services)    │
│  → "Get Started" CTA footer block                  │
└─────────────────────────────────────────────────────┘
```

---

## Key Design Decision: Monolith Component

`CenthropyApp.jsx` contains all JSX, state, Three.js setup, and animation logic in a single file. This was a deliberate choice during the rapid development phase to:

- Eliminate prop-drilling complexity early on
- Enable fast iteration on layout and motion
- Maintain full visibility over the entire render tree

**Future refactoring** should extract: `ThreeSphere`, `LeftAccordion`, `RightDataHUD`, `ProductSection`, `SolutionsAccordion` into dedicated components.
