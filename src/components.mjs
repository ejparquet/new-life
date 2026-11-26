// Shared components: stacking scroll panels (used on Home, Ministries, Baptism, Next Steps, S.O.A.P.).
import { btn } from './layout.mjs';

// Brand-blue journey: sky → royal → navy → deep night.
const GRADIENTS = [
  'linear-gradient(135deg,#79B9EE 0%,#4F94D8 55%,#3F7FC4 100%)',
  'linear-gradient(135deg,#6A9FE8 0%,#4A7FD2 55%,#3767BC 100%)',
  'linear-gradient(135deg,#5A86E0 0%,#3D63C4 55%,#2C4FB0 100%)',
  'linear-gradient(135deg,#4A73D4 0%,#3456B6 55%,#2647A0 100%)',
  'linear-gradient(135deg,#3C62C8 0%,#2B4AA8 55%,#223D94 100%)',
  'linear-gradient(135deg,#2C4A9E 0%,#1F3479 55%,#182A63 100%)',
  'linear-gradient(135deg,#1F3270 0%,#15234F 55%,#0E1838 100%)',
];
const gradientFor = (i, n) => GRADIENTS[n <= 1 ? 0 : Math.round((i * (GRADIENTS.length - 1)) / (n - 1))];

const media = (p) => {
  if (p.quote) {
    return `<div class="panel-media panel-media--quote"><figure class="panel-quote"><blockquote>${p.quote[0]}</blockquote><figcaption>${p.quote[1]}</figcaption></figure></div>`;
  }
  if (p.glyph) {
    return `<div class="panel-media panel-media--glyph" aria-hidden="true"><span class="panel-glyph"${p.glyphSize ? ` style="font-size:${p.glyphSize}"` : ''}>${p.glyph}</span></div>`;
  }
  const imgs = p.imgs || [];
  const fig = (cls, [src, alt]) => `<figure class="pm ${cls}"><img src="${src}" alt="${alt}"></figure>`;
  if (imgs.length === 1) return `<div class="panel-media">${fig('pm-c', imgs[0])}</div>`;
  if (imgs.length === 2) return `<div class="panel-media">${fig('pm-l', imgs[0])}${fig('pm-c', imgs[1])}</div>`;
  return `<div class="panel-media">${fig('pm-l', imgs[0])}${fig('pm-r', imgs[2])}${fig('pm-c', imgs[1])}</div>`;
};

/**
 * @param {string} id   unique prefix for heading ids on the page
 * @param {Array<{key,title,text,stat?,cta?,imgs?,quote?,glyph?}>} items
 */
export function stackPanels(id, items) {
  return `
    <div class="stack" data-stack>
      ${items.map((p, i) => `
      <article class="panel" style="--panel-bg:${p.bg || gradientFor(i, items.length)};z-index:${i + 1}" aria-labelledby="${id}-${i}">
        <div class="panel-dots" aria-hidden="true"></div>
        <div class="panel-inner">
          <div class="panel-copy">
            <p class="panel-pill"><span>${String(i + 1).padStart(2, '0')}</span>${p.key}</p>
            <h3 id="${id}-${i}" class="panel-title">${p.title}</h3>
            <p class="panel-text">${p.text}</p>
            ${p.cta && p.cta.length ? `<div class="panel-ctas">${p.cta.map(([h, l], k) => btn(h, l, k ? 'outline-light' : 'light')).join('')}</div>` : ''}
            ${p.stat ? `<p class="panel-stat"><b>${p.stat[0]}</b>${p.stat[1]}</p>` : '<span class="panel-spacer"></span>'}
          </div>
          ${media(p)}
        </div>
        <div class="panel-dim" aria-hidden="true"></div>
      </article>`).join('')}
    </div>`;
}
