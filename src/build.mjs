// Generates every page of the site into the project root.  Run: npm run build
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { page, headTitles } from './layout.mjs';
import * as M from './pages-main.mjs';
import * as C from './pages-connect.mjs';
import * as N from './pages-ministries.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const pages = [
  M.home, M.planYourVisit, M.aboutUs, M.contact, M.events, ...M.eventPages,
  M.ourHistory, M.meetOurPastor, M.boardOfElders, M.visionValues, M.doctrinalBeliefs,
  C.team, C.prayer, C.prayerWall, C.becomeMember, C.nextSteps, C.baptism, C.lifeGroupReg, C.lifeGroups,
  C.memberSupport, C.sermonNotes, C.babyDedication, C.futureHome, C.loveNeighbor, C.leaderHub,
  N.ministries, N.kidzlife, N.youth, N.youngAdults, N.men, N.women, N.marriage, N.care,
  N.give, N.soap, N.holiday, N.leaderResources, N.parentResources, N.marketingForm,
];
pages.push(N.searchPage(pages));

for (const p of pages) fs.writeFileSync(path.join(root, p.slug), page(p));

// Old address for the pastor bio now lives on Meet Our Pastor
fs.writeFileSync(path.join(root, 'maurice-pugh.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Meet Our Pastor | New Life Fellowship</title>
<meta http-equiv="refresh" content="0; url=meet-our-pastor.html"><link rel="canonical" href="meet-our-pastor.html"><meta name="robots" content="noindex"></head>
<body style="background:#070B18;color:#fff;font-family:sans-serif"><p>This page has moved to <a href="meet-our-pastor.html" style="color:#7DC0EE">Meet Our Pastor</a>.</p></body></html>`);

// Verify every internal link resolves to a generated page or asset.
const slugs = new Set(pages.map((p) => p.slug));
const broken = [];
for (const p of pages) {
  const html = fs.readFileSync(path.join(root, p.slug), 'utf8');
  for (const [, href] of html.matchAll(/href="([^"#]+)/g)) {
    if (/^(https?:|mailto:|tel:)/.test(href) || href.includes("'")) continue;
    const file = href.split('?')[0];
    if (!slugs.has(file) && !fs.existsSync(path.join(root, file))) broken.push(`${p.slug} -> ${href}`);
  }
}
console.log(`Built ${pages.length} pages.`);
if (process.env.SHOW_TITLES) console.log([...headTitles].join(' | '));
if (broken.length) { console.log('Broken internal links:\n' + [...new Set(broken)].join('\n')); process.exitCode = 1; }
else console.log('All internal links resolve.');
