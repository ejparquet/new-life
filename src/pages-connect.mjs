import { img, pdf, LINKS, a, btn, pageHead } from './layout.mjs';
import { plus } from './pages-main.mjs';
import { stackPanels } from './components.mjs';

const F1 = (id) => `https://newlifefellowship.fellowshiponego.com/external/form/${id}`;

// ---------------------------------------------------------------- TEAM
const S = (file) => img(file, 600);
const TEAM = [
  { group: 'Senior Pastor', people: [
    { n: 'Dr. Maurice Pugh', t: 'Senior Pastor', p: S('1780518648356-3CA7X95RU13TV13YS26K/Pastor+Pugh.jpg'), link: 'meet-our-pastor.html' },
  ] },
  { group: 'Pastoral staff & executive directors', people: [
    { n: 'Pastor Alshare Hughes', t: 'Associate Pastor of Hospitality & Fellowship', p: S('1780519097290-7S1YBE18NJYR02EG7QVA/RG-6215442.jpg') },
    { n: 'Kendall Pugh', t: 'Executive Director of Business', d: 'Administration', p: S('1780518428385-XAQQNZ1TFBEII8D0UG9F/Kendall+Pugh.jpg'),
      bio: ['Kendall M. Pugh is Executive Director of Business at New Life Fellowship, a church founded by his parents, Dr. Maurice and Jackie Pugh. A magna cum laude graduate in Business Administration from Stephen F. Austin State University and member of Beta Gamma Sigma (top 5% of his class), he earned his MBA summa cum laude from LSU Shreveport. Kendall began his nonprofit leadership career at Uplift Community Development, where he revitalized mentoring programs and launched the Uplift Summer Leadership Academy.', 'At New Life Fellowship he oversees all business operations, founded the New Life Bookstore, led pandemic food distribution with Tarrant County Food Bank serving 300+ families monthly, and directs eight ministries with 100+ volunteers. Named to the 2025 Arlington 40 Under 40, Kendall is committed to serving and strengthening his community. He enjoys family time, sports, and movies.'],
      song: 'How Great is Our God – A.J. Wells & Fellowship Worship / Fear – Lecrae', verse: 'John 3:16 – I know it’s the first scripture everyone learns but I think it’s a simple yet important reminder of God’s Love.', fact: 'I watch 100 movies I have never seen a year, oldest of 5, and love my Mavs, Cowboys and Michigan Football “GO Blue”.', extra: [['https://www.linkedin.com/in/kendall-pugh-74b983144/', 'Connect on LinkedIn']] },
    { n: 'Pastor Eric Godfrey', t: 'Associate Pastor of Groups & Growth', p: S('1780940525004-OIJHOXHD3EQ81CP6MP8D/_6229760-RG.jpg') },
    { n: 'Jackie Pugh', t: 'Executive Director of Next Gen', d: 'Next Gen', p: S('1780518425383-FRIU6ETVLHCG34T6831W/Jackie+Pugh.jpg'),
      bio: ['Jackie Pugh is the Executive Director of NextGen Ministry at New Life Fellowship Church and a passionate advocate for the spiritual development of children, youth, and young adults. A graduate of Dallas Theological Seminary with a Masters in Christian Education, she also holds degrees in Marketing and Secondary Education. For more than 20 years Jackie has dedicated her life to helping the next generation develop and grow personal relationships with Christ, ministering to children, youth, young adults, and those who serve them.', 'Jackie enjoys sharing the love of Christ and His Word, and she is grateful to be married to her best friend, Dr. Maurice Pugh, Senior Pastor and founder of New Life Fellowship. Together, with God’s guidance, they nurture and cherish their five young adult children: Kendall, Maurice, Natalie, and twins Shelby and Sydney. Jackie is also co‑founder and one of the hosts of the podcast Keep it Holy Sis, a Christ‑centered space for sisterhood that brings real talk, biblical truth, and encouragement to women in every stage of life.'],
      song: 'Holy Forever | CeCe Winans', verse: 'Philippians 3:12–14', fact: 'I was actually born in Turkey!' },
    { n: 'Pastor Rodney Carter', t: 'Pastor of Worship', d: 'Worship', p: S('1780518650643-AJXITYIT0HEBAC5V29J5/Rodney+Carter.jpg'),
      bio: ['Rodney L. Carter is an author, global worship leader, musician, songwriter, clinician, pastor, preacher/teacher, leader, and mentor. A Chicago native, he’s recorded with world-renowned artists and has served in worship leadership ministry for over thirty years. A licensed and ordained minister of the gospel and a graduate of the University of Iowa, he holds a master’s degree in theology from Criswell College and is certified as a pastoral counselor for sexual recovery. He is married to his college sweetheart, Angela, has a teenage son, Josiah, and lives in the Dallas/Fort Worth area.'],
      song: 'The Story I’ll Tell feat. Ahjah Walls | Housefires', verse: 'Colossians 3:16 – it’s my life verse!', fact: 'I swim about three times a week and absolutely love the water!',
      extra: [['https://www.nlbookstore.com/product/from-the-inside-out-the-making-of-a-disciple/F36C6ENM7KPNAW5CBW2UGOYM', 'From the Inside Out: The Making of a Disciple'], ['https://www.nlbookstore.com/product/letters-to-leaders-worship-edition/5CGTCKV7WPOHVYWWF6FAHB7H', 'Letters to Leaders: Worship Edition']] },
    { n: 'Allen Smith', t: 'Minister of Outreach', d: 'Outreach', p: S('1780538622668-LDQ48L17INWWIO9RSYTE/_6215289-RG.jpg'),
      song: 'Indescribable Live (Kierra Sheard)', verse: 'Isaiah 40:31 — This scripture reminds me that leadership, ministry, and life all require endurance and trust in God. Through challenges, transitions, and seasons of uncertainty, God continues to renew my strength and keep me grounded in purpose and faith.', fact: 'I helped lead one of the most recognized school turnaround efforts in K–12 education, as recognized by the White House, and have also planted a church, so I’m passionate about both developing leaders and building communities that create hope and transformation.' },
  ] },
  { group: 'Ministry directors & coordinators', people: [
    { n: 'A.J. Wells', t: 'Director of Music', p: S('1780518419171-9PA6JODYPXPWKI9GWVP8/A.J+Wells.jpg') },
    { n: 'Don Marshall', t: 'Director of Facilities', d: 'Administration', p: S('1780518422057-KR8516YBZUKBVL9DAV4D/Don+Marshall.jpg'),
      song: 'Champion by Dante Bowe & God’s Got It by JMoss', verse: 'Joshua 1:9 – This verse reminds me to walk in the boldness of who I am called to be and to face life’s challenges in that same manner.', fact: 'I won the Texas High School State Track & Field 100m & 200m as a freshman.' },
    { n: 'James Draper', t: 'Director of Technical Arts', p: S('1780518642185-WFDEXDNPRDRBP8J7EXJR/James+Draper.jpg') },
    { n: 'Nicole Hawkins-Martin', t: 'Bookstore Coordinator', d: 'Administration', p: S('1780518647459-KUR0RXSS6EQPHGRI641N/Nicole+Martin.jpg'),
      song: 'Indescribable Live (Kierra Sheard)', verse: 'Ephesians 4:32 – you never know what someone is going through, be kind', fact: 'I’m an avid traveler, having visited 40 states and 40+ countries and counting.' },
  ] },
  { group: 'Support staff', people: [
    { n: 'Yvonne Williams', t: 'Administrative Assistant to Fellowship & Hospitality', d: 'Fellowship & Hospitality', badge: 'Employee of the Year 2026', p: S('1780518439640-JOWBGAEZ74C6NUXY91AN/Yvonnne+Williams.jpg'),
      song: 'How Great Thou Art', verse: 'Psalms 55:22', fact: 'I was born in Germany — but not on American soil.' },
    { n: 'Justin Mclaughlin', t: 'Shuttle Lead', p: S('1780940527991-K7UV4O5N4MLV7VIN0PUQ/_6229763-RG.jpg') },
    { n: 'Sahara Wright', t: 'Administrative Assistant to Administrative Offices', d: 'Administration', p: S('1781194817468-R9AY9LO46XMFOYF93715/IMG_0945.JPG'),
      song: '“The Blood” by Zacardi Cortez', verse: 'Romans 8:28 – This scripture reminds me that even difficult seasons, setbacks, and unexpected moments can still be used for a greater purpose. It encourages me to trust God’s plan and remain hopeful through every stage of life.', fact: 'Growing up, I was very involved with music and instruments. I played keyboard and took piano lessons, played clarinet in marching band, and also learned guitar and flute.' },
    { n: 'Richard Massey', t: 'Audio / Visual Technician', p: S('1780940523766-D0RXKD52B0AAFXCHWV58/_6229730-RG.jpg') },
    { n: 'Marilyn Marshall', t: 'Administrative Assistant to Worship', d: 'Worship', p: S('1780518428518-FO7HAHAP35TKA59NG1SZ/Marilyn+Marshall.jpg'),
      song: '“Where Would I Be” by Smokie Norful', verse: 'Psalm 139:14', fact: 'I am one of 10 siblings.' },
    { n: 'Shiretha Brown', t: 'Administrative Assistant to the Senior Pastor’s Office', d: 'Senior Pastor’s Office', p: S('1780518437063-X5OVE6TT73MTU8M9PVW2/Shiretha+Brown.jpg'),
      bio: ['Shiretha has been a faithful member of the New Life Fellowship family since the church’s early days at the YMCA as South Arlington Community Church. During that time, she served in the Children’s Ministry. After the move to the current church location, she continued serving as a Greeter and now currently serves on the Discover New Life team.', 'Following her retirement in 2021, Shiretha began her career with the NLF staff as the Administrative Assistant for the Groups & Growth ministry area, where she supported Pastor Eric Godfrey. She now serves as the Administrative Assistant to the Senior Pastor, Dr. Maurice Pugh. This role has provided Shiretha with a wonderful opportunity to continue serving and supporting her church family. In her spare time, Shiretha enjoys spending time with family, traveling, and attempting to start a garden.'],
      song: 'Order My Steps', verse: 'Romans 8:28', fact: 'Although she once said she did not want any children, God had other plans! Today, she is blessed with six wonderful children, two remarkable son-in-loves, four awesome grandchildren, and four active great-grandchildren.' },
    { n: 'Ericka Malone', t: 'Youth Special Events', p: S('1780518422335-ZFE568PJ5TZ6YQIR4KAP/Ericka+Malone.jpg') },
    { n: 'Sonja Mathis', t: 'Administrative Assistant to Next Gen', d: 'Next Gen', p: S('1780518653873-2W2ZFJ3YZM4M2PNVDKH7/Sonja+Mathis.jpg'),
      verse: 'Trust in the Lord with all your heart and lean not to your own understanding; in all your ways acknowledge Him, and he will direct your path. – Proverbs 3:5-6' },
    { n: 'Stephanie Boyd', t: 'Administrative Assistant to Groups & Growth', d: 'Groups & Growth', p: S('1780541891383-RNKNA9B4I3DK7RKZ4D87/RG-6215381.jpg'),
      song: 'Changed by Tramaine Hawkins and He Knows My Name by Tasha Cobbs', verse: 'Psalms 55:22', fact: 'I have been a Certified Phlebotomist since 2009.' },
  ] },
];
const GROUP_PHOTOS = [
  ['1780526312699-O1WQ7DMQ9LCQ7R8VVE2R/Large+Group+Photo.jpg', 'Full staff'],
  ['1780526313553-K6WLCBRSC6FEKBP8FQ8S/Pastor+and+First+Lady.jpg', 'Pastor and First Lady'],
  ['1780526318257-RQKQ6QTFDFPIMRPA42V5/Pastors+Group+Photo.jpg', 'Pastors'],
  ['1780526292897-C55DZXHCTAGZA8Z5ATBC/Admin+Leaders.jpg', 'Admin leaders'],
  ['1780526298630-A1Z3791AC5U0I4C27405/Directors+Photo.jpg', 'Directors'],
  ['1780526292538-JGOD5549VJYF3ZU4533L/Admin+Assistants+Photo.jpg', 'Administrative assistants'],
];

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const FILTERS = [['all', 'All'], ['pastoral', 'Pastoral staff'], ['directors', 'Directors'], ['support', 'Support staff']];
const GROUP_KEY = ['pastoral', 'pastoral', 'directors', 'support'];

const card = (x, key) => {
  const id = 'bio-' + slugify(x.n);
  return `
    <div class="mcell" data-group="${key}"><button type="button" class="mcard" ${x.link ? `onclick="location.href='${x.link}'"` : `data-dialog="${id}"`} aria-label="${x.n}, ${x.t}. ${x.link ? 'Read the full bio' : 'Open bio'}">
      <span class="mcard-photo">
        <img src="${x.p}" alt="" loading="lazy">
        ${x.badge ? `<span class="mcard-badge">${x.badge}</span>` : ''}
        <span class="mcard-glass"><span class="mcard-name">${x.n}</span><span class="mcard-role">${x.t}</span></span>
      </span>
    </button></div>`;
};

const dialog = (x) => {
  if (x.link) return '';
  const id = 'bio-' + slugify(x.n);
  const rows = [['Department', x.d], ['Favorite worship song', x.song], ['Favorite scripture', x.verse], ['One random fact', x.fact]].filter((r) => r[1]);
  return `
    <dialog class="bio" id="${id}" aria-labelledby="${id}-h">
      <div class="p-7 md:p-10">
        <div class="flex items-center gap-5">
          <div class="photo flat bio-thumb flex-none"><img src="${x.p}" alt=""></div>
          <div><h2 id="${id}-h" class="text-2xl md:text-3xl font-normal">${x.n}</h2><p class="meta mt-1">${x.t}</p></div>
        </div>
        <div class="mt-6 grid gap-4 text-[1.05rem]">
          ${(x.bio || []).map((p) => `<p>${p}</p>`).join('')}
          ${rows.length ? `<dl class="grid gap-3 hair pt-5">${rows.map(([k, v]) => `<div><dt class="ui text-sm font-medium text-[color:var(--navy)]">${k}</dt><dd>${v}</dd></div>`).join('')}</dl>` : ''}
          ${(x.extra || []).length ? `<p class="flex flex-wrap gap-x-6 gap-y-2">${x.extra.map(([h, t]) => a(h, t)).join('')}</p>` : ''}
          ${!x.bio && !rows.length ? `<p class="muted">Want to connect with ${x.n.split(' ').slice(-2).join(' ')}? Call the church office at ${a('tel:+18174698224', '(817) 469-8224')}.</p>` : ''}
        </div>
        <div class="mt-8 flex gap-3"><button type="button" class="btn btn-primary" data-close><span>Close</span></button>${btn('contact.html', 'Contact the office', 'ghost')}</div>
      </div>
    </dialog>`;
};

const TEAM_CSS = `<style>
.mfilters{display:flex;flex-wrap:wrap;align-items:center;gap:.25rem .9rem;font-family:'Lexend',sans-serif;font-size:.9rem}
.mfilter{background:none;border:0;padding:.35rem 0;color:#8A93B3;cursor:pointer;position:relative;transition:transform .35s var(--spring)}
.mfilter:hover{color:var(--deep)}
.mfilter:active{transform:scale(.95)}
.mfilter:focus-visible{outline:2px solid var(--sky);outline-offset:3px;border-radius:4px}
.mfilter[aria-pressed="true"]{color:var(--deep);font-weight:500}
.mfilter-rule{width:2.75rem;height:1px;background:#B8C2DA}
.mgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin-top:2.75rem}
@media(min-width:768px){.mgrid{grid-template-columns:repeat(3,minmax(0,1fr));gap:1.5rem}}
@media(min-width:1100px){.mgrid{grid-template-columns:repeat(4,minmax(0,1fr))}}
.mcell[hidden]{display:none}
/* Card: black-and-white portrait with a frosted glass name strip; hover lifts it into colour */
.mcard{position:relative;display:block;width:100%;padding:0;border:0;background:none;cursor:pointer;color:inherit;font:inherit;text-align:left;border-radius:1.4rem;
  transform:translate3d(0,0,0) scale(1);transition:transform .6s var(--spring)}
.mcard::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .45s var(--ease);
  box-shadow:0 34px 70px -24px rgba(95,174,227,.6),0 0 0 1px rgba(169,214,245,.4),0 0 40px -10px rgba(125,192,238,.35)}
.mcard:hover,.mcard:focus-visible{transform:translate3d(0,-8px,0) scale(1.03)}
.mcard:hover::before,.mcard:focus-visible::before{opacity:1}
.mcard:active{transform:translate3d(0,-4px,0) scale(.99);transition-duration:.15s}
.mcard:focus-visible{outline:2px solid var(--peach);outline-offset:4px}
.mcard-photo{position:relative;display:block;aspect-ratio:4/5;border-radius:1.4rem;overflow:hidden;background:var(--bg3);
  box-shadow:0 20px 44px -22px rgba(0,0,0,.8),0 0 0 1px rgba(255,255,255,.08)}
.mcard-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 12%;transform:scale(1.001);transition:transform .9s var(--ease)}
.mcard:hover .mcard-photo img,.mcard:focus-visible .mcard-photo img{transform:scale(1.04)}
/* Full-width frosted panel along the bottom; its blur fades in softly at the top edge */
.mcard-glass{position:absolute;z-index:2;left:0;right:0;bottom:0;display:block;padding:2.1rem 1.15rem 1.1rem}
.mcard-glass::before{content:"";position:absolute;inset:0;z-index:-1;
  background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(225,232,245,.14) 30%,rgba(24,32,60,.46) 100%);
  backdrop-filter:blur(16px) saturate(1.3);-webkit-backdrop-filter:blur(16px) saturate(1.3);
  -webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 32%);mask-image:linear-gradient(to bottom,transparent 0%,#000 32%)}
.mcard-name{display:block;font-family:var(--sans);font-weight:600;font-size:clamp(1rem,1.35vw,1.2rem);line-height:1.2;letter-spacing:-.01em;color:#fff;text-shadow:0 1px 12px rgba(0,0,0,.35)}
.mcard-role{display:block;margin-top:.3rem;font-family:var(--sans);font-weight:400;font-size:clamp(.78rem,1vw,.9rem);line-height:1.35;color:rgba(255,255,255,.9);text-shadow:0 1px 10px rgba(0,0,0,.35)}
.mcard-badge{position:absolute;z-index:2;top:.6rem;left:.6rem;padding:.35rem .65rem;border-radius:999px;font-family:var(--sans);font-size:.66rem;font-weight:600;letter-spacing:.04em;color:#fff;
  background:rgba(255,255,255,.16);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.3)}
@media(max-width:640px){.mcard-glass{padding:1.6rem .8rem .8rem}.mcard-name{font-size:.9rem}.mcard-role{font-size:.7rem}}
</style>`;

const ALL_PEOPLE = TEAM.flatMap((g, gi) => g.people.map((x) => [x, GROUP_KEY[gi]]));

export const team = {
  slug: 'executive-staff.html', title: 'Our Team',
  body: `
${TEAM_CSS}
${pageHead({ title: 'Meet the New Life Team', crumbs: [['About Us', 'about-us.html']], intro: 'Dedicated leaders and staff who serve our community with passion. Select any team member’s photo or name to read their bio and learn about their role. We’re here to help — reach out and let us know how we can serve you.' })}
<section class="section" style="padding-top:4rem;background:var(--bg)">
  <div class="wrap">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <h2 style="font-family:var(--display);font-weight:400;letter-spacing:-.02em">Our team</h2>
      <div class="mfilters" role="group" aria-label="Filter team">
        ${FILTERS.map(([k, t], i) => `${i ? '<span class="mfilter-rule" aria-hidden="true"></span>' : ''}<button type="button" class="mfilter" data-filter="${k}" aria-pressed="${i === 0}">${t}</button>`).join('')}
      </div>
    </div>
    <div class="mgrid">${ALL_PEOPLE.map(([x, k]) => card(x, k)).join('')}</div>
    ${ALL_PEOPLE.map(([x]) => dialog(x)).join('')}
  </div>
</section>
<script>
(() => {
  const btns = document.querySelectorAll('.mfilter'), cards = document.querySelectorAll('.mcell');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.setAttribute('aria-pressed', x === b));
    let n = 0;
    cards.forEach(c => { const show = b.dataset.filter === 'all' || c.dataset.group === b.dataset.filter;
      c.hidden = !show; c.classList.remove('pop'); c.removeAttribute('data-reveal');
      if (show) { c.style.setProperty('--d', (Math.min(n++, 8) * 0.05) + 's'); void c.offsetWidth; c.classList.add('pop'); } });
  }));
})();
</script>
<section class="section bg-deep">
  <div class="wrap">
    <h2>Full staff photos</h2>
    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      ${GROUP_PHOTOS.map(([f, t]) => `<a href="${img(f, 2000)}" target="_blank" rel="noopener" class="tile photo rounded-[1.25rem] aspect-[4/3]"><img src="${img(f, 800)}" alt="${t}" class="absolute inset-0"><span class="photo-cap ui">${t}</span></a>`).join('')}
    </div>
  </div>
</section>`,
};

// ---------------------------------------------------------------- PRAYER
export const prayer = {
  slug: 'prayer.html', title: 'Prayer',
  body: `
${pageHead({ title: 'We believe in the power of prayer', crumbs: [['Connect', '']], intro: 'New Life Fellowship offers different ways for you to grow in your prayer life.', image: img('a872f9e0-a9e5-43af-8f84-3bae76eb6982/1.png', 1200), imageAlt: 'Prayer at New Life' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
    <div class="prose-nl">
      <p>Prayer is central at New Life Fellowship, it connects us to God, strengthens our community, and brings comfort and hope in every season. Through prayer we celebrate God’s faithfulness, bear one another’s burdens, and invite His peace into every circumstance.</p>
      <p>As Philippians 4:6–7 reminds us, “Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God…will guard your hearts and your minds.” James 5:16 encourages us to “pray for one another” so we may be healed, and Jesus promises where we gather in His name He is present (Matthew 18:20).</p>
      <p>If you have a prayer request, please use the button below to submit it. Our prayer team is standing with you.</p>
      <div class="mt-8">${btn(LINKS.prayerForm, 'Submit a Prayer Request')}</div>
    </div>
    <a href="nlfprayerwall.html" class="tile surface-raised overflow-hidden">
      <div class="photo flat aspect-[16/10]"><img src="${img('1c7570f5-8e9f-490b-bf82-fe591f025779/Prayer+Wall.jpeg', 800)}" alt="Prayer Wall"></div>
      <div class="p-8"><h3>Prayer Wall</h3><p class="mt-3">New Life Fellowship has a designated prayer wall explicitly designed for people to post prayers and pray for others. You can make your request public or have the Prayer Team pray for you, and select “I Prayed For This” on someone else’s request.</p><span class="link mt-5">Go to the Prayer Wall</span></div>
    </a>
  </div>
</section>
<section class="section bg-paper">
  <div class="wrap">
    <h2>Prayer call</h2>
    <p class="lede mt-4">Join the New Life Fellowship Prayer Ministry Wednesday &amp; Saturday mornings for a time of prayer!</p>
    <div class="mt-10 grid md:grid-cols-3 gap-6">
      <div class="surface-raised p-8"><h3>Wednesday, 6:30 am</h3><p class="mt-1 muted">Conference call</p><p class="mt-4">${a('tel:+14254366388', '(425) 436-6388')}<br><span class="ui text-sm">Access code 684 770</span></p></div>
      <div class="surface-raised p-8"><h3>Saturday, 9:30 am</h3><p class="mt-1 muted">Zoom</p><p class="mt-4 ui text-sm">Meeting ID: 849 1666 7012<br>Passcode: 502059</p><div class="mt-5">${btn('https://us06web.zoom.us/j/84916667012?pwd=rb3w0BB1m2ryFgBI53vKflT5Xw4JO1.1', 'Join Zoom Meeting', 'ghost')}</div></div>
      <div class="surface-raised p-8"><h3>Last Friday of the month, 7:00 pm</h3><p class="mt-1 muted">Conference call</p><p class="mt-4">${a('tel:+14254366388', '(425) 436-6388')}<br><span class="ui text-sm">Access code 684 770</span></p></div>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
    <div class="photo flat rounded-[1.75rem] aspect-square" style="box-shadow:var(--sh-2)"><img src="${img('5ff55db6-c810-40bd-8098-ada3d5715632/Unleashed+Prayer+quarterly.png', 800)}" alt="UNLEASHED quarterly prayer service"></div>
    <div>
      <h2>Quarterly UNLEASHED church wide prayer service</h2>
      <p class="mt-5">Join with other members and guests on the scheduled dates each quarter at 7 pm for our church wide prayer night!</p>
      <ul class="mt-6 grid gap-2 ui">${['Wednesday, March 18', 'Wednesday, June 17', 'Wednesday, September 16', 'Wednesday, November 18'].map((d) => `<li class="hair pt-2">${d} · 7:00 pm</li>`).join('')}</ul>
      <p class="mt-6">The Bible says, “Call to me, and I will answer you and tell you great and unsearchable things you do not know.” (Jeremiah 33:3). Come out to experience community and worship as we read scripture, participate in teaching and commit dedicated time to prayer.</p>
    </div>
  </div>
</section>`,
};

export const prayerWall = {
  slug: 'nlfprayerwall.html', title: 'Prayer Wall',
  body: `
${pageHead({ title: 'Prayer Wall', crumbs: [['Connect', ''], ['Prayer', 'prayer.html']], intro: 'Join the online prayer community by creating a profile to access the Prayer Wall, to submit your prayer requests, pray for others, share words of encouragement and praise reports.' })}
<section class="section">
  <div class="wrap">
    <div class="surface-raised p-4 md:p-8 min-h-[24rem]">
      <div id="app-widget"></div>
      <noscript><p>The Prayer Wall needs JavaScript to load. You can also ${a(LINKS.prayerForm, 'submit a prayer request')}.</p></noscript>
    </div>
    <p class="mt-6 muted">Prefer to send your request privately? ${a(LINKS.prayerForm, 'Submit a prayer request form')}.</p>
  </div>
</section>
<script>!function(){var a=window,c=document,b=function(){var a=c.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://content.impactfactors.net/websites/widgets/prayer-wall/customizationWidget.js?client=nlf&widgetId=2";var b=c.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)};"complete"===document.readyState?b():a.addEventListener("load",b,!1)}()</script>`,
};

// ---------------------------------------------------------------- MEMBERSHIP / NEXT STEPS / BAPTISM
export const becomeMember = {
  slug: 'become-a-member.html', title: 'Become a Member',
  body: `
${pageHead({ title: 'Become a Member', crumbs: [['Connect', '']], intro: 'One of the most critical decisions in any Christian’s life is the selection of their church home.' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-2 gap-14">
    <div><h2 class="text-3xl md:text-4xl">Why is membership important?</h2>
      <div class="prose-nl mt-6"><p>Because the church is entrusted with the tremendous responsibility of its members’ spiritual well-being, it is of utmost importance that the choice is made wisely and carefully.</p><p>New Life Fellowship respects the seriousness of this decision that we have established a membership process. Our prayer is once the process is completed, new members will be equipped to participate in our strategy and be eager to continue the process of spiritual growth.</p></div></div>
    <div class="surface-float p-8 md:p-10 self-start"><h2 class="text-3xl md:text-4xl">How to become a member</h2>
      <p class="mt-5">Membership orientation is designed to share New Life’s beliefs, strategies, and expectations of members, as well as basic principles of the Christian faith.</p>
      <p class="mt-4">New Members Orientation is a two part class taking place on the first &amp; second Sunday of each month starting at 1:30.</p>
      <div class="mt-7">${btn(LINKS.memberClass, 'Register for Class')}</div>
      <div class="hair mt-8 pt-6"><h4>Downloads</h4><ul class="mt-3 grid gap-2">
        <li>${a(pdf('NMO-Handbook.pdf'), 'Membership Orientation Packet')}</li>
        <li>${a(pdf('AmendedRestatedBylaws.pdf'), 'Amended & Restated Bylaws')}</li>
        <li>${a(pdf('NewMemberDataFormRevised-fillable.pdf'), 'The New Member Data Form')}</li></ul></div>
    </div>
  </div>
</section>`,
};

const STEPS = [
  ['Realize', 'that because of God’s love for us He sent His Son to die for our sins.', '“For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.”', 'John 3:16'],
  ['Acknowledge', 'that you are a sinner in need of a Savior.', '“for all have sinned and fall short of the glory of God”', 'Romans 3:23'],
  ['Accept', 'the free gift of eternal life through Jesus Christ that is given not because you deserve it, but because of God’s grace and mercy.', '“For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.”', 'Romans 6:23'],
  ['Enjoy', 'the new and abundant life that Jesus Christ provides upon trusting Him as your savior.', '“…I have come that they may have life and that they may have it more abundantly.”', 'John 10:10'],
];
export const nextSteps = {
  slug: 'nextsteps.html', title: 'Take the Next Step',
  body: `
${pageHead({ title: 'Take the Next Step', crumbs: [['Connect', '']], intro: 'We thank God for you and celebrate with you as you respond to the call of God. We want to walk with you as you take your Next Step in your walk with Christ!' })}
<section class="section">
  <div class="wrap">
    <h2>Accepting Christ</h2>
    <div class="mt-12">${stackPanels('step', STEPS.map(([w, t, q, r]) => ({ key: w, title: w, text: `${w} ${t}`, quote: [q, r] })))}</div>
    <div class="mt-12 surface p-8 md:p-10 bg-paper flex flex-col md:flex-row md:items-center justify-between gap-6">
      <p class="text-[1.25rem] max-w-2xl">If you prayed to trust Jesus as your Savior, we would love to hear from you! Contact us to let us know or to talk more about Christ.</p>
      ${btn('contact.html', 'I prayed that prayer')}
    </div>
  </div>
</section>
<section class="section bg-paper">
  <div class="wrap grid md:grid-cols-2 gap-6">
    <div class="surface-raised p-8"><h3>Join New Life</h3><p class="mt-3">We would love to have you as part of New Life Fellowship. We believe that membership is important.</p><div class="mt-6">${btn('become-a-member.html', 'Learn more about membership', 'ghost')}</div></div>
    <div class="surface-raised p-8"><h3>Submit a prayer request</h3><p class="mt-3">We believe in the power of prayer. If you have a prayer request, please let us know by completing a Prayer Request Form.</p><div class="mt-6">${btn('prayer.html', 'Prayer Request Form', 'ghost')}</div></div>
  </div>
  <div class="wrap mt-14">
    <h2 class="text-3xl">Next steps</h2>
    <div class="mt-6 flex flex-wrap gap-3">${btn('baptism.html', 'Baptism')}${btn('become-a-member.html', 'Become a Member')}${btn('life-groups.html', 'Join a Life Group')}${btn('prayer.html', 'Prayer Request')}</div>
  </div>
</section>`,
};

export const baptism = {
  slug: 'baptism.html', title: 'Get Baptized',
  body: `
${pageHead({ title: 'Get Baptized', crumbs: [['Connect', '']], intro: 'At New Life Fellowship, we believe that Baptism is an essential step of obedience for every person who has accepted Christ as his or her Savior. Baptism is available for children (3rd grade) through adults.', image: img('1611769325883-QWLX5IE9Y4NQLZPCTGRT/DSC_0357.jpg', 800), imageAlt: 'A baptism at New Life' })}
<section class="section">
  <div class="wrap">
    <h2>Baptism for every age</h2>
    <div class="mt-12">${stackPanels('bap', [
      { key: 'Children', title: 'Children’s baptism', stat: ['3rd–6th', 'grade'], imgs: [[img('1611770125189-AWSJ9HKWHYJFY6H3FGPY/baptism_nov015.jpg', 800), 'A child being baptized'], [img('1611769587502-QA9AD1G15TNJNXF4W1A6/baptism216.jpg', 800), 'A children’s baptism'], [img('1611706859795-5314MA0RV3BUL2EX3PHP/KidzLife+Service', 800), 'A KidzLife service']],
        text: 'If your child has confessed and believes that Jesus is the risen Savior, they may be ready for Baptism. Students must be in 3rd through 6th grade and attend the Children’s Baptism Class sessions, an age-appropriate class designed to clarify their understanding of becoming a follower of Christ. Parents attend the first 15 minutes with their children to learn the purpose of Baptism and the steps to be ready for the baptism service.',
        cta: [[F1('fe36312e-05b9-40c7-af13-8991a0b22e31'), 'Kids Registration'], [pdf('Kidzlife-Baptism-Orientation.pdf'), 'Orientation Packet'], [pdf('ChildrenYouth-Baptism-Parent-Info.pdf'), 'Post Class Parent Info']] },
      { key: 'Youth', title: 'Youth baptism', stat: ['2', 'orientation sessions'], imgs: [[img('1611709657703-1Y8U9FRBAREIEJUQGMAU/Student+Small+Groups', 800), 'Students in a small group'], [img('1611770125189-AWSJ9HKWHYJFY6H3FGPY/baptism_nov015.jpg', 800), 'A youth baptism'], [img('1611710097715-HUOOG433UXPCAN72VQFT/Students+Praising+God', 800), 'Students praising God']],
        text: 'Baptism is an exciting time in a believer’s life, and we invite students who have trusted Christ to take this next step! Orientations are held in 2 sessions before the actual baptism date.',
        cta: [[F1('fe36312e-05b9-40c7-af13-8991a0b22e31'), 'Get Registered'], [pdf('Youth-Baptism-Orientation.pdf'), 'Orientation Packet'], [pdf('ChildrenYouth-Baptism-Parent-Info.pdf'), 'Post Class Parent Info']] },
      { key: 'Adults', title: 'Adult baptism', stat: ['1', 'orientation to attend'], imgs: [[img('1611769587502-QA9AD1G15TNJNXF4W1A6/baptism216.jpg', 800), 'A baptism at New Life'], [img('1611769325883-QWLX5IE9Y4NQLZPCTGRT/DSC_0357.jpg', 800), 'An adult baptism'], [img('1612304636375-EXHVOA83KOZRUXE55IXM/DSC_0171.jpg', 800), 'Members greeting each other in the lobby']],
        text: 'If you have accepted Jesus Christ as your Lord and Savior and would like the opportunity to acknowledge your faith publicly, you may register to be a candidate for Baptism. You don’t need to be a member of New Life Fellowship; however, you must attend a Baptism Orientation to participate.',
        cta: [[F1('ffed7851-b28d-4878-8921-b97cb9e37588'), 'Adults Baptism Class'], ['mailto:groups@nlifefellowship.org', 'Inquire']] },
    ])}</div>
  </div>
</section>`,
};

// ---------------------------------------------------------------- LIFE GROUPS
const LG = [
  ['Monday', [
    ['What’s in the Old Testament', 'Monday · 7:00 pm · Coed · SG · Church', 'This group will walk through the big story of the Old Testament, tracing the major movements, historical settings, key people, and prophetic voices that shape the biblical story. The hope is to help others not just know the stories, but understand how they connect and why they matter.'],
    ['Bible Study Part 1 — “What is the Bible”', 'Monday · 7:00 pm · Coed · SG · Church', 'This course is designed to equip participants with foundational and theological instruction, concerning the authority and reliability, of the Bible. This interactive study will concentrate on the Bible’s uniqueness, and its ability to transform lives. The group will observe the layout of the Bible and will be expected to know how the bible is categorized. Participants will be introduced to definitions of key terms and principles, along with the scriptures that support those key terms and principles.'],
  ]],
  ['Tuesday', [
    ['Silver Saints', 'Tuesday · 11:00 am · Coed · SL · Church', 'Weekly Bible Study for individuals 60+ years of age. Join us as we go through various bible studies and devotions. Participants are challenged in learning, loving, and living out the Scriptures. This group also engages in field trips to various locations in the area along with serving in some outreach opportunities, both here at the church and throughout the community.'],
    ['Bible Study Part 2 — “How and Why We Study the Bible”', 'Tuesday · 7:00 pm · Coed · SG · Church', '2 Timothy 2:15 says “Study to show yourself approved unto God, a workman that need not be ashamed, accurately dividing the word of truth”. This life group answers the question of why we should study the bible and how do we correctly study the bible? Join us as we learn the principles and tools of Inductive Bible Study. Prerequisite: completion of Bible Study Pt 1.'],
    ['Bible Study Part 3 — “Major Bible Doctrine”', 'Tuesday · 7:00 pm · Coed · SG · Church', 'This 8-week Bible study explores the major doctrines of our Christian faith. We will seek to answer: What do we believe, and where in the Bible do we find the answers? Prerequisite: completion of Bible Study Pt 2.'],
  ]],
  ['Wednesday', [
    ['Study of Prophet Joel', 'Tuesday · 11:00 am · Coed · SG · Church', 'Joel warns of a devastating locust plague symbolizing God’s judgment, urging repentance and return to God. It promises restoration and blessings for those who turn back. Joel prophesies the outpouring of the Holy Spirit and the coming Day of the LORD, a time of divine intervention, judgment, and ultimate salvation for God’s people.'],
    ['The Purpose Driven Life', 'Wednesday · 7:00 pm · Coed · SG · Church', 'You were made by God and for God, and until you understand that, life will never make sense. In this group we will discuss why you are alive and God’s amazing plan for you — both here and now, and for eternity. Knowing God’s purpose for creating you will reduce your stress, focus your energy, simplify your decisions, give meaning to your life, and, most importantly, prepare you for eternity. (“The Purpose Driven Life” – Rick Warren)'],
    ['DivorceCare', 'Wednesday · 7:00 pm · Coed · SL · Church', 'DivorceCare is a safe place where caring people come alongside you as you find healing from the pain of separation or divorce. You’ll learn how to deal with your emotions and stresses and will gain tools for forward movement and health in your life.'],
    ['Single', 'Wednesday · 7:00 pm · Coed · SL · Church', 'God gives us purpose in each relational season we experience; Singleness, Dating, Engagement, and Marriage. Discover how to thrive in each one. (Ben Stuart)'],
  ]],
];
const LG_REG = F1('d232cf54-e851-4888-af25-770f8e71e402');
export const lifeGroupReg = {
  slug: 'life-group-registration.html', title: 'Join a Life Group',
  body: `
${pageHead({ title: '2026 Fall Groups', crumbs: [['Connect', ''], ['Life Groups', 'life-groups.html']], intro: 'Here at New Life Fellowship, we’re a church of Life Groups, not simply a church with Life Groups.' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-[1fr_1.6fr] gap-12">
    <aside class="lg:sticky lg:top-28 self-start">
      <h2 class="text-3xl">The philosophy of Life Groups</h2>
      <div class="prose-nl mt-5 text-[1.05rem]"><p>Life Groups (LG) serve as a weekly gathering of 10 to 12 individuals for the purpose of caring for one another, growing spiritually, contributing to the ministry of the church, and connecting in authentic relationships. The best place to make disciples is within the intimacy and trust of a Life Group.</p><p>In Life Groups, newcomers can form relationships, discover gifts, meet needs, heal hurts, kindle hope and build faith.</p></div>
      <p class="mt-5 ui text-sm muted">SG = Spiritual Growth · SL = Seasons of Life · SI = Special Interest</p>
      <div class="mt-6 flex flex-wrap gap-3">${btn('https://www.nlbookstore.com/shop/life-group-resources/13', 'Buy group resources', 'ghost')}${btn('life-groups.html', 'About Life Groups', 'ghost')}</div>
    </aside>
    <div>
      <div class="flex flex-wrap gap-2" role="tablist" aria-label="Group days">
        ${LG.map(([d], i) => `<button class="tab" role="tab" id="lt-${i}" aria-controls="lp-${i}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}">${d}</button>`).join('')}
      </div>
      ${LG.map(([d, gs], i) => `<div class="tab-panel mt-6 grid gap-5" role="tabpanel" id="lp-${i}" aria-labelledby="lt-${i}"${i ? ' hidden' : ''}>
        ${gs.map(([t, m, desc]) => `<article class="surface-raised p-7 md:p-8"><h3>${t}</h3><p class="meta mt-1">${m}</p><p class="mt-4 text-[1.05rem]">${desc}</p><div class="mt-6">${btn(LG_REG, 'Register Here', 'primary')}</div></article>`).join('')}
      </div>`).join('')}
    </div>
  </div>
</section>`,
};

const FAQ = [
  ['What are Life Groups?', 'Life Groups are New Life’s communities of people connected for fellowship and shared experiences. Life Groups are New Life Fellowship’s groups of 15-20 people who meet together once a week for 12 weeks. Groups allow for opportunities to connect with others as we grow in our faith and learn to live out the scriptures. You can choose your group based on your season of life, special interest, or spiritual growth.'],
  ['Is there a group that’s right for me?', 'We offer a variety of groups based on Seasons of Life (SL), Spiritual Growth (SG), and Special Interest (SI). Groups will be structured around three sessions per year that are 10-12 weeks in length. We offer new and fresh topics relevant to the current issues of life and sound Biblical teaching to provide spiritual growth for each person. With groups offered six days, you choose your growth tract!'],
  ['Do I need to buy a book or study guide?', 'Your group leader will contact you about any course books or materials needed for the group.'],
  ['What happens when I sign up?', 'When you sign up, the leader of your new group will contact you with the address of the meeting place, the date and time you’ll be starting on, and all the other information you’ll need to have a great experience.'],
];
export const lifeGroups = {
  slug: 'life-groups.html', title: 'Life Groups',
  body: `
${pageHead({ title: 'Connecting in community', crumbs: [['Connect', '']], intro: 'Life Groups have always been foundational within our ministry. We don’t want to be just a church with groups; we want to be a church of groups.', image: img('1612398721230-L8FMBJQSOB0C3VUM4SN7/Life+Group+Session', 800), imageAlt: 'A Life Group session' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-2 gap-14">
    <div><h2 class="text-3xl md:text-4xl">What’s new with Life Groups?</h2><div class="prose-nl mt-5"><p>Cultivating genuine relationships is one of the core values here at New Life Fellowship. It’s our desire to provide opportunities for the people of our congregation to connect with one another; to experience the mutual strength, growth, and encouragement that comes when we are connected in the community.</p><p>The heart and vision of our church is that you will be connected to someone else. We want to be the kind of church that, as we walk through life, have somebody walking with us, supporting us in those good times, and especially the difficult ones.</p></div><div class="mt-8">${btn('life-group-registration.html', 'Get Connected Now')}</div></div>
    <div class="surface-raised p-8 md:p-10 self-start"><h3>Vision for new groups</h3><p class="mt-3">To create connections with others around common interests, to stimulate one another to love and good deeds; by encouraging one another as we gather together in meaningful groups.</p>
      <ul class="mt-6 grid gap-4">
        <li class="hair pt-4"><h4>Three sessions a year</h4><p class="text-[1.05rem]">10–12 weeks each, with groups based on Seasons of Life, Spiritual Growth, and Special Interest. New topics every trimester.</p></li>
        <li class="hair pt-4"><h4>Easier enrollment</h4><p class="text-[1.05rem]">A designated open enrollment period using the New Life website, app, or sign up table, with calendars for group types, days, and dates in advance.</p></li>
        <li class="hair pt-4"><h4>You control your growth tract</h4><p class="text-[1.05rem]">With many more group structures offered throughout the year, you can take better control of your spiritual growth.</p></li>
      </ul></div>
  </div>
</section>
<section class="section bg-deep">
  <div class="wrap grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
    <div><h2>Want to lead a Life Group?</h2><p class="mt-5 max-w-2xl">With new facilitator training, shorter commitments, and clear requirements on becoming a facilitator, our life group format gives those of you with unique expertise the opportunity to facilitate a life group. We offer The Art of Facilitation Training to anyone who may be interested in leading a Life Group.</p></div>
    <div class="md:justify-self-end">${btn('https://nlfatx.infellowship.com/Forms/457941', 'Register for AOF', 'light')}</div>
  </div>
</section>
<section class="section">
  <div class="wrap max-w-4xl">
    <h2>Frequently asked questions</h2>
    <div class="mt-10">${FAQ.map(([q, ans]) => `<details class="faq"><summary>${q}${plus}</summary><div class="faq-body"><p>${ans}</p></div></details>`).join('')}</div>
    <p class="mt-10">Questions? Ask us at ${a('mailto:groups@nlifefellowship.org', 'groups@nlifefellowship.org')}.</p>
  </div>
</section>`,
};

// ---------------------------------------------------------------- MEMBER SUPPORT
export const memberSupport = {
  slug: 'member-support.html', title: 'Member Support',
  body: `
${pageHead({ title: 'Member Support', crumbs: [['Connect', '']], intro: 'Life can bring about difficult circumstances beyond your control, creating financial hardships that prevent you from meeting your basic needs. New Life Fellowship’s Benevolence Funds are set aside for those who have specific needs that directly affect receiving the necessities of life: food, clothing, housing, transportation, and health.' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-2 gap-14">
    <div>
      <h2 class="text-3xl md:text-4xl">What is benevolence?</h2>
      <div class="prose-nl mt-5"><p>The Benevolence fund is an officially recognized fund and ministry established by the Elders to distribute funds to people in need. The Scriptures provide numerous examples of people who found themselves in crisis conditions and without the means to rectify their situation. The Scriptures provide the church a mandate and a process for supporting those who are in crisis. For example, in 1 Tim. 5:16, Paul says family members should take care of widows in their family so the church can be free to take care of those with no family support.</p></div>
      <h3 class="mt-10">Biblical support</h3>
      <p class="mt-3">The Bible is full of models and encouragement to be generous and to consider the needs of the family of God.</p>
      <ul class="mt-4 grid gap-3 italic"><li>Acts 2:44–45 — And all those who had believed were together and had all things in common; and they began selling their property and possessions and were sharing them with all, as anyone might have need.</li><li>Gal. 2:10 — “Remember the poor”</li><li>2 Cor. 8:3 — Generosity of the Macedonian churches</li></ul>
    </div>
    <div class="surface-float p-8 md:p-10 self-start">
      <h2 class="text-3xl">The process</h2>
      <ol class="mt-6 grid gap-5">
        ${['Download the Benevolence Application form.', 'Organize all required documents.', 'Submit the application along with all required documents using the Submit Application button below.', 'An individual from New Life Fellowship’s Benevolence team will reach out and update you on the next steps.'].map((s, i) => `<li class="flex gap-4"><span class="flex-none w-9 h-9 rounded-full grid place-items-center ui text-white text-sm" style="background:var(--navy);color:#06101F">${i + 1}</span><span>${s}</span></li>`).join('')}
      </ol>
      <div class="mt-8 flex flex-wrap gap-3">${btn(pdf('Benevolence-fund-application.pdf'), 'Download Application', 'ghost')}${btn(F1('c82bc190-1ec5-415d-85f2-caae6a3e4ad8'), 'Submit Application')}</div>
    </div>
  </div>
</section>`,
};

// ---------------------------------------------------------------- SERMON NOTES
const SERMONS = [
  ['Vanished', '8/11/24', 'End-Times-Vanished-Updated-djbn.pdf'], ['Vanished Pt. 2', '8/18/24', 'End-Times-Vanished-Pt-2.pdf'], ['Vanished Pt. 3', '8/25/24', 'End-Times-Vanished-Pt-3.pdf'],
  ['A Time of Reckoning', '9/8/24', 'End-Times-A-Time-of-Reckoning.pdf'], ['A Worship from Heaven’s Perspective', '9/15/24', 'Worship-From-Heavens-Perspective.pdf'],
  ['Worship from Heaven’s Perspective, Pt. 2', '9/22/24', 'End-Time-Worship-From-A-Heavens-Perspective-Pt-2.pdf'], ['Worship from Heaven’s Perspective, Pt. 3', '9/29/24', 'End-Times-Worship-from-Heavens-Perspective-Pt-3.pdf'],
  ['Armageddon', '11/10/24', 'Armageddon.pdf'], ['The Kingdom', '11/17/24', 'End-Times-Template-kingdom.pdf'], ['The Kingdom Pt. 2', '11/24/24', 'End-Times-The-Kingdom-Pt-2.pdf'],
];
export const sermonNotes = {
  slug: 'sermonnotes.html', title: 'Sermon Notes',
  body: `
${pageHead({ title: 'Sermon Notes', crumbs: [['Connect', '']], intro: 'Download each week’s detailed sermon notes below.', image: img('92d64ab4-508f-4318-aaeb-eae0753062ce/END+TIMES+%282%29+%282%29.jpg', 800), imageAlt: 'End Times: Are We There Yet? sermon series' })}
<section class="section">
  <div class="wrap">
    <h2 class="text-3xl md:text-4xl">End Times: Are We There Yet?</h2>
    <ul class="mt-10">
      ${SERMONS.map(([t, d, f]) => `<li class="hair"><a href="${pdf(f)}" target="_blank" rel="noopener" class="tile flex flex-wrap items-center gap-x-6 gap-y-1 py-5"><span class="ui text-sm muted w-20">${d}</span><span class="flex-1 ui text-lg text-[color:var(--deep)]">${t}</span><span class="link">Download notes</span></a></li>`).join('')}
      <li class="hair"></li>
    </ul>
    <div class="mt-10 flex flex-wrap gap-3">${btn(LINKS.watch, 'Watch services online')}${btn(LINKS.youtube, 'New Life on YouTube', 'ghost')}</div>
  </div>
</section>`,
};

export const babyDedication = {
  slug: 'nlfbabydedication.html', title: 'Baby Dedication',
  body: `
${pageHead({ title: 'Baby Dedication Parent Orientation', crumbs: [['Connect', '']], intro: 'Children are wonderful gifts from God. At New Life Fellowship we encourage parents to dedicate their children to the Lord and commit themselves to raising their children in the teachings and ways of God.' })}
<section class="section">
  <div class="wrap">
    <p class="max-w-3xl">We dedicate babies up to 2 years old. Those interested in participating should complete the form to register for the next Baby Dedication Parent Orientation Class. This class is required for all those who desire to have their babies dedicated.</p>
    <div class="mt-12 grid md:grid-cols-2 gap-6">
      ${[['2026 parent orientation dates', ['Sunday, February 22, 2026', 'Sunday, April 26, 2026', 'Sunday, July 26, 2026', 'Sunday, October 25, 2026']], ['2026 dedication ceremony dates', ['Sunday, March 22, 2026', 'Sunday, May 24, 2026', 'Sunday, August 23, 2026', 'Sunday, November 22, 2026']]].map(([t, ds], i) => `<div class="surface-raised p-8"><p class="ui text-5xl font-extralight text-[color:var(--sky)] leading-none">${i + 1}</p><h3 class="mt-4">${t}</h3><ul class="mt-4 grid gap-2">${ds.map((d) => `<li class="hair pt-2 ui">${d}</li>`).join('')}</ul></div>`).join('')}
    </div>
    <div class="mt-10">${btn(F1('f7bbf327-16dc-480c-964b-976e350f0fa4'), 'Register for Baby Dedication')}</div>
  </div>
</section>`,
};

// ---------------------------------------------------------------- OUR FUTURE HOME
const RENDERS = [
  ['1759510896686-LHVJQNLZD8TFBTUPZHOI/New+life+Fellowship+auditorium-1+3-8-25.jpg', 'New auditorium rendering'],
  ['1759510896176-AV5YZX3YFN4MD4CNQM3G/New+life+Fellowship+auditorium-2+3-8-25.jpg', 'New auditorium rendering, second view'],
  ['1759510924026-5HITOWZC4EKORPBWHX8J/Multi-Purpose+Building+Final.1.jpeg', 'Multi-purpose building'],
  ['1759510924095-1UEDBI5F0X5RZZXPSPGC/Sanctuary+Building+Final+.1.jpeg', 'Sanctuary building'],
  ['1759510987515-DTTHVMZRIV2DMPY0V9JL/Life+Fellowship+exterior+-1+5-6-25.jpg', 'Exterior rendering'],
  ['1759510987340-S3Y68FBOF559QE2PEYPW/Life+Fellowship+exterior+-2+5-6-25.jpg', 'Exterior rendering, second view'],
  ['1759510992011-XA17966OKBK3K5SZW3EI/Life+Fellowship+exterior+-3+5-5-25.jpg', 'Exterior rendering, third view'],
  ['1759511074420-Z0A5GC6CL6ZNDZZRWAG6/life+fellowship+interior+Lobby_1+8-5-25.jpg', 'Interior lobby rendering'],
];
const PRAYERS = [
  ['Community impact', 'Let us pray that God’s Spirit will empower us to reach hundreds of souls for Christ, spreading His love and truth throughout our community. May our words inspire hope, and our actions reflect His goodness, transforming lives and uplifting those around us. May our efforts create a ripple effect of kindness, compassion, and faith, making a lasting impact for His kingdom.'],
  ['Church growth', 'May we experience continued spiritual growth, ignited by a deep hunger for God and a desire to draw closer to His presence. Let us grow stronger in His Word, fervent in prayer, passionate in worship, and united in purpose. Additionally, pray that our church remains a welcoming and inclusive family, open to receiving people from every social, economic, and ethnic background that God sends our way.'],
  ['Campus expansion', 'Let us earnestly pray that God will grant us the necessary financial provision to support our campus expansion project. May He also pour out His divine wisdom upon us, guiding every decision and step we take. With His favor and direction, may this expansion become a beacon of learning, growth, and community enrichment.'],
];
export const futureHome = {
  slug: 'ourfuturehome.html', title: 'Our Future Home',
  body: `
${pageHead({ title: 'Our Future Home', crumbs: [['Connect', '']], intro: 'Our construction project is an exciting step toward expanding and improving our facility to better serve our community.' })}
<section class="section" style="padding-top:3rem">
  <div class="wrap">
    <div class="photo flat rounded-[2rem] aspect-[16/8]" style="box-shadow:var(--sh-3)"><img src="${img(RENDERS[4][0], 2000)}" alt="${RENDERS[4][1]}"></div>
    <div class="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-12">
      <h2>The project</h2>
      <div class="prose-nl"><p>The new building will feature a welcoming foyer for fellowship, a spacious sanctuary for worship, and additional space for offices and classrooms. Our 14-acre campus, blessed by God in 2005, will be fully utilized to invite more people to follow Christ and support our growth. With these improvements, we aim to create an environment where ministry can thrive and make a positive impact for God’s glory.</p></div>
    </div>
    <div class="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
      ${RENDERS.filter((_, i) => i !== 4).map(([f, t]) => `<a href="${img(f, 2500)}" target="_blank" rel="noopener" class="tile photo flat rounded-[1.25rem] aspect-[4/3]" aria-label="Open larger: ${t}"><img src="${img(f, 800)}" alt="${t}" class="absolute inset-0"></a>`).join('')}
    </div>
  </div>
</section>
<section class="section bg-paper">
  <div class="wrap">
    <h2>The prayer</h2>
    <div class="mt-10 grid md:grid-cols-3 gap-6">${PRAYERS.map(([t, d]) => `<article class="surface-raised p-8"><h3>${t}</h3><p class="mt-3 text-[1.05rem]">${d}</p></article>`).join('')}</div>
  </div>
</section>
<section class="section bg-deep">
  <div class="wrap grid lg:grid-cols-[1fr_1.4fr] gap-12">
    <h2>The Thanksgiving Offering</h2>
    <div><p>Here at New Life Fellowship, we do not conduct capital campaigns. Instead, in 2022, we established the Thanksgiving Offering as a collective act of gratitude for God’s faithfulness and provision. Each family is asked to present a free will offering, equivalent to one week’s household income beyond their tithes, to support campus expansion, improvements, renovations, and community impact — completed by the weekend of Thanksgiving. This offering is given freely, as the heart is moved by the Lord (Ex. 35:29; Ezra 3:5; 8:28), and is above and beyond the 10% tithe.</p>
      <div class="mt-8">${btn(LINKS.give, 'Give to Thanksgiving Offering', 'light')}</div></div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <h2>Project updates</h2>
    <p class="lede mt-4">A lot is taking shape behind the scenes as we work toward our new facility. Keep checking here for construction and financial updates and milestones.</p>
    <ol class="mt-10">
      <li class="grid md:grid-cols-[14rem_1fr] gap-4 py-6 hair"><span class="ui text-xl font-light text-[color:var(--navy)]">July 2024</span><p>The building architects’ conceptual designs and initial drawings for the New Auditorium are now finalized. We invite you to explore these visualizations here on this page or view them in person in our foyer.</p></li>
      <li class="grid md:grid-cols-[14rem_1fr] gap-4 py-6 hair"><span class="ui text-xl font-light text-[color:var(--navy)]">September 2024</span><p>The topography survey of the campus, a crucial first step in the civil engineering process, has been successfully completed.</p></li>
    </ol>
  </div>
</section>`,
};

// ---------------------------------------------------------------- LOVE YOUR NEIGHBOR
export const loveNeighbor = {
  slug: 'loveyourneighbor.html', title: 'Love Your Neighbor',
  body: `
${pageHead({ title: 'Love Your Neighbor', crumbs: [['Connect', '']], intro: 'Together, let’s make our community a brighter, more caring place for all. We believe that small acts of kindness have the power to create a ripple effect of goodness that can transform lives.', image: img('1760108933971-QS1MIL6RYK4AGZ3KUHO6/Love+Your+Neighbor+logo.jpg', 800), imageAlt: 'Love Your Neighbor campaign logo' })}
<section class="section">
  <div class="wrap grid md:grid-cols-2 gap-8">
    <figure class="surface p-8 bg-paper"><blockquote class="italic text-[1.2rem]">“And he answered, ‘You shall love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind, and your neighbor as yourself.’”</blockquote><figcaption class="meta mt-3">Luke 10:27</figcaption></figure>
    <figure class="surface p-8 bg-paper"><blockquote class="italic text-[1.2rem]">“Then shall he answer them, saying, Verily I say unto you, in as much as you did it not to one of the least of these, you did it not to me.”</blockquote><figcaption class="meta mt-3">Matthew 25:45</figcaption></figure>
  </div>
</section>
<section class="section bg-paper">
  <div class="wrap grid lg:grid-cols-[1fr_1.2fr] gap-12">
    <div>
      <h2>Get involved!</h2>
      <p class="mt-5">Every act of kindness has the power to create a ripple of positivity in our community. We encourage you to commit to a random act of kindness today — a simple gesture that can brighten someone’s day and inspire others to do the same.</p>
      <p class="mt-4">When you perform your act of kindness, remember to leave a Love Your Neighbor Card behind. Love Your Neighbor Cards are available at the Connection Center at New Life Fellowship — pick one up today!</p>
      <div class="mt-8">${btn(pdf('Random-Acts-of-Kindness-List.pdf'), 'Download Full List of RAOK')}</div>
    </div>
    <div class="grid sm:grid-cols-2 gap-5">
      ${[['Send encouraging notes', 'Leave positive messages in public places or send heartfelt letters to friends and family.'], ['Help a neighbor', 'Offer to mow a lawn, run errands, or simply check in with a friendly hello.'], ['Show kindness to strangers', 'Hold the door open, give a genuine compliment, or offer a listening ear.'], ['Support children in need', 'Donate school supplies, books, or clothes to local schools and children’s organizations.']].map(([t, d]) => `<div class="surface-raised p-7"><h4>${t}</h4><p class="mt-2 text-[1.05rem]">${d}</p></div>`).join('')}
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      ${['1650903453036-QBIMU0A3Q8FQVIVVW5BG/279029266_10159663394363444_1722256602460482150_n.jpg', '1650903451368-0THCI53YLPBCF1171V78/279100310_10159663394048444_2080007471112394665_n.jpg', '1650903451949-ZIT5HT3L3HWI9GNS2RGI/278713889_4928317623930219_926326117262524861_n.jpg', '1648503023769-W1KBH28320RZJZVEKCZZ/DSC_0245.jpeg', '1648503018114-4XF1KW6IWMOC414N47V8/DSC_0376.jpeg'].map((f) => `<div class="photo flat rounded-[1.25rem] aspect-square"><img src="${img(f, 600)}" alt="Love Your Neighbor outreach"></div>`).join('')}
    </div>
    <div class="mt-16 grid lg:grid-cols-[1fr_1.2fr] gap-12">
      <h2>Received a random act of kindness?</h2>
      <div class="prose-nl">
        <p>We are so happy that a member of our church was able to bless you with a kind gesture. Please know that we are lifting you up in prayer, asking God’s blessing, comfort, and peace to surround you.</p>
        <p>If you feel comfortable, we invite you to share your experience on social media — tag our church @nlifefellowship or use the hashtag #NLFLYN. You can also share your story directly with us.</p>
        <p>And if you’d like to connect with us in person, join us on Saturday evenings at 5:00 p.m. or Sundays at 8:15 a.m., 10:00 a.m., or 11:45 a.m. — we look forward to welcoming you!</p>
        <div class="mt-8 flex flex-wrap gap-3">${btn(F1('05cca6b5-97e8-4edf-a352-137520692691'), 'Share your story')}${btn(LINKS.instagram, 'Instagram', 'ghost')}${btn(LINKS.facebook, 'Facebook', 'ghost')}</div>
      </div>
    </div>
  </div>
</section>`,
};

// ---------------------------------------------------------------- LEADERSHIP HUB
export const leaderHub = {
  slug: 'leadervolunteer-hub.html', title: 'NLF Leadership',
  body: `
${pageHead({ title: 'Leaders &amp; Volunteer Hub', crumbs: [['Connect', '']], intro: 'Welcome to the New Life Fellowship Leaders / Volunteer Hub. It is here where you will find all things you will need here at New Life!', image: img('ce3d3f68-60ea-4597-b2b7-38b09c8568bb/B08A9565.jpg', 800), imageAlt: 'New Life volunteers welcoming guests' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-2 gap-10">
    <div class="surface-raised p-8 md:p-10">
      <h2 class="text-3xl">Volunteer check-in</h2>
      <p class="mt-4">New Life Fellowship utilizes Check-In to keep track of when Leaders / Volunteers are actively serving in their ministry. For activities or events you are serving and participating in, please follow our check-in process:</p>
      <ol class="mt-6 grid gap-4">
        ${['When you arrive for your activity/event, select the Check-In button below.', 'Enter your InFellowship log-in.', 'Select the activity/event you are participating in and select next.', 'On the next screen, unless your activity/event does name tags, you can leave it at zero and select next.', 'On the last page, select done, and you will have completed the check-in process.'].map((s, i) => `<li class="flex gap-4"><span class="flex-none w-8 h-8 rounded-full grid place-items-center ui text-white text-sm" style="background:var(--navy);color:#06101F">${i + 1}</span><span>${s}</span></li>`).join('')}
      </ol>
      <div class="mt-8 flex flex-wrap gap-3">${btn('https://mycheckin.fellowshipone.com#/nlfatx', 'Check-In')}${btn('https://nlfatx.infellowship.com/UserLogin/ForgotPassword', 'Forgot Password', 'ghost')}</div>
    </div>
    <div class="grid gap-6 content-start">
      <div class="surface-raised p-8 md:p-10">
        <h2 class="text-3xl">Leaders event request form</h2>
        <p class="mt-4">New Life Leaders can submit all the information for their upcoming events to be reviewed by their Ministry Pastor. When filling out the form, please answer each question to the best of your knowledge.</p>
        <div class="mt-7">${btn('marketing-request-form.html', 'Leaders Event Request Form')}</div>
      </div>
      <div class="surface-raised p-8"><h3>More for leaders</h3><div class="mt-4 flex flex-wrap gap-x-6 gap-y-2">${a('leader-resources.html', 'Leader Resources')}${a('parent-resources.html', 'Parent Resources')}${a(LINKS.login, 'Member Login')}</div></div>
    </div>
  </div>
</section>`,
};
