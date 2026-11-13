# Lab 4 Project Rules & Engineering Contracts

## 1. Architectural Standards (Mandatory)
- **Routing:** Use React Router v7 (`<Routes>`, `<Route>`, `<NavLink>`, `<Outlet />`, `useParams`). No v5 `<Switch>` or `component={}` props.
- **Code-Splitting:** Route views must use `React.lazy()` wrapped in `<Suspense>` with dimension-matched `<Skeleton aria-busy="true" aria-live="polite" />` (`CLS = 0`).
- **Form Validation:** Compute `errors` and `isValid` **synchronously during render** via React Context. **Zero `useEffect` validation waterfalls.**
- **Accessibility (WCAG 2.2 AA):** Bind labels via `useId()`, expose errors with `aria-invalid`, `aria-describedby`, and `role="alert"`. Render key-value data using `<dl>`, `<dt>`, `<dd>`.
- **Async Fetching:** Use `AbortController` inside `useEffect` and guard state updates with `!controller.signal.aborted`.
- **Backend Hygiene:** Enable `cors({ origin: 'http://localhost:5173' })`, validate POST payloads (`400` on missing fields), generate IDs via `crypto.randomUUID()`, and read secrets from `process.env`.

## 2. Git Commit Hygiene
- Atomic commits per feature/fix using Conventional Commits (`init:`, `docs:`, `feat:`, `test:`, `fix:`, `refactor:`).