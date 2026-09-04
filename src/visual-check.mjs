import { writeFile } from "node:fs/promises";

const [url = "http://127.0.0.1:4173/", output = "/tmp/thwa-full.png", widthArg = "1440", heightArg = "900", mode = "full"] = process.argv.slice(2);
const width = Number(widthArg);
const height = Number(heightArg);
const targets = await fetch("http://127.0.0.1:9222/json/list").then((response) => response.json());
const pageTarget = targets.find((target) => target.type === "page");
if (!pageTarget) throw new Error("No Chrome page target is available.");
const socket = new WebSocket(pageTarget.webSocketDebuggerUrl);
const pending = new Map();
const browserErrors = [];
let messageId = 0;

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.method === "Runtime.exceptionThrown") browserErrors.push(message.params.exceptionDetails.text);
  if (message.method === "Log.entryAdded" && ["error", "warning"].includes(message.params.entry.level)) browserErrors.push(message.params.entry.text);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function command(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++messageId;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

await command("Page.enable");
await command("Runtime.enable");
await command("Log.enable");
await command("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768 });
await command("Page.navigate", { url });
await new Promise((resolve) => setTimeout(resolve, 1400));
if (mode === "mobile-menu") {
  await command("Runtime.evaluate", { expression: `document.querySelector("[data-menu-toggle]")?.click()` });
  await new Promise((resolve) => setTimeout(resolve, 300));
}
const evaluation = await command("Runtime.evaluate", {
  expression: `(async () => {
    document.body.classList.remove("reveal-ready");
    [...document.images].forEach((img) => { img.loading = "eager"; });
    window.scrollTo(0, document.body.scrollHeight);
    await Promise.race([
      Promise.all([...document.images].map((img) => img.complete ? Promise.resolve() : new Promise((resolve) => { img.addEventListener("load", resolve, { once: true }); img.addEventListener("error", resolve, { once: true }); }))),
      new Promise((resolve) => setTimeout(resolve, 5000))
    ]);
    window.scrollTo(0, 0);
    return {
      width: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
      height: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
    };
  })()`,
  awaitPromise: true,
  returnByValue: true,
});
const dimensions = evaluation.result.value;
const screenshot = await command("Page.captureScreenshot", {
  format: "png",
  captureBeyondViewport: true,
  clip: { x: 0, y: 0, width, height: mode === "mobile-menu" ? height : dimensions.height, scale: 1 },
});
await writeFile(output, Buffer.from(screenshot.data, "base64"));
socket.close();
console.log(JSON.stringify({ url, output, viewport: { width, height }, document: dimensions, horizontalOverflow: dimensions.width > width, browserErrors }));
