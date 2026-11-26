// Site-wide styles — "cinematic flyer" theme: deep night background, cool blue + warm copper glows,
// film grain, high-contrast Bodoni display type, outlined pill buttons.
export const STYLES = `
:root{
  --bg:#070B18; --bg2:#0C1326; --bg3:#111A33;
  --navy:#7DC0EE;          /* highlight blue used for links, meta, highlights */
  --copper:#3F7FC4; --peach:#A9D6F5;
  --royal:#2C4FB0; --mid:#3F7FC4; --sky:#5FAEE3; /* brand blues, used as the cool glow */
  --deep:#F5F0EA;          /* heading color (warm white) */
  --paper:#0C1326; --line:rgba(255,255,255,.12); --ink:#D5DAE7; --muted:#97A0BB;
  --sh-1:0 1px 2px rgba(0,0,0,.35),0 8px 24px -10px rgba(0,0,0,.6);
  --sh-2:0 2px 6px rgba(0,0,0,.35),0 22px 50px -18px rgba(0,0,0,.75);
  --sh-3:0 8px 16px rgba(0,0,0,.35),0 40px 90px -24px rgba(0,0,0,.85);
  --spring:cubic-bezier(.34,1.56,.64,1); --ease:cubic-bezier(.22,1,.36,1);
  --display:'Bodoni Moda',Didot,'Times New Roman',serif;
  --sans:'Lexend',system-ui,sans-serif;
}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;background:var(--bg)}
body{font-family:var(--sans);font-weight:300;font-size:1.075rem;line-height:1.7;color:var(--ink);
  background:
    radial-gradient(60rem 40rem at -10% 8%,rgba(63,127,196,.20),transparent 60%),
    radial-gradient(50rem 40rem at 110% 55%,rgba(224,121,74,.13),transparent 60%),
    radial-gradient(60rem 36rem at 20% 105%,rgba(95,174,227,.10),transparent 60%),
    var(--bg)}
body::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:200;opacity:.11;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
::selection{background:var(--copper);color:#fff}
body :is(h1,h2){font-family:var(--display);font-weight:400;color:var(--deep)}
body :is(h3,h4),.ui{font-family:var(--sans)}
body h1{font-size:clamp(2.6rem,6.2vw,5.4rem);line-height:.98;letter-spacing:-.01em;text-transform:uppercase;
  background:linear-gradient(100deg,#FFFFFF 0%,#DDEFFC 38%,#7DC0EE 72%,#3F7FC4 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
body h2{font-size:clamp(2.1rem,4.2vw,3.4rem);line-height:1.05;letter-spacing:-.02em}
body h3{font-size:1.3rem;font-weight:600;letter-spacing:-.01em;line-height:1.3;color:var(--deep)}
body h4{font-size:1rem;font-weight:600;color:var(--deep)}
blockquote{font-family:var(--display);font-weight:400}
strong,b{font-weight:600;color:var(--deep)}
.heavy{font-weight:700}
.prose-nl p{margin-bottom:1.1em;max-width:68ch}
.prose-nl p:last-child{margin-bottom:0}
.lede{font-size:clamp(1.12rem,1.6vw,1.3rem);line-height:1.65;color:#B4BCD2;max-width:60ch}
.meta{font-family:var(--sans);font-size:.78rem;font-weight:500;color:var(--navy);letter-spacing:.14em;text-transform:uppercase}
.label{font-family:var(--sans);font-size:.72rem;font-weight:500;letter-spacing:.32em;text-transform:uppercase;color:#C9CFE0}
.muted{color:var(--muted)}
.wrap{width:100%;max-width:1240px;margin:0 auto;padding:0 1.25rem}
@media(min-width:768px){.wrap{padding:0 2.5rem}}
.section{padding:4rem 0}
@media(min-width:768px){.section{padding:6.5rem 0}}
.bg-paper{background:linear-gradient(180deg,rgba(255,255,255,.025),rgba(255,255,255,.01));border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06)}
.bg-deep{position:relative;color:#DCE1EE;background:
  radial-gradient(46rem 26rem at 88% 110%,rgba(224,121,74,.22),transparent 65%),
  radial-gradient(40rem 26rem at 0% 0%,rgba(63,127,196,.20),transparent 60%),#04060E}
.bg-deep .muted{color:#A6AECA}
.bg-glass{background:rgba(255,255,255,.06)}

/* Buttons — outlined pills with bold uppercase sans, like the flyer. Only transform + opacity animate. */
.btn{--mx:0px;--my:0px;--lift:0px;--press:1;position:relative;isolation:isolate;display:inline-flex;align-items:center;justify-content:center;gap:.55rem;
  font-family:var(--sans);font-weight:600;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;line-height:1;padding:1.05rem 1.6rem;border-radius:999px;
  text-decoration:none;overflow:hidden;cursor:pointer;transform:translate3d(var(--mx),calc(var(--my) + var(--lift)),0) scale(var(--press));transition:transform .55s var(--spring);will-change:transform;border:0}
.btn::before{content:"";position:absolute;inset:0;z-index:-1;opacity:0;transition:opacity .3s var(--ease)}
.btn:hover{--lift:-2px}
.btn:hover::before{opacity:1}
.btn:active{--lift:0px;--press:.95;transition-duration:.12s}
.btn:focus-visible{outline:2px solid var(--peach);outline-offset:4px}
.btn-primary{background:linear-gradient(110deg,#C9E6FA,#7DC0EE 45%,#3F7FC4);color:#06101F;box-shadow:0 10px 30px -10px rgba(63,127,196,.6)}
.btn-primary::before{background:rgba(255,255,255,.28)}
.btn-ghost,.btn-outline-light{color:#fff;background:rgba(255,255,255,.02);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.85)}
.btn-ghost::before,.btn-outline-light::before{background:rgba(255,255,255,.12)}
.btn-light{background:#fff;color:#070B18}
.btn-light::before{background:#DDEFFC}
.btn-sm{padding:.75rem 1.15rem;font-size:.74rem}

.link{color:var(--navy);font-family:var(--sans);font-weight:500;text-decoration:none;position:relative;display:inline-block}
.link::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:1px;background:currentColor;transform:scaleX(.35);transform-origin:left;transition:transform .45s var(--spring)}
.link:hover::after,.link:focus-visible::after{transform:scaleX(1)}
.link:active{opacity:.7}
.link:focus-visible{outline:2px solid var(--peach);outline-offset:4px;border-radius:2px}
.prose-nl a:not(.btn){color:var(--navy);text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px}
.prose-nl a:not(.btn):hover{text-decoration-thickness:2px}
.prose-nl a:not(.btn):focus-visible{outline:2px solid var(--peach);outline-offset:3px}

/* Photos — cinematic grade: teal/copper multiply + fade to black */
.photo{position:relative;overflow:hidden;background:var(--bg3)}
.photo img{width:100%;height:100%;object-fit:cover;display:block;transform:translate3d(0,var(--py,0px),0) scale(calc(var(--zoom,1) * var(--hz,1)));transition:transform .9s var(--ease)}
.photo[data-parallax]{--zoom:1.12}
.photo::before{content:"";position:absolute;inset:0;background:linear-gradient(160deg,#3F7FC4,#E0794A);mix-blend-mode:multiply;opacity:.2;z-index:1;pointer-events:none}
.photo::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.72),rgba(0,0,0,0) 58%);z-index:1;pointer-events:none}
.photo.soft::after{background:linear-gradient(to top,rgba(0,0,0,.4),rgba(0,0,0,0) 50%)}
.photo.flat::before{opacity:.1}.photo.flat::after{display:none}
.photo-cap{position:absolute;z-index:2;left:1.5rem;right:1.5rem;bottom:1.5rem;color:#fff}
.orb{border-radius:999px}
.ring{position:absolute;border-radius:999px;border:1px solid rgba(169,214,245,.45);pointer-events:none;
  box-shadow:0 0 60px rgba(95,174,227,.12),inset 0 0 60px rgba(224,121,74,.08)}

/* Surfaces — glass on night */
.surface,.surface-raised,.surface-float{background:linear-gradient(180deg,rgba(255,255,255,.065),rgba(255,255,255,.025));border:1px solid rgba(255,255,255,.09)}
.surface{border-radius:1.25rem;box-shadow:var(--sh-1)}
.surface-raised{border-radius:1.5rem;box-shadow:var(--sh-2)}
.surface-float{border-radius:1.75rem;box-shadow:var(--sh-3);background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.hair{border-top:1px solid var(--line)}

.tile{--rx:0deg;--ry:0deg;--ty:0px;--press:1;display:block;text-decoration:none;color:inherit;transform:perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translate3d(0,var(--ty),0) scale(var(--press));transition:transform .6s var(--spring)}
.tile:hover{--ty:-4px}
.tile:active{--press:.985}
.tile:focus-visible{outline:2px solid var(--peach);outline-offset:4px;border-radius:1.5rem}
.tile:hover .photo,.tile.photo:hover{--hz:1.05}

/* Header */
.announce{background:rgba(0,0,0,.55);color:#C9CFE0;font-family:var(--sans);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.06)}
.announce a{color:var(--peach)}
.site-header{position:sticky;top:0;z-index:60;border-bottom:1px solid rgba(255,255,255,.07)}
.site-header::before{content:"";position:absolute;inset:0;z-index:-1;background:rgba(7,11,24,.72);backdrop-filter:saturate(1.3) blur(16px);-webkit-backdrop-filter:saturate(1.3) blur(16px);pointer-events:none}
.nav-btn{font-family:var(--sans);font-weight:500;font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;color:#E4E8F2;display:inline-flex;align-items:center;gap:.35rem;padding:.65rem .85rem;border-radius:999px;background:none;border:0;cursor:pointer;position:relative}
.nav-btn::before{content:"";position:absolute;inset:0;border-radius:inherit;background:rgba(255,255,255,.08);opacity:0;transition:opacity .25s var(--ease)}
.nav-btn:hover::before,.nav-btn[aria-expanded="true"]::before{opacity:1}
.nav-btn:active{transform:scale(.97)}
.nav-btn:focus-visible{outline:2px solid var(--peach);outline-offset:2px}
.nav-btn .chev{transition:transform .35s var(--spring)}
.nav-btn[aria-expanded="true"] .chev{transform:rotate(180deg)}
.nav-btn.is-current{color:var(--peach)}
.menu-panel{position:absolute;top:calc(100% + .7rem);left:50%;min-width:16rem;padding:1rem;opacity:0;pointer-events:none;
  transform:translate(-50%,-6px) scale(.98);transform-origin:top center;transition:opacity .2s var(--ease),transform .35s var(--spring);z-index:70}
.menu-panel.surface-float{
  background:linear-gradient(160deg,rgba(28,40,78,.24) 0%,rgba(12,19,38,.16) 55%,rgba(12,19,38,.26) 100%);
  backdrop-filter:blur(22px) saturate(1.8);-webkit-backdrop-filter:blur(22px) saturate(1.8);
  border:1px solid rgba(255,255,255,.14);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 -1px 0 rgba(255,255,255,.04),0 2px 6px rgba(0,0,0,.25),0 34px 80px -24px rgba(0,0,0,.8)}
.menu-panel.surface-float::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:-1;
  background:radial-gradient(120% 60% at 0% 0%,rgba(125,192,238,.16),transparent 55%),radial-gradient(80% 50% at 100% 100%,rgba(63,127,196,.12),transparent 60%)}
.menu-panel{isolation:isolate}
.menu-panel.open{opacity:1;pointer-events:auto;transform:translate(-50%,0) scale(1)}
.menu-panel.wide{min-width:40rem}
.menu-link{display:block;padding:.55rem .8rem;border-radius:.75rem;font-family:var(--sans);font-size:.95rem;font-weight:400;color:#E4E8F2;text-decoration:none;position:relative;z-index:0}
.menu-link::before{content:"";position:absolute;inset:0;border-radius:inherit;background:rgba(255,255,255,.07);opacity:0;transition:opacity .2s var(--ease);z-index:-1}
.menu-link:hover::before,.menu-link:focus-visible::before{opacity:1}
.menu-link:hover{color:var(--peach)}
.menu-link:active{opacity:.7}
.menu-link:focus-visible{outline:2px solid var(--peach);outline-offset:-2px}
.menu-link[aria-current="page"]{color:var(--peach);font-weight:500}
.menu-group-title{font-family:var(--sans);font-size:.66rem;letter-spacing:.24em;text-transform:uppercase;color:var(--muted);padding:.25rem .8rem .45rem}
.icon-btn{display:inline-grid;place-items:center;width:2.6rem;height:2.6rem;border-radius:999px;color:#E4E8F2;position:relative;background:none;border:0;cursor:pointer;transition:transform .35s var(--spring)}
.icon-btn::before{content:"";position:absolute;inset:0;border-radius:inherit;background:rgba(255,255,255,.1);opacity:0;transition:opacity .2s}
.icon-btn:hover::before{opacity:1}
.icon-btn:active{transform:scale(.92)}
.icon-btn:focus-visible{outline:2px solid var(--peach);outline-offset:2px}
.logo-link{display:inline-flex;border-radius:.5rem}
.logo-link:focus-visible{outline:2px solid var(--peach);outline-offset:4px}
.logo-link:active{opacity:.8}

.drawer{position:fixed;inset:0;z-index:90;background:var(--bg);opacity:0;pointer-events:none;transform:translateY(-12px);transition:opacity .25s var(--ease),transform .45s var(--spring);overflow-y:auto}
.drawer.open{opacity:1;pointer-events:auto;transform:none}
.acc-btn{width:100%;display:flex;justify-content:space-between;align-items:center;padding:1rem 0;font-family:var(--display);font-size:1.7rem;font-weight:400;color:var(--deep);background:none;border:0;cursor:pointer;text-transform:uppercase}
.acc-btn:focus-visible{outline:2px solid var(--peach);outline-offset:2px}
.acc-btn:active{opacity:.7}
.acc-btn .chev{transition:transform .35s var(--spring)}
.acc-btn[aria-expanded="true"] .chev{transform:rotate(180deg)}
.acc-body{display:none;padding-bottom:1rem}
.acc-body.open{display:block}

.crumbs{font-family:var(--sans);font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:var(--muted)}
.crumbs a{color:var(--muted);text-decoration:none}
.crumbs a:hover{color:var(--peach)}
.crumbs a:focus-visible{outline:2px solid var(--peach);outline-offset:2px}
.page-head{position:relative;overflow:hidden;isolation:isolate;display:flex;align-items:center;min-height:clamp(30rem,64vh,42rem);border-bottom:1px solid rgba(255,255,255,.06);background:
  radial-gradient(46rem 30rem at 85% 40%,rgba(63,127,196,.26),transparent 62%),
  radial-gradient(40rem 26rem at 0% 100%,rgba(63,127,196,.18),transparent 62%),
  radial-gradient(34rem 22rem at 100% 100%,rgba(224,121,74,.12),transparent 65%)}
.ph-atmo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:0% 50%;transform:scale(-1,-1);z-index:-1;opacity:.5;mix-blend-mode:screen;pointer-events:none;
  filter:brightness(.75) contrast(1.6) saturate(1.2);
  -webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 22%,#000 55%,transparent 88%);mask-image:linear-gradient(to bottom,transparent 0%,#000 22%,#000 55%,transparent 88%)}
.ph-grid{position:relative;z-index:1;display:grid;gap:2.5rem;align-items:center;padding-top:3.5rem;padding-bottom:3.5rem}
@media(min-width:900px){.ph-grid.has-img{grid-template-columns:minmax(0,1fr) minmax(0,1.2fr)}}
.ph-grid:not(.has-img) .ph-copy{max-width:56rem}
.page-head h1{font-size:clamp(2.4rem,5vw,4.7rem)}
.ph-media{position:relative;width:100%;display:flex;justify-content:center}
@media(min-width:900px){.ph-media{justify-content:flex-end;margin-right:clamp(-5rem,-4vw,-1.5rem)}}
/* Full, uncropped photo with edges feathered into the dark */
.ph-img{position:relative;display:block;width:fit-content;max-width:100%;background:transparent;
  -webkit-mask-image:linear-gradient(to right,transparent 0%,#000 14%,#000 86%,transparent 100%),linear-gradient(to bottom,transparent 0%,#000 12%,#000 84%,transparent 100%);-webkit-mask-composite:source-in;
  mask-image:linear-gradient(to right,transparent 0%,#000 14%,#000 86%,transparent 100%),linear-gradient(to bottom,transparent 0%,#000 12%,#000 84%,transparent 100%);mask-composite:intersect}
.ph-img--graphic{border-radius:1.25rem;
  -webkit-mask-image:linear-gradient(to right,transparent 0%,#000 4%,#000 96%,transparent 100%),linear-gradient(to bottom,transparent 0%,#000 4%,#000 96%,transparent 100%);
  mask-image:linear-gradient(to right,transparent 0%,#000 4%,#000 96%,transparent 100%),linear-gradient(to bottom,transparent 0%,#000 4%,#000 96%,transparent 100%)}
.ph-img--graphic::before{opacity:.08}
.ph-img img{width:auto;height:auto;max-width:100%;max-height:min(36rem,66vh);object-fit:contain}
.ph-img[data-parallax]{--zoom:1.02}
.ph-img::before{opacity:.22}
@media(max-width:899px){.page-head{min-height:0}.ph-grid{padding-top:2.5rem;padding-bottom:1rem}}
.page-head .hero-pause{right:1rem;bottom:1rem}
@media(max-width:899px){.page-head{min-height:0}.ph-media{width:min(86vw,22rem)}.ph-grid{padding-top:2.5rem;padding-bottom:1rem}}

.field label{display:block;font-family:var(--sans);font-size:.7rem;font-weight:500;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.55rem;color:#C9CFE0}
.field input,.field textarea,.field select{width:100%;font:inherit;font-size:1rem;padding:.9rem 1.05rem;border-radius:.9rem;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.04);color:#fff}
.field select option{background:var(--bg2)}
.field input::placeholder,.field textarea::placeholder{color:#78819E}
.field input:focus,.field textarea:focus,.field select:focus{outline:none;border-color:var(--peach);box-shadow:0 0 0 4px rgba(125,192,238,.22)}
.field input[type=date]{color-scheme:dark}

.tab{font-family:var(--sans);font-size:.74rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.75rem 1.15rem;border-radius:999px;color:#E4E8F2;background:transparent;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.35);cursor:pointer;border:0;transition:transform .35s var(--spring)}
.tab:hover{box-shadow:inset 0 0 0 1.5px #fff}
.tab:active{transform:scale(.96)}
.tab:focus-visible{outline:2px solid var(--peach);outline-offset:2px}
.tab[aria-selected="true"]{background:linear-gradient(110deg,#C9E6FA,#7DC0EE 45%,#3F7FC4);color:#06101F;box-shadow:none}
.tab-panel[hidden]{display:none}
details.faq{border-top:1px solid var(--line)}
details.faq:last-child{border-bottom:1px solid var(--line)}
details.faq summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:1rem;padding:1.35rem 0;font-family:var(--display);font-size:1.45rem;color:var(--deep)}
details.faq summary::-webkit-details-marker{display:none}
details.faq summary:focus-visible{outline:2px solid var(--peach);outline-offset:2px}
details.faq summary:hover{color:var(--peach)}
details.faq summary .plus{transition:transform .35s var(--spring);flex:none;margin-top:.3rem}
details.faq[open] summary .plus{transform:rotate(45deg)}
details.faq .faq-body{padding:0 0 1.4rem}

dialog.bio{border:1px solid rgba(255,255,255,.1);padding:0;border-radius:1.75rem;box-shadow:var(--sh-3);max-width:min(44rem,calc(100vw - 2rem));width:100%;color:var(--ink);
  background:radial-gradient(30rem 20rem at 100% 0%,rgba(224,121,74,.14),transparent 60%),radial-gradient(30rem 20rem at 0% 100%,rgba(63,127,196,.16),transparent 60%),var(--bg2)}
/* Bio pop-up portrait: taller frame anchored to the top so heads are never cropped */
.bio-thumb{width:6rem;aspect-ratio:4/5;border-radius:1.1rem;box-shadow:0 12px 30px -12px rgba(0,0,0,.7),0 0 0 1px rgba(255,255,255,.1)}
.bio-thumb img{object-position:50% 6%}
@media(min-width:768px){.bio-thumb{width:7.5rem}}
dialog.bio::backdrop{background:rgba(2,4,10,.72);backdrop-filter:blur(6px)}
dialog.bio[open]{animation:pop .45s var(--spring)}
@keyframes pop{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:none}}

.site-footer{background:radial-gradient(40rem 22rem at 100% 100%,rgba(224,121,74,.12),transparent 60%),#03050B;color:#A6AECA;border-top:1px solid rgba(255,255,255,.07)}
.site-footer h4{color:#fff;font-size:.68rem;letter-spacing:.26em;text-transform:uppercase;font-weight:500;margin-bottom:1rem}
.site-footer .link{color:var(--peach)}
.site-footer a.f{color:#DCE1EE;text-decoration:none;font-family:var(--sans);font-size:.92rem;display:inline-block;padding:.2rem 0;transition:transform .35s var(--spring)}
.site-footer a.f:hover{color:var(--peach);transform:translateX(3px)}
.site-footer a.f:active{opacity:.7}
.site-footer a.f:focus-visible{outline:2px solid var(--peach);outline-offset:2px}
.social{display:inline-grid;place-items:center;width:2.6rem;height:2.6rem;border-radius:999px;color:#fff;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.4);transition:transform .35s var(--spring)}
.social:hover{transform:translateY(-3px);box-shadow:inset 0 0 0 1.5px #fff}
.social:active{transform:scale(.92)}
.social:focus-visible{outline:2px solid var(--peach);outline-offset:2px}

/* ---------------- Home hero — the flyer ---------------- */
.hero{position:relative;overflow:hidden;isolation:isolate;padding-top:3.25rem}
.hero::before{content:"";position:absolute;inset:0;z-index:-1;background:
  radial-gradient(36rem 30rem at 12% 40%,rgba(63,127,196,.38),transparent 65%),
  radial-gradient(30rem 26rem at 92% 30%,rgba(224,121,74,.22),transparent 65%),
  radial-gradient(40rem 22rem at 50% 100%,rgba(224,121,74,.28),transparent 70%)}
.hero-atmo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:0% 50%;transform:scaleY(-1);z-index:-1;opacity:.55;mix-blend-mode:screen;pointer-events:none;
  filter:brightness(.75) contrast(1.6) saturate(1.2);
  -webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 18%,#000 45%,transparent 74%);mask-image:linear-gradient(to bottom,transparent 0%,#000 18%,#000 45%,transparent 74%)}
.hero-pause{position:absolute;z-index:6;right:1.25rem;bottom:1.25rem;width:2.5rem;height:2.5rem;border-radius:999px;display:grid;place-items:center;color:#fff;border:0;cursor:pointer;
  background:rgba(255,255,255,.08);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.45);backdrop-filter:blur(6px);transition:transform .35s var(--spring);opacity:.75}
.hero-pause:hover{transform:scale(1.08);opacity:1}
.hero-pause:active{transform:scale(.92)}
.hero-pause:focus-visible{outline:2px solid var(--peach);outline-offset:3px;opacity:1}
.hero-pause .i-play{display:none}
.hero-pause[aria-pressed="true"] .i-play{display:block}
.hero-pause[aria-pressed="true"] .i-pause{display:none}
video.hero-person{object-fit:cover}
.trio{display:flex;justify-content:center;gap:clamp(1.5rem,6vw,5.5rem);font-family:var(--sans);font-size:clamp(.78rem,1.1vw,1rem);letter-spacing:.06em;text-transform:uppercase;color:#E8ECF5}
.trio b{font-weight:700;color:#fff}
.hero-stage{position:relative;max-width:1180px;margin:0 auto;height:clamp(34rem,62vw,47rem)}
.hero-title{position:relative;z-index:1;margin-top:1.25rem;font-size:clamp(4.6rem,15.5vw,15rem)!important;line-height:.82!important;letter-spacing:-.025em!important;text-align:center;white-space:nowrap}
.hero-halo{position:absolute;z-index:0;left:50%;top:14%;width:clamp(22rem,44vw,36rem);aspect-ratio:1;transform:translateX(-50%);border-radius:999px;
  border:1px solid rgba(169,214,245,.22);box-shadow:0 0 120px rgba(95,174,227,.15),inset 0 0 120px rgba(95,174,227,.10)}
.hero-person{position:absolute;z-index:2;left:50%;top:-2%;transform:translateX(-50%);height:134%;width:auto;max-width:none;
  -webkit-mask-image:radial-gradient(ellipse 46% 52% at 50% 44%,#000 50%,transparent 76%);mask-image:radial-gradient(ellipse 46% 52% at 50% 44%,#000 50%,transparent 76%)}
.hero-left{position:absolute;z-index:3;left:6%;top:calc(clamp(4.6rem,15.5vw,15rem) * .9 + 1.25rem);font-family:var(--display);font-size:clamp(2.2rem,5.4vw,5rem);line-height:.95;color:#F5F0EA;text-transform:uppercase;letter-spacing:-.01em;text-align:left}
.hero-right{position:absolute;z-index:3;right:6%;top:calc(clamp(4.6rem,15.5vw,15rem) * .9 + 1.6rem);font-family:var(--sans);font-size:clamp(.78rem,1.1vw,.98rem);line-height:1.15;text-transform:uppercase;color:#E8ECF5;text-align:right}
.hero-right b{display:block;margin-top:.35rem;font-weight:700;color:#fff}
.hero-crowd{position:relative;margin-top:-7rem;height:clamp(20rem,32vw,28rem);z-index:1;
  -webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 38%,#000 62%,transparent 100%),linear-gradient(to right,#000 72%,transparent 86%);-webkit-mask-composite:source-in;
  mask-image:linear-gradient(to bottom,transparent 0%,#000 38%,#000 62%,transparent 100%),linear-gradient(to right,#000 72%,transparent 86%);mask-composite:intersect}
.hero-crowd img{width:100%;height:100%;object-fit:cover;object-position:50% 45%;opacity:.42}
.hero-crowd::after{content:"";position:absolute;inset:0;background:linear-gradient(160deg,#3F7FC4,#E0794A);mix-blend-mode:multiply;opacity:.35;pointer-events:none}
.hero-info{position:relative;z-index:4;margin-top:-15rem;padding-bottom:5rem}
.pill{display:inline-flex;align-items:center;justify-content:center;padding:.75rem 1.5rem;border-radius:999px;box-shadow:inset 0 0 0 2px #fff;font-family:var(--sans);font-weight:700;font-size:clamp(.85rem,1.3vw,1.15rem);letter-spacing:.02em;color:#fff;text-transform:uppercase;background:rgba(0,0,0,.15);backdrop-filter:blur(4px)}
@media(max-width:767px){
  .hero-stage{height:auto;padding-bottom:0}
  .hero-title{font-size:clamp(2.8rem,15vw,4.6rem)!important}
  .hero-person{position:relative;display:block;margin:-2.5rem auto -5.5rem;height:28rem;transform:none;left:auto;top:auto}
  .hero-halo{width:min(86vw,22rem);top:2.5rem}
  .hero-left,.hero-right{position:relative;left:auto;right:auto;top:auto;text-align:center;margin-top:1rem}
  .hero-crowd{margin-top:-6rem}
  .hero-info{margin-top:-10rem}
}


/* ---------------- Stacking panels (home "Get connected") ---------------- */
.stack{position:relative;padding-bottom:2rem}
.panel{--top:6.25rem;position:sticky;top:var(--top);height:min(44rem,calc(100vh - 8rem));min-height:34rem;margin-bottom:2.5rem;border-radius:2.5rem;overflow:hidden;isolation:isolate;
  background:var(--panel-bg);color:#fff;transform-origin:50% 0;will-change:transform;
  box-shadow:0 -1px 0 rgba(255,255,255,.25) inset,0 -18px 50px -20px rgba(0,0,0,.55),0 30px 80px -30px rgba(0,0,0,.7)}
.panel:last-child{margin-bottom:0}
.panel-dots{position:absolute;inset:0;z-index:-1;pointer-events:none;
  background-image:radial-gradient(rgba(255,255,255,.22) 1px,transparent 1.6px);background-size:22px 22px;
  -webkit-mask-image:linear-gradient(100deg,transparent 30%,#000 75%);mask-image:linear-gradient(100deg,transparent 30%,#000 75%)}
.panel::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(40rem 24rem at 0% 0%,rgba(255,255,255,.18),transparent 60%)}
.panel-dim{position:absolute;inset:0;z-index:5;background:#02050D;opacity:0;pointer-events:none}
.panel-inner{height:100%;display:grid;grid-template-columns:1.05fr 1fr}
.panel-copy{display:flex;flex-direction:column;padding:clamp(2rem,4.5vw,4.25rem)}
.panel-pill{align-self:flex-start;display:inline-flex;align-items:center;gap:.85rem;padding:.35rem 1.25rem .35rem .35rem;border-radius:999px;
  background:rgba(255,255,255,.16);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.4);font-family:var(--sans);font-weight:500;font-size:1.05rem;color:#fff}
.panel-pill span{display:grid;place-items:center;min-width:2.6rem;height:2.1rem;padding:0 .7rem;border-radius:999px;background:#fff;color:#223D94;font-weight:600;font-size:.95rem}
body .panel-title{margin-top:1.75rem;font-family:var(--display);font-weight:400;font-size:clamp(2.4rem,4.6vw,4.4rem);line-height:1;letter-spacing:-.02em;color:#fff}
.panel-text{margin-top:1.25rem;max-width:34rem;font-size:clamp(1.02rem,1.3vw,1.2rem);line-height:1.6;color:rgba(255,255,255,.86)}
.panel-ctas{margin-top:1.75rem;display:flex;flex-wrap:wrap;gap:.75rem}
.panel-stat{margin-top:auto;padding-top:1.5rem;display:flex;flex-wrap:wrap;align-items:baseline;gap:.8rem;font-family:var(--sans);font-size:clamp(1.3rem,2vw,1.9rem);color:rgba(255,255,255,.8)}
.panel-stat b{white-space:nowrap;font-weight:300;font-size:clamp(2.6rem,4.2vw,3.6rem);line-height:1;color:#fff;letter-spacing:-.02em}
.panel-media{position:relative}
.pm{position:absolute;margin:0;width:44%;aspect-ratio:9/15;border-radius:2.1rem;overflow:hidden;background:#0B1020;
  border:7px solid #0B1020;box-shadow:0 30px 60px -20px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.08)}
.pm img{width:100%;height:100%;object-fit:cover;border-radius:1.6rem}
.pm-c{left:50%;top:13%;transform:translateX(-50%);z-index:3;width:48%}
.pm-l{left:4%;top:30%;transform:rotate(-9deg);z-index:1;filter:brightness(.8)}
.pm-r{right:-2%;top:28%;transform:rotate(9deg);z-index:2;filter:brightness(.8)}
@media(max-width:900px){
  .panel{--top:5.5rem;height:auto;min-height:calc(100svh - 7rem)}
  .panel-inner{grid-template-columns:1fr;grid-template-rows:auto 16rem}
  .panel-copy{padding:1.75rem 1.5rem 0}
  .panel-stat{margin-top:1.5rem;padding-top:0}
  .pm{width:34%;border-radius:1.4rem;border-width:5px}.pm img{border-radius:1rem}
  .pm-c{top:10%;width:38%}.pm-l{left:6%;top:24%}.pm-r{right:4%;top:22%}
}

/* ---------------- Panel variants ---------------- */
.panel-text a{color:#fff;text-decoration:underline;text-underline-offset:3px}
.panel-spacer{margin-top:auto}
.panel-media--quote{display:flex;align-items:center;padding:clamp(1.5rem,4vw,4rem)}
.panel-quote{margin:0;padding:clamp(1.75rem,3vw,2.75rem);border-radius:2rem;background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.28);backdrop-filter:blur(6px)}
.panel-quote blockquote{font-family:var(--display);font-style:italic;font-size:clamp(1.5rem,2.6vw,2.4rem);line-height:1.25;color:#fff}
.panel-quote figcaption{margin-top:1.25rem;font-family:var(--sans);font-weight:600;font-size:.78rem;letter-spacing:.24em;text-transform:uppercase;color:rgba(255,255,255,.8)}
.panel-media--glyph{display:grid;place-items:center;overflow:hidden}
.panel-glyph{font-family:var(--display);font-size:clamp(14rem,30vw,30rem);line-height:.8;color:transparent;-webkit-text-stroke:2px rgba(255,255,255,.55);
  background:linear-gradient(180deg,rgba(255,255,255,.28),rgba(255,255,255,0) 75%);-webkit-background-clip:text;background-clip:text;transform:translateY(8%)}
@media(max-width:900px){
  .panel-inner{grid-template-rows:auto auto}
  .panel-media{min-height:16rem}
  .panel-media--quote{padding:1.25rem 1.5rem 1.75rem;min-height:0}
  .panel-glyph{font-size:12rem}
}

/* ---------------- Milestone dial (Our History) ---------------- */
.dial-section{position:relative;height:calc(100vh + var(--n) * 62vh);background:
  radial-gradient(60rem 40rem at 0% 50%,rgba(63,127,196,.14),transparent 65%),#060A16;border-top:1px solid rgba(255,255,255,.06)}
.dial-sticky{--size:max(150vh,64rem);--ringx:50vw;position:sticky;top:76px;height:calc(100vh - 76px);overflow:hidden;isolation:isolate}
.dial-svg{position:absolute;width:var(--size);height:var(--size);top:50%;left:calc(var(--ringx) - var(--size) * .5 - var(--size) * 492 / 1180);
  transform:translateY(-50%);z-index:0;overflow:visible}
.dial-rot{transform-origin:500px 500px;will-change:transform}
.ring-outer{fill:none;stroke:rgba(169,214,245,.16);stroke-width:1.5}
.ring-inner{fill:none;stroke:rgba(169,214,245,.22);stroke-width:2}
.ring-band{fill:none;stroke:rgba(63,127,196,.32);stroke-width:74}
.tk{stroke:rgba(169,214,245,.22);stroke-width:1.2}
.tk-major{stroke:rgba(169,214,245,.45);stroke-width:2.4}
.tk-mile{stroke:#7DC0EE;stroke-width:3.2;opacity:.9}
.dial-year{font-family:var(--sans);font-size:30px;font-weight:600;letter-spacing:.06em;fill:rgba(220,230,247,.55);transition:opacity .4s var(--ease)}
.dial-year.on{opacity:0}
.dial-line{position:absolute;z-index:1;top:50%;left:calc(var(--ringx) - var(--size) * 37 / 1180);width:clamp(4rem,8vw,8rem);height:2px;background:#DCE6F7;transform:translateY(-50%)}
.dial-badge{position:absolute;z-index:2;top:50%;left:calc(var(--ringx) - var(--size) * 37 / 1180);width:clamp(4.5rem,6.5vw,6rem);aspect-ratio:1;border-radius:999px;display:grid;place-items:center;color:#fff;
  transform:translate(-50%,-50%);background:linear-gradient(150deg,#7DC0EE,#2C4FB0);box-shadow:0 0 0 8px rgba(125,192,238,.12),0 20px 50px -10px rgba(44,79,176,.8)}
.dial-big{position:absolute;z-index:1;top:50%;right:5vw;transform:translateY(-50%);margin:0;overflow:hidden;font-family:var(--sans);font-weight:200;
  font-size:clamp(5.5rem,14.5vw,14rem);line-height:1;letter-spacing:-.04em;color:#EEF3FB}
.dial-big span{display:inline-block}
.dial-copy{position:absolute;z-index:2;top:50%;left:max(1.25rem,calc((100vw - 1240px) / 2 + 2.5rem));width:min(24rem,calc(var(--ringx) - var(--size) * 90 / 1180 - max(1.25rem,calc((100vw - 1240px) / 2 + 2.5rem)) - 2rem));transform:translateY(-50%)}
body .dial-copy h3{font-family:var(--display);font-weight:400;font-size:clamp(1.8rem,2.8vw,2.6rem);line-height:1.05;letter-spacing:-.02em;color:#fff}
.dial-copy p{margin-top:.9rem;font-size:1.05rem;line-height:1.6;color:#C3CCE2}
.dial-top{position:absolute;inset:0 0 auto 0;z-index:3}
.dial-count{position:absolute;right:5vw;top:7.25rem;display:flex;align-items:center;gap:1rem;font-family:var(--sans);font-size:.85rem;letter-spacing:.08em;color:#C3CCE2}
.dial-count i{display:block;width:4.5rem;height:1px;background:rgba(220,230,247,.5)}
.dial-head{position:absolute;right:5vw;top:1.5rem;text-align:right}
body .dial-head h2{font-family:var(--display);font-size:clamp(1.8rem,3vw,2.8rem)}
.dial-sub{margin-top:.4rem;font-family:var(--sans);font-size:.7rem;font-weight:600;letter-spacing:.28em;color:#7DC0EE}
.dial-hint{position:absolute;z-index:3;left:50%;bottom:1.5rem;transform:translateX(-50%);font-family:var(--sans);font-size:.68rem;letter-spacing:.32em;text-transform:uppercase;color:rgba(220,230,247,.45)}
@media (prefers-reduced-motion:no-preference){
  .dial-big span,.dial-copy{transition:opacity .22s var(--ease),transform .5s cubic-bezier(.2,.9,.25,1.05)}
  .swap-out .dial-big span{opacity:0;transform:translate3d(0,-28%,0)}
  .swap-out[data-dir="up"] .dial-big span{transform:translate3d(0,28%,0)}
  .swap-out .dial-copy{opacity:0;transform:translate3d(-14px,-50%,0)}
  .swap-in .dial-big span{animation:yr-in .6s cubic-bezier(.2,.9,.25,1.05) both}
  .swap-in[data-dir="up"] .dial-big span{animation-name:yr-in-up}
  .swap-in .dial-copy{animation:cp-in .55s var(--ease) both}
}
@keyframes yr-in{from{opacity:0;transform:translate3d(0,32%,0)}to{opacity:1;transform:none}}
@keyframes yr-in-up{from{opacity:0;transform:translate3d(0,-32%,0)}to{opacity:1;transform:none}}
@keyframes cp-in{from{opacity:0;transform:translate3d(14px,-50%,0)}to{opacity:1;transform:translate3d(0,-50%,0)}}
@media(max-width:899px){
  .dial-sticky{--size:150vw;--ringx:30vw;top:68px;height:calc(100svh - 68px)}
  .dial-svg{top:38%}
  .dial-line{top:38%;width:22vw}
  .dial-badge{top:38%;width:3.6rem}
  .dial-big{top:38%;right:4vw;font-size:20vw}
  .dial-copy{top:auto;bottom:4.5rem;left:1.25rem;right:1.25rem;width:auto;transform:none}
  .swap-out .dial-copy{transform:translate3d(-14px,0,0)}
  @keyframes cp-in{from{opacity:0;transform:translate3d(14px,0,0)}to{opacity:1;transform:none}}
  .dial-year{font-size:38px}
  .dial-head{display:none}
  .dial-count{top:1.25rem;right:1.25rem}
}

/* ---------------- Motion system ---------------- */
.scroll-progress{position:absolute;left:0;right:0;bottom:-1px;height:2px;transform-origin:0 50%;transform:scaleX(0);pointer-events:none;
  background:linear-gradient(90deg,#3F7FC4,#7DC0EE,#DDEFFC);box-shadow:0 0 12px rgba(125,192,238,.7)}
details.faq[open] .faq-body,.tab-panel:not([hidden]){animation:softin .55s var(--ease) both}
.mcell.pop{animation:popin .7s var(--spring) both;animation-delay:var(--d,0s)}
@keyframes softin{from{opacity:0;transform:translate3d(0,10px,0)}to{opacity:1;transform:none}}
@keyframes popin{from{opacity:0;transform:translate3d(0,24px,0) scale(.96)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:no-preference){
  .js [data-reveal]{opacity:0;transition:opacity .9s var(--ease),transform 1.15s cubic-bezier(.2,.9,.25,1.08);transition-delay:var(--d,0s)}
  .js [data-reveal="rise"]{transform:translate3d(0,26px,0)}
  .js [data-reveal="item"]{transform:translate3d(0,44px,0) scale(.97)}
  .js [data-reveal="slide"]{transform:translate3d(-30px,0,0)}
  .js [data-reveal="photo"]{transform:translate3d(0,40px,0) scale(.95)}
  .js [data-reveal="title"]{transform:translate3d(0,.45em,0)}
  .js [data-reveal].in{opacity:1;transform:none}
  .js [data-reveal="words"]{opacity:1;transform:none}
  .js [data-reveal="words"] .wi{display:inline-block;transform:translate3d(0,108%,0) rotate(2deg);transform-origin:0 100%;transition:transform 1s cubic-bezier(.2,.9,.25,1.05);transition-delay:calc(var(--d,0s) + var(--wi,0) * 55ms)}
  .js [data-reveal="words"].in .wi{transform:none}
  .sw{transition:opacity .25s linear}
}
.w{display:inline-block;overflow:hidden;vertical-align:top;padding:0 .02em .12em;margin:0 -.02em -.12em}

/* Cross-document page transitions (Chrome, Edge, Safari 18.2+) */
@view-transition{navigation:auto}
/* Only name the header during a page transition: a permanent view-transition-name would stop the glass dropdowns from blurring the page */
html:active-view-transition .site-header{view-transition-name:site-header}
html:active-view-transition .announce{view-transition-name:announce}
@media (prefers-reduced-motion:no-preference){
  ::view-transition-old(root){animation:vt-out .32s var(--ease) both}
  ::view-transition-new(root){animation:vt-in .6s cubic-bezier(.2,.9,.25,1) both}
}
@keyframes vt-out{to{opacity:0;transform:translate3d(0,-14px,0) scale(.99)}}
@keyframes vt-in{from{opacity:0;transform:translate3d(0,22px,0)}}

@media (prefers-reduced-motion:no-preference){
  .rise{opacity:0;transform:translateY(18px);animation:rise 1s var(--ease) forwards}
  .rise.d1{animation-delay:.12s}.rise.d2{animation-delay:.3s}.rise.d3{animation-delay:.5s}
  .person-in{opacity:0;animation:fadein 1.6s var(--ease) .25s forwards}
  .halo-in{opacity:0;transform:translateX(-50%) scale(.85);animation:halo 1.8s var(--spring) .1s forwards}
}
@keyframes rise{to{opacity:1;transform:none}}
@keyframes fadein{to{opacity:1}}
@keyframes halo{to{opacity:1;transform:translateX(-50%) scale(1)}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
.skip{position:absolute;left:-999px;top:.5rem;z-index:300;background:#fff;color:#070B18;padding:.6rem 1rem;border-radius:.6rem}
.skip:focus{left:.5rem}

/* Give hero: ways to give */
.give-ways{width:100%;max-width:34rem;padding:clamp(1.75rem,3vw,2.5rem);border-radius:1.5rem;background:linear-gradient(160deg,rgba(17,26,51,.82),rgba(12,19,38,.6));border:1px solid var(--line);box-shadow:var(--sh-3);backdrop-filter:blur(10px)}
.gw-hand{width:3.25rem;height:3.25rem;color:var(--peach)}
.give-ways .gw-title{margin-top:1rem;font-size:clamp(1.9rem,3vw,2.6rem);letter-spacing:-.03em;line-height:1.1}
.gw-list{margin-top:1.75rem;display:grid;gap:.35rem}
.gw-row{display:flex;align-items:center;gap:1.1rem;padding:.9rem 1rem;margin:0 -1rem;border-radius:1rem;color:var(--ink);text-decoration:none;position:relative}
.gw-row::before{content:"";position:absolute;inset:0;border-radius:inherit;background:rgba(125,192,238,.08);opacity:0;transition:opacity .3s var(--ease)}
.gw-ico{width:2.4rem;height:2.4rem;flex:none;color:var(--sky);transition:transform .5s var(--spring)}
.gw-row>span{display:grid;position:relative}
.gw-row strong{font-size:1.1rem;color:var(--deep)}
.gw-row>span>span{color:var(--muted);font-size:1rem}
a.gw-row>span>span{color:var(--navy)}
a.gw-row:hover::before{opacity:1}
a.gw-row:hover .gw-ico{transform:translateX(3px) scale(1.06)}
a.gw-row:focus-visible{outline:2px solid var(--sky);outline-offset:2px}
a.gw-row:active .gw-ico{transform:scale(.94)}
@media(prefers-reduced-motion:reduce){.gw-ico{transition:none}}

/* Our History: founding story */
.fd-vision{font-size:clamp(1.7rem,3.4vw,2.9rem);line-height:1.22;letter-spacing:-.02em;color:var(--deep);max-width:30ch;text-wrap:balance}
.fd-attr{margin-top:1.5rem;color:var(--navy);font-size:1rem}
.fd-grid{margin-top:clamp(4rem,8vw,7rem);display:grid;gap:3.5rem;align-items:center}
@media(min-width:1024px){.fd-grid{grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:clamp(3rem,6vw,6rem)}}
.fd-photos{position:relative;padding-bottom:18%}
.fd-ph{margin:0}
.fd-ph .photo{border-radius:1.25rem;overflow:hidden;box-shadow:var(--sh-2)}
.fd-ph img{display:block;width:100%;height:100%;object-fit:cover}
.fd-ph--a{width:78%}
.fd-ph--a .photo{aspect-ratio:4/3}
.fd-ph--b{position:absolute;right:0;bottom:0;width:46%;z-index:2}
.fd-ph--b .photo{aspect-ratio:4/5;box-shadow:var(--sh-3);outline:6px solid var(--bg)}
.fd-ph figcaption{margin-top:.7rem;font-size:.88rem;line-height:1.45;color:var(--muted)}
.fd-ph--a figcaption{max-width:28ch}
.fd-born{font-size:clamp(2.1rem,3.6vw,3.2rem);letter-spacing:-.03em;line-height:1.08}
.fd-facts{margin:2rem 0;border-top:1px solid var(--line)}
.fd-facts>div{display:grid;grid-template-columns:9.5rem 1fr;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--line);align-items:baseline}
.fd-facts dt{color:var(--muted);font-size:.95rem}
.fd-facts dd{margin:0;font-family:var(--display);font-size:clamp(1.25rem,1.8vw,1.55rem);color:var(--deep);letter-spacing:-.01em}
@media(max-width:520px){.fd-facts>div{grid-template-columns:1fr;gap:.15rem}}
`;
