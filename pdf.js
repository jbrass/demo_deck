import { createServer } from "vite";
import puppeteer from "puppeteer";

const PORT = 4173;
const URL = `http://localhost:${PORT}/?print-pdf`;

async function run() {
  // Start a Vite server in middleware mode (simple, no build step)
  const server = await createServer({
    server: { port: PORT, strictPort: true }
  });
  await server.listen();

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Wait for deck assets to load
  await page.goto(URL, { waitUntil: "networkidle0" });

  // Reveal print-mode prefers landscape + backgrounds
  await page.pdf({
    path: "deck.pdf",
    printBackground: true,
    landscape: true,
    preferCSSPageSize: true
  });

  await browser.close();
  await server.close();

  console.log("✅ Wrote deck.pdf");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
