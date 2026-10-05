# Typefolio

Typefolio is a clean, responsive one-page portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. The application is a static single-page site: the production build can be served by any static web server without a Node.js runtime.

## Features

- One-page portfolio layout with hero, about, education, experience, featured work, and project sections
- Responsive styling with Tailwind CSS
- Reusable shadcn/ui components
- Typed local portfolio data with no runtime API requests
- Base-path-aware assets and local links for root and subdirectory deployments

## Requirements

- Node.js 20 or newer
- Corepack-enabled Yarn

The repository pins the Yarn release in `package.json`. Enable Corepack once on a new machine, then use Yarn for every project command:

```bash
corepack enable
yarn install
```

## Development

Start the Vite development server:

```bash
yarn dev
```

Open the URL printed by Vite, usually <http://localhost:5173/>.

## Checks

Run the automated checks before publishing a build:

```bash
yarn test
yarn lint
yarn typecheck
```

## Production build

Build the site for a domain-root deployment. The compiled files are written to `dist/`:

```bash
yarn build
```

Preview the current `dist/` output locally:

```bash
yarn preview
```

## Base-path deployments

`VITE_BASE_PATH` is a build-time deployment prefix. It must include the public subdirectory when the site is served below the domain root. The value is normalized to one leading and trailing slash, so `/resume`, `/resume/`, and `///resume///` produce the same `/resume/` prefix.

For a site served at `https://example.com/resume/`, run the exact build command:

```bash
VITE_BASE_PATH=/resume/ yarn build
```

This prefixes the generated entry files, assets, icons, favicon, and local application links with `/resume/`. For a root deployment, omit the variable or use `VITE_BASE_PATH=/`:

```bash
yarn build
# or
VITE_BASE_PATH=/ yarn build
```

The repository includes [`.env.example`](.env.example) with both supported examples. Environment values are read during the build and are not changed by `yarn preview` or by the static web server.

## Static deployment

1. Run `yarn install` in the build environment.
2. Set `VITE_BASE_PATH` if the public URL has a subdirectory.
3. Run `yarn build`.
4. Publish the contents of `dist/` at the matching public URL.

Configure the web server to serve `index.html` for the site entry point and to preserve static files under the configured base prefix. A subdirectory deployment should publish `dist/` at `/resume/`, not at the domain root. No server-side rendering, API process, or runtime environment variables are required.

## Project structure

- `src/App.tsx` — single-page composition
- `src/components/` — layout, home sections, and UI primitives
- `src/data/portfolio.ts` — typed portfolio content
- `src/lib/urls.ts` — base-aware asset and local-link helpers
- `public/` — static assets
- `dist/` — generated production output

## License

This project is available under the MIT license. See [LICENSE](LICENSE) for details.
