# Redesign handoff

## Visual direction

The redesign positions The Home Watch Agency between editorial architecture, private estate management, and luxury hospitality. The experience uses full-bleed Arizona imagery, a warm ivory / limestone / charcoal palette, an editorial serif paired with a quiet system sans, controlled use of the existing cyan brand accent, asymmetric service storytelling, generous spacing, and restrained motion. The result is calm, private, meticulous, and distinctly residential rather than contractor-, property-management-, or SaaS-like.

## Substantially changed / created

- Shared site shell and reusable components: `src/components.mjs`
- Homepage: `src/pages/home.mjs`
- About, principals, service areas, training, affiliations: `src/pages/about.mjs`
- Benefits and GPS-enabled reporting: `src/pages/benefits.mjs`
- FAQ and client-concern experience: `src/pages/faqs.mjs`
- Services overview plus Basic, Supplementary, Vehicle, and Concierge detail pages: `src/pages/services.mjs`
- Pricing, Contact, client offers, presentation gates, Blog, Arriving Soon: `src/pages/misc.mjs`
- Site-wide responsive design system: `assets/styles.css`
- Navigation, reduced-motion-aware reveals, and form enhancements: `assets/site.js`
- Build, static preview, and automated checks: `src/build.mjs`, `src/serve.mjs`, `src/check.mjs`, `src/browser-check.mjs`, and `src/visual-check.mjs`
- Public route output: `dist/`

## Existing elements intentionally retained

- Every public page and protected presentation URL discovered in the live WordPress page index.
- Existing in-page navigation anchors for About, Benefits, and Services.
- The Home Watch Agency horizontal logo and favicon.
- Existing principal/family photography; no people were generated.
- Existing accreditation/affiliation marks and GPS-reporting illustration, separated from generated concept imagery.
- Existing service scope, pricing policy, FAQ topics and answers, service areas, contact details, and trust/experience claims.
- Protected presentation boundaries: no password or protected content is stored locally.

## Images still requiring client-supplied or professionally licensed replacements

All files below are optimized local WebP concept placeholders generated for this demo. They are not represented as actual client properties or documentary evidence.

| Current placeholder | Intended final asset |
| --- | --- |
| `assets/images/generated/arizona-luxury-estate-hero.webp` | Luxury Arizona estate exterior hero with copy-safe negative space |
| `assets/images/generated/luxury-estate-interior.webp` | Licensed Scottsdale / Paradise Valley luxury interior |
| `assets/images/generated/paradise-valley-estate.webp` | Service-area desert landscape and pool / terrace panorama |
| `assets/images/generated/scottsdale-home-watch.webp` | Authentic home-watch inspection / detail photography, with client and property permission |
| `assets/images/generated/vehicle-management.webp` | Licensed or client-approved private-garage / vehicle-care image |
| `assets/images/generated/private-concierge.webp` | Licensed concierge / arrival-preparation lifestyle image |

Recommended additional authentic assets before production:

- Individual professional portraits of Christine and Andrew; the demo currently uses the authentic family image from the live site.
- Authentic, consented documentary photography of an inspection, exterior/perimeter check, vendor coordination, and vehicle-care process.
- A real reporting-app screenshot with private information fully redacted, if contractually permitted.
- Current high-resolution vector/SVG logo artwork and current vector versions of affiliation marks.
- Confirmed-license replacements for any current-site stock imagery retained in the GPS section.

## Questionable content / functionality intentionally left untouched

- Claims involving insurance coverage or claim denial are retained from the source. They should receive insurance/legal review before production publication.
- “100% client retention” is retained only as an existing content statement inside the Benefits page and explicitly flagged for reconfirmation; it is not used as a large marketing statistic.
- Current accreditation, affiliation, bonding, insurance, and training statements are retained but should be reconfirmed and matched against current brand-use requirements before launch.
- References to HomeWatchIT, geofencing, QR codes, Google Maps, secure cloud storage, and reporting behavior are retained from the public site and should be verified against the current vendor agreement and workflow.
- Vacation-rental assistance, dedicated full-time estate management, in-home caretaker scenarios, mobile hair styling, vehicle brokerage, and airport transportation remain because they appear on the current site. Scope, licensing, insurance, and availability should be reconfirmed.
- The current WordPress form handler, reCAPTCHA integration, Jetpack analytics, private structured-data configuration, and presentation-password implementation could not be migrated because the repository and configuration were not supplied.
- No published WordPress posts were returned by the public posts API, so the Blog route is preserved without fabricated articles.

## Verification results

- Static build: 19 routes generated successfully.
- Automated source/output checks: passed for route presence, one H1 per page, page titles, descriptions, canonical URLs, internal route resolution, asset existence, image alt attributes, and generated WebP size (all under 300 KB).
- Browser review: passed at 1440 × 900 and 390 × 844 across all 19 routes.
- Browser runtime: no console/runtime errors during the audited routes.
- Responsive layout: no horizontal overflow on any audited route at either viewport.
- Interaction checks: desktop mega menus, mobile menu open/close behavior, and contact character counting passed.
- Visual inspection: completed on the full Home, About, FAQ, and mobile Contact pages, plus the open mobile-navigation state.
- Hydration: not applicable; the site is server-independent static HTML with progressive enhancement.

## Remaining production work

- Reconnect the contact form to the client-approved production handler and reCAPTCHA configuration.
- Migrate the approved design into the actual production WordPress/Thrive repository or supply the missing repository for direct integration.
- Reconnect the client-presentation password flow within the final hosting environment.
- Confirm all credentials, affiliations, insurance/bonding statements, regulated service scopes, and image licenses.
- Replace the six generated concept images and any legacy stock/reporting artwork selected for production.
- Add the client’s approved analytics configuration and perform a final production-domain accessibility and Core Web Vitals audit.

## Preview

Run `npm test`, then `npm run serve`, and open `http://127.0.0.1:4173/`.
