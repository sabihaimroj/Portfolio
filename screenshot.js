const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
