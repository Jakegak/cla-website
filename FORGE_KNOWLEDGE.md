# FORGE_KNOWLEDGE.md — Jakegak/cla-website

This file is read by the Forge autonomous agent at the start of every session.
Keep it updated as the codebase evolves.

---

## What This Codebase Is
A marketing/informational website for a children's learning academy (CLA). It is a single-page React application that presents information about the academy including an about section, activities gallery, admissions & fees, and an application modal for prospective parents. The site is built as a static front-end with no backend or database — purely a brochure-style website with animations and responsive design.

## Stack
- **Language:** JavaScript (ES Modules, JSX)
- **Framework:** React 19.2 with Vite 7.3
- **Styling:** Tailwind CSS 4.2 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`, uses Tailwind v4 CSS-first configuration)
- **Animations:** Framer Motion 12.x
- **Routing:** React Router DOM 7.x
- **Build Tool:** Vite with `@vitejs/plugin-react` (Babel-based)
- **Linting:** ESLint 9 with flat config, react-hooks plugin, react-refresh plugin
- **CSS Processing:** PostCSS + Autoprefixer
- **Deployment:** Unknown — update manually (likely static hosting: Vercel, Netlify, or GitHub Pages)

## File Map
```
├── README.md                          # Default Vite+React template readme
├── eslint.config.js                   # ESLint flat config — JS/JSX rules, react-hooks, react-refresh
├── index.html                         # Vite entry HTML — mounts React app
├── package.json                       # Dependencies, scripts, project metadata
├── vite.config.js                     # Vite config — React plugin + Tailwind CSS plugin
├── public/
│   └── vite.svg                       # Default Vite favicon/logo asset
├── src/
│   ├── App.css                        # Global/app-level CSS (likely Tailwind directives + custom styles)
│   ├── App.jsx                        # Root React component — assembles page layout and routing
│   ├── assets/
│   │   └── react.svg                  # Default React logo asset (likely unused or placeholder)
│   └── components/
│       ├── AboutUs.jsx                # "About Us" section component
│       ├── ActivitiesGallery.jsx      # Gallery showcasing academy activities/programs
│       ├── AdmissionsAndFees.jsx      # Admissions info and fee structure section
│       ├── ApplicationModal.jsx       # Modal form for submitting applications
│       ├── Footer.jsx                 # Site footer with contact info/links
│       ├── HeroSection.jsx            # Hero/banner section at top of page
│       ├── Logo.jsx                   # Academy logo component
│       ├── ... (3 more files)         # Likely: Navbar.jsx, Testimonials.jsx, ContactSection.jsx or similar
```

## Key Types and Data Structures
This is a plain JavaScript (non-TypeScript) codebase. There are no formal type definitions, interfaces, or models.

- **React Components:** All functional components using JSX, no class components
- **Props:** Component props are passed inline — no shared prop-type definitions or PropTypes usage detected
- **No data models:** Content is likely hardcoded in components or stored as inline arrays/objects within component files
- **ApplicationModal** likely manages a form state object with fields like `{ name, email, phone, childAge, message }` — Unknown exact shape, update manually

## State Management
- **No global state management library** (no Redux, Zustand, Context, etc. detected)
- **Local component state** via React `useState` hooks within individual components
- **ApplicationModal** likely holds its own form state and open/closed visibility state
- **State flow:** Parent (`App.jsx`) renders all sections as children; modal open/close state is likely lifted to `App.jsx` or managed within the modal's parent via a callback prop
- **React Router DOM** is installed — routing may be used for page-level navigation or may be minimal (single-page with hash links); verify in `App.jsx`
- **Framer Motion** animation state is handled declaratively via motion component props (`initial`, `animate`, `whileInView`, etc.)

## Patterns to Follow
- **Functional components only** — all components are arrow functions or function declarations returning JSX
- **One component per file** — each `.jsx` file in `src/components/` exports a single component
- **Tailwind utility-first styling** — use Tailwind classes directly in JSX `className` attributes; avoid writing custom CSS unless absolutely necessary
- **Tailwind v4 CSS-first config** — no `tailwind.config.js`; theme customizations go in CSS via `@theme` directive in `App.css` or a dedicated CSS file
- **Framer Motion for animations** — use `motion.div`, `whileInView`, `initial`/`animate` props for scroll and interaction animations
- **File naming:** PascalCase for component files (`HeroSection.jsx`), matching the exported component name
- **ES Modules throughout** — use `import`/`export`, never `require`/`module.exports`
- **Vite conventions:** Static assets in `public/` are served at root; assets in `src/assets/` are processed by the bundler

## Anti-Patterns — What NOT to Do
- **Do NOT add a `tailwind.config.js`** — this project uses Tailwind CSS v4 with the Vite plugin (`@tailwindcss/vite`), which uses CSS-first configuration. Adding a JS config file will conflict.
- **Do NOT use `require()` or CommonJS syntax** — the project is `"type": "module"` throughout
- **Do NOT install `@tailwindcss/postcss`** — Tailwind is integrated via the Vite plugin, not PostCSS config
- **Do NOT add class components** — the codebase is 100% functional React components with hooks
- **Do NOT introduce a state management library** without explicit approval — the app is simple enough for local state
- **Do NOT place runtime assets in `public/`** — use `src/assets/` for images/icons that should be bundled and hashed; `public/` is for truly static files only
- **Do NOT modify `eslint.config.js` to use legacy `.eslintrc` format** — the project uses ESLint 9 flat config
- **Do NOT use TypeScript files** — the project is plain JavaScript; adding `.ts`/`.tsx` requires additional configuration

## Test Commands
```bash
# Install dependencies
npm install

# Run development server (default: http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

> **Note:** There are no test frameworks installed (no Jest, Vitest, Playwright, etc.). There are no unit or integration tests. If tests are added, Vitest is the recommended choice for this Vite-based stack.

## Definition of Done for This Repo
- [ ] `npm run build` completes with zero errors
- [ ] `npm run lint` passes with zero errors and zero warnings
- [ ] All new components follow PascalCase file naming and are placed in `src/components/`
- [ ] Tailwind utility classes are used for all styling — no new CSS classes unless required for animations or Tailwind `@apply` usage
- [ ] Framer Motion is used for any new animations (no raw CSS transitions for complex animations)
- [ ] Site is visually verified at mobile (375px), tablet (768px), and desktop (1280px) breakpoints
- [ ] No `console.log`, `debugger`, or development artifacts left in committed code
- [ ] Application modal (if modified) handles form state correctly and validates required fields
- [ ] No new dependencies added without justification — keep the bundle lean
- [ ] Production build (`dist/`) is not committed to the repository

---
*Generated by Forge v2 — update this file when the architecture changes*