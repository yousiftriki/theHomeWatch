const phoneHref = "tel:+14804870029";
const emailHref = "mailto:Assist@TheHomeWatchAgency.com";

export const contact = {
  phone: "480-487-0029",
  phoneDisplay: "480.487.0029",
  phoneHref,
  email: "Assist@TheHomeWatchAgency.com",
  emailHref,
  city: "Scottsdale, AZ 85259",
};

export const services = [
  {
    number: "01",
    title: "Home Watch Monitoring",
    shortTitle: "Home Watch",
    href: "/services/basic/",
    image: "/assets/images/generated/private-estate-gated-entry.webp",
    alt: "Generated concept image of the gated arrival to a luxury Arizona residence",
    text: "Each visit entails a comprehensive assessment of the interior, exterior, and perimeter of the property to help ensure that your residence and vehicles are secure and appropriately monitored, maintained, exercised, and ready for your return.",
  },
  {
    number: "02",
    title: "Home / Estate Management",
    shortTitle: "Estate Management",
    href: "/services/personalized/",
    image: "/assets/images/generated/gallery-arizona-great-room.webp",
    alt: "Generated concept image of an Arizona great room with mountain views",
    text: "A nimble and comprehensive suite of supplementary Personalized Home/Estate Management Services to appropriately manage, maintain, and care for your residence and the surrounding grounds.",
  },
  {
    number: "03",
    title: "Vehicle Services",
    shortTitle: "Vehicle Care",
    href: "/services/vehicle/",
    image: "/assets/images/generated/car-img.webp",
    alt: "Luxury vehicle prepared for service in an Arizona garage",
    text: "Our services don’t end with your home. We assist with vehicle maintenance, exercising, valet, shipping, and brokerage, including luxury cars, exotics, motorcycles, off-road vehicles, golf carts, and boats.",
  },
  {
    number: "04",
    title: "Personalized Concierge Services",
    shortTitle: "Concierge",
    href: "/services/concierge/",
    image: "/assets/images/generated/gallery-arizona-bathroom.webp",
    alt: "Generated concept image of a limestone spa bathroom with a desert outlook",
    text: "For clients whose needs extend beyond Basic Home Watch and Estate/Vehicle Management, we offer an agile suite of personalized Concierge Services. Regardless of the need, we will help find the solution.",
  },
];

const aboutLinks = [
  ["Philosophy", "/about/#philosophy"],
  ["Relationships", "/about/#Relationships"],
  ["The Difference", "/about/#difference"],
  ["Clients / Service Areas", "/about/#clients"],
  ["Our Story", "/about/#ourstory"],
  ["Our Team / Principals", "/about/#ourteam"],
  ["Training / Development", "/about/#training"],
  ["Accreditation / Affiliations", "/about/#accreditation"],
];

const benefitLinks = [
  ["Peace of Mind", "/benefits/#peace"],
  ["Homeowner Benefits", "/benefits/#benefits"],
  ["GPS-Enabled Client Reporting", "/benefits/#gps"],
  ["Frequently Asked Questions", "/faqs/"],
];

const serviceLinks = [
  ["Services Overview", "/services/"],
  ["Basic Home Watch", "/services/basic/"],
  ["Home / Estate Management", "/services/personalized/"],
  ["Vehicle Services", "/services/vehicle/"],
  ["Concierge Services", "/services/concierge/"],
  ["Pricing", "/pricing/"],
  ["Client Presentations", "/client-services-offers/"],
];

const presentationLinks = [
  ["Basic Presentation", "/client-services-offers/basic-pr/"],
  ["Supplementary Presentation", "/client-services-offers/personalized-pr/"],
  ["Vehicle Presentation", "/client-services-offers/vehicle-pr/"],
  ["Concierge Presentation", "/client-services-offers/concierge-pr/"],
  ["FAQ Presentation", "/faq-pr/"],
];

const arrow = `<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M3 10h13M11 5l5 5-5 5"/></svg>`;

export function linkList(items, className = "") {
  return `<ul class="${className}">${items
    .map(([label, href]) => `<li><a href="${href}">${label}</a></li>`)
    .join("")}</ul>`;
}

function desktopMenu(label, id, links, feature) {
  return `<div class="nav-item nav-item--has-menu">
    <button class="nav-trigger" type="button" aria-expanded="false" aria-controls="${id}" data-nav-trigger>
      ${label}<svg aria-hidden="true" viewBox="0 0 12 8"><path d="m1 1 5 5 5-5"/></svg>
    </button>
    <div class="mega-menu" id="${id}" data-nav-menu>
      <div class="mega-menu__inner">
        <div class="mega-menu__intro">
          <span class="eyebrow">${feature.eyebrow}</span>
          <p>${feature.text}</p>
          <a class="text-link" href="${feature.href}">${feature.action}${arrow}</a>
        </div>
        ${linkList(links, "mega-menu__links")}
      </div>
    </div>
  </div>`;
}

export function header({ overlay = false } = {}) {
  return `<a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header${overlay ? " site-header--overlay" : ""}" data-site-header>
    <div class="site-header__inner">
      <a class="brand header-logo" href="/" aria-label="The Home Watch Agency home">
        <img class="brand-logo brand-logo--dark" src="/assets/images/authentic/thwa-logo.png" width="2172" height="724" alt="The Home Watch Agency" />
        <img class="brand-logo brand-logo--light" src="/assets/images/authentic/thwa-white-logo.png" width="2172" height="724" alt="" aria-hidden="true" />
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a class="nav-link" href="/">Home</a>
        ${desktopMenu("About", "about-menu", aboutLinks, {
          eyebrow: "The Agency",
          text: "An intentionally small firm built around direct relationships, discretion, and meticulous service.",
          href: "/about/",
          action: "Discover our approach",
        })}
        ${desktopMenu("Benefits", "benefits-menu", benefitLinks, {
          eyebrow: "Peace of Mind",
          text: "Recurring, personalized in-home checks and clear reporting while you are away.",
          href: "/benefits/",
          action: "Explore the benefits",
        })}
        ${desktopMenu("Services", "services-menu", serviceLinks, {
          eyebrow: "Private Property Care",
          text: "Home watch, estate management, vehicle care, and personalized concierge services.",
          href: "/services/",
          action: "View all services",
        })}
        <a class="nav-link" href="/faqs/">FAQs</a>
      </nav>
      <a class="header-cta" href="/contact/">Schedule a consultation</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
        <span class="menu-toggle__label">Menu</span><span class="menu-toggle__icon" aria-hidden="true"><i></i><i></i></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobile-menu" hidden data-mobile-menu>
      <nav aria-label="Mobile navigation">
        <a class="mobile-menu__primary" href="/">Home</a>
        <details><summary>About</summary>${linkList([["About Overview", "/about/"], ...aboutLinks])}</details>
        <details><summary>Benefits</summary>${linkList([["Benefits Overview", "/benefits/"], ...benefitLinks])}</details>
        <details><summary>Services</summary>${linkList(serviceLinks)}</details>
        <details><summary>Private Presentations</summary>${linkList(presentationLinks)}</details>
        <a class="mobile-menu__primary" href="/faqs/">FAQs</a>
        <a class="mobile-menu__primary" href="/blog/">Blog</a>
        <a class="button button--fill mobile-menu__cta" href="/contact/">Schedule Your Consultation</a>
        <div class="mobile-menu__contact"><a href="${phoneHref}">${contact.phone}</a><a href="${emailHref}">${contact.email}</a></div>
      </nav>
    </div>
  </header>`;
}

export function footer() {
  return `<footer class="site-footer">
    <div class="footer-cta">
      <div>
        <span class="eyebrow eyebrow--light">A considered relationship</span>
        <h2>Let’s discuss the care of your Arizona residence.</h2>
      </div>
      <a class="button button--light" href="/contact/">Schedule Your Consultation${arrow}</a>
    </div>
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        <a class="brand brand--footer" href="/"><img src="/assets/images/authentic/thwa-logo.png" width="2172" height="724" alt="The Home Watch Agency" loading="lazy" /></a>
        <p>Comprehensive Home Watch Services, Personalized Concierge Services, Vehicle Care Services, and Estate Management.</p>
        <address>${contact.city}<br /><a href="${phoneHref}">${contact.phone}</a><br /><a href="${emailHref}">${contact.email}</a></address>
      </div>
      <div><h3>Services</h3>${linkList(serviceLinks.slice(0, 6), "footer-links")}</div>
      <div><h3>The Agency</h3>${linkList([
        ["About", "/about/"], ["Benefits", "/benefits/"], ["FAQs", "/faqs/"], ["Pricing", "/pricing/"], ["Blog", "/blog/"], ["Contact", "/contact/"]
      ], "footer-links")}</div>
      <div><h3>Private Access</h3>${linkList(presentationLinks, "footer-links")}</div>
    </div>
    <div class="site-footer__base">
      <p>© ${new Date().getFullYear()} The Home Watch Agency. All rights reserved.</p>
      <p class="site-footer__trust">Fully insured &amp; bonded · National accreditation · Recurring professional development</p>
    </div>
  </footer>`;
}

export function button(label, href, variant = "fill") {
  return `<a class="button button--${variant}" href="${href}">${label}${arrow}</a>`;
}

export function pageHero({ eyebrow, title, intro, image, alt, align = "bottom", compact = false }) {
  return `<section class="page-hero${compact ? " page-hero--compact" : ""}" style="--hero-position:${align}">
    <img src="${image}" width="1800" height="1000" alt="${alt}" fetchpriority="high" />
    <div class="page-hero__veil"></div>
    <div class="page-hero__content wrap">
      <span class="eyebrow eyebrow--light">${eyebrow}</span>
      <h1>${title}</h1>
      ${intro ? `<p>${intro}</p>` : ""}
    </div>
  </section>`;
}

export function sectionHeading({ eyebrow, title, intro = "", align = "left" }) {
  return `<header class="section-heading section-heading--${align}" data-reveal>
    <span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${intro ? `<p>${intro}</p>` : ""}
  </header>`;
}

export function serviceIndex({ compact = false } = {}) {
  return `<div class="service-index${compact ? " service-index--compact" : ""}">${services
    .map((service) => `<article class="service-index__item" data-reveal>
      <a class="service-index__image image-frame" href="${service.href}" aria-label="Learn more about ${service.title}">
        <img src="${service.image}" width="1536" height="1024" alt="${service.alt}" loading="lazy" />
      </a>
      <div class="service-index__copy"><span class="service-number">${service.number}</span><h3>${service.title}</h3><p>${service.text}</p><a class="text-link" href="${service.href}">Learn more${arrow}</a></div>
    </article>`)
    .join("")}</div>`;
}

export function trustBand() {
  const items = [
    ["Experience", "25+ years working with exclusive clientele"],
    ["Protection", "Fully insured and bonded"],
    ["Professionalism", "National accreditation and recurring training"],
    ["Access", "Direct interaction with the firm’s Principals"],
  ];
  return `<section class="trust-band" aria-label="Firm credentials"><div class="wrap trust-band__grid">${items
    .map(([label, value]) => `<div><span>${label}</span><p>${value}</p></div>`)
    .join("")}</div></section>`;
}

export function consultationCta() {
  return `<section class="consultation-cta">
    <div class="consultation-cta__image"><img src="/assets/images/generated/arizona-estate-arrival-palms.webp" width="1448" height="1086" alt="Generated concept image of a warmly illuminated Arizona estate arrival" loading="lazy" /></div>
    <div class="consultation-cta__copy" data-reveal><span class="eyebrow">Thank you</span><h2>We look forward to hearing from you.</h2><p>Thank you in advance for your consideration of The Home Watch Agency as a trusted partner to assist with the care and responsibility for some of your most precious and personal investments.</p>${button("Schedule Your Consultation", "/contact/")}</div>
  </section>`;
}

export function longformSection({ id = "", eyebrow = "", title, paragraphs = [], aside = "", dark = false, className = "" }) {
  return `<section ${id ? `id="${id}"` : ""} class="longform-section${dark ? " longform-section--dark" : ""} ${className}"><div class="wrap longform-section__grid">
    <div class="longform-section__title" data-reveal>${eyebrow ? `<span class="eyebrow${dark ? " eyebrow--light" : ""}">${eyebrow}</span>` : ""}<h2>${title}</h2>${aside ? `<blockquote>${aside}</blockquote>` : ""}</div>
    <div class="prose" data-reveal>${paragraphs.map((p) => `<p>${p}</p>`).join("")}</div>
  </div></section>`;
}

export function detailGrid(items, { numbered = false } = {}) {
  return `<div class="detail-grid">${items.map((item, index) => `<article class="detail-card" data-reveal>${numbered ? `<span class="detail-card__number">${String(index + 1).padStart(2, "0")}</span>` : ""}<h3>${item.title}</h3>${Array.isArray(item.text) ? item.text.map((p) => `<p>${p}</p>`).join("") : `<p>${item.text}</p>`}</article>`).join("")}</div>`;
}

export function imageBreak({ src, alt, caption = "", position = "center" }) {
  return `<figure class="image-break" style="--image-position:${position}" data-reveal><img src="${src}" width="1800" height="1000" alt="${alt}" loading="lazy" />${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
}

export function galleryCarousel() {
  const slides = [
    ["gallery-arizona-great-room.webp", "An open Arizona great room with floor-to-ceiling mountain views", "Great room / mountain outlook"],
    ["gallery-arizona-bathroom.webp", "A limestone spa bathroom overlooking the Sonoran landscape", "Bath / quiet retreat"],
    ["gallery-arizona-bedroom.webp", "A serene Arizona bedroom with a desert mountain view", "Bedroom / desert light"],
    ["paradise-valley-estate-pool.webp", "A Paradise Valley estate framed by a quiet pool terrace", "Paradise Valley / pool terrace"],
    ["fountain-hills-estate-overlook.webp", "A Fountain Hills residence set against the Sonoran Desert", "Fountain Hills / desert outlook"],
    ["scottsdale-estate-pool-sunset.webp", "A Scottsdale estate pool glowing at the end of the day", "Scottsdale / evening arrival"],
  ];
  return `<section class="gallery-section" aria-labelledby="gallery-heading">
    <div class="wrap">
        <div class="gallery-section__heading" data-reveal><div><span class="eyebrow eyebrow--light">Gallery</span><h2 id="gallery-heading">Spaces with a sense of place.</h2></div><p>Generated concept imagery for the interiors, arrivals, and settings surrounding an Arizona residence.</p></div>
      <div class="gallery-carousel" data-gallery>
        <div class="gallery-carousel__viewport" data-gallery-viewport tabindex="0" aria-label="Arizona residence gallery">
          <div class="gallery-carousel__track">${slides.map(([file, alt, caption], index) => `<figure class="gallery-slide" data-gallery-slide><img src="/assets/images/generated/${file}" width="1448" height="1086" alt="${alt}" loading="lazy" /><figcaption><span>${String(index + 1).padStart(2, "0")}</span>${caption}</figcaption></figure>`).join("")}</div>
        </div>
        <div class="gallery-carousel__controls"><span class="gallery-carousel__status" data-gallery-status aria-live="polite">01 / ${String(slides.length).padStart(2, "0")}</span><div><button type="button" data-gallery-prev aria-label="Previous gallery image" disabled>← <span>Previous</span></button><button type="button" data-gallery-next aria-label="Next gallery image"> <span>Next</span> →</button></div></div>
      </div>
    </div>
  </section>`;
}

export function htmlDocument({ title, description, path, body, overlayHeader = false, preloadImage = "", noindex = false }) {
  const canonical = `https://thehomewatchagency.com${path}`;
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Home Watch Agency",
    url: "https://thehomewatchagency.com/",
    logo: "https://thehomewatchagency.com/wp-content/uploads/2022/12/Horizontal-Logo.jpg",
    telephone: "+1-480-487-0029",
    email: "Assist@TheHomeWatchAgency.com",
    address: { "@type": "PostalAddress", addressLocality: "Scottsdale", addressRegion: "AZ", postalCode: "85259", addressCountry: "US" },
    areaServed: ["Scottsdale", "North Scottsdale", "Paradise Valley", "Biltmore", "Arcadia", "Fountain Hills", "Phoenix"],
  });
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}" />
  <link rel="canonical" href="${canonical}" />
  <meta name="theme-color" content="#1b1d1d" />
  <link rel="icon" href="/assets/images/authentic/thwa-favicon.png" />
  ${preloadImage ? `<link rel="preload" as="image" href="${preloadImage}" type="image/webp" />` : ""}
  <link rel="stylesheet" href="/assets/styles.css" />
  <script type="application/ld+json">${structuredData}</script>
</head>
<body class="${overlayHeader ? "has-overlay-header" : ""}">
  ${header({ overlay: overlayHeader })}
  <main id="main-content">${body}</main>
  ${footer()}
  <script src="/assets/site.js" defer></script>
</body>
</html>`;
}

export const navData = { aboutLinks, benefitLinks, serviceLinks, presentationLinks };
