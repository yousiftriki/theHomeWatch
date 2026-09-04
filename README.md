# The Home Watch Agency — Luxury Redesign Demo

An original, dependency-free static redesign based on the public content and route structure of [The Home Watch Agency](https://thehomewatchagency.com/). Carlson Concierge was reviewed only for broad visual and UX principles; no Carlson source, copy, imagery, branding, or exact layout is included.

## Preview locally

Requirements: Node.js 18 or newer.

```bash
npm test
npm run serve
```

Open `http://127.0.0.1:4173/`.

The preview server reads the generated `dist/` directory. Run `npm run build` after editing page templates, shared components, styles, scripts, or assets.

## Publish with GitHub Pages

The included `.github/workflows/pages.yml` workflow builds and publishes the site whenever the `luxury-redesign-demo` branch is pushed. It uses GitHub's reported Pages base path, so the same build supports both `username.github.io` repositories and project sites hosted below `/repository-name/`.

After pushing the branch, open the repository's **Settings → Pages** and select **GitHub Actions** as the source if it is not already selected. The workflow can also be started manually from the repository's **Actions** tab.

## Project structure

- `src/components.mjs` — shared header, mega menus, mobile menu, footer, heroes, service index, editorial sections, CTAs, and document metadata.
- `src/pages/` — route-level page compositions grouped by subject.
- `src/build.mjs` — writes all 19 public routes and copies only production-ready assets into `dist/`.
- `src/check.mjs` — verifies routes, headings, metadata, canonical URLs, internal links, image references, alt text, and optimized image size.
- `src/serve.mjs` — zero-dependency local preview server.
- `src/browser-check.mjs` / `src/visual-check.mjs` — local Chrome DevTools QA utilities used during the redesign review.
- `assets/styles.css` — design tokens, components, desktop/tablet/mobile layouts, focus styles, reduced-motion behavior, and print adjustments.
- `assets/site.js` — progressive enhancement for navigation, reveal motion, contact character count, and the safe email-based demo submission.
- `assets/images/authentic/` — brand, principal/family, reporting, and accreditation imagery from the current public site.
- `assets/images/generated/` — clearly labeled, replaceable architectural and lifestyle concept images.
- `dist/` — built static site.

## Important demo behavior

- Contact form: preserves Name, Email, Phone, Message, required validation, and the 350-character limit. Because the original WordPress/reCAPTCHA handler is not present, submission opens the visitor’s email application and does not transmit or store data in the demo.
- Private presentation routes: remain password-gated. Their forms hand off to the current production WordPress password flow in a new tab; protected content is not copied into this project.
- Analytics: not added. The current site’s private Jetpack configuration is not reproduced.
- Fonts: uses a refined system serif/sans stack; the current Proxima Nova files were not redistributed because licensing information was not supplied.
- Git: the supplied directory was empty and the managed filesystem blocked `.git` creation. In a normal clone, create the requested branch with `git switch -c luxury-redesign-demo` before applying the project.

See `PROJECT_AUDIT.md` for the pre-build route and integration audit and `REDESIGN_HANDOFF.md` for the delivery checklist.
