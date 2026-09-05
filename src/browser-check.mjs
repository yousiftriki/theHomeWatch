const routes = [
  "/", "/about/", "/benefits/", "/faqs/", "/services/", "/services/basic/",
  "/services/personalized/", "/services/vehicle/", "/services/concierge/", "/pricing/",
  "/contact/", "/client-services-offers/", "/client-services-offers/basic-pr/",
  "/client-services-offers/personalized-pr/", "/client-services-offers/vehicle-pr/",
  "/client-services-offers/concierge-pr/", "/faq-pr/", "/blog/", "/arriving-soon/",
];
const targets = await fetch("http://127.0.0.1:9222/json/list").then((response) => response.json());
const pageTarget = targets.find((target) => target.type === "page");
if (!pageTarget) throw new Error("No Chrome page target is available.");
const socket = new WebSocket(pageTarget.webSocketDebuggerUrl);
const pending = new Map();
const runtimeErrors = [];
let activeRoute = "startup";
let messageId = 0;

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.method === "Runtime.exceptionThrown") runtimeErrors.push(`${activeRoute}: ${message.params.exceptionDetails.text}`);
  if (message.method === "Log.entryAdded" && message.params.entry.level === "error") runtimeErrors.push(`${activeRoute}: ${message.params.entry.text}`);
  if (!message.id || !pending.has(message.id)) return;
  const task = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) task.reject(new Error(message.error.message));
  else task.resolve(message.result);
});

function command(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++messageId;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const result = await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  return result.result.value;
}

await command("Page.enable");
await command("Runtime.enable");
await command("Log.enable");

const failures = [];
for (const viewport of [{ width: 1440, height: 900, name: "desktop" }, { width: 390, height: 844, name: "mobile" }]) {
  await command("Emulation.setDeviceMetricsOverride", { width: viewport.width, height: viewport.height, deviceScaleFactor: 1, mobile: viewport.name === "mobile" });
  for (const route of routes) {
    activeRoute = `${viewport.name} ${route}`;
    await command("Page.navigate", { url: `http://127.0.0.1:4173${route}` });
    await new Promise((resolve) => setTimeout(resolve, 180));
    const audit = await evaluate(`(() => ({
      title: document.title,
      h1: document.querySelectorAll("h1").length,
      width: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
      viewport: window.innerWidth,
      missingImages: [...document.images].filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.src),
      missingAlt: [...document.images].filter((img) => !img.hasAttribute("alt")).length,
      header: Boolean(document.querySelector("[data-site-header]")),
      footer: Boolean(document.querySelector(".site-footer"))
    }))()`);
    if (audit.h1 !== 1) failures.push(`${activeRoute}: found ${audit.h1} h1 elements`);
    if (audit.width > audit.viewport) failures.push(`${activeRoute}: horizontal overflow ${audit.width}px > ${audit.viewport}px`);
    if (audit.missingImages.length) failures.push(`${activeRoute}: broken images ${audit.missingImages.join(", ")}`);
    if (audit.missingAlt) failures.push(`${activeRoute}: ${audit.missingAlt} images missing alt text`);
    if (!audit.header || !audit.footer) failures.push(`${activeRoute}: shared shell missing`);
    if (!audit.title) failures.push(`${activeRoute}: title missing`);
  }
}

await command("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
activeRoute = "mobile navigation";
await command("Page.navigate", { url: "http://127.0.0.1:4173/" });
await new Promise((resolve) => setTimeout(resolve, 200));
const mobileMenuState = await evaluate(`(() => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  toggle.click();
  const opened = toggle.getAttribute("aria-expanded") === "true" && !menu.hidden && document.body.classList.contains("menu-open");
  toggle.click();
  const closed = toggle.getAttribute("aria-expanded") === "false" && menu.hidden && !document.body.classList.contains("menu-open");
  return { opened, closed };
})()`);
if (!mobileMenuState.opened || !mobileMenuState.closed) failures.push("Mobile navigation did not open and close correctly");

await command("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
activeRoute = "desktop navigation";
await command("Page.navigate", { url: "http://127.0.0.1:4173/" });
await new Promise((resolve) => setTimeout(resolve, 200));
const desktopMenuState = await evaluate(`(() => {
  const trigger = document.querySelector("[data-nav-trigger]");
  trigger.click();
  const opened = trigger.getAttribute("aria-expanded") === "true" && trigger.closest(".nav-item").classList.contains("is-open");
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
  const closed = trigger.getAttribute("aria-expanded") === "false" && !trigger.closest(".nav-item").classList.contains("is-open");
  return { opened, closed };
})()`);
if (!desktopMenuState.opened || !desktopMenuState.closed) failures.push("Desktop navigation did not open and close correctly");

activeRoute = "contact interactions";
await command("Page.navigate", { url: "http://127.0.0.1:4173/contact/" });
await new Promise((resolve) => setTimeout(resolve, 200));
const contactState = await evaluate(`(() => {
  const message = document.querySelector("#message");
  message.value = "Test";
  message.dispatchEvent(new Event("input", { bubbles: true }));
  return { count: document.querySelector("[data-character-count]").textContent, max: message.maxLength, fields: document.querySelectorAll("[data-contact-form] input, [data-contact-form] textarea").length };
})()`);
if (contactState.count !== "4" || contactState.max !== 350 || contactState.fields !== 4) failures.push("Contact form enhancement did not match the preserved field set");

activeRoute = "gallery interactions";
await command("Page.navigate", { url: "http://127.0.0.1:4173/" });
await new Promise((resolve) => setTimeout(resolve, 200));
const galleryState = await evaluate(`(() => {
  const gallery = document.querySelector("[data-gallery]");
  const viewport = gallery?.querySelector("[data-gallery-viewport]");
  const slides = gallery?.querySelectorAll("[data-gallery-slide]");
  const next = gallery?.querySelector("[data-gallery-next]");
  return { present: Boolean(gallery && viewport && next), slides: slides?.length || 0, initial: gallery?.querySelector("[data-gallery-status]")?.textContent };
})()`);
if (!galleryState.present || galleryState.slides !== 6 || galleryState.initial !== "01 / 06") failures.push("Gallery carousel structure or initial status is incorrect");
await evaluate(`document.querySelector("[data-gallery-next]")?.click(); true`);
await new Promise((resolve) => setTimeout(resolve, 700));
const galleryAfterNext = await evaluate(`document.querySelector("[data-gallery-status]")?.textContent`);
if (galleryAfterNext !== "02 / 06") failures.push(`Gallery next control did not advance (status: ${galleryAfterNext})`);

socket.close();
if (runtimeErrors.length) failures.push(...runtimeErrors);
if (failures.length) {
  console.error(`Browser checks failed (${failures.length}):\n- ${failures.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log(`Browser checks passed for ${routes.length} routes at desktop and mobile widths; navigation and form interactions passed with no runtime errors.`);
}
