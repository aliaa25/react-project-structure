# React Project Structure

A clean, scalable folder structure for a React + TypeScript application, built with Vite.
This project focuses on **organization**, not UI — each folder contains at least one
example file showing how it's meant to be used.

## Tech Stack

- React 19 + TypeScript
- Vite (build tool)
- React Router (routing)
- Zustand (global state)
- Zod (runtime validation)
- i18next / react-i18next (internationalization)
- Axios (HTTP client)

## Getting Started

```bash
npm install
npm run dev
```

## Folder Structure

```
src/
├── api/            # Raw API calls (axios instances, endpoints)
├── assets/         # Images, icons, static media
├── components/
│   ├── common/     # Shared, reusable UI states (Loader, EmptyState, ErrorMessage)
│   ├── layout/     # Page layout pieces (Navbar, Footer)
│   ├── skeleton/   # Loading skeletons
│   └── ui/         # Generic, presentational UI building blocks (Button, etc.)
├── constants/      # App-wide constants (routes, config values)
├── context/        # React Context definitions + providers
├── hooks/          # Reusable custom hooks
├── i18n/           # Internationalization setup and translations
├── pages/          # Route-level page components
├── providers/      # Composes all top-level providers into one wrapper
├── routes/         # Centralized route definitions
├── schemas/        # Zod schemas for runtime validation
├── services/       # Business logic layer (wraps api/ calls with app rules)
├── store/          # Global state (Zustand stores)
├── styles/         # Global CSS
├── types/          # Shared TypeScript types/interfaces
├── utils/          # Pure helper functions (no React dependency)
├── App.tsx         # Root component — wires up providers + routes
├── main.tsx        # App entry point (renders App to the DOM)
└── vite-env.d.ts   # Vite/TypeScript ambient type declarations
```

## Folder-by-Folder Purpose

| Folder | Purpose |
|---|---|
| `api/` | Talks directly to the backend. Only knows about endpoints and HTTP, nothing about app-specific rules. |
| `assets/` | Static files imported into components (images, svgs). |
| `components/common/` | Small, reusable pieces that handle a UI *state* (loading, empty, error) rather than a specific feature. |
| `components/layout/` | Structural pieces shared across pages (Navbar, Footer). |
| `components/skeleton/` | Skeleton placeholders shown while content loads. |
| `components/ui/` | Generic, "dumb" building blocks (Button, Input, etc.) with no business logic. |
| `constants/` | Fixed values used across the app — route paths, app name, etc. |
| `context/` | React Context objects, split from their Provider components so Fast Refresh keeps working correctly. |
| `hooks/` | Custom hooks that encapsulate reusable stateful logic (e.g. `useFetch`). |
| `i18n/` | Language resources and i18next setup. |
| `pages/` | One folder per route/screen. Composes layout + feature components. |
| `providers/` | A single `AppProvider` that nests every context provider, so `App.tsx` stays clean. |
| `routes/` | Maps URL paths to page components in one place. |
| `schemas/` | Zod schemas used to validate data at runtime (API responses, forms). |
| `services/` | Sits between `api/` and the UI — adds business rules, token handling, etc. |
| `store/` | Zustand stores for state shared across the whole app (one store per domain). |
| `styles/` | Global stylesheet(s), imported once in `main.tsx`. |
| `types/` | Static TypeScript types describing app data shapes. |
| `utils/` | Framework-agnostic helper functions (formatting, math, etc.). |

## Path Alias

`@/` is aliased to `src/` (see `vite.config.ts` and `tsconfig.app.json`), so imports look like:

```ts
import { Button } from "@/components/ui/Button";
```

instead of long relative paths like `../../../components/ui/Button`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |