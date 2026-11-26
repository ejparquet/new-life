import { execSync } from 'child_process';
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

let n = 1;
while (fs.existsSync(path.join(screenshotDir, `screenshot-${n}${label ? '-' + label : ''}.png`))) {
  n++;
}
const filename = `screenshot-${n}${label ? '-' + label : ''}.png`;
const outputPath = path.join(screenshotDir, filename);

// Find Chrome on macOS
const chromePaths = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
];
let executablePath;
for (const p of chromePaths) {
  if (fs.existsSync(p)) { executablePath = p; break; }
}

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 800));

// Force all initially-hidden elements visible (bypasses scroll-transition timing)
await page.evaluate(() => {
  document.querySelectorAll('.reveal, .kpi-tile, .anim-0, .anim-1, .anim-2, .anim-3, .anim-4, .float-card').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.transition = 'none';
  });
  const trendArea = document.getElementById('trend-area');
  if (trendArea) trendArea.style.opacity = '1';
  const trendLine = document.getElementById('trend-line');
  if (trendLine) { trendLine.style.strokeDasharray = 'none'; trendLine.style.strokeDashoffset = '0'; }
});

await page.screenshot({ path: outputPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: temporary screenshots/${filename}`);
