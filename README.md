# 30-Day React Revision

A structured, hands-on revision of React — from core fundamentals to a deployed full-stack application.

Twenty days re-covering every hook, pattern, and API through small daily build exercises, followed by a ten-day capstone: designing, building, and shipping a real full-stack app to production.

> This repo holds the **daily practice code (Days 1–20)**. The capstone full-stack project lives in its **own repo** — see [Capstone Project](#capstone-project--focus-days-2130) below.

---

## Live Demo

**Live app:** _Coming soon_ — the deployment link will be added here on **Day 29–30**, once the capstone project is live on Render.

<!-- DAY 29-30: replace the line above with your deployed URL, for example: -->
<!-- **Live app:** https://focus-app.onrender.com -->

---

## Overview

The goal isn't to *re-learn* React, but to systematically **revise** it — every keyword, hook, and usable API — and prove that knowledge by building something real.

Each day of the revision phase follows the same rhythm:

- **Revise** — refresh the concept.
- **Build** — write a small example from scratch (active recall beats re-reading).
- **Level-up** — one gotcha or real-world nuance.

Everything targets modern **React 19** (function components, modern hooks, Actions).

---

## Capstone Project — "Focus" (Days 21–30)

A full-stack task-management app built to exercise everything from the revision phase. *(Working title — rename freely.)*

**Features**
- Create, read, update, and delete tasks
- Mark tasks complete / incomplete
- Filter by status (all / active / done), with the filter reflected in the URL
- User accounts — sign up, log in, log out
- Each user sees only their own tasks
- Optimistic UI updates for instant feedback

**Stack**
- **Frontend:** Vite + React + TypeScript, React Router, TanStack Query, Tailwind CSS
- **Backend:** Node + Express (REST API)
- **Database:** PostgreSQL + Prisma (ORM)
- **Deployment:** a single **dynamic Web Service** on Render, backed by Render PostgreSQL

**Architecture**

One Express server serves the built React app **and** exposes the `/api` routes, all from a single origin — so there's no CORS to configure and it deploys as one dynamic web service.

```
[ Browser ] ──▶ [ Render Web Service ]
                   ├── serves client/dist   (React app)
                   └── /api/*               (Express + Prisma)
                              │
                              ▼
                      [ Render PostgreSQL ]
```

**Project repository:** _to be added_ — the capstone has its own repo, created when the project phase begins (~Day 21).

<!-- Add the project repo link here, e.g. -->
<!-- **Project repository:** https://github.com/your-username/focus-app -->

---

## Repository Structure

Each day is a small, standalone example in its own folder:

```
react-revision/
├── day-01-jsx-rendering/
├── day-02-components-props/
├── day-03-usestate/
├── day-04-useeffect/
├── ...
├── day-20-typescript-testing/
└── README.md
```

> Days 21–30 (the capstone) are **not** in this repo — they live in the separate project repository linked above.

---

## What's Covered

**Fundamentals** — JSX, rendering & reconciliation, components, props, composition, lists & keys

**Core hooks** — `useState`, `useEffect`, `useContext`, `useReducer`, `useRef`, `useImperativeHandle`

**Performance** — `useMemo`, `useCallback`, `React.memo`, the React Compiler

**Advanced / concurrent** — `useTransition`, `useDeferredValue`, `useLayoutEffect`, `useId`, `useSyncExternalStore`

**React 19** — `use()`, Actions, `useActionState`, `useFormStatus`, `useOptimistic`, ref as a prop

**Patterns** — custom hooks, controlled/uncontrolled components, compound components, render props, error boundaries, portals

**Ecosystem** — React Router, TanStack Query, forms (React Hook Form + Zod), state management (Zustand / Redux Toolkit), Suspense & code splitting, TypeScript, testing (RTL + Vitest)

---

## Running the Exercises

Each day folder is self-contained. To run one:

```bash
cd day-03-usestate
npm install
npm run dev
```

---

## Progress

**Week 1 — Foundations**
- [x] Day 1 · JSX & rendering
- [ ] Day 2 · Components & props
- [ ] Day 3 · useState
- [ ] Day 4 · useEffect
- [ ] Day 5 · Refs
- [ ] Day 6 · Context
- [ ] Day 7 · Mini-project + review

**Week 2 — Hooks & patterns**
- [ ] Day 8 · useReducer
- [ ] Day 9 · Memoization
- [ ] Day 10 · Custom hooks
- [ ] Day 11 · Remaining hooks
- [ ] Day 12 · React 19 Actions
- [ ] Day 13 · Component patterns
- [ ] Day 14 · Mini-project + review

**Week 3 — Ecosystem & production**
- [ ] Day 15 · Forms
- [ ] Day 16 · Data fetching
- [ ] Day 17 · Routing
- [ ] Day 18 · State management
- [ ] Day 19 · Suspense & performance
- [ ] Day 20 · TypeScript & testing

**Weeks 4–5 — Capstone (separate repo)**
- [ ] Days 21–30 · Build & deploy the full-stack app
