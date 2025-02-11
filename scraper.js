const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://youtube.com", { waitUntil: "domcontentloaded" });

  const title = await page.title();
  console.log(`Page Title: ${title}`);

  await browser.close();
})();
