# Webfolio Architecture Guide

This document defines a best-practice architecture for a small React and TypeScript application built with Vite.

## 1. Goals

- Keep the codebase simple and easy to change.
- Keep feature code isolated so changes stay local.
- Keep runtime performance good without premature complexity.
- Enforce quality through linting, strict TypeScript, and clear boundaries.

## 2. Core Principles

- Organize by feature, not by file type.
- Keep state local by default.
- Move side effects and data access into hooks and services.
- Keep UI components mostly presentational.
- Use shared code only when at least two features need it.
- Prefer explicitness over clever abstractions.

## 3. Recommended Folder Structure

Use this structure as the app grows:

```text
src/
  app/
    App.tsx
    main.tsx
    providers/
      index.tsx
    routes/
      index.tsx
  features/
    hero/
      components/
      hooks/
      services/
      types.ts
      index.ts
    counter/
      components/
      hooks/
      services/
      types.ts
      index.ts
  shared/
    ui/
      Button/
      Card/
      Icon/
    hooks/
      useMediaQuery.ts
    lib/
      format.ts
      guard.ts
    styles/
      tokens.css
      globals.css
    types/
      common.ts
  assets/
```

Notes:
- Keep app-level composition in app.
- Keep domain behavior in features.
- Keep reusable, cross-feature utilities in shared.

## 4. Layer Responsibilities

- app: startup, providers, routing, and top-level layout only.
- features: business behavior, feature-specific UI, feature hooks, feature services.
- shared: reusable UI primitives, utility helpers, and global style tokens.

Boundary rules:
- A feature can import from shared.
- A feature can import from itself.
- A feature should not import from another feature directly.
- app can import from features and shared.

## 5. Component Design Rules

- Split into container and presentational roles when complexity grows.
- Keep presentational components pure and prop-driven.
- Co-locate small styles with feature components.
- Limit a component file to one clear responsibility.

Practical heuristics:
- If a component handles API calls, move that logic to a hook.
- If a component exceeds around 200 lines, consider splitting it.
- If props become hard to follow, create view models or smaller subcomponents.

## 6. State Management Strategy

For a small app, follow this order:

1. Local state with useState and useReducer.
2. Lift state to nearest common parent when needed.
3. Use Context for truly global state only, such as theme, auth session, or user preferences.
4. Add a dedicated state library only when cross-feature coordination becomes frequent.

Anti-patterns to avoid:
- Global Context for transient local UI state.
- Passing props through many levels without composition.
- Storing derived values in state when they can be computed.

## 7. Data Fetching and Services

- Keep HTTP or API logic in feature services.
- Keep mapping and loading/error orchestration in feature hooks.
- Keep rendering concerns in components.

Preferred pattern:

- services: call endpoints and return typed data.
- hooks: call services, manage loading and error, expose a clean UI model.
- components: render data from hooks.

If server state grows, use TanStack Query to standardize caching and retries.

## 8. TypeScript Best Practices

- Enable strict mode and keep it on.
- Avoid any. Use unknown plus runtime narrowing if needed.
- Define explicit types for service responses.
- Keep feature-local types near each feature.
- Promote types to shared only when reused across features.

## 9. Styling and Design System

- Define design tokens in shared/styles/tokens.css.
- Keep global reset and base styles in shared/styles/globals.css.
- Keep feature-specific styles within each feature folder.
- Prefer semantic class naming tied to component intent.

Token categories to define early:
- Colors
- Spacing scale
- Radius scale
- Typography scale
- Elevation and shadows

## 10. Routing and Navigation

- Declare route config in app/routes.
- Keep route elements thin and delegate to feature modules.
- Use lazy loading for non-critical routes when route count increases.

## 11. Testing Strategy for Small Apps

- Unit test utility functions in shared/lib.
- Component test critical feature UI states.
- Integration test key user paths, not every component detail.

Recommended priority:
- Business rules and transformations first.
- Risky interaction flows second.
- Cosmetic rendering details last.

## 12. Quality Gates

Minimum quality gates for every change:

- Type check passes.
- Lint passes.
- Build succeeds.
- New behavior has at least one relevant test for non-trivial logic.

Project scripts to keep using:

- npm run dev
- npm run lint
- npm run build

## 13. Suggested Incremental Migration from Current Template

1. Move App.tsx and main.tsx into src/app over time, or keep paths and create app conventions first.
2. Extract sections from App.tsx into src/features, one feature at a time.
3. Create src/shared/styles/tokens.css and centralize color and spacing values.
4. Introduce service and hook files only where side effects already exist.
5. Add tests around extracted business logic.

## 14. Definition of Done

A feature is done when:

- UI is implemented with accessible markup.
- Side effects are isolated in hooks or services.
- Types are explicit for external data.
- Lint, build, and tests pass.
- Feature can be understood without reading unrelated modules.

## 15. What to Avoid

- Dumping all logic into App.tsx.
- Central folders that become catch-all bins.
- Shared utilities with no ownership or usage standards.
- Premature architecture layers with no active use case.

This architecture keeps small apps fast to build while preserving a clean path to scale.
