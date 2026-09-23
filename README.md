# Thryve

> **Talk to any AI. Save your memory. Export your intelligence.**

Thryve is the public-facing landing page for an AI memory and intelligence platform. The product is designed around a simple idea: conversations with AI should become more useful over time instead of starting from zero every time. Thryve brings multi-model chat, persistent memories, custom prompts, usage awareness, and API export into one product experience.

This repository contains the marketing website for Thryve. The authenticated product experience lives separately at [app.getthryve.live](https://app.getthryve.live).

## What Thryve is about

Thryve is aimed at creators, founders, product teams, and people who use AI as part of their everyday workflow. The product story presented on this site is built around four capabilities:

- **Multi-model chat** — move between models such as GPT, Claude, Gemini, and others without losing the broader context of your work.
- **Persistent AI memory** — save the facts, preferences, and working context that should carry across conversations.
- **Custom prompts** — shape how the assistant behaves with editable instructions and reusable prompt logic.
- **Exportable intelligence** — turn conversations, profiles, and AI workflows into callable APIs or integrations for use outside the chat interface.

The landing page also communicates token usage visibility, pricing plans, testimonials, product demonstrations, and a clear path from discovering Thryve to starting the product.

## Why this architecture works

The site is intentionally built as a focused React single-page application rather than as a large monolith. The repository has one primary route, but the page is composed from small sections that each own one part of the story. That keeps the page easy to change as the product evolves: a pricing update belongs in `Pricing.tsx`, a new product capability belongs in `Features.tsx` or `Benefits.tsx`, and the overall narrative remains visible in `src/pages/Index.tsx`.

The architecture follows a practical separation of concerns:

1. **Application shell** — `src/main.tsx` mounts React and loads the global stylesheet. `src/App.tsx` owns providers and routing.
2. **Page composition** — `src/pages/Index.tsx` assembles the landing page in the order a visitor experiences it: hero, social proof, benefits, product demo, features, pricing, workflow, testimonials, CTA, and footer.
3. **Product-facing sections** — `src/components/` contains focused, presentational sections such as `Hero`, `ProductDemo`, `HowItWorks`, and `Pricing`. Most content is kept close to the component that renders it, which makes copy and visual changes straightforward.
4. **Reusable UI primitives** — `src/components/ui/` contains the shadcn/ui and Radix-based building blocks used throughout the site: buttons, cards, badges, dialogs, tabs, tooltips, toasts, and more.
5. **Shared styling and utilities** — Tailwind CSS provides the visual system, while `src/index.css` defines the design tokens, gradients, animations, dark-mode variables, and base styles. `src/lib/utils.ts` provides the shared `cn()` helper for safely composing Tailwind classes.
6. **Small shared behaviors** — `src/hooks/` holds reusable browser and UI behavior, including the responsive `useIsMobile` hook and the toast state implementation.

At runtime, the browser loads the Vite bundle, React mounts `App`, and the route `/` renders the landing page. `QueryClientProvider`, `TooltipProvider`, and the toast providers are established once at the application boundary, so sections can use shared infrastructure without knowing how it is configured. The actual AI, memory, billing, and API services are linked from the landing page but are not implemented in this repository.

## Design and interaction principles

The visual language is deliberately optimistic and product-led: soft gradients, blue-to-purple accents, rounded cards, generous spacing, and motion that helps guide attention without changing the core content.

- **Framer Motion** provides entrance animations, viewport-triggered section reveals, staggered cards, and the animated hero treatment.
- **Tailwind CSS** keeps layout, responsive behavior, color, spacing, and state styling close to the markup.
- **Radix UI primitives** provide accessible interaction foundations for the reusable component layer.
- **Lucide React** supplies consistent icons for product capabilities, navigation cues, and calls to action.
- **CSS variables** in `src/index.css` centralize the design tokens used by the shadcn/ui components and make the theme easier to extend.

This combination gives the page a polished feel while keeping the implementation understandable. Content sections are explicit React components, visual primitives are reusable, and the build remains small enough to reason about.

## Project structure

```text
.
├── public/                  # Brand assets, favicon, robots.txt, sitemap, and product imagery
├── src/
│   ├── components/          # Landing-page sections and reusable UI components
│   │   └── ui/               # Radix/shadcn-style primitives
│   ├── hooks/                # Shared responsive and toast behavior
│   ├── lib/                  # Small shared utilities such as cn()
│   ├── pages/                # Route-level pages: Index and NotFound
│   ├── App.tsx               # Providers and application routes
│   ├── App.css               # Legacy/default component styles kept by the starter setup
│   ├── index.css             # Tailwind entrypoint, design tokens, and animations
│   └── main.tsx              # React application entrypoint
├── components.json           # shadcn/ui configuration and path aliases
├── package.json              # Scripts and dependencies
├── tailwind.config.ts        # Tailwind theme and design-token mapping
├── tsconfig.json             # TypeScript project references and @/* alias
└── vite.config.ts            # Dev server and production build configuration
```

## Tech stack

- **React 18** with **TypeScript**
- **Vite** for local development and production bundling
- **React Router** for client-side routing
- **Tailwind CSS** for responsive styling
- **shadcn/ui patterns and Radix UI** for accessible primitives
- **Framer Motion** for animation and interaction
- **TanStack Query** for application-level query infrastructure
- **Lucide React** for icons
- **ESLint** and TypeScript tooling for code quality

## Getting started

### Requirements

- Node.js 18+ recommended
- npm or Bun

### Install dependencies

```bash
npm install
```

Or, if you use Bun:

```bash
bun install
```

### Start the development server

```bash
npm run dev
```

Vite starts the development server on port `8080` according to `vite.config.ts`. The page is available at the local URL printed in the terminal.

### Build for production

```bash
npm run build
```

The production bundle is written to `dist/`. The Vite configuration uses Terser minification, removes `console` and `debugger` statements from production output, and separates the main React/Framer Motion dependencies into a vendor chunk.

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

There is currently no test runner configured in `package.json`; the main verification path is linting, building, and checking the page in the browser at responsive breakpoints.

## Deployment

The application is a static Vite build and can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any host that serves static assets. The repository already uses root-relative asset paths and has a production `dist/` output directory.

A typical deployment flow is:

```bash
npm install
npm run build
# publish the dist/ directory
```

The live marketing site is available at [thryve-land.vercel.app](https://thryve-land.vercel.app), while the primary product CTA points users to [app.getthryve.live](https://app.getthryve.live).

## Engineering notes

A few choices are worth calling out because they make the project easier to maintain:

- The `@/*` alias maps directly to `src/*`, so imports stay stable as the component tree grows.
- Shared UI components use `cn()` to merge Tailwind classes without forcing every caller to understand the primitive's internal styles.
- Page sections are data-driven where it helps. Feature lists, pricing plans, and workflow steps are represented as local arrays and rendered consistently instead of duplicating markup.
- Animation behavior is shared through `AnimatedSection` and repeated Framer Motion patterns rather than being hidden in a page-level animation system.
- The app shell is ready for growth: additional routes can be added above the catch-all `NotFound` route in `src/App.tsx`.
- The landing page does not pretend to be the backend. Product actions intentionally link to the separate Thryve application, keeping this repository focused on presentation, acquisition, and product communication.

## Roadmap direction

As the product grows, the most natural next engineering steps would be to connect the landing page to a shared content source, add automated visual or end-to-end checks, and replace placeholder social-proof content with verified production data. The current structure already gives those changes clear homes without requiring a rewrite of the page.

## License

No license file is currently included in the repository. Add one before distributing or reusing the code outside the project.
