# AI Failure Mode & Engineering Verification Audit

| # | Module / Component | AI Hallucination / Anti-Pattern Detected | Root Cause & Impact | Manual Engineering Fix |
|---|---|---|---|---|
| 1 | Routing (`App.jsx`) | AI suggested `<Switch>` and `activeClassName` from React Router v5 | Breaking compilation error in React Router v7 | Replaced with `<Routes>`, `<Route element={...}>`, and `NavLink` callback `className={({ isActive }) => ...}` |
| 2 | Form (`SimpleForm.jsx`) | AI chained `useEffect` hooks to sync input state and compute `errors` | Multi-pass cascading re-renders and race conditions on fast typing | Removed all `useEffect` hooks; computed `errors` synchronously during render pass |
| 3 | Data Fetch (`useForumMessages.js`) | AI used boolean `let didCancel = false` instead of `AbortController` | In-flight HTTP requests were not aborted at network layer on rapid channel switching | Implemented `new AbortController()`, passed `signal` to `fetch()`, and called `controller.abort()` in cleanup |