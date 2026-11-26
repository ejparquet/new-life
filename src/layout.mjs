import { STYLES } from './styles.mjs';
// Shared layout for every page: <head>, styles, header with mega menus, footer, scripts.

export const SITE = 'https://www.nlifefellowship.org';
export const CDN = 'https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/';
export const img = (path, w = 1000) => `${path.startsWith('http') ? path : CDN + path}?format=${w}w`;
export const pdf = (name) => `${SITE}/s/${name}`;

export const LINKS = {
  watch: 'https://new-life-fellowship-3.sermoncloud.com/live',
  give: 'https://forms.fellowshipone.com?formId=71a63a41-6d77-4c96-911d-3d8992fa3ec6',
  map: 'https://www.google.com/maps/place/New+Life+Fellowship/@32.6463838,-97.1160754,17z/data=!3m1!4b1!4m5!3m4!1s0x864e626749280847:0xdc6245d8da64c31!8m2!3d32.6463793!4d-97.1138867?hl=en',
  login: 'https://newlifefellowship.fellowshiponego.com/user/login',
  careers: 'https://nlifefellowship.bamboohr.com/careers',
  bookstore: 'https://www.nlbookstore.com',
  facebook: 'http://www.facebook.com/nlifefellowship',
  instagram: 'http://instagram.com/nlifefellowship',
  twitter: 'http://twitter.com/nlifefellowship',
  youtube: 'http://youtube.com/nlifefellowship',
  prayerForm: 'https://newlifefellowship.fellowshiponego.com/external/form/669c6502-c563-4883-9322-2a2b904705b6',
  memberClass: 'https://forms.fellowshipone.com?formId=63dbfe51-7ce4-4664-b043-0c34b7373b2b',
};

// Navigation — mirrors the original site's menus exactly.
export const NAV = [
  { label: "I'm New", groups: [{ links: [
    ['Plan Your Visit', 'plan-your-visit.html'],
    ['About Us', 'about-us.html'],
    ['Contact Us', 'contact.html'],
    ['Events', 'events.html'],
  ] }] },
  { label: 'About Us', groups: [{ links: [
    ['Our History', 'our-history.html'],
    ['Meet Our Pastor', 'meet-our-pastor.html'],
    ['Board of Elders', 'board-of-elders.html'],
    ['Our Team', 'executive-staff.html'],
    ['Our Vision & Values', 'our-vision-values.html'],
    ['Doctrinal Beliefs', 'doctrinal-beliefs.html'],
  ] }] },
  { label: 'Connect', wide: true, groups: [
    { title: 'Grow', links: [
      ['Take the Next Step', 'nextsteps.html'],
      ['Get Baptized', 'baptism.html'],
      ['Become a Member', 'become-a-member.html'],
      ['Join a Life Group', 'life-group-registration.html'],
      ['Sermon Notes', 'sermonnotes.html'],
      ['Baby Dedication', 'nlfbabydedication.html'],
    ] },
    { title: 'Pray & find care', links: [
      ['Prayer', 'prayer.html'],
      ['Prayer Wall', 'nlfprayerwall.html'],
      ['Member Support', 'member-support.html'],
    ] },
    { title: 'Serve & build', links: [
      ['Ministries', 'ministries.html'],
      ['Love Your Neighbor', 'loveyourneighbor.html'],
      ['Our Future Home', 'ourfuturehome.html'],
      ['NLF Leadership', 'leadervolunteer-hub.html'],
    ] },
  ] },
  { label: 'Events', groups: [{ links: [['Upcoming Events', 'events.html']] }] },
  { label: 'Give', groups: [{ links: [['Give', 'give.html'], ['Our Future Home', 'ourfuturehome.html']] }] },
];

const ext = (href) => /^(https?:|mailto:|tel:)/.test(href);
export const a = (href, label, cls = 'link') =>
  `<a href="${href}" class="${cls}"${ext(href) && !href.startsWith('mailto:') && !href.startsWith('tel:') ? ' target="_blank" rel="noopener"' : ''}>${label}</a>`;
export const btn = (href, label, variant = 'primary') => a(href, `<span>${label}</span>`, `btn btn-${variant}`);

const icon = {
  search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  chev: '<svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  play: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
  facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8V6.5c0-.7.5-1 1-1h2V2h-3c-3 0-4 2-4 4.3V8H8v3.5h2V22h4V11.5h2.7L17 8z"/></svg>',
  instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  twitter: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9L1 2h7l4.8 6.4zm-1.2 18h1.9L7.1 4H5.1z"/></svg>',
  youtube: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.7 3.1z"/></svg>',
};
export { icon };

function headerHTML(current) {
  const desktop = NAV.map((item, i) => {
    const isCur = item.groups.some((g) => g.links.some((l) => l[1] === current));
    const cols = item.groups.map((g) => `
        <div>${g.title ? `<p class="menu-group-title">${g.title}</p>` : ''}
          ${g.links.map(([t, h]) => `<a class="menu-link" href="${h}"${h === current ? ' aria-current="page"' : ''}>${t}</a>`).join('')}
        </div>`).join('');
    return `
    <li class="relative" data-menu>
      <button class="nav-btn${isCur ? ' is-current' : ''}" aria-expanded="false" aria-controls="menu-${i}">${item.label}${icon.chev}</button>
      <div id="menu-${i}" class="menu-panel surface-float${item.wide ? ' wide' : ''}">
        <div class="${item.wide ? 'grid grid-cols-3 gap-2' : 'grid'}">${cols}</div>
      </div>
    </li>`;
  }).join('');

  const mobile = NAV.map((item, i) => `
    <div class="hair">
      <button class="acc-btn" aria-expanded="false" aria-controls="m-acc-${i}">${item.label}${icon.chev}</button>
      <div id="m-acc-${i}" class="acc-body">
        ${item.groups.map((g) => `${g.title ? `<p class="menu-group-title" style="padding-left:0">${g.title}</p>` : ''}${g.links.map(([t, h]) => `<a class="menu-link" style="padding-left:0" href="${h}">${t}</a>`).join('')}`).join('')}
      </div>
    </div>`).join('');

  return `
<a href="#main" class="skip ui">Skip to content</a>
<div class="announce">
  <div class="wrap flex items-center justify-center gap-3 py-2 text-center">
    <span>Hope For The Holidays starts November 21.</span>
    <a href="nlfholidayseason.html" class="link" style="color:#fff">See how to help</a>
  </div>
</div>
<header class="site-header">
  <div class="wrap flex items-center justify-between gap-4 h-[76px]">
    <a href="index.html" class="logo-link" aria-label="New Life Fellowship home">
      <img src="brand_assets/logo-white.png" alt="New Life Fellowship" class="h-10 w-auto md:h-11">
    </a>
    <nav aria-label="Main" class="hidden lg:block">
      <ul class="flex items-center gap-1">${desktop}</ul>
    </nav>
    <div class="flex items-center gap-2">
      <a href="search.html" class="icon-btn" aria-label="Search the site">${icon.search}</a>
      <a href="${LINKS.watch}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm hidden md:inline-flex"><span>${icon.play}</span><span>Watch Online</span></a>
      <a href="plan-your-visit.html" class="btn btn-primary btn-sm hidden sm:inline-flex"><span>Plan Your Visit</span></a>
      <button class="icon-btn lg:hidden" id="open-drawer" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10"/></svg>
      </button>
    </div>
  </div>
  <span class="scroll-progress" aria-hidden="true"></span>
</header>
<div id="drawer" class="drawer" role="dialog" aria-modal="true" aria-label="Menu">
  <div class="wrap flex items-center justify-between h-[76px]">
    <a href="index.html" class="logo-link"><img src="brand_assets/logo-white.png" alt="New Life Fellowship" class="h-10 w-auto"></a>
    <button class="icon-btn" id="close-drawer" aria-label="Close menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
    </button>
  </div>
  <div class="wrap pb-10">
    ${mobile}
    <div class="hair pt-6 grid gap-3">
      <a href="plan-your-visit.html" class="btn btn-primary"><span>Plan Your Visit</span></a>
      <a href="${LINKS.watch}" target="_blank" rel="noopener" class="btn btn-ghost"><span>${icon.play}</span><span>Watch Online</span></a>
      <a href="give.html" class="btn btn-ghost"><span>Give</span></a>
    </div>
  </div>
</div>`;
}

function footerHTML() {
  const col = (title, links) => `<div><h4>${title}</h4><ul class="grid gap-1">${links.map(([t, h]) => `<li>${a(h, t, 'f')}</li>`).join('')}</ul></div>`;
  return `
<footer class="site-footer">
  <div class="wrap pt-16 pb-10">
    <div class="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
      <div>
        <a href="index.html" class="logo-link"><img src="brand_assets/logo-white.png" alt="New Life Fellowship" class="h-12 w-auto"></a>
        <p class="mt-6 text-[1.05rem] leading-relaxed">201 E. Sublett Road<br>Arlington, TX 76018</p>
        <p class="mt-3">${a(LINKS.map, 'Get directions', 'link')}</p>
        <p class="mt-5 ui text-sm">Saturday 5:00 pm<br>Sunday 8:15 am, 10:00 am &amp; 11:45 am</p>
        <p class="mt-5 ui text-sm"><a href="tel:+18174698224" class="f">(817) 469-8224</a><br>Office: Monday – Friday, 8:30 am – 5:00 pm</p>
        <div class="flex gap-3 mt-6">
          <a class="social" href="${LINKS.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon.facebook}</a>
          <a class="social" href="${LINKS.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon.instagram}</a>
          <a class="social" href="${LINKS.twitter}" target="_blank" rel="noopener" aria-label="X (Twitter)">${icon.twitter}</a>
          <a class="social" href="${LINKS.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${icon.youtube}</a>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        ${col('About', [['About Us', 'about-us.html'], ['Vision & Values', 'our-vision-values.html'], ['Doctrinal Beliefs', 'doctrinal-beliefs.html'], ['Pastor Maurice Pugh', 'meet-our-pastor.html'], ['Our Team', 'executive-staff.html']])}
        ${col('Get involved', [['Ministries', 'ministries.html'], ['Life Groups', 'life-groups.html'], ['Membership', 'become-a-member.html'], ['Care', 'care.html'], ['Events', 'events.html']])}
        ${col('Resources', [['Leader Resources', 'leader-resources.html'], ['Parent Resources', 'parent-resources.html'], ['Marketing Request Form', 'marketing-request-form.html'], ['S.O.A.P. Devotional', 'soap.html'], ['Sermon Notes', 'sermonnotes.html']])}
        ${col('More', [['Give', 'give.html'], ['Watch Online', LINKS.watch], ['NL Bookstore', LINKS.bookstore], ['Member Login', LINKS.login], ['Careers', LINKS.careers], ['Contact Us', 'contact.html']])}
      </div>
    </div>
    <div class="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between ui text-sm">
      <p>© ${new Date().getFullYear()} New Life Fellowship · Dr. Maurice Pugh, Senior Pastor</p>
      <p>Love God. Love People.</p>
    </div>
  </div>
</footer>`;
}

const SCRIPT = `
(() => {
  const menus = [...document.querySelectorAll('[data-menu]')];
  const closeAll = (except) => menus.forEach(m => { if (m === except) return;
    m.querySelector('.nav-btn').setAttribute('aria-expanded','false'); m.querySelector('.menu-panel').classList.remove('open'); });
  const hoverable = matchMedia('(hover:hover)').matches;
  menus.forEach(m => {
    const b = m.querySelector('.nav-btn'), p = m.querySelector('.menu-panel'); let t;
    let openedAt = 0;
    const open = () => { clearTimeout(t); if (b.getAttribute('aria-expanded') !== 'true') openedAt = Date.now(); closeAll(m); b.setAttribute('aria-expanded','true'); p.classList.add('open'); };
    const close = () => { b.setAttribute('aria-expanded','false'); p.classList.remove('open'); };
    b.addEventListener('click', () => (b.getAttribute('aria-expanded') === 'true' && Date.now() - openedAt > 450) ? close() : open());
    if (hoverable) { m.addEventListener('mouseenter', open); m.addEventListener('mouseleave', () => { t = setTimeout(close, 160); }); }
    m.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); b.focus(); } });
  });
  document.addEventListener('click', e => { if (!e.target.closest('[data-menu]')) closeAll(); });

  const d = document.getElementById('drawer'), ob = document.getElementById('open-drawer'), cb = document.getElementById('close-drawer');
  const setD = (o) => { d.classList.toggle('open', o); ob.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; if (o) cb.focus(); else ob.focus(); };
  ob && ob.addEventListener('click', () => setD(true));
  cb && cb.addEventListener('click', () => setD(false));
  d && d.addEventListener('keydown', e => { if (e.key === 'Escape') setD(false); });
  document.querySelectorAll('.acc-btn').forEach(b => b.addEventListener('click', () => {
    const o = b.getAttribute('aria-expanded') !== 'true'; b.setAttribute('aria-expanded', o);
    document.getElementById(b.getAttribute('aria-controls')).classList.toggle('open', o); }));

  // Tabs
  document.querySelectorAll('[role="tablist"]').forEach(list => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];
    const select = (t) => { tabs.forEach(x => { const s = x === t; x.setAttribute('aria-selected', s); x.tabIndex = s ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !s; }); };
    tabs.forEach((t, i) => { t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => { const n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (n) { const nt = tabs[(i + n + tabs.length) % tabs.length]; nt.focus(); select(nt); } }); });
  });

  // Bio dialogs
  document.querySelectorAll('[data-dialog]').forEach(b => b.addEventListener('click', () => document.getElementById(b.dataset.dialog).showModal()));
  document.querySelectorAll('dialog').forEach(dl => {
    dl.addEventListener('click', e => { if (e.target === dl) dl.close(); });
    dl.querySelectorAll('[data-close]').forEach(c => c.addEventListener('click', () => dl.close()));
  });


  // ================= Motion system =================
  document.documentElement.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const main = document.getElementById('main');
  const skip = (el) => el.closest('.hero, .panel, dialog, form, .drawer, .menu-panel, .dial-section');

  // Split text nodes into word spans (keeps inline elements intact).
  const splitWords = (el, cls, inner) => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    let i = 0;
    nodes.forEach((n) => {
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
        const w = document.createElement('span'); w.className = cls;
        if (inner) { const s = document.createElement('span'); s.className = inner; s.style.setProperty('--wi', i); s.textContent = part; w.appendChild(s); }
        else { w.textContent = part; w.style.setProperty('--wi', i); }
        frag.appendChild(w); i++;
      });
      n.parentNode.replaceChild(frag, n);
    });
    return i;
  };

  if (!reduce && main) {
    const tag = (el, kind, delay) => { if (!el || el.dataset.reveal || skip(el)) return; el.dataset.reveal = kind; if (delay) el.style.setProperty('--d', delay + 's'); };

    // Page header: staged entrance
    const head = main.querySelector('.page-head');
    if (head) {
      tag(head.querySelector('.crumbs'), 'rise', 0);
      tag(head.querySelector('h1'), 'title', 0.08);
      tag(head.querySelector('.lede'), 'rise', 0.22);
      tag(head.querySelector('.photo'), 'photo', 0.16);
    }
    // Section headings: word-by-word mask reveal
    main.querySelectorAll('h2').forEach((h) => { if (skip(h) || h.closest('.page-head')) return; splitWords(h, 'w', 'wi'); tag(h, 'words'); });
    // Ledes and prose
    main.querySelectorAll('.section .lede, .section .prose-nl > p').forEach((el) => tag(el, 'rise'));
    // Grid children: staggered flow
    document.querySelectorAll('#main .grid, .site-footer .grid, .mgrid').forEach((g) => {
      if (skip(g)) return;
      [...g.children].forEach((c, i) => { if (c.tagName === 'DIALOG' || c.tagName === 'SCRIPT') return; tag(c, c.classList.contains('photo') ? 'photo' : 'item', Math.min(i % 6, 5) * 0.08); });
    });
    // Rows, FAQs, list items: slide in
    main.querySelectorAll('details.faq, ol > li.hair, ul > li.hair, .tile.hair, .section .flex > .pill').forEach((el) => {
      const i = [...el.parentNode.children].indexOf(el); tag(el, 'slide', Math.min(i, 6) * 0.06);
    });
    // Standalone photos and surfaces
    main.querySelectorAll('.photo, .surface, .surface-raised, .surface-float, figure').forEach((el) => tag(el, el.classList.contains('photo') ? 'photo' : 'rise'));
    // Stack sections fade up as a whole (panels themselves stay sticky)
    main.querySelectorAll('[data-stack]').forEach((el) => tag(el.parentElement, 'rise'));

    const revealed = (el) => {
      el.classList.add('in');
      const done = () => { el.removeAttribute('data-reveal'); el.classList.remove('in'); el.style.removeProperty('--d'); };
      setTimeout(done, 1500 + (parseFloat(el.style.getPropertyValue('--d')) || 0) * 1000 + (el.querySelectorAll('.wi').length * 55));
    };
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); revealed(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

    // Parallax photos (large ones only)
    main.querySelectorAll('.photo').forEach((p) => { if (!p.closest('.hero, dialog') && p.offsetHeight >= 240) p.setAttribute('data-parallax', ''); });

    // Scripture & quotes light up word by word as you read
    main.querySelectorAll('blockquote').forEach((q) => { if (q.textContent.trim().length > 60 && !q.closest('.panel, dialog')) { q.dataset.scrub = splitWords(q, 'sw'); } });

    // Count-up stats
    const cio = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return; cio.unobserve(e.target);
      const el = e.target, end = +el.dataset.count, t0 = performance.now();
      const step = (t) => { const k = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }), { threshold: 0.6 });
    document.querySelectorAll('.panel-stat b').forEach((b) => { if (/^\\d+$/.test(b.textContent.trim()) && +b.textContent > 1) { b.dataset.count = b.textContent.trim(); b.textContent = '0'; cio.observe(b); } });

    // Magnetic buttons + 3D tilt tiles (mouse only)
    if (finePointer) {
      document.querySelectorAll('.btn').forEach((b) => {
        b.addEventListener('pointermove', (e) => { const r = b.getBoundingClientRect();
          b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1) + 'px');
          b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1) + 'px'); });
        b.addEventListener('pointerleave', () => { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
      });
      document.querySelectorAll('#main .tile').forEach((t) => {
        if (t.closest('.panel')) return;
        t.addEventListener('pointermove', (e) => { const r = t.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          t.style.setProperty('--ry', (x * 5).toFixed(2) + 'deg'); t.style.setProperty('--rx', (-y * 5).toFixed(2) + 'deg'); });
        t.addEventListener('pointerleave', () => { t.style.setProperty('--ry', '0deg'); t.style.setProperty('--rx', '0deg'); });
      });
    }
  }

  // One scroll loop: progress bar, stacking panels, parallax, scripture scrub
  const bar = document.querySelector('.scroll-progress');
  const panels = [...document.querySelectorAll('[data-stack] .panel')];
  const para = [...document.querySelectorAll('[data-parallax]')];
  const scrubs = [...document.querySelectorAll('blockquote[data-scrub]')].map((q) => ({ q, words: [...q.querySelectorAll('.sw')] }));
  const headerH = () => (document.querySelector('.site-header') || { offsetHeight: 76 }).offsetHeight;
  const fitPanels = () => panels.forEach((p) => {
    const want = headerH() + (innerWidth < 900 ? 12 : 24);
    p.style.top = Math.min(want, innerHeight - p.offsetHeight - 12) + 'px';  // tall panels scroll fully, then stick
  });
  let ticking = false;
  const frame = () => {
    ticking = false;
    const vh = innerHeight, max = document.documentElement.scrollHeight - vh;
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, scrollY / max) : 0).toFixed(4) + ')';
    if (reduce) return;
    panels.forEach((p, i) => {
      const next = panels[i + 1]; if (!next || next.parentNode !== p.parentNode) return;
      const prog = Math.min(1, Math.max(0, 1 - (next.getBoundingClientRect().top - parseFloat(p.style.top || 0)) / p.offsetHeight));
      p.style.transform = 'scale(' + (1 - prog * 0.07).toFixed(4) + ')';
      const dim = p.querySelector('.panel-dim'); if (dim) dim.style.opacity = (prog * 0.55).toFixed(3);
    });
    para.forEach((p) => {
      const r = p.getBoundingClientRect(); if (r.bottom < -50 || r.top > vh + 50) return;
      const k = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);   // -1..1
      p.style.setProperty('--py', (k * -Math.min(48, r.height * 0.06)).toFixed(1) + 'px');
    });
    scrubs.forEach(({ q, words }) => {
      const r = q.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return;
      const prog = Math.min(1, Math.max(0, (vh * 0.88 - r.top) / (vh * 0.88 - vh * 0.38 + r.height * 0.6)));
      const lit = prog * words.length;
      words.forEach((w, i) => { w.style.opacity = (0.22 + 0.78 * Math.min(1, Math.max(0, lit - i))).toFixed(2); });
    });
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { fitPanels(); onScroll(); });
  fitPanels(); frame();


  // Motion backgrounds: pause/play toggle, honour reduced motion, pause when offscreen
  document.querySelectorAll('[data-video-toggle]').forEach((tb) => {
    const sec = tb.closest('section'); if (!sec) return;
    const vids = [...sec.querySelectorAll('video[data-hero-video]')];
    let userPaused = false;
    const set = (paused) => { vids.forEach((v) => paused ? v.pause() : v.play().catch(() => {}));
      tb.setAttribute('aria-pressed', paused); tb.setAttribute('aria-label', paused ? 'Play background video' : 'Pause background video'); };
    if (reduce) { userPaused = true; set(true); }
    tb.addEventListener('click', () => { userPaused = tb.getAttribute('aria-pressed') !== 'true'; set(userPaused); });
    new IntersectionObserver(([e]) => { if (!userPaused) vids.forEach((v) => e.isIntersecting ? v.play().catch(() => {}) : v.pause()); }).observe(sec);
  });

  // mailto forms
  document.querySelectorAll('form[data-mailto]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault(); const fd = new FormData(f); const subj = f.dataset.subject || 'Website message';
    const body = [...fd.entries()].map(([k, v]) => k + ': ' + v).join('\\n');
    window.location.href = 'mailto:' + f.dataset.mailto + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
    const ok = f.querySelector('[data-ok]'); if (ok) ok.hidden = false;
  }));
})();
`;

export function page({ slug, title, description = '', body, extraHead = '' }) {
  const fullTitle = slug === 'index.html' ? 'New Life Fellowship | Dr. Maurice Pugh, Senior Pastor' : `${title} | New Life Fellowship`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#070B18">
<title>${fullTitle}</title>
<meta name="description" content="${description || 'New Life Fellowship in Arlington, Texas — a place where we love God and love people. Saturday 5pm and Sunday 8:15am, 10:00am & 11:45am.'}">
<link rel="icon" href="brand_assets/nl-mark.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..600&family=Lexend:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>tailwind.config={corePlugins:{preflight:true}}</script>
<style>${STYLES}</style>
${extraHead}
</head>
<body>
${headerHTML(slug)}
<main id="main">
${body}
</main>
${footerHTML()}
<script>${SCRIPT}</script>
</body>
</html>`;
}

// Interior page header
// Header photo for pages that don't pass their own (keyed by page title).
// Banner ("Intro") image from each page on the original nlifefellowship.org. These take priority.
const ORIGINAL_HERO = {
  "Get Baptized": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1610666605419-11WN2EH789LUWPDKUBVF/baptism.jpg", "An outdoor baptism in a lake"],
  "Become a Member": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1612397289794-6QD8K1NO2EBTR5W1PELO/DSC_0409.jpg", "People gathered on the New Life stage after a service"],
  "Board of Elders": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1601344550846-2VKGN9PFZLBMSSOYEHO8/DSC_0424.jpg", "New Life elders standing together on stage"],
  "Care Ministry": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1612394661755-3WIBUQV0C4OLNJ0FYMMG/Care+photo+2.jpg", "A care ministry visit with a gift basket"],
  "Meet the New Life Team": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/f5de8743-386d-4cb1-b185-39c94d8ec29a/Large+Group+Photo.jpg", "The New Life staff"],
  "KidzLife Ministry": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1610059885063-YHAFPVGKQEA2FRX4CLGV/DSC_0405.jpg", "KidzLife children gathered together"],
  "Leaders & Volunteer Hub": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1648421387380-I6CTNY4XLELDQK3K3XGQ/B08A0117-min.jpg", "A volunteer running a camera during a service"],
  "Connecting in community": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1612398761382-VSU18671VH6JXP9U4Z7B/39062.jpeg", "A group of young adults at New Life"],
  "Love Your Neighbor": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/8237ff32-5f83-4dfc-ac2f-e9acea1ab8e0/LOVE+YOUR+NEIGHBOR+final+sermon+graphic.png", "Love Your Neighbor sermon series graphic"],
  "As One Marriage Ministry": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1611251664188-D7ESWS6BNLX7TG3RL1J2/marriage+ministry+.jpg", "Couples at a marriage ministry gathering"],
  "Dr. Maurice Pugh": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1600571932456-P47G41HQA52Q1O6YZZ5Y/dr-maurice-pugh.jpg", "Dr. Maurice Pugh preaching"],
  "MAN UP": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1601346772913-K3DRLJDN83YS835HVFIW/DSC_0732.jpg", "Men of New Life gathered together"],
  "Take the Next Step": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1612397650730-3MYETHYHI8A42JWVNLQ4/DSC_0396.jpg", "People responding during a worship service"],
  "Baby Dedication Parent Orientation": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1711474261269-3BHBDDA8EHQFC1YN3M08/baby_dedication-PSD.png", "Baby dedication: committing our children to the Lord"],
  "Holiday season is upon us!": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1729718957279-626CFGP1E61VPRUTWDBW/1-1.jpg", "A holiday dinner table"],
  "Prayer Wall": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1682622774192-9FYE98MO8TWH3PF8WMLN/jack-sharp-OptEsFuZwoQ-unsplash.jpg", "A man praying"],
  "Our History": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1610062295888-N28B3VUK6KPTLBDNXFA4/P1010171.jpg", "An early New Life gathering in a meeting room"],
  "Our Vision & Values": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1611731150653-1D07LGX4BIR1EQER5Y24/DSC_0335.jpg", "The congregation worshipping with hands raised"],
  "Our Future Home": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/9307dc75-f50c-44e1-a3b7-5ec52c92bc0f/future+home.jpg", "New Life Fellowship Future Home graphic"],
  "We believe in the power of prayer": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1601384597630-SLE7YU9TLEDI8QLVOAQJ/DSC_0316.jpg", "Leaders praying on stage"],
  "Sermon Notes": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1723223352890-G97U4XK9OAI09DNMCTSD/App+Section+Templates+%2831%29.png", "An open Bible"],
  "What is S.O.A.P.?": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1611735022384-D8YWGMFT3C2H9GOTEK3A/Soap+photo.png", "An open Bible and journal beside a laptop"],
  "Women’s Ministry": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1611723171653-AUMQL7S8M3YYX8OMXEDI/Women%27s+Ministry+Outreach", "The women’s ministry outreach team"],
  "Youth Ministry": ["https://images.squarespace-cdn.com/content/v1/5f6615d1c524cf0fc1c719ea/1601345781293-P92MNNAPLZWWINOK68RL/DSC_0197.jpg", "Youth performing on stage"],
};
const HEAD_IMAGES = {
  // Only images taken from the matching page on the original nlifefellowship.org site.
  'Meet the New Life Team': ['1780526312699-O1WQ7DMQ9LCQ7R8VVE2R/Large+Group+Photo.jpg', 'The New Life staff'],
  'Contact Us': ['1611713698533-MN52TSKUHF7YJG2SFEM1/New+Life+Fellowship+Ribbon+Cutting+Ceremony', 'New Life ribbon cutting ceremony'],
  'Upcoming Events': ['a99c2de3-9d06-4dd1-b697-3877aeb02712/join_our_newsletter_mailing_list-title-1-Wide+16x9.jpg', 'Join our newsletter mailing list'],
  'New Members Orientation': ['1641578513554-2PUR2OSRL0I405OFA0JA/New+Members+Class.png', 'New Members Class'],
  'Ministries': ['1610059885063-YHAFPVGKQEA2FRX4CLGV/DSC_0405.jpg', 'Children gathered together at New Life'],
  'Holiday season is upon us!': ['a38798dd-cede-4d7c-8231-a91683ec3bf2/Hope+for+the+holidays+final.png', 'Hope for the Holidays'],
  'Our Future Home': ['1759510896686-LHVJQNLZD8TFBTUPZHOI/New+life+Fellowship+auditorium-1+3-8-25.jpg', 'Rendering of the new New Life auditorium'],
};
export const videoToggle = `<button type="button" class="hero-pause" data-video-toggle aria-pressed="false" aria-label="Pause background video">
    <svg class="i-pause" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
    <svg class="i-play" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>
  </button>`;

export const headTitles = new Set();

// Interior page header: motion atmosphere + the page's photo shown whole, edges feathered into the dark.
export function pageHead({ title, crumbs = [], intro = '', image = '', imageAlt = '', media = '' }) {
  const trail = [['Home', 'index.html'], ...crumbs];
  const plain = title.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
  headTitles.add(plain);
  if (ORIGINAL_HERO[plain]) { image = img(ORIGINAL_HERO[plain][0], 1500); imageAlt = ORIGINAL_HERO[plain][1]; }
  else if (!image && HEAD_IMAGES[plain]) { image = img(HEAD_IMAGES[plain][0], 1200); imageAlt = HEAD_IMAGES[plain][1]; }
  return `
<section class="page-head">
  <video class="ph-atmo" data-hero-video autoplay muted loop playsinline preload="auto" aria-hidden="true"><source src="assets/video/hero-atmosphere.mp4" type="video/mp4"></video>
  ${videoToggle}
  <div class="wrap ph-grid${image || media ? ' has-img' : ''}">
    <div class="ph-copy">
      <nav class="crumbs" aria-label="Breadcrumb"><ol class="flex flex-wrap gap-2">${trail.map(([t, h], i) => `<li>${h ? `<a href="${h}">${t}</a>` : `<span>${t}</span>`}${i < trail.length - 1 ? '<span aria-hidden="true" class="ml-2">/</span>' : ''}</li>`).join('')}<li><span aria-hidden="true">/</span> <span aria-current="page" class="text-[color:var(--deep)]">${plain}</span></li></ol></nav>
      <h1 class="mt-5">${title}</h1>
      ${intro ? `<p class="lede mt-6">${intro}</p>` : ''}
    </div>
    ${media ? `<div class="ph-media">${media}</div>` : image ? `
    <div class="ph-media">
      <div class="photo flat ph-img${/\.png(\?|$)/i.test(image) ? ' ph-img--graphic' : ''}"><img src="${image}" alt="${imageAlt}" loading="eager"></div>
    </div>` : ''}
  </div>
</section>`;
}
