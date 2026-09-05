import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(projectRoot, "dist");
const rawBasePath = process.env.SITE_BASE_PATH?.trim() || "";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");
const routes = [
  "/", "/about/", "/benefits/", "/faqs/", "/services/", "/services/basic/",
  "/services/personalized/", "/services/vehicle/", "/services/concierge/", "/pricing/",
  "/contact/", "/client-services-offers/", "/client-services-offers/basic-pr/",
  "/client-services-offers/personalized-pr/", "/client-services-offers/vehicle-pr/",
  "/client-services-offers/concierge-pr/", "/faq-pr/", "/blog/", "/arriving-soon/",
];
const routeSet = new Set(routes);
const failures = [];

function routeFile(route) {
  return route === "/" ? path.join(distRoot, "index.html") : path.join(distRoot, route.slice(1), "index.html");
}

for (const route of routes) {
  const file = routeFile(route);
  try {
    const html = await readFile(file, "utf8");
    const h1Count = (html.match(/<h1\b/g) || []).length;
    if (h1Count !== 1) failures.push(`${route}: expected one h1, found ${h1Count}`);
    if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${route}: missing title`);
    if (!/<meta name="description" content="[^"]+"/.test(html)) failures.push(`${route}: missing meta description`);
    if (!/<link rel="canonical" href="https:\/\/thehomewatchagency\.com/.test(html)) failures.push(`${route}: missing canonical URL`);
    for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
      const deployedTarget = match[1];
      if (basePath && !deployedTarget.startsWith(`${basePath}/`)) {
        failures.push(`${route}: internal URL is missing Pages base path: ${deployedTarget}`);
        continue;
      }
      const target = basePath ? deployedTarget.slice(basePath.length) : deployedTarget;
      if (target.startsWith("/assets/")) {
        try { await access(path.join(distRoot, target.slice(1))); }
        catch { failures.push(`${route}: missing asset ${target}`); }
      } else if (target.endsWith("/") && !routeSet.has(target)) {
        failures.push(`${route}: unresolved internal route ${target}`);
      }
    }
    for (const image of html.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt="[^"]*"/.test(image[0])) failures.push(`${route}: image missing alt attribute`);
    }
  } catch (error) {
    failures.push(`${route}: ${error.message}`);
  }
}

const imagePaths = [
  "arizona-luxury-estate-hero.webp", "arizona-luxury-estate-sunset.webp", "arizona-estate-arrival-palms.webp",
  "fountain-hills-estate-overlook.webp", "fountain-hills-luxury-estate.webp", "paradise-valley-estate-arrival.webp",
  "paradise-valley-estate-pool.webp", "private-estate-gated-entry.webp", "scottsdale-estate-driveway.webp",
  "scottsdale-estate-entry.webp", "scottsdale-estate-pool-sunset.webp",
];
for (const image of imagePaths) {
  const info = await stat(path.join(distRoot, "assets/images/generated", image));
  if (info.size > 300_000) failures.push(`${image}: optimized asset is larger than 300 KB`);
}

if (failures.length) {
  console.error(`Quality checks failed (${failures.length}):\n- ${failures.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log(`Quality checks passed for ${routes.length} routes.`);
}
