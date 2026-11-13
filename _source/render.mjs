// Renders _source/og-cards.html into the PNGs under assets/og/. Dev-only, not used by Hugo.
//   npm i -D playwright && node _source/render.mjs
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "assets", "og");
mkdirSync(join(out, "tiles"), { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ deviceScaleFactor: 1 });
await page.goto("file://" + join(here, "og-cards.html"));
await page.locator("#card-base").screenshot({ path: join(out, "card-base.png") });
// everything else is cut out: no page background behind it
await page.evaluate(() => { document.body.style.background = "transparent"; });
await page.locator("#strip").screenshot({ path: join(out, "strip.png"), omitBackground: true });
await page.locator("#favicon-base").screenshot({ path: join(out, "favicon-base.png"), omitBackground: true });
for (const colour of ["white", "red", "black"]) {
  for (let n = 0; n < 4; n++) {
    await page.locator(`.tile.${colour}.s${n}`).screenshot({ path: join(out, "tiles", `${colour}-${n}.png`), omitBackground: true });
  }
}
await browser.close();
console.log("assets/og rendered");
