import { copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { homePage } from "./pages/home.mjs";
import { aboutPage } from "./pages/about.mjs";
import { benefitsPage } from "./pages/benefits.mjs";
import { faqPage } from "./pages/faqs.mjs";
import {
  basicServicePage,
  conciergeServicePage,
  personalizedServicePage,
  servicesPage,
  vehicleServicePage,
} from "./pages/services.mjs";
import {
  arrivingSoonPage,
  blogPage,
  clientOffersPage,
  contactPage,
  presentationPage,
  pricingPage,
} from "./pages/misc.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(projectRoot, "dist");
const rawBasePath = process.env.SITE_BASE_PATH?.trim() || "";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

if (basePath && !/^\/[a-zA-Z0-9._-]+$/.test(basePath)) {
  throw new Error(`Invalid SITE_BASE_PATH: ${rawBasePath}`);
}

const pages = new Map([
  ["/", homePage()],
  ["/about/", aboutPage()],
  ["/benefits/", benefitsPage()],
  ["/faqs/", faqPage()],
  ["/services/", servicesPage()],
  ["/services/basic/", basicServicePage()],
  ["/services/personalized/", personalizedServicePage()],
  ["/services/vehicle/", vehicleServicePage()],
  ["/services/concierge/", conciergeServicePage()],
  ["/pricing/", pricingPage()],
  ["/contact/", contactPage()],
  ["/client-services-offers/", clientOffersPage()],
  ["/client-services-offers/basic-pr/", presentationPage({ path: "/client-services-offers/basic-pr/", title: "Basic Presentation", servicePath: "/services/basic/" })],
  ["/client-services-offers/personalized-pr/", presentationPage({ path: "/client-services-offers/personalized-pr/", title: "Supplementary Presentation", servicePath: "/services/personalized/" })],
  ["/client-services-offers/vehicle-pr/", presentationPage({ path: "/client-services-offers/vehicle-pr/", title: "Vehicle Presentation", servicePath: "/services/vehicle/" })],
  ["/client-services-offers/concierge-pr/", presentationPage({ path: "/client-services-offers/concierge-pr/", title: "Concierge Presentation", servicePath: "/services/concierge/" })],
  ["/faq-pr/", presentationPage({ path: "/faq-pr/", title: "FAQ Presentation", servicePath: "/faqs/" })],
  ["/blog/", blogPage()],
  ["/arriving-soon/", arrivingSoonPage()],
]);

const assets = [
  "styles.css",
  "site.js",
  "images/authentic/thwa-logo.png",
  "images/authentic/thwa-favicon.png",
  "images/authentic/principals-rocky-point.webp",
  "images/authentic/gps-client-reporting.webp",
  "images/authentic/home-watch-academy.jpeg",
  "images/authentic/nhwa.jpeg",
  "images/authentic/ihwa.jpeg",
  "images/authentic/scottsdale-affiliation.png",
  "images/generated/arizona-luxury-estate-hero.webp",
  "images/generated/arizona-luxury-estate-sunset.webp",
  "images/generated/arizona-estate-arrival-palms.webp",
  "images/generated/fountain-hills-estate-overlook.webp",
  "images/generated/fountain-hills-luxury-estate.webp",
  "images/generated/paradise-valley-estate-arrival.webp",
  "images/generated/paradise-valley-estate-pool.webp",
  "images/generated/private-estate-gated-entry.webp",
  "images/generated/scottsdale-estate-driveway.webp",
  "images/generated/scottsdale-estate-entry.webp",
  "images/generated/scottsdale-estate-pool-sunset.webp",
  "images/generated/gallery-arizona-great-room.webp",
  "images/generated/gallery-arizona-bathroom.webp",
  "images/generated/gallery-arizona-bedroom.webp",
];

async function writePage(route, html) {
  const folder = route === "/" ? distRoot : path.join(distRoot, route.slice(1));
  await mkdir(folder, { recursive: true });
  const deployableHtml = basePath
    ? html.replace(/\b(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
    : html;
  await writeFile(path.join(folder, "index.html"), deployableHtml, "utf8");
}

async function copyAsset(relativePath) {
  const source = path.join(projectRoot, "assets", relativePath);
  const target = path.join(distRoot, "assets", relativePath);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(source, target);
}

await mkdir(distRoot, { recursive: true });
await Promise.all([...pages].map(([route, html]) => writePage(route, html)));
await Promise.all(assets.map(copyAsset));
await writeFile(path.join(distRoot, ".nojekyll"), "", "utf8");

console.log(`Built ${pages.size} routes and copied ${assets.length} optimized assets to dist/${basePath ? ` for ${basePath}` : ""}.`);
