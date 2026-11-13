# Lab 4 Task Decomposition (WBS)

## Exercise 1: Multi-Route SPA, Context Form Engine & Express API
- [ ] **Sprint 1 (Routing & Master-Detail):**
  - Setup React Router v7 nested routes with `<Outlet />`.
  - Build `PeopleLayout.jsx` & `PersonDetail.jsx` with CSS Grid (`minmax(280px, 1fr) 2fr`), `useParams()`, `<dl>/<dt>/<dd>`, and 404 guard.
  - Add `React.lazy()` + `<Suspense>` with accessible `<Skeleton />`.
- [ ] **Sprint 2 (Synchronous Context Form Engine):**
  - Build `FormContext.js` (`createContext`, `useFormContext`).
  - Build `SimpleForm.jsx` with synchronous render-pass validation (no `useEffect`).
  - Build `InputField.jsx` with `useId()` and ARIA attributes + `<ShowData />` semantic inspector.
- [ ] **Sprint 3 (Full-Stack Custom Hook & Express API):**
  - Build Express server (`server.js`) with CORS, `GET /api/messages/:forum`, and `POST /api/messages/:forum`.
  - Build `useForumMessages.js` with `AbortController` cleanup and `ForumChannelView.jsx` for `'nasa'`, `'esports-tribunal'`, `'notNasa'`.