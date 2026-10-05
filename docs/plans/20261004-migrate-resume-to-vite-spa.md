# Vite SPA migration

## Overview

Migrate the resume from Next.js to a static React single-page application using Vite, TypeScript, Tailwind CSS 4, and Yarn. The delivered site must retain the existing content, section order, styling, and assets while removing the Next.js runtime, App Router, API handlers, and all client-side routing.

The static output is `dist/`. Portfolio content becomes typed local data. Builds use `/` by default and accept `VITE_BASE_PATH` for deployments in a subdirectory such as `/resume/`.

## Context (from discovery)

- **Current framework:** React 19, TypeScript, Tailwind CSS 4, and Next.js. Page composition is already a single layout/page with header, footer, dividers, and home sections.
- **Relevant source:** `src/app/` contains App Router entry files, components, styles, favicon, and two API routes. Reusable shadcn-style UI primitives are already in `src/components/ui`.
- **Data flow:** `Education`, `Experience`, `FeaturedWork`, and `ProjectOverview` fetch immutable data from two Next API handlers.
- **Current gaps:** no test runner or test suite exists; `package.json`, `tsconfig.json`, and ESLint are tied to Next.js.
- **Agreed constraints:** Yarn, Vite, no router, no Next.js, static TypeScript data, root and subdirectory builds, and preserved design/content.

## Development Approach

- **Testing approach:** Regular. Finish each focused task, write or update the tests that cover its changed behavior, and run them successfully before starting the next task.
- Tasks 1 and 2 add tests while deliberately retaining the existing Next.js application. Task 3 performs the application-shell migration and removes Next.js in one atomic task, so no intermediate task ends with unresolved `next/*` imports.
- Run only checks that can succeed at each stage. The complete `test`, `lint`, `typecheck`, and `build` gate starts after Task 3 has removed the App Router and Next dependencies.
- Keep changes focused, do not add a router or server, and update this plan immediately if scope changes.
- Mark each completed checklist item `[x]` immediately; record unexpected work with `➕` and blockers with `⚠️`.

## Testing Strategy

- **Unit tests:** introduce Vitest. Test `cn`, the static data module, and base-path URL helpers for root, subdirectory, and slash-normalization cases.
- **Component tests:** introduce React Testing Library with jsdom. Render the migrated data-driven sections and `App`; assert key content, `href` values, and raw `src` attributes. Verify the former API-driven sections render synchronously without `fetch`.
- **Build checks:** after the atomic migration, run `yarn test`, `yarn lint`, `yarn typecheck`, and `yarn build`. Build both the root version and `VITE_BASE_PATH=/resume/` version.
- **E2E tests:** no e2e runner exists. Do not add Playwright/Cypress for this small static migration; perform the listed manual browser checks after the automated gate passes.

## Progress Tracking

- Complete and test each task before the next one.
- Do not mark items completed when commands fail.
- Update this plan if an implementation choice, file path, or validation command changes.
- Move the plan to `docs/plans/completed/` only after all required items and final commands pass.

## Solution Overview

Vite supplies the document entry and application build. `index.html` owns metadata and the favicon link; `src/main.tsx` mounts `App`; and `src/App.tsx` renders the single page without route state. The former App Router source is removed only after all of these replacements exist.

Home, layout, and divider components move to `src/components`. Native `<img>` and `<a>` replace Next primitives. Typed content moves to `src/data/portfolio.ts`, eliminating API fetches, loading state, and client-only data effects.

A shared URL module constructs public asset URLs and local SPA URLs from `import.meta.env.BASE_URL`. Template links currently pointing to `/` are treated as links to the SPA root and become base-aware; `#` placeholder links remain fragments. No downloadable portfolio file currently exists, so its button preserves its current behavior as a link to the SPA root.

## Technical Details

- **Vite base:** `vite.config.ts` must use `loadEnv(mode, process.cwd(), "VITE_")` to load `VITE_BASE_PATH`, then normalize it to `/` or a leading/trailing-slash prefix such as `/resume/`. It must not rely on undocumented `process.env` loading.
- **Public URLs:** `assetUrl(path, base = import.meta.env.BASE_URL)` removes duplicate separators and returns a public asset URL. `appUrl(path = "/", base = import.meta.env.BASE_URL)` creates local SPA hrefs from the same base.
- **Static data:** `src/data/portfolio.ts` exports typed immutable experience, education, featured-work, and project-overview values matching today’s API payloads.
- **Toolchain:** Task 1 installs Yarn’s lockfile/test foundation while preserving Next compatibility. Task 3 changes scripts/configuration and removes `next` only after all source has been migrated.
- **Metadata:** title, description, favicon, and root element move from Next’s layout conventions to `index.html`; the favicon becomes `public/favicon.ico`.

## What Goes Where

- **Implementation Steps:** repository changes, tests, documentation, and automated checks.
- **Post-Completion:** browser and deployment checks dependent on a static server or target environment.

## Implementation Steps

### Task 1: Add Yarn and test foundations without removing Next.js

**Files:**
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/lib/utils.test.ts`
- Modify: `package.json`
- Modify: `.gitignore`

- [x] Use Corepack to select the installed Yarn release, set its exact `packageManager` value in `package.json`, run `yarn install`, and commit the generated `yarn.lock`.
- [x] Add Vitest, jsdom, React Testing Library, and related test dependencies plus a `yarn test` script; retain `next`, existing Next scripts, and current Next TypeScript/ESLint settings in this task.
- [x] Create `vitest.config.ts` and `src/test/setup.ts` for jsdom and React Testing Library cleanup without changing production build configuration.
- [x] Add `src/lib/utils.test.ts` covering `cn` class merging and optional/falsy inputs.
- [x] Update `.gitignore` only for test artefacts produced by the selected tooling; do not remove Next entries yet.
- [x] Run `yarn test`; the new test suite must pass before Task 2.

### Task 2: Add typed portfolio data and base-path URL utilities

**Files:**
- Create: `src/data/portfolio.ts`
- Create: `src/data/portfolio.test.ts`
- Create: `src/lib/urls.ts`
- Create: `src/lib/urls.test.ts`
- Read: `src/app/api/page-data/route.ts`
- Read: `src/app/api/featured-work/route.ts`

- [x] Define TypeScript types and immutable `experienceData`, `educationData`, `featuredWork`, and `projectOverview` exports, preserving all content from the two current API handlers.
- [x] Implement `assetUrl` and `appUrl` in `src/lib/urls.ts`; default each helper to `import.meta.env.BASE_URL` and permit an explicit base argument for deterministic tests.
- [x] Normalize leading/trailing slashes so `/`, `/resume`, and `/resume/` produce correct URLs without duplicate separators.
- [x] Write static-data tests for expected records, required fields, project URLs, and both `comingSoon` states.
- [x] Write URL-helper tests for root builds, subdirectory builds, leading-slash paths, empty/root local paths, and separator edge cases.
- [x] Run `yarn test`; all new tests must pass before Task 3.

### Task 3: Atomically migrate the application shell and remove Next.js

**Files:**
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`
- Create: `public/favicon.ico`
- Create: `src/components/divider/index.tsx`
- Create: `src/components/home/about-me/index.tsx`
- Create: `src/components/home/education/index.tsx`
- Create: `src/components/home/experience/index.tsx`
- Create: `src/components/home/featured-work/index.tsx`
- Create: `src/components/home/hero-section/index.tsx`
- Create: `src/components/home/project-overview/index.tsx`
- Create: `src/components/layout/header/index.tsx`
- Create: `src/components/layout/header/announcementBar.tsx`
- Create: `src/components/layout/footer/index.tsx`
- Create: `src/components/home/sections.test.tsx`
- Create: `src/App.test.tsx`
- Modify: `package.json`
- Modify: `tsconfig.json`
- Modify: `eslint.config.mjs`
- Modify: `components.json`
- Modify: `.gitignore`
- Modify: `src/components/ui/button.tsx` only if its Base UI link composition requires adjustment
- Delete: `next.config.ts`
- Delete: `src/app/`

- [x] Add Vite production configuration with the React plugin, `@` → `src` alias, and `loadEnv(mode, process.cwd(), "VITE_")`; normalize `VITE_BASE_PATH` to `/` by default or a deployment prefix such as `/resume/`.
- [x] Replace package scripts with Yarn/Vite commands (`dev`, `build`, `preview`), add `typecheck` and React ESLint commands, remove `next`/`eslint-config-next`, and update TypeScript/ESLint configuration for Vite and React.
- [x] Create `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, and `public/favicon.ico`; migrate title, description, favicon, global Tailwind/theme styles, system font stack, and the current one-page section order.
- [x] Move all home/layout/divider components to `src/components`, update imports, replace every `next/image` with native `<img src={assetUrl(...)}`, and replace every `next/link` with native `<a>`.
- [x] Convert `/` template links to `appUrl("/")`, preserve fragment (`#`) links, and preserve existing external destinations; remove API fetches, `useEffect`, `useState`, `any` data values, and unnecessary `"use client"` directives from static-data sections.
- [x] Delete the App Router, both API route handlers, App Router favicon, and `next.config.ts` only after their Vite replacements and moved components exist.
- [x] Write React Testing Library tests for the four static-data sections and `App`: verify representative content, synchronous rendering without `fetch`, expected raw `img` `src` attributes, base-aware local hrefs, header, and footer.
- [x] Run `yarn test`, `yarn lint`, `yarn typecheck`, and `yarn build`; all must pass before Task 4.

### Task 4: Document deployment and validate both base-path builds

**Files:**
- Create: `.env.example`
- Modify: `README.md`
- Modify: `docs/plans/20261004-migrate-resume-to-vite-spa.md`

- [ ] Add `.env.example` documenting `VITE_BASE_PATH=/` and the `/resume/` subdirectory example.
- [ ] Update README installation, development, preview, build, and deployment instructions for Yarn/Vite; remove Next.js, npm/pnpm, and Vercel-specific instructions.
- [ ] Document `VITE_BASE_PATH` as a build-time deployment prefix and include `VITE_BASE_PATH=/resume/ yarn build`.
- [ ] Build with the default base and verify `dist/` contains no `next/` or `/api/*` references.
- [ ] Build with `VITE_BASE_PATH=/resume/` and inspect/preview output to confirm entry files, images, icons, favicon, and generated local SPA links use `/resume/` exactly once.
- [ ] Update URL-helper or component tests if either build exposes an uncovered base-path case, then run `yarn test`, `yarn lint`, `yarn typecheck`, and `yarn build` successfully before Task 5.

### Task 5: Verify migration acceptance criteria

**Files:**
- Modify: `docs/plans/20261004-migrate-resume-to-vite-spa.md`

- [ ] Verify the repository has no `next` dependency, Next scripts/configuration/plugins, `next/*` imports, router dependency, or `src/app/api` handlers.
- [ ] Verify all former API content exists in `src/data/portfolio.ts`, static sections contain no network fetching, and App renders the existing header, footer, section order, copy, layout classes, and public assets.
- [ ] Verify the root and `/resume/` builds both include title, description, favicon, and correctly prefixed asset/local SPA URLs.
- [ ] No source behavior is introduced in this verification-only task; no test file update is required. Run and record the full suite: `yarn test`, `yarn lint`, `yarn typecheck`, and `yarn build`.
- [ ] Mark every verified acceptance criterion and every completed Task 1–4 checklist item before Task 6.

### Task 6: Finalize documentation and plan tracking

**Files:**
- Modify: `README.md` if validation changes command or deployment documentation
- Modify: `docs/plans/20261004-migrate-resume-to-vite-spa.md`
- Move: `docs/plans/20261004-migrate-resume-to-vite-spa.md` → `docs/plans/completed/20261004-migrate-resume-to-vite-spa.md`

- [ ] Reconcile README and `.env.example` with the tested Yarn commands and exact Vite base-path behavior.
- [ ] Record discovered deviations, follow-up work, and resolved blockers in the plan before closure.
- [ ] No source behavior is introduced in this documentation-only task; no test file update is required. Run final `yarn test`, `yarn lint`, `yarn typecheck`, and `yarn build` checks successfully.
- [ ] Confirm every implementation and verification checkbox is marked `[x]`; do not close the plan with unresolved required items.
- [ ] Create `docs/plans/completed/` if needed and move the completed plan there.

## Post-Completion

**Manual verification:**

- Preview the root build on desktop and mobile. Confirm the header, hero, divider-separated sections, footer, hover behavior, copy, and public assets match the existing site.
- Serve the `/resume/` build beneath that URL. Confirm direct load, refresh, favicon, images/icons, local SPA-root links, placeholder fragments, and absence of `/api/*` requests in browser Network tools.
- Confirm the target web server publishes `dist/` statically and requires no Node.js or Next.js runtime.

**External system updates:**

- Configure `VITE_BASE_PATH` in the deployment environment only when the target site is served below the domain root.
- Ensure CI/CD enables Corepack or otherwise honors `packageManager` before Yarn installation and build commands.
