# The Home Watch Agency — redesign audit

Audit date: 2026-09-04

## Repository state

The supplied workspace was empty: no source files, framework, package manifest, Git metadata, environment configuration, routes, components, tests, or local assets were present. Because there is no implementation to migrate, this demo is being rebuilt as a dependency-free, statically generated multi-page site. The build will use reusable JavaScript templates and shared CSS/JavaScript, while keeping the live public site as the content and route source of truth.

## Current production implementation

- Platform: WordPress with Thrive Theme / Thrive Architect.
- Front-end dependencies observed publicly: WordPress core scripts, Thrive front-end scripts, SiteGround optimization bundles, Jetpack statistics, Google reCAPTCHA v3, and a Thrive lead-generation/contact form.
- Existing font assets: Proxima Nova files uploaded to WordPress. Their licensing status is not available in this workspace, so the demo uses an open/system serif-and-sans stack instead of redistributing those files.
- Existing brand color visible in the supplied horizontal logo: cyan blue with charcoal gray.
- Public contact details: The Home Watch Agency, Scottsdale, AZ 85259; principal contact Christine; 480-487-0029; Assist@TheHomeWatchAgency.com.
- Current contact form fields: Name, Email, Phone, and a message limited to 350 characters. The private WordPress/reCAPTCHA submission configuration is not available locally.

## Public route inventory

All public routes found through the WordPress REST page index and live navigation are retained in the demo.

| Route | Purpose / current state |
| --- | --- |
| `/` | Home |
| `/about/` | About; in-page anchors: `#philosophy`, `#Relationships`, `#difference`, `#clients`, `#ourstory`, `#ourteam`, `#training`, `#accreditation` |
| `/benefits/` | Benefits; in-page anchors: `#peace`, `#benefits`, `#gps` |
| `/faqs/` | Frequently Asked Questions |
| `/services/` | Services overview; in-page anchors: `#overview`, `#basic`, `#supplementary`, `#vehicle`, `#concierge` |
| `/services/basic/` | Basic Home Watch Monitoring |
| `/services/personalized/` | Supplementary Home / Estate Management |
| `/services/vehicle/` | Vehicle Services |
| `/services/concierge/` | Personalized Concierge Services |
| `/pricing/` | Service plans, frequency, and pricing policy |
| `/client-services-offers/` | Client service offers hub |
| `/client-services-offers/basic-pr/` | Password-protected Basic Presentation |
| `/client-services-offers/personalized-pr/` | Password-protected Supplementary Presentation |
| `/client-services-offers/vehicle-pr/` | Password-protected Vehicle Presentation |
| `/client-services-offers/concierge-pr/` | Password-protected Concierge Presentation |
| `/faq-pr/` | Password-protected FAQ Presentation |
| `/contact/` | Contact and consultation form |
| `/blog/` | Blog page (no public post content found) |
| `/arriving-soon/` | Arriving Soon page |

## Information architecture retained

- About: Philosophy, Relationships, The Difference, Clients / Service Areas, Our Story, Team / Principals, Training / Development, Accreditation / Affiliations.
- Benefits: Peace of Mind, homeowner benefits, GPS-enabled client reporting, FAQs.
- Services: Basic Home Watch, Supplementary Home / Estate Management, Vehicle Services, Concierge Services, and Pricing.
- Client presentations: five existing protected URLs.
- Contact: existing phone, email, Scottsdale mailing locality, principal-contact label, and current field set.

## Authentic assets retained

- Existing horizontal The Home Watch Agency logo and favicon.
- Existing family/principal photograph used on the live About page.
- Existing Home Watch Academy, National Home Watch Association, IHWA, and Scottsdale affiliation marks.
- Existing GPS reporting illustration, retained only where the current public site uses it.

The current `Arizona-Couple.png` image appears to be generic lifestyle imagery rather than the principals and is not used as team photography. No staff members are generated.

## Reference-site principles extracted

Carlson Concierge is used only as a visual/UX reference. Transferable principles: large residential photography, clear headline hierarchy, restrained navigation, generous whitespace, short visible text passages supported by deeper detail, service-led storytelling, and Arizona context. No Carlson copy, assets, source code, exact section sequence, or brand elements are used.

## Redesign component plan

- Shared overlay-to-solid header with desktop mega menus and an accessible mobile navigation drawer.
- Shared editorial footer with contact information, service links, deeper navigation, and consultation CTA.
- Reusable page hero, media/text section, service index, trust strip, service-area panel, FAQ accordion, detail grid, presentation-gate, and contact-form components.
- Warm ivory / limestone / charcoal palette with the existing cyan brand color reserved for small interactive accents.
- Display typography: Georgia-based editorial serif stack; body/interface typography: modern system sans stack. No unverified font licenses or remote font dependencies.
- Progressive enhancement: core links/content remain available without JavaScript; JavaScript adds mobile-menu behavior, header state, reveal motion, character count, and FAQ conveniences.

## Known preservation constraints

- No original repository exists, so private WordPress form handlers, analytics configuration, reCAPTCHA secrets, WordPress structured data, and password-validation behavior cannot be copied safely.
- The local demo will not send submissions to production. Its contact form preserves the current fields and validates locally, then provides the existing email and phone as the safe completion path.
- Protected presentation content is not reproduced or exposed. The routes remain present and clearly identified as private-access material.
- Public copy is retained as closely as possible, including claims that may warrant client/legal review. Obvious typographic errors are only corrected where needed for readable presentation; underlying meaning is not changed.

