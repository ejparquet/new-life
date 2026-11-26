import { img, pdf, LINKS, a, btn, icon, pageHead, videoToggle } from './layout.mjs';
import { stackPanels } from './components.mjs';

const IMG = {
  pastorStage: img('1610061704289-5FACDHLOUUEPEFJI91KH/Dr-Maurice-Pugh', 1200),
  crowd: img('1611710097715-HUOOG433UXPCAN72VQFT/Students+Praising+God', 2000),
  hero: img('1660318905089-DC5J1LHBEIA4SCP10AQC/B08A0180+%281%29-min.jpg', 1500),
  greeters: img('ce3d3f68-60ea-4597-b2b7-38b09c8568bb/B08A9565.jpg', 1000),
  lobby: img('1612304636375-EXHVOA83KOZRUXE55IXM/DSC_0171.jpg', 1000),
  pastor: img('1610061704289-5FACDHLOUUEPEFJI91KH/Dr-Maurice-Pugh', 800),
  pastor2: img('1611715634338-R04XK4XU9BPXMURVARI3/DSC_0355.jpg', 800),
  pastorHead: img('1780518648356-3CA7X95RU13TV13YS26K/Pastor+Pugh.jpg', 600),
  nmo: img('1641578513554-2PUR2OSRL0I405OFA0JA/New+Members+Class.png', 800),
  holiday: img('a38798dd-cede-4d7c-8231-a91683ec3bf2/Hope+for+the+holidays+final.png', 1000),
  ministries: img('1610059885063-YHAFPVGKQEA2FRX4CLGV/DSC_0405.jpg', 1000),
  lifegroup: img('1612398721230-L8FMBJQSOB0C3VUM4SN7/Life+Group+Session', 1000),
  soapOrb: img('1612403049096-BTSC4I7UJVONAA3MFVZW/SOAP%2Bon%2BiPhone', 400),
  soapPhone: img('1612382648255-KJ74FDRD5FHARBTHK6NM/iphone-soap.png', 600),
  ribbon: img('1611713698533-MN52TSKUHF7YJG2SFEM1/New+Life+Fellowship+Ribbon+Cutting+Ceremony', 1000),
  vision: img('1611730662263-54PQTRQFSOXTT0G4BTS7/Welcome+to+New+Life', 1000),
  hist1: img('1612446287703-FODU6GKP5N24Y0OREVJN/ocbf.jpg', 800),
  hist2: img('1612447838607-4Y9VKVEJQAM43TAPKEXE/Sister%2BJackie%2Band%2BPugh%2B1.jpg', 800),
  hist3: img('1612448039304-OQJI8FMUMQ35VL2XGMID/Prayer+at+Construction', 800),
  team412: img('1611715165606-VX4TA4SZRT5702NQ52QE/Pastor+Pugh+4%3A12+Ministry', 800),
  uplift: img('1611715328479-JB4FOYA8TR0E4FA8A6OX/Uplift+Community+Event', 800),
  kidz: img('1611706859795-5314MA0RV3BUL2EX3PHP/KidzLife+Service', 800),
  youth: img('1611709657703-1Y8U9FRBAREIEJUQGMAU/Student+Small+Groups', 800),
  newsletter: img('a99c2de3-9d06-4dd1-b697-3877aeb02712/join_our_newsletter_mailing_list-title-1-Wide+16x9.jpg', 1000),
};
export { IMG };

export const EVENTS = [
  { slug: 'event-new-members-orientation.html', title: 'New Members Orientation', mon: 'Dec', day: '6', date: 'Sunday, December 6, 2026', time: '2:00 pm – 3:30 pm',
    image: IMG.nmo,
    gcal: 'http://www.google.com/calendar/event?action=TEMPLATE&text=New%20Members%20Orientation&dates=20261206T200000Z/20261206T213000Z',
    ics: 'https://www.nlifefellowship.org/plan/newmembersorientation-3z5lb-cwxka-by7j9-bg8eg-kfph7-z9x3n-4anpy-tlctd-wapfg-yney9-wrrnr-pndpa-4y53e-638sg-455hc-ffwhj-926e7-2cjy7-yxjlz-9t78c-tklnn-y5kgr-cg2gd-7s82l-mcc2n?format=ical',
    body: `<p>Are you interested in becoming a part of the New Life Family and becoming a member? New Life Fellowship’s New Member orientation is your opportunity to learn everything there is to know about the life of our Church. This class takes place every 1st Sunday of the month, and you can get registered at the link below.</p>`,
    cta: [LINKS.memberClass, 'Become a Member'], tag: 'New Members' },
  { slug: 'event-winter-onederland.html', title: 'As One Marriage Ministry: Winter ONEderland', mon: 'Dec', day: '11', date: 'Friday, December 11, 2026', time: '7:00 pm – 9:00 pm',
    image: '',
    gcal: 'http://www.google.com/calendar/event?action=TEMPLATE&text=As%20One%20Marriage%20Ministry%3A%20Winter%20ONEderland&dates=20261212T010000Z/20261212T030000Z&location=201%20E.%20Sublett%20Road%2C%20Arlington%2C%20TX%2076018%2C%20United%20States',
    ics: 'https://www.nlifefellowship.org/plan/nlfwinteronederland-bp5hk?format=ical',
    body: `<p>Join the As One Marriage Fellowship for a Christmas Edition of Marriage Matters on Friday, December 11th at 7pm.</p>
<p>We look forward to a great time of fellowship, celebration and encouragement. So get ready for the Winter ONEderland Couples Best Festive Outfits and Ugly Sweater contests, food and activities as we celebrate the season and our marriages.</p>
<p>Your marriage matters! It matters to God and it matters to us. We strive to build community, have some fun, address practical topics to strengthen our marriages and grow in the word of God!</p>
<p><strong>Childcare provided for $5 per child.</strong></p>`,
    cta: ['https://newlifefellowship.fellowshiponego.com/external/form/50ae7a9b-b74b-4fcb-a637-519baef18d6a', 'Register Here'], tag: 'Marriage' },
];

const eventRow = (e) => `
  <a href="${e.slug}" class="tile group flex gap-6 items-center py-6 hair">
    <div class="flex-none w-20 h-20 rounded-full grid place-items-center text-center bg-glass" style="box-shadow:var(--sh-2)">
      <div class="ui leading-none"><div class="text-xs text-[color:var(--muted)]">${e.mon}</div><div class="text-3xl font-light text-[color:var(--navy)]">${e.day}</div></div>
    </div>
    <div class="flex-1">
      <h3>${e.title}</h3>
      <p class="meta mt-1">${e.date} · ${e.time}</p>
    </div>
    <span class="link hidden sm:inline-block">Read more</span>
  </a>`;


// ---------------------------------------------------------------- STACKING PANELS (home)
const PANELS = [
  { key: 'Ministries', title: 'There’s a place for you',
    text: 'Children, youth, young adults, men, women, marriage and care. Find the ministry where you can grow in the Word of God and use your gifts to serve the body of Christ.',
    stat: ['7', 'ministries'], cta: [['ministries.html', 'View all ministries'], ['plan-your-visit.html', 'Plan your visit']],
    imgs: [[img('1601345781293-P92MNNAPLZWWINOK68RL/DSC_0197.jpg', 800), 'Youth ministry on stage'], [IMG.ministries, 'KidzLife children gathered together'], [img('1611725723813-3VHDGDN4J880EPP1VVHP/The+Woodleys', 800), 'A couple from the marriage ministry']] },
  { key: 'Events', title: 'Attend an event',
    text: 'We would love to have you join us in fellowship at one of our events here at New Life. See the many opportunities on our church calendar.',
    stat: [String(EVENTS.length), 'upcoming events'], cta: [['events.html', 'View all events'], ['nlfholidayseason.html', 'Hope for the Holidays']],
    imgs: [[IMG.ribbon, 'The New Life ribbon cutting celebration'], [IMG.lobby, 'Members greeting each other at a New Life gathering'], [IMG.greeters, 'Greeters welcoming guests at the door']] },
  { key: 'Life Groups', title: 'Join a Life Group',
    text: 'Life is better in community! Explore our life groups and see real-life change happen. You will have the opportunity to know Christ better and love Him more as you connect with others in unity.',
    stat: ['9', 'fall groups'], cta: [['life-group-registration.html', 'Find a group'], ['life-groups.html', 'About Life Groups']],
    imgs: [[img('1611724323505-5C1HUOHYQ4W9QT5JJNLA/Women%27s+Life+Group', 800), 'A women’s Life Group'], [IMG.lifegroup, 'A Life Group session'], [img('1611722323511-EKMQ1Y4C6XHR7PD384BP/men+of+nl.jpg', 800), 'Men of New Life']] },
  { key: 'Next Steps', title: 'Discover the good news',
    text: 'Has anyone ever shown you from the Bible how you can be sure you are on your way to heaven? Realize, acknowledge, accept, and enjoy the new life Jesus Christ provides.',
    stat: ['4', 'steps to new life'], cta: [['nextsteps.html', 'Discover the Good News'], ['baptism.html', 'Get baptized']],
    imgs: [[img('1611769587502-QA9AD1G15TNJNXF4W1A6/baptism216.jpg', 800), 'A baptism at New Life'], [img('1611769325883-QWLX5IE9Y4NQLZPCTGRT/DSC_0357.jpg', 800), 'A baptism celebration'], [img('1611770125189-AWSJ9HKWHYJFY6H3FGPY/baptism_nov015.jpg', 800), 'A believer being baptized']] },
  { key: 'S.O.A.P.', title: 'Your monthly devotional',
    text: 'Have you completed your monthly S.O.A.P. devotional? Scripture, Observation, Application and Prayer: a method of Bible study that lets you dive deeper into God’s Word.',
    stat: ['4', 'parts each day'], cta: [[pdf('SOAP-November-2026.pdf'), 'Download now'], ['https://www.nlbookstore.com/product/nlf-soap-bible-study-journal/VCTF333G5ADNWTRWXQFJL35A', 'SOAP Journal']],
    imgs: [[img('1611767873065-WBUO1H6KYOGH3QPN6PLF/Leadership+Praying', 800), 'Leaders praying together'], [img('1612403049096-BTSC4I7UJVONAA3MFVZW/SOAP%2Bon%2BiPhone', 800), 'The S.O.A.P. devotional on a phone'], [img('1611722439375-GYOZ4M5TK40BO4TGZUW6/DSC_0398.jpg', 800), 'Men studying together around tables']] },
];

// ---------------------------------------------------------------- HOME
export const home = {
  slug: 'index.html', title: 'Home',
  body: `
<section class="hero" aria-labelledby="hero-title">
  <video class="hero-atmo" data-hero-video autoplay muted loop playsinline preload="auto" aria-hidden="true"><source src="assets/video/hero-atmosphere.mp4" type="video/mp4"></video>
  ${videoToggle}
  <div class="wrap">
    <p class="trio rise" aria-hidden="true"><span>New</span><b>Life</b><span>Fellowship</span></p>
    <div class="hero-stage">
      <div class="hero-halo halo-in" aria-hidden="true"></div>
      <h1 id="hero-title" class="hero-title rise d1">Love God,</h1>
      <video class="hero-person person-in" data-hero-video autoplay muted loop playsinline preload="auto" poster="${IMG.pastorStage}" aria-label="Dr. Maurice Pugh preaching at New Life Fellowship">
        <source src="assets/video/hero-pastor.mp4" type="video/mp4">
        <img src="${IMG.pastorStage}" alt="Dr. Maurice Pugh preaching at New Life Fellowship">
      </video>
      <p class="hero-left rise d2">Love<br>People.</p>
      <p class="hero-right rise d2">Weekend<br>services<b>“Arlington, TX”</b></p>
    </div>
  </div>
  <div class="hero-crowd" aria-hidden="true"><img src="${IMG.crowd}" alt=""></div>
  <div class="hero-info wrap">
    <div class="flex flex-wrap items-center justify-center md:justify-between gap-4 max-w-5xl mx-auto">
      <span class="pill">Saturday · 5pm</span>
      <span class="pill">Sunday · 8:15 · 10 · 11:45</span>
    </div>
    <div class="mt-10 flex items-center justify-center gap-5 text-left">
      <img src="brand_assets/nl-mark.png" alt="" class="w-14 h-14 rounded-full" style="box-shadow:0 0 40px rgba(95,174,227,.35)">
      <a href="${LINKS.map}" target="_blank" rel="noopener" class="tile">
        <span class="label block" style="letter-spacing:.42em;font-size:.66rem">Location:</span>
        <span class="block ui font-bold uppercase text-white leading-tight text-[clamp(.95rem,1.4vw,1.15rem)]">201 E. Sublett Road<br>Arlington, TX 76018</span>
      </a>
    </div>
    <div class="mt-10 flex flex-wrap justify-center gap-3">
      ${btn('plan-your-visit.html', 'Plan Your Visit')}
      <a href="${LINKS.watch}" target="_blank" rel="noopener" class="btn btn-ghost"><span>${icon.play}</span><span>Watch Online</span></a>
    </div>
  </div>
</section>


<section class="section bg-paper">
  <div class="wrap grid md:grid-cols-2 gap-12 items-center">
    <div class="photo soft rounded-[1.75rem] aspect-[4/3]" style="box-shadow:var(--sh-2)"><img src="${IMG.greeters}" alt="New Life greeters welcoming guests at the door"></div>
    <div>
      <h2>New here?</h2>
      <p class="lede mt-5">A place where we love God, and love people.</p>
      <div class="prose-nl mt-5"><p>We sincerely welcome you and desire for you to meet and get to know our church family. Please feel free to read more about New Life on this site, or come and visit with us. We hope to see you soon!</p></div>
      <div class="mt-8 flex flex-wrap gap-3">${btn('plan-your-visit.html', 'Plan Your Visit')}${btn('about-us.html', 'About New Life', 'ghost')}</div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <h2>What’s happening at New Life</h2>
      ${a('events.html', 'See all events')}
    </div>
    <div class="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-12">
      <div>${EVENTS.map(eventRow).join('')}<div class="hair"></div></div>
      <a href="nlfholidayseason.html" class="tile surface-raised overflow-hidden block">
        <div class="photo flat aspect-[16/10]"><img src="${IMG.holiday}" alt="Hope for the Holidays"></div>
        <div class="p-7">
          <h3>Hope For The Holidays</h3>
          <p class="mt-2 muted">Gifts for children through Angel Tree Prison Fellowship, local schools, and New Life members in need.</p>
          <span class="link mt-4">Get involved</span>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section bg-deep relative overflow-hidden">
  <div class="ring" style="width:46rem;height:46rem;right:-14rem;top:-10rem;opacity:.15"></div>
  <div class="wrap grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center relative">
    <div class="photo soft orb w-44 h-44 md:w-60 md:h-60" style="box-shadow:var(--sh-3)"><img src="${IMG.pastorHead}" alt="Dr. Maurice Pugh"></div>
    <figure>
      <blockquote class="text-[clamp(1.5rem,3vw,2.35rem)] leading-[1.35] italic text-white" style="font-family:var(--display)">“New Life Fellowship is a church that strives to become a diverse community of spiritually mature believers committed to seeing lives changed with the good news of Jesus Christ.”</blockquote>
      <figcaption class="mt-6 ui">Dr. Maurice Pugh, Senior Pastor · ${a('meet-our-pastor.html', 'Meet our pastor')}</figcaption>
    </figure>
  </div>
</section>

<section class="section stack-section" aria-labelledby="connect-h">
  <div class="wrap">
    <h2 id="connect-h" class="max-w-2xl">Get connected</h2>
    <p class="lede mt-5">New Life provides a variety of opportunities to conveniently fellowship with others, grow in the Word of God and use your spiritual gifts to serve the body of Christ.</p>
    <div class="mt-12">${stackPanels('home', PANELS)}</div>
  </div>
</section>
`,
};

// ---------------------------------------------------------------- PLAN YOUR VISIT
const MINISTRY_TABS = [
  ['Children', 'Our mission is to partner with parents in the spiritual growth of kids! We strive to create a place where children can know Christ, grow in their faith, meet new friends, and have loads of fun!', 'kidzlife.html'],
  ['Youth', 'We believe that God is raising up students who are gifted, passionate, and unashamed to make an impact. And as a result, we seek to provide an exciting platform to help teenagers.', 'youth.html'],
  ['Young Adults', 'Our young adults ministry is a dynamic and empowering space for 20s and 30s to connect, grow in faith, and influence their world with passion. We’re dedicated to inspiring leaders, building community, and making a real difference for Christ.', 'young-adults.html'],
  ['Men', 'Our MAN UP fellowship team hosts fun events and activities throughout the year and a retreat to promote authentic relationships and spiritual equipping.', 'men.html'],
  ['Women', 'The mission of New Life’s Women’s Ministry is to help women grow closer to God and to those around them through fellowship, discipleship, and mentorship.', 'women.html'],
  ['Marriage', 'Designed to bring couples into deeper, accountable relationships by providing couple on couple discipleship, thereby strengthening good marriages and restoring broken marriages.', 'marriage.html'],
  ['Spiritual Growth', 'At New Life Fellowship, we are committed to guiding believers on their journey to spiritual maturity through our dedicated Pathway to Spiritual Maturity. Our focus is on fostering growth, deepening faith, and empowering Christians to become fully developing followers of Christ.', 'life-groups.html'],
];

export const planYourVisit = {
  slug: 'plan-your-visit.html', title: 'Plan Your Visit',
  body: `
${pageHead({ title: 'Welcome to New Life', crumbs: [["I'm New", 'about-us.html']], intro: 'We are excited to connect with you at our weekend services! It is our sincere prayer that when you visit New Life Fellowship, you will recognize our values and you’ll feel welcomed and leave just a little different than you were when you arrived.', image: IMG.lobby, imageAlt: 'Guests greeting each other in the New Life lobby' })}
<section class="section">
  <div class="wrap grid md:grid-cols-3 gap-6">
    <div class="surface-raised p-8"><h3>Service times</h3><p class="mt-4 ui">Saturday: 5:00 pm<br>Sunday: 8:15 am, 10:00 am, 11:45 am</p><p class="mt-4">${a(LINKS.map, 'Get directions')}</p></div>
    <div class="surface-raised p-8"><h3>On Sundays you can expect</h3><ul class="mt-4 grid gap-2"><li>A loving environment</li><li>Practical &amp; biblical teachings</li><li>Contemporary and creative services</li></ul></div>
    <div class="surface-raised p-8"><h3>Your family will enjoy</h3><p class="mt-4">A place where we grow children &amp; youth. Each Sunday our children and youth learn the truth about who God is and who they are because of Him through age-specific lessons, small groups, and trusted adult leadership.</p></div>
  </div>
</section>
<section class="section bg-deep relative overflow-hidden">
  <div class="ring" style="width:40rem;height:40rem;left:-16rem;bottom:-20rem;opacity:.15"></div>
  <div class="wrap grid md:grid-cols-[1fr_1.2fr] gap-12 items-center relative">
    <h2>First-time visitor?</h2>
    <div class="prose-nl"><p>Here at New Life Fellowship, we get excited when first-time guests come to worship with us! When you enter the campus, we ask that you turn your hazard lights on and proceed to the front of the building (Zone A) for our special first-time guest parking saved for you.</p><p>Immediately after service, we invite you to join us in the Discover New Life Room for light refreshments and a small token of our appreciation as our special way to thank you for visiting New Life Fellowship. You will also get an opportunity to meet Dr. Maurice Pugh and the pastoral staff.</p></div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <h2>We invite you to</h2>
    <div class="mt-10 grid sm:grid-cols-2 gap-x-12 gap-y-10">
      <div class="hair pt-6"><h3>Be our guest</h3><p class="mt-3">We prepare each service with you in mind. From the parking lot to the front lobby, we strive to welcome you and guide you and your family to our services and answer any questions you may have.</p></div>
      <div class="hair pt-6"><h3>Be comfortable</h3><p class="mt-3">Don’t worry about what to wear. At New Life Fellowship, we invite you to come as you are. No need to “change” for us. If a t-shirt and jeans are what you prefer or if the weekend is the day to break out your best, we welcome you however you choose to arrive.</p></div>
      <div class="hair pt-6"><h3>Be inconspicuous</h3><p class="mt-3">We don’t ask our guests to stand during service to be recognized, but we would like to know you stopped by. We encourage guests to stop by our Discover New Life Center and complete a Guest Card so we can make sure we thank you for coming.</p></div>
      <div class="hair pt-6"><h3>Make it personal</h3><p class="mt-3">Finally, we invite guests to join us in the Discover New Life Room after the service for light refreshments and a small token of our appreciation.</p></div>
    </div>
    <figure class="mt-16 surface p-8 md:p-10 bg-paper">
      <blockquote class="italic text-[1.3rem] leading-relaxed">“Teacher, which is the great commandment in the Law?” And He said to him, “‘You shall love the Lord your God with all your heart, and with all your soul, and with all your mind.’ This is the great and foremost commandment. The second is like it, ‘You shall love your neighbor as yourself.’ Upon these two commandments hang the whole Law and the Prophets.”</blockquote>
      <figcaption class="meta mt-4">Matthew 22:36–40</figcaption>
    </figure>
  </div>
</section>
<section class="section bg-paper">
  <div class="wrap">
    <h2>Get connected at New Life</h2>
    <p class="lede mt-5">New Life provides a variety of opportunities for you to conveniently fellowship with others, grow in the Word of God and use your spiritual gifts to serve the body of Christ.</p>
    <div class="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Ministries">
      ${MINISTRY_TABS.map(([t], i) => `<button class="tab" role="tab" id="mt-${i}" aria-controls="mp-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${t}</button>`).join('')}
    </div>
    ${MINISTRY_TABS.map(([t, d, h], i) => `<div class="tab-panel surface-raised mt-6 p-8 md:p-10 max-w-3xl" role="tabpanel" id="mp-${i}" aria-labelledby="mt-${i}"${i ? ' hidden' : ''}><h3>${t}</h3><p class="mt-3">${d}</p><div class="mt-6">${btn(h, `Explore ${t}`, 'ghost')}</div></div>`).join('')}
    <div class="mt-10">${btn('ministries.html', 'Check out our ministries')}</div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <h2>For your family</h2>
    <p class="lede mt-5">New Life has a secure check-in area for children from 6 weeks all the way up to 12th grade. We believe it’s important to provide biblical teaching that is age-appropriate.</p>
    <div class="mt-12 grid md:grid-cols-2 gap-8">
      <a href="kidzlife.html" class="tile surface-raised overflow-hidden">
        <div class="photo soft aspect-[16/10]"><img src="${IMG.kidz}" alt="Children at a KidzLife service"></div>
        <div class="p-8"><h3>Children</h3><p class="mt-3">KidzLife is the children’s ministry at New Life Fellowship. Our mission is to partner with parents in the spiritual growth of kids! We strive to create a place where children can know Christ, grow in their faith, meet new friends, and have loads of fun!</p><span class="link mt-5">Visit KidzLife</span></div>
      </a>
      <a href="youth.html" class="tile surface-raised overflow-hidden">
        <div class="photo soft aspect-[16/10]"><img src="${IMG.youth}" alt="Students in a small group"></div>
        <div class="p-8"><h3>Youth</h3><p class="mt-3">New Life’s Student ministry engages middle school and high school students in an interactive and creative environment that is offered on the 1st through 4th Sundays of the month.</p><span class="link mt-5">Visit Youth Ministry</span></div>
      </a>
    </div>
  </div>
</section>`,
};

// ---------------------------------------------------------------- ABOUT US (hub)
export const aboutUs = {
  slug: 'about-us.html', title: 'About Us',
  body: `
${pageHead({ title: 'About Us', intro: 'New Life Fellowship began in December 2003 with a core group of 40 adults and children. Today we are a diverse community in Arlington, Texas, committed to seeing lives changed with the good news of Jesus Christ.', image: IMG.vision, imageAlt: 'Welcome to New Life' })}
<section class="section">
  <div class="wrap grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    ${[
      ['Our History', 'From an Arlington YMCA to a 14-acre campus on Sublett Road.', 'our-history.html'],
      ['Meet Our Pastor', 'Dr. Maurice Pugh, founding and Senior Pastor.', 'meet-our-pastor.html'],
      ['Board of Elders', 'The men who shepherd and oversee New Life.', 'board-of-elders.html'],
      ['Our Team', 'Pastors, directors, and staff who serve our church family.', 'executive-staff.html'],
      ['Our Vision & Values', 'Invite people to follow Christ. Love God; Love People.', 'our-vision-values.html'],
      ['Doctrinal Beliefs', 'What we believe about God, Scripture, and salvation.', 'doctrinal-beliefs.html'],
    ].map(([t, d, h]) => `<a href="${h}" class="tile surface-raised p-8 flex flex-col justify-between min-h-[12rem]"><div><h3>${t}</h3><p class="mt-2 muted">${d}</p></div><span class="link mt-6 self-start">Read more</span></a>`).join('')}
  </div>
</section>`,
};

// ---------------------------------------------------------------- CONTACT
export const contact = {
  slug: 'contact.html', title: 'Contact Us',
  body: `
${pageHead({ title: 'Contact Us', crumbs: [["I'm New", 'about-us.html']], intro: 'Use the form below to send a general question or comment, or reach the church office directly.' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-[1fr_1.3fr] gap-12">
    <div class="grid gap-8 content-start">
      <div class="photo soft rounded-[1.75rem] aspect-[4/3]" style="box-shadow:var(--sh-2)"><img src="${IMG.ribbon}" alt="New Life Fellowship ribbon cutting ceremony"></div>
      <div class="grid sm:grid-cols-3 lg:grid-cols-1 gap-6">
        <div><h4>Address</h4><p class="mt-1">201 E. Sublett Road<br>Arlington, TX 76018</p><p class="mt-2">${a('https://www.google.com/maps/place/New+Life+Fellowship/@32.6463793,-97.1138867,15z/data=!4m2!3m1!1s0x0:0xdc6245d8da64c31', 'Get directions')}</p></div>
        <div><h4>Telephone</h4><p class="mt-1">${a('tel:+18174698224', '(817) 469-8224')}</p></div>
        <div><h4>Hours</h4><p class="mt-1">Monday – Friday<br>8:30 am – 5:00 pm</p></div>
      </div>
    </div>
    <form class="surface-float p-8 md:p-10 grid gap-5 content-start" data-mailto="admin@nlifefellowship.org" data-subject="Website contact form">
      <h2 class="text-3xl">Send us a message</h2>
      <div class="grid sm:grid-cols-2 gap-5">
        <div class="field"><label for="fn">First name</label><input id="fn" name="First name" required autocomplete="given-name"></div>
        <div class="field"><label for="ln">Last name</label><input id="ln" name="Last name" required autocomplete="family-name"></div>
      </div>
      <div class="field"><label for="em">Email</label><input id="em" type="email" name="Email" required autocomplete="email"></div>
      <div class="field"><label for="ph">Phone (optional)</label><input id="ph" type="tel" name="Phone" autocomplete="tel"></div>
      <div class="field"><label for="msg">Message</label><textarea id="msg" name="Message" rows="5" required></textarea></div>
      <div><button class="btn btn-primary" type="submit"><span>Send message</span></button></div>
      <p data-ok hidden class="ui text-sm text-[color:var(--navy)]">Your email app opened with your message. Press send there to reach the church office.</p>
    </form>
  </div>
</section>`,
};

// ---------------------------------------------------------------- EVENTS
export const events = {
  slug: 'events.html', title: 'Upcoming Events',
  body: `
${pageHead({ title: 'Upcoming Events', crumbs: [['Events', '']] })}
<section class="section">
  <div class="wrap grid lg:grid-cols-[1.4fr_1fr] gap-12">
    <div>${EVENTS.map(eventRow).join('')}<div class="hair"></div></div>
    <aside class="surface-raised overflow-hidden self-start">
      <div class="photo flat aspect-[16/9]"><img src="${IMG.newsletter}" alt="Join our newsletter mailing list"></div>
      <div class="p-8">
        <h3>The Life: monthly newsletter</h3>
        <p class="mt-3">Hey New Life, we are very excited to introduce our monthly newsletter, The Life! The Life is designed to provide you with information about what’s upcoming in our Church. You can also view all New Life Fellowship events in the New Life App, available in both the Google Play Store &amp; App Store.</p>
        <div class="mt-6">${btn('https://mailchi.mp/nlifefellowship/novembernews-16563562', 'View Newsletter and Subscribe')}</div>
      </div>
    </aside>
  </div>
</section>`,
};

export const eventPages = EVENTS.map((e, i) => ({
  slug: e.slug, title: e.title,
  body: `
${pageHead({ title: e.title, crumbs: [['Events', 'events.html']] })}
<section class="section">
  <div class="wrap grid lg:grid-cols-[1.4fr_1fr] gap-12">
    <div>
      ${e.image ? `<div class="photo flat rounded-[1.5rem] aspect-[16/9] mb-10" style="box-shadow:var(--sh-2)"><img src="${e.image}" alt="${e.title}"></div>` : ''}
      <div class="prose-nl">${e.body}</div>
      <div class="mt-8 flex flex-wrap gap-3">${btn(e.cta[0], e.cta[1])}${btn('events.html', 'Back to all events', 'ghost')}</div>
    </div>
    <aside class="surface-raised p-8 self-start grid gap-5">
      <div><h4>When</h4><p class="mt-1">${e.date}<br>${e.time}</p></div>
      <div><h4>Where</h4><p class="mt-1">New Life Fellowship<br>201 E. Sublett Road<br>Arlington, TX 76018</p><p class="mt-1">${a('http://maps.google.com?q=201 E. Sublett Road Arlington, TX 76018', 'Map')}</p></div>
      <div><h4>Add to calendar</h4><p class="mt-1 flex gap-4">${a(e.gcal, 'Google Calendar')}${a(e.ics, 'ICS')}</p></div>
      <div class="hair pt-5"><h4>${i === 0 ? 'Next event' : 'Earlier event'}</h4><p class="mt-1">${a(EVENTS[1 - i].slug, EVENTS[1 - i].title)}</p></div>
    </aside>
  </div>
</section>`,
}));

// ---------------------------------------------------------------- OUR HISTORY
const TIMELINE = [
  ['2003', ['December 21 – Established South Arlington Community Church (SACC).']],
  ['2006', ['April 6 – Purchased 14 acres of land on the corner of Matlock & Sublett.']],
  ['2007', ['June 17 – Changed church name to New Life Fellowship.']],
  ['2008', ['September 28 – Held a Groundbreaking Dedication to kick off construction.', 'October 5 – 5-Year Church Anniversary.']],
  ['2009', ['August 20 – Moved into the first building of a Master Planned campus.']],
  ['2013', ['April 7 – Added 3rd service at 11:45am.', 'October 6 – Celebrated our 10 Year Church Anniversary.']],
  ['2014', ['June – Hosted our first Children’s VBS called Summer Surge.']],
  ['2018', ['October – Celebrated our 15 year church Anniversary.']],
];
const TIMELINE_TITLES = ['The church is born', 'Room to grow', 'A new name', 'Breaking ground', 'Moving in', 'A third service', 'Summer Surge', 'Fifteen years'];

// Scroll-driven milestone dial: the ring turns as you scroll, bringing each year to the pointer.
function milestoneDial() {
  const N = TIMELINE.length, STEP = 13, C = 500;
  const pt = (r, deg) => { const a = (deg * Math.PI) / 180; return [(C + r * Math.cos(a)).toFixed(1), (C + r * Math.sin(a)).toFixed(1)]; };
  let ticks = '';
  for (let d = 0; d < 360; d += 2) { const major = d % 10 === 0; const [x1, y1] = pt(major ? 418 : 428, d), [x2, y2] = pt(492, d); ticks += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${major ? 'tk-major' : 'tk'}"/>`; }
  const marks = TIMELINE.map(([y], i) => {
    const ang = -i * STEP; const [x1, y1] = pt(400, ang), [x2, y2] = pt(500, ang);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="tk-mile"/><g transform="rotate(${ang} ${C} ${C})"><text x="${C + 528}" y="${C + 6}" class="dial-year" data-i="${i}">${y}</text></g>`;
  }).join('');
  const icon = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/></svg>';
  return `
<section class="dial-section" data-dial style="--n:${N}" aria-labelledby="ms-h">
  <ol class="sr-only">${TIMELINE.map(([y, items], i) => `<li>${y}: ${TIMELINE_TITLES[i]}. ${items.join(' ')}</li>`).join('')}</ol>
  <div class="dial-sticky" aria-hidden="true">
    <div class="dial-top">
      <p class="dial-count"><span data-dial-num>01</span><i></i><span>${String(N).padStart(2, '0')}</span></p>
      <div class="dial-head"><h2 id="ms-h">Milestones</h2><p class="dial-sub">${TIMELINE[0][0]} — ${TIMELINE[N - 1][0]}</p></div>
    </div>
    <svg class="dial-svg" viewBox="-90 -90 1180 1180">
      <circle cx="500" cy="500" r="560" class="ring-outer"/>
      <g class="dial-rot" data-dial-rot>
        <circle cx="500" cy="500" r="455" class="ring-band"/>
        ${ticks}
        <circle cx="500" cy="500" r="398" class="ring-inner"/>
        ${marks}
      </g>
    </svg>
    <span class="dial-line"></span>
    <span class="dial-badge">${icon}</span>
    <p class="dial-big"><span data-dial-year>${TIMELINE[0][0]}</span></p>
    <div class="dial-copy" data-dial-copy>
      <h3 data-dial-title>${TIMELINE_TITLES[0]}</h3>
      <div data-dial-text>${TIMELINE[0][1].map((t) => `<p>${t}</p>`).join('')}</div>
    </div>
    <p class="dial-hint">Scroll</p>
  </div>
  <script>
  (() => {
    const sec = document.currentScript.closest('[data-dial]');
    const data = ${JSON.stringify(TIMELINE.map(([y, items], i) => ({ y, t: TIMELINE_TITLES[i], items })))};
    const rot = sec.querySelector('[data-dial-rot]'), yr = sec.querySelector('[data-dial-year]'), num = sec.querySelector('[data-dial-num]');
    const copy = sec.querySelector('[data-dial-copy]'), title = sec.querySelector('[data-dial-title]'), text = sec.querySelector('[data-dial-text]');
    const labels = [...sec.querySelectorAll('.dial-year')];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const STEP = ${STEP}, N = data.length;
    let cur = 0, target = 0, active = -1, raf = 0, swapT;
    const setActive = (i, dir) => {
      if (i === active) return; const first = active < 0; active = i;
      labels.forEach((l, k) => l.classList.toggle('on', k === i));
      num.textContent = String(i + 1).padStart(2, '0');
      const apply = () => { yr.textContent = data[i].y; title.textContent = data[i].t; text.innerHTML = data[i].items.map((t) => '<p>' + t + '</p>').join(''); };
      if (first || reduce) { apply(); return; }
      sec.dataset.dir = dir > 0 ? 'down' : 'up';
      sec.classList.remove('swap-in'); sec.classList.add('swap-out');
      clearTimeout(swapT);
      swapT = setTimeout(() => { apply(); sec.classList.remove('swap-out'); void sec.offsetWidth; sec.classList.add('swap-in'); }, 220);
    };
    const measure = () => {
      const r = sec.getBoundingClientRect(), stick = sec.querySelector('.dial-sticky');
      const range = r.height - stick.offsetHeight;
      const p = Math.min(1, Math.max(0, (parseFloat(getComputedStyle(stick).top) - r.top) / range));
      target = p * (N - 1);
    };
    const tick = () => {
      cur += reduce ? (target - cur) : (target - cur) * 0.12;
      if (Math.abs(target - cur) < 0.0005) cur = target;
      rot.style.transform = 'rotate(' + (cur * STEP).toFixed(3) + 'deg)';
      const i = Math.round(cur); setActive(i, i - active);
      raf = cur === target ? 0 : requestAnimationFrame(tick);
    };
    const onScroll = () => { measure(); if (!raf) raf = requestAnimationFrame(tick); };
    addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll);
    onScroll(); setActive(0, 0);
  })();
  </script>
</section>`;
}

export const ourHistory = {
  slug: 'our-history.html', title: 'Our History',
  body: `
${pageHead({ title: 'Our History', crumbs: [['About Us', 'about-us.html']], intro: 'In late December 2003, a spirit-led dream of Dr. Maurice Pugh came to life. That dream was to establish a church that would exemplify the ultimate church depicted in the New Testament, an Acts 2 church.', image: IMG.hist1, imageAlt: 'A church service with people standing before a minister on stage' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-[1.2fr_1fr] gap-14">
    <div class="prose-nl">
      <p>But the key to his vision was not just a religious gathering of people, but a body of believers who were genuine toward one another, genuine to their worship, and committed to sharing their faith with others to help bring unbelievers to Christ.</p>
      <p>Pastor Pugh’s prayer became a reality on December 21st, 2003, when he and a core group of 40 adults and children held their first public worship service at an Arlington YMCA. New Life Fellowship was born.</p>
      <p>From our humble beginnings and throughout our journey as a church body, God has demonstrated through countless moments and exciting memories that both His faithfulness and His favor were upon us.</p>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="photo soft rounded-[1.5rem] aspect-square"><img src="${IMG.hist1}" alt="Early days of the church"></div>
      <div class="photo soft rounded-[1.5rem] aspect-square mt-10"><img src="${IMG.hist2}" alt="Jackie and Dr. Maurice Pugh"></div>
    </div>
  </div>
</section>
${milestoneDial()}`,
};

// ---------------------------------------------------------------- MEET OUR PASTOR
export const meetOurPastor = {
  slug: 'meet-our-pastor.html', title: 'Meet Our Pastor',
  body: `
${pageHead({ title: 'Dr. Maurice Pugh', crumbs: [['About Us', 'about-us.html']], intro: 'Dr. Maurice Pugh is one of Arlington’s most respected community leaders. He is currently a pastor, non-profit president, and professional speaker.', image: IMG.pastor, imageAlt: 'Dr. Maurice Pugh preaching at New Life Fellowship' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-start">
    <div class="prose-nl">
      <h2>His story</h2>
      <p class="mt-6">Dr. Pugh graduated from Dallas Theological Seminary (DTS), where he earned his Ph.D. in Theology. As a student at DTS, he also served in the inner-city ministry with Strategies to Elevate People (STEP) Foundation and HIS Bridge Builders, where he worked with many of the local youth in the West Dallas community.</p>
      <p>After graduating DTS, Dr. Maurice Pugh became Pastor of Christian Education at Oak Cliff Bible Fellowship (OCBF) under the leadership of Dr. Tony Evans for six years.</p>
      <p>In 2003, Dr. Pugh left OCBF to begin what is known today as New Life Fellowship. What started as a small church of 12 families has grown into a congregation of over 1000 members.</p>
      <p>In 2006 Dr. Pugh founded Uplift Community Development, a 501(c)(3) non-profit designed to assist the South Arlington community. Uplift has served the community in ways such as Thanksgiving baskets, student tutoring and mentoring, and Christmas events.</p>
      <p>Dr. Pugh married Jackie Pugh in 1994. Together they have five children, Kendall, Maurice, Natalie, Sydney, and Shelby.</p>
      <p>Dr. Pugh’s most recent project is his LLC, <a href="https://www.team412.org" target="_blank" rel="noopener">Team 4:12</a>, where he offers teachings on the church building, marriage, and so much more.</p>
      <div class="mt-10 flex flex-wrap gap-3">${btn('plan-your-visit.html', 'Hear him preach this weekend')}${btn('executive-staff.html', 'Meet the whole team', 'ghost')}</div>
    </div>
    <div class="photo soft rounded-[1.75rem] aspect-[4/5] lg:sticky lg:top-28" style="box-shadow:var(--sh-3)"><img src="${IMG.pastor2}" alt="Dr. Maurice Pugh teaching on stage"></div>
  </div>
</section>
<section class="section bg-paper">
  <div class="wrap">
    <h2>More from Dr. Pugh</h2>
    <div class="mt-10 grid md:grid-cols-2 gap-8">
      ${[
        ['Team 4:12', 'Team 4:12 is an LLC designed by Dr. Maurice Pugh to utilize the knowledge he has acquired through years of training to provide services such as Team and Marriage Building, Pastor Coaching & Mentoring, and Church Health Consulting.', 'http://www.team412.org/', IMG.team412],
        ['Uplift', 'Uplift Community Development is a 501(c)3 founded by Dr. Maurice Pugh designed to bridge the gap between the church and the community. Since 2005 Uplift has gone on to assist its community in Youth Mentoring, Youth Tutoring, Holiday Baskets, Dad’s Clubs, and so much more!', 'http://www.upliftcommunity.org/', IMG.uplift],
      ].map(([t, d, h, im]) => `<a href="${h}" target="_blank" rel="noopener" class="tile surface-raised overflow-hidden"><div class="photo soft aspect-[16/9]"><img src="${im}" alt="${t}"></div><div class="p-8"><h3>${t}</h3><p class="mt-3">${d}</p><span class="link mt-5">Learn more</span></div></a>`).join('')}
    </div>
  </div>
</section>`,
};

export const boardOfElders = {
  slug: 'board-of-elders.html', title: 'Board of Elders',
  body: `
${pageHead({ title: 'Board of Elders', crumbs: [['About Us', 'about-us.html']] })}
<section class="section">
  <div class="wrap">
    <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${['Adrian Davis', 'Kenneth Finley', 'Don Marshall', 'James Washington', 'Larry Williams'].map((n) => `
      <li class="surface-raised p-7 flex items-center gap-5">
        <span class="flex-none w-14 h-14 rounded-full grid place-items-center ui text-white text-lg" style="background:linear-gradient(150deg,var(--sky),var(--navy))">${n.split(' ').map((x) => x[0]).join('')}</span>
        <span><span class="block ui text-lg font-medium text-[color:var(--deep)]">${n}</span><span class="block text-sm muted ui">Elder</span></span>
      </li>`).join('')}
    </ul>
  </div>
</section>`,
};

export const visionValues = {
  slug: 'our-vision-values.html', title: 'Our Vision & Values',
  body: `
${pageHead({ title: 'Our Vision &amp; Values', crumbs: [['About Us', 'about-us.html']], image: IMG.vision, imageAlt: 'Welcome to New Life' })}
<section class="section">
  <div class="wrap grid md:grid-cols-3 gap-10">
    <div class="hair pt-6"><h3>Mission</h3><p class="mt-3 text-[1.35rem] leading-snug">The Mission of New Life is to: “Invite People to Follow Christ.”</p></div>
    <div class="hair pt-6"><h3>Motto</h3><p class="mt-3 text-[1.35rem] leading-snug">Love God; Love People, based on the Great Commandment.</p></div>
    <div class="hair pt-6"><h3>Vision statement</h3><p class="mt-3 text-[1.35rem] leading-snug">To become a diverse community of spiritually mature believers committed to seeing lives changed with the good news of Jesus Christ. <span class="meta">(Acts 2)</span></p></div>
  </div>
</section>
<section class="section bg-paper">
  <div class="wrap">
    <h2>Church framework</h2>
    <p class="lede mt-4">Know, Grow, Sow, Go — the four environments every believer moves through at New Life.</p>
    <div class="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Church framework">
      ${['Know', 'Grow', 'Sow', 'Go'].map((t, i) => `<button class="tab" role="tab" id="ft-${i}" aria-controls="fp-${i}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}">${t}</button>`).join('')}
    </div>
    ${[
      ['Knowing God', 'Knowing God is the environment that attracts people from various spiritual backgrounds and connects them to God. It is a friendly and safe place where unbelievers can explore spiritual matters and believers are able to experience a fresh encounter with God.'],
      ['Growing in Faith', 'Growing in Faith is the environment that assists believers in their spiritual growth towards Christlike maturity. It seeks to help believers know and live out spiritual practices in the context of authentic relationships.'],
      ['S.O.W. (Serving Others Well) in Ministry', 'S.O.W. (Serving Others Well) in Ministry is the environment that helps believers discover their God-given spiritual gifts and equip them to serve faithfully fruitfully in church ministries.'],
      ['Go Share Christ', 'Go Share Christ is the environment that trains, encourages, and creates opportunities for believers to be a living witness wherever God has placed them.'],
    ].map(([t, d], i) => `<div class="tab-panel surface-raised mt-6 p-8 md:p-10 max-w-3xl" role="tabpanel" id="fp-${i}" aria-labelledby="ft-${i}"${i ? ' hidden' : ''}><h3>${t}</h3><p class="mt-3">${d}</p></div>`).join('')}
  </div>
</section>`,
};

const BELIEFS = [
  ['The Godhead', 'We believe that the Godhead exists eternally in three persons – the Father, the Son, and the Holy Spirit. They are co-equal, co-eternal, and one God.', 'Gen 1:1-3; 26; John 1:1; Matt 3:16-17; Heb. 1:1-3'],
  ['The Person and Work of the Lord Jesus Christ', 'We believe that Jesus Christ came into this world that He might reveal God to men, fulfill prophecy, and become Savior of the lost. (Phil 2:5-8; Luke 19:10; Matt 5:17-18) We further believe that He died on the cross for the sins of the world, was buried, and arose from the dead according to the scriptures.', '1 Cor. 15:3-4; John 20:20'],
  ['The Scriptures', 'We believe that all “Scripture is given by inspiration of God” and is designed for our practical instruction.', '2 Timothy 3:16; Rom. 15:4'],
  ['Salvation Only through Jesus Christ', 'We believe that the new birth of the believer comes only through faith in Christ and not according to any measure of human works, such as confession, baptism, prayer, or faithful service.', 'John 3:16-19; Rom. 1:16-17; Eph 2:8-9'],
  ['The Holy Spirit', 'We believe that the Holy Spirit, indwells in every believer at the moment of conversion and His baptism unites all believers to Christ in one body. There is no subsequent baptism of the spirit.', 'John 14:16-17; 16:7-15; Eph. 4:4-6; 30'],
  ['Eternal Security', 'We believe that all true believers everywhere, once saved are eternally secure, sealed by the Holy Spirit, and shall be kept forever.', 'John 5:24; 10:27-30; Eph. 1:13-14'],
  ['The Christian Walk', 'We believe that we are called to live Holy, empowered by the indwelling Holy Spirit so that we do not fulfill the lust and desires of the flesh.', 'John 14:16-17; 1 Cor. 6:19-20; Gal. 5:16-23'],
  ['The Christian’s Service', 'We believe that all believers are endowed with one gift. While there is a diversity of gifts, each believer is energized by the same Spirit, and each is called to utilize their gift to serve faithfully and glorify God.', '1 Peter 4:10; Eph. 4:11; 1 Cor. 12:4-11; Rom 12:6'],
];
const plus = '<svg class="plus" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
export { plus };
export const doctrinalBeliefs = {
  slug: 'doctrinal-beliefs.html', title: 'Doctrinal Beliefs',
  body: `
${pageHead({ title: 'We believe in…', crumbs: [['About Us', 'about-us.html']] })}
<section class="section">
  <div class="wrap max-w-4xl">
    ${BELIEFS.map(([t, d, r], i) => `<details class="faq"${i === 0 ? ' open' : ''}><summary>${t}${plus}</summary><div class="faq-body"><p>${d}</p><p class="meta mt-3">${r}</p></div></details>`).join('')}
    <div class="mt-10">${btn('http://f5d020ef221876a1f5ec-3e5a11b9816d36cf5f4fd8d0079b1e92.r34.cf2.rackcdn.com/uploaded/d/0e3231951_1400105844_doctrinal-statementstatement-of-faith.pdf', 'Read our entire Doctrinal Statement')}</div>
  </div>
</section>`,
};
