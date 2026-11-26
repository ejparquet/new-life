import { img, pdf, LINKS, a, btn, pageHead, NAV } from './layout.mjs';
import { stackPanels } from './components.mjs';

const F1 = (id) => `https://newlifefellowship.fellowshiponego.com/external/form/${id}`;
const ARTS = F1('a0e939c9-1769-49b0-9728-55d6c4898f98');

const MIN = [
  ['Children’s', 'KidzLife — biblical teaching for children from 6 weeks through 6th grade.', 'kidzlife.html', img('1610059885063-YHAFPVGKQEA2FRX4CLGV/DSC_0405.jpg', 800)],
  ['Youth', 'Middle and high school students who are gifted, passionate, and unashamed.', 'youth.html', img('1601345781293-P92MNNAPLZWWINOK68RL/DSC_0197.jpg', 800)],
  ['Men', 'MAN UP — fellowship, discipleship, and mentorship for men.', 'men.html', img('1601346772913-K3DRLJDN83YS835HVFIW/DSC_0732.jpg', 800)],
  ['Young Adults', 'A space for 20s and 30s to connect, grow in faith, and influence their world.', 'young-adults.html', img('1612398761382-VSU18671VH6JXP9U4Z7B/YOUNG+ADULTS', 800)],
  ['Women', 'Helping women grow closer to God and to those around them.', 'women.html', img('1612403826741-2L01OUTEQXB9Z43PKJJ0/Women%27s+Ministry', 800)],
  ['Marriage', 'As One — building strong, Godly marriages.', 'marriage.html', img('1611725723813-3VHDGDN4J880EPP1VVHP/The+Woodleys', 800)],
  ['Care', 'Loving support during times of crisis and celebration.', 'care.html', img('1612403613134-ZQUF6RRUTZ43MGOVRFHS/Care%252Bphoto%252B2.jpg', 800)],
];


const MIN_PANELS = [
  { key: 'Children’s', title: 'KidzLife', stat: ['4', 'age-specific environments'], cta: [['kidzlife.html', 'Visit KidzLife'], ['mailto:kidzlife@nlifefellowship.org?subject=KidzLife%20Inquiry', 'Ask a question']],
    text: 'Our mission is to partner with parents in the spiritual growth of kids! A place where children from 6 weeks through 6th grade can know Christ, grow in their faith, meet new friends, and have loads of fun.',
    imgs: [[img('1611715791542-RQEDG7CKFL1XJRX7X81T/KidzLife+Vacation+Bible+School', 800), 'KidzLife Vacation Bible School'], [img('1610059885063-YHAFPVGKQEA2FRX4CLGV/DSC_0405.jpg', 800), 'KidzLife children gathered together'], [img('1611708889213-O2UJWUA7RWJ1LUY4MW30/KidzLife+Volunteers', 800), 'KidzLife volunteers']] },
  { key: 'Youth', title: 'Youth Ministry', stat: ['1st–4th', 'Sundays of the month'], cta: [['youth.html', 'Visit Youth Ministry'], ['mailto:youth@nlifefellowship.org', 'Email the youth team']],
    text: 'We believe God is raising up students who are gifted, passionate, and unashamed to make an impact. Middle and high school students know God, grow in faith, serve others well, and go tell others.',
    imgs: [[img('1611709657703-1Y8U9FRBAREIEJUQGMAU/Student+Small+Groups', 800), 'Students in a small group'], [img('1601345781293-P92MNNAPLZWWINOK68RL/DSC_0197.jpg', 800), 'Youth worship on stage'], [img('1611710351152-DGFQE7GERCH3YKKQ65CZ/Students+Playing+Basketball', 800), 'Students playing basketball']] },
  { key: 'Young Adults', title: 'Young Adults', stat: ['20s & 30s', ''], cta: [['young-adults.html', 'Visit Young Adults'], ['events.html', 'See events']],
    text: 'A dynamic and empowering space for 20s and 30s to connect, grow in faith, and influence their world with passion. We’re dedicated to inspiring leaders, building community, and making a real difference for Christ.',
    imgs: [[img('1612398761382-VSU18671VH6JXP9U4Z7B/YOUNG+ADULTS', 800), 'Young adults at New Life']] },
  { key: 'Men', title: 'MAN UP', stat: ['3', 'ways to grow'], cta: [['men.html', 'Visit MAN UP'], ['mailto:fellowship@nlifefellowship.org?subject=MAN%20UP', 'Get involved']],
    text: 'Helping men grow closer to God and those around them, and equipping them to do the work of ministry through fellowship, discipleship, and mentorship.',
    imgs: [[img('1611722164887-0ZORGJ0TM33Z3UNJ4GPJ/DSC_0390.jpg', 800), 'Men of New Life'], [img('1601346772913-K3DRLJDN83YS835HVFIW/DSC_0732.jpg', 800), 'Men gathered together'], [img('1611722439375-GYOZ4M5TK40BO4TGZUW6/DSC_0398.jpg', 800), 'A men’s gathering']] },
  { key: 'Women', title: 'Women’s Ministry', stat: ['3', 'ways to grow'], cta: [['women.html', 'Visit Women’s Ministry'], ['mailto:fellowship@nlifefellowship.org?subject=Women%27s%20Ministry', 'Get involved']],
    text: 'Helping women grow closer to God and to those around them through fellowship, discipleship, and mentorship, from Girls Movie Matinee to the Women’s Retreat.',
    imgs: [[img('1611723810718-BCVKLINT4CGSCZ6KAABA/Women%27s+Fellowship', 800), 'Women’s fellowship'], [img('1612403826741-2L01OUTEQXB9Z43PKJJ0/Women%27s+Ministry', 800), 'Women’s ministry'], [img('1611724323505-5C1HUOHYQ4W9QT5JJNLA/Women%27s+Life+Group', 800), 'A women’s Life Group']] },
  { key: 'Marriage', title: 'As One', stat: ['3', 'ways to grow'], cta: [['marriage.html', 'Visit As One'], ['event-winter-onederland.html', 'Winter ONEderland']],
    text: 'Helping couples build strong, Godly marriages, growing closer to God and to one another through fellowship, discipleship, mentorship, and I Promise premarital counseling.',
    imgs: [[img('1611725492473-XE6LKOBO5R9T6HANUH10/DSC_9904.jpg', 800), 'Couples at a marriage event'], [img('1611725723813-3VHDGDN4J880EPP1VVHP/The+Woodleys', 800), 'A married couple'], [img('1611725654668-KH20EEI7DNPN0UBADXZ0/The+Sees', 800), 'A married couple smiling']] },
  { key: 'Care', title: 'Care Ministry', stat: ['6', 'ways we care'], cta: [['care.html', 'Visit Care Ministry'], ['https://newlifefellowship.fellowshiponego.com/external/form/538d2bc0-3d52-4466-b795-8aac76d115ed', 'Care form']],
    text: 'A caring community that provides loving support, care, and encouragement during times of crisis and celebration: phone calls and prayer, hospital and home visits, and help with funerals.',
    imgs: [[img('1612394832650-48ZCP85X1XF02SFCYB3Q/Senior%2BBaskets', 800), 'A care ministry gift basket delivery'], [img('1612403613134-ZQUF6RRUTZ43MGOVRFHS/Care%252Bphoto%252B2.jpg', 800), 'A care ministry visit']] },
];

export const ministries = {
  slug: 'ministries.html', title: 'Ministries',
  body: `
${pageHead({ title: 'Ministries', crumbs: [['Connect', '']], intro: 'New Life provides a variety of opportunities to conveniently fellowship with others, grow in the Word of God and use your spiritual gifts to serve the body of Christ.' })}
<section class="section">
  <div class="wrap">${stackPanels('min', MIN_PANELS)}</div>
</section>`,
};

const three = (intro, items) => `
<section class="section">
  <div class="wrap">
    <p class="lede">${intro}</p>
    <div class="mt-12 grid md:grid-cols-3 gap-6">${items.map(([t, d, list]) => `
      <div class="surface-raised p-8"><h3>${t}</h3><p class="mt-3 text-[1.05rem]">${d}</p>${list ? `<ul class="mt-4 grid gap-1.5 ui text-[.95rem]">${list.map((x) => `<li class="hair pt-1.5">${x}</li>`).join('')}</ul>` : ''}</div>`).join('')}
    </div>
  </div>
</section>`;

export const kidzlife = {
  slug: 'kidzlife.html', title: 'KidzLife',
  body: `
${pageHead({ title: 'KidzLife Ministry', crumbs: [['Ministries', 'ministries.html']], intro: 'KidzLife is the children’s ministry at New Life Fellowship. Our mission is to partner with parents in the spiritual growth of kids! We strive to create a place where children can know Christ, grow in their faith, meet new friends and have loads of fun!', image: img('1611706859795-5314MA0RV3BUL2EX3PHP/KidzLife+Service', 800), imageAlt: 'A KidzLife service' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-2 gap-12">
    <div>
      <p>KidzLife and KidzLife Tots provide biblical teaching that is age-appropriate for children from 6 weeks through 6th grade. The ministry is organized into four age-specific environments:</p>
      <ul class="mt-6 grid sm:grid-cols-2 gap-4">${[['Nursery', '6 weeks – 1 year'], ['Toddlers', '2–3 years'], ['Early Elementary', '4 years – Kindergarten'], ['Elementary', '1st – 6th grade']].map(([t, d]) => `<li class="surface p-6"><h4>${t}</h4><p class="ui text-sm muted mt-1">${d}</p></li>`).join('')}</ul>
      <div class="mt-8 flex flex-wrap gap-3">${btn(pdf('ParentHandbook_Tools_Families_V6_GrowKids.pdf'), 'Parent Handbook')}${btn(pdf('Kids-Parent-Series.docx'), 'Parent Monthly Letter', 'ghost')}</div>
    </div>
    <div class="surface-float p-8 md:p-10 self-start">
      <h2 class="text-3xl">Hey there!</h2>
      <div class="prose-nl mt-5 text-[1.05rem]"><p>We know being a parent is one of the hardest jobs on the planet, but it’s also the greatest thing you will ever do. We’re here to help in any way we can. We may be a children’s ministry, but that doesn’t mean kids are the only people we care about. We care about you too!</p><p>No matter how connected (or not connected) you are with our church, the Parent Handbook will show you some of the ways we’re trying to care for your kid and serve you at the same time. Thanks for letting us be another voice in the life of your child.</p></div>
    </div>
  </div>
</section>
<section class="section bg-paper">
  <div class="wrap grid md:grid-cols-2 gap-12 items-center">
    <div class="photo soft rounded-[1.75rem] aspect-[4/3]"><img src="${img('3afb9d37-48a2-4ae0-9412-d1390daf4f20/LB-24419.jpg', 1000)}" alt="Next Gen Creative Arts"></div>
    <div><h2>Next Gen Creative Arts</h2><p class="mt-5">Is your child or student passionate about music, dance, drama, or the creative arts? We’d love for them to be part of Worship in the Arts! Worship in the Arts gives children and students an opportunity to discover their gifts, develop their skills, build confidence, and use their creativity to glorify God.</p><p class="mt-4">Registration is now open — sign up today!</p><div class="mt-7">${btn(ARTS, 'Register for Creative Arts')}</div></div>
  </div>
</section>
<section class="section">
  <div class="wrap grid md:grid-cols-2 gap-12 items-center">
    <div class="md:order-2 photo soft rounded-[1.75rem] aspect-[4/3]"><img src="${img('1611708889213-O2UJWUA7RWJ1LUY4MW30/KidzLife+Volunteers', 1000)}" alt="KidzLife volunteers"></div>
    <div><h2>Become a volunteer</h2><p class="mt-5">Passionate volunteers are the heartbeat of KidzLife. Every week they use their unique gifts and talents in a variety of ways to create exciting experiences for kids! Begin the volunteer process by completing an online application and background check.</p><div class="mt-7 flex flex-wrap gap-3">${btn('mailto:kidzlife@nlifefellowship.org?subject=KidzLife%20Volunteer', 'Start volunteering')}${btn('mailto:kidzlife@nlifefellowship.org?subject=KidzLife%20Inquiry', 'Ask a question', 'ghost')}</div><p class="mt-5 ui text-sm muted">kidzlife@nlifefellowship.org</p></div>
  </div>
</section>`,
};

export const youth = {
  slug: 'youth.html', title: 'Youth Ministry',
  body: `
${pageHead({ title: 'Youth Ministry', crumbs: [['Ministries', 'ministries.html']], intro: 'We believe that God is raising up students who are gifted, passionate, and unashamed to make an impact.', image: img('1611709657703-1Y8U9FRBAREIEJUQGMAU/Student+Small+Groups', 800), imageAlt: 'Students in a small group' })}
<section class="section">
  <div class="wrap">
    <h2>Hello and welcome</h2>
    <p class="lede mt-5">We seek to provide an exciting platform to help teenagers:</p>
    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      ${[['Know', 'God better through a creative and engaging Sunday morning worship youth experience.'], ['Grow', 'in their faith through healthy relationships in Kick Back Small Groups.'], ['S.O.W.', '(Serve Others Well) with their gifts, talents, and abilities.'], ['Go', 'tell others through outreach and service projects!']].map(([t, d]) => `<div class="surface-raised p-7"><p class="ui text-3xl font-light text-[color:var(--navy)]">${t}</p><p class="mt-2 text-[1.05rem]">${d}</p></div>`).join('')}
    </div>
    <div class="mt-10">${btn(ARTS, 'Register Here')}</div>
  </div>
</section>
<section class="section bg-paper">
  <div class="wrap grid md:grid-cols-2 gap-12 items-center">
    <div class="photo soft rounded-[1.75rem] aspect-[4/3]"><img src="${img('23577f85-ff4a-4816-8276-35014faf63d0/LB-24665.jpg', 1000)}" alt="Worship Arts Ministry"></div>
    <div><h2>Worship Arts Ministry</h2><p class="mt-5">Is your child or student passionate about music, dance, drama, or the creative arts? Worship in the Arts gives children and students an opportunity to discover their gifts, develop their skills, build confidence, and use their creativity to glorify God. Whether they’re already experienced or simply excited to try something new, there’s a place for them to grow and shine!</p><div class="mt-7">${btn(ARTS, 'Sign up today')}</div></div>
  </div>
</section>
<section class="section">
  <div class="wrap grid md:grid-cols-2 gap-12 items-center">
    <div class="md:order-2 photo soft rounded-[1.75rem] aspect-[4/3]"><img src="${img('1611710351152-DGFQE7GERCH3YKKQ65CZ/Students+Playing+Basketball', 1000)}" alt="Students playing basketball"></div>
    <div><h2>Youth events</h2><p class="mt-5">The New Life Youth Ministry participates in many activities throughout the year designed to provide our youth with an avenue to have fun in a safe, Godly environment! These events include:</p>
      <ul class="mt-5 grid gap-1.5 ui">${['Christian Youth Conferences', 'Service Projects', 'Amusement Parks', 'Worship with Youth from other Churches', 'And so much more!'].map((x) => `<li class="hair pt-1.5">${x}</li>`).join('')}</ul></div>
  </div>
</section>
<section class="section bg-deep">
  <div class="wrap grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
    <div><h2>Get plugged in</h2><p class="mt-5">Our youth leaders are asked to embrace ministry with this simple philosophy: Love God, Love Students. If you have a passion for reaching teenagers and would like to partner with us in ministry, we have a place for you!</p></div>
    <div class="flex flex-wrap gap-3 md:justify-end">${btn('mailto:youth@nlifefellowship.org?subject=Youth%20Volunteer%20Interest', 'I’m interested in volunteering', 'light')}${btn('mailto:youth@nlifefellowship.org', 'youth@nlifefellowship.org', 'outline-light')}</div>
  </div>
</section>`,
};

export const youngAdults = {
  slug: 'young-adults.html', title: 'Young Adults',
  body: `
${pageHead({ title: 'Young Adults', crumbs: [['Ministries', 'ministries.html']], intro: 'Our young adults ministry is a dynamic and empowering space for 20s and 30s to connect, grow in faith, and influence their world with passion. We’re dedicated to inspiring leaders, building community, and making a real difference for Christ.', image: img('1612398761382-VSU18671VH6JXP9U4Z7B/YOUNG+ADULTS', 800), imageAlt: 'Young adults at New Life' })}
<section class="section">
  <div class="wrap flex flex-wrap gap-3">${btn('events.html', 'See upcoming events')}${btn('life-group-registration.html', 'Find a Life Group', 'ghost')}${btn('contact.html', 'Contact us', 'ghost')}</div>
</section>`,
};

export const men = {
  slug: 'men.html', title: 'Men’s Ministry',
  body: `
${pageHead({ title: 'MAN UP', crumbs: [['Ministries', 'ministries.html']], intro: 'MAN UP’s mission is to help men grow closer to God and those around them and equip them to do the work of ministry through fellowship, discipleship, and mentorship.', image: img('1611722164887-0ZORGJ0TM33Z3UNJ4GPJ/DSC_0390.jpg', 800), imageAlt: 'Men of New Life' })}
${three('Three ways to grow together:', [
  ['Fellowship', 'Our MAN UP fellowship team hosts fun events and activities throughout the year and a retreat to promote authentic relationships and spiritual equipping.', ['Men’s Breakfasts', 'Fishing Fellowships', 'Men’s Retreat']],
  ['Discipleship', 'Life Groups build community and foster an atmosphere of caring for one another within a small group setting. Men are encouraged to experience life on life by participating in a men’s life group. The curriculum reflects a balance of season of life, spiritual disciplines, and books of the Bible.'],
  ['Mentorship', 'Currently, we are developing a men’s mentoring program based on Titus 2 principles.'],
])}
<section class="section bg-paper">
  <div class="wrap grid md:grid-cols-2 gap-12 items-center">
    <div class="photo soft rounded-[1.75rem] aspect-[4/3]"><img src="${img('1611722323511-EKMQ1Y4C6XHR7PD384BP/men+of+nl.jpg', 1000)}" alt="Men of New Life"></div>
    <div><h2>“Work in Progress” door hanger</h2><p class="mt-5">This past Father’s Day New Life offered men a Restoration Door Hanger. When used, these door hangers signify that as men, sometimes we need to go in the shop because we are a work in progress.</p>
      <div class="mt-7 flex flex-wrap gap-3">${btn(pdf('Work-in-progress-Door-Hanger.pdf'), 'Download Door Hanger')}${btn('mailto:fellowship@nlifefellowship.org?subject=MAN%20UP', 'Serve or participate', 'ghost')}</div>
      <p class="mt-5 ui text-sm muted">fellowship@nlifefellowship.org</p></div>
  </div>
</section>`,
};

export const women = {
  slug: 'women.html', title: 'Women’s Ministry',
  body: `
${pageHead({ title: 'Women’s Ministry', crumbs: [['Ministries', 'ministries.html']], intro: 'The mission of New Life’s Women’s Ministry is to help women grow closer to God and to those around them through fellowship, discipleship, and mentorship.', image: img('1612394101242-JM4GIECLK08D9Z0SUZPU/Women%27s+Fellowship', 800), imageAlt: 'Women’s fellowship' })}
${three('Three ways to grow together:', [
  ['Fellowship', 'Our fellowship team hosts fun events and activities throughout the year and a retreat to promote authentic relationships and spiritual equipping.', ['Girls Movie Matinee', 'Women’s Retreat', 'Women’s Breakfast']],
  ['Discipleship', 'Life Groups build community and foster an atmosphere of caring for one another within a small group setting. Women will experience life on life with other women. The curriculum reflects a balance of season of life, spiritual disciplines, and books of the Bible.'],
  ['Mentorship', 'Currently, we are developing a women’s mentoring program based on Titus 2 principles.'],
])}
<section class="section bg-paper"><div class="wrap flex flex-col md:flex-row md:items-center justify-between gap-6">
  <p class="text-[1.25rem] max-w-2xl">If you would like to serve or participate in one of these three areas, contact fellowship@nlifefellowship.org.</p>
  ${btn('mailto:fellowship@nlifefellowship.org?subject=Women%27s%20Ministry', 'Email the fellowship team')}
</div></section>`,
};

export const marriage = {
  slug: 'marriage.html', title: 'Marriage Ministry',
  body: `
${pageHead({ title: 'As One Marriage Ministry', crumbs: [['Ministries', 'ministries.html']], intro: 'As One Marriage Ministry is designed to help couples build strong, Godly marriages. Our objective is to grow couples closer to God and to one another through Fellowship, Discipleship, and Mentorship.', image: img('1611725492473-XE6LKOBO5R9T6HANUH10/DSC_9904.jpg', 800), imageAlt: 'Couples at a marriage ministry event' })}
${three('Three ways to grow together:', [
  ['Fellowship', 'The As One ministry connects couples through fun events and activities intended to nurture relationships with one another as well as promote authentic relationships with other couples.', ['Breakfasts', 'Night of Prayer', 'Outings', 'Swing Dance Classes', 'Couples Bash']],
  ['Discipleship', 'Life Groups build community and foster an atmosphere of caring for one another within a small group setting. Couples will experience life on life with other couples. The curriculum reflects a balance of season of life and spiritual discipline.'],
  ['Mentorship', 'Marriage Mentors follow the Titus 2 principle. Marriage Mentoring is designed to bring couples into deeper, accountable relationships by providing couple on couple discipleship, thereby strengthening good marriages and restoring broken marriages. Mentor couples go through extensive training and are certified before being paired with a mentee couple. There is a one-time fee for the mentor couple, and a fee for the mentee couple, which includes materials, assessment, and continued support.'],
])}
<section class="section bg-paper">
  <div class="wrap grid md:grid-cols-2 gap-12 items-center">
    <div class="photo soft rounded-[1.75rem] aspect-[4/3]"><img src="${img('1611725654668-KH20EEI7DNPN0UBADXZ0/The+Sees', 1000)}" alt="A married couple"></div>
    <div><h2>I Promise premarital counseling</h2><p class="mt-5">“I Promise” invites couples to explore every facet of their relationship through a biblical perspective, creating a strong foundation for their marriages that can endure the challenges of modern culture. The course is priced at $70 per couple, which includes the “I Promise” Couple’s Participant Workbook. The group will convene at an offsite location and is limited to three couples to ensure an intimate and personalized experience.</p>
      <div class="mt-7 flex flex-wrap gap-3">${btn(F1('585ccac9-5ef0-4137-bef9-397a52dfad02'), 'Register Here')}${btn('event-winter-onederland.html', 'Winter ONEderland', 'ghost')}</div></div>
  </div>
</section>`,
};

export const care = {
  slug: 'care.html', title: 'Care Ministry',
  body: `
${pageHead({ title: 'Care Ministry', crumbs: [['Ministries', 'ministries.html']], intro: 'The New Life Fellowship Care Ministry is a caring community that provides loving support, care, and encouragement during times of crisis and celebration.', image: img('1612394832650-48ZCP85X1XF02SFCYB3Q/Senior%2BBaskets', 800), imageAlt: 'Care ministry gift baskets' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-2 gap-12">
    <div class="surface-raised p-8"><h3>Through the Care Ministry, New Life provides</h3><ul class="mt-4 grid gap-2">${['A ministry of presence for members during bereavement and crisis', 'Ongoing love, support, and care for members', 'Proactive planning assistance for celebrations and crises'].map((x) => `<li class="hair pt-2">${x}</li>`).join('')}</ul></div>
    <div class="surface-raised p-8"><h3>The Care Ministry also provides</h3><ul class="mt-4 grid gap-2">${['Phone calls and prayer', 'Hospital and home visitation', 'Assistance with funeral preparation', 'Attendance at wakes and funerals', 'Funeral resolutions', 'Ministerial and musical support'].map((x) => `<li class="hair pt-2">${x}</li>`).join('')}</ul></div>
  </div>
  <div class="wrap mt-10"><p class="max-w-3xl">The New Life Fellowship facility is available for funerals of members and their immediate families at no charge (based on calendar availability).</p></div>
</section>
<section class="section bg-deep">
  <div class="wrap grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
    <figure><blockquote class="italic text-[1.35rem] leading-relaxed text-white">“Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in trouble with the comfort we ourselves received from God.”</blockquote><figcaption class="mt-4 ui">2 Corinthians 1:3–4</figcaption></figure>
    <div class="md:justify-self-end"><p class="ui mb-4">Comfort and Care Form for sick or bereaved members</p>${btn(F1('538d2bc0-3d52-4466-b795-8aac76d115ed'), 'Open the Care Form', 'light')}</div>
  </div>
</section>`,
};

// ---------------------------------------------------------------- GIVE
export const give = {
  slug: 'give.html', title: 'Give',
  body: `
${pageHead({ title: 'Give', crumbs: [['Give', '']], intro: 'New Life is thankful for your obedience to God’s Word and your generosity of giving your resources for ministry at New Life, our community, and beyond.', media: `<div class="give-ways">
      <svg class="gw-hand" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M30 6.5c-1.6-2-4.8-1.8-5.8.8-1-2.6-4.2-2.8-5.8-.8-1.6 2 -.6 4.8 1.6 6.6l4.2 3.4 4.2-3.4c2.2-1.8 3.2-4.6 1.6-6.6z"/><path d="M4 26h6v14H4z"/><path d="M10 28h6.5c1.6 0 3 .6 4.2 1.6l1.3 1.1h6.5a2.6 2.6 0 0 1 0 5.2H19"/><path d="M10 38h18.5c1.6 0 3.1-.6 4.3-1.6l9.4-8.2a2.6 2.6 0 0 0-3.5-3.9L30.5 31"/></svg>
      <h2 class="gw-title">Ways to give online</h2>
      <ul class="gw-list">
        <li><a class="gw-row" href="${LINKS.give}"><svg class="gw-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8"/></svg><span><strong>Website</strong><span>nlifefellowship.org/give</span></span></a></li>
        <li><div class="gw-row"><svg class="gw-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/></svg><span><strong>App</strong><span>Apple App Store &amp; Google Play Store</span></span></div></li>
        <li><a class="gw-row" href="sms:77977?&amp;body=NEWLIFETX"><svg class="gw-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H10l-5 4v-4H4z"/><path d="M9 10.5h.01M12 10.5h.01M15 10.5h.01" stroke-width="2.2"/></svg><span><strong>Text</strong><span>NEWLIFETX to 77977</span></span></a></li>
      </ul>
    </div>` })}
<section class="section">
  <div class="wrap grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
    <div>
      <h2>How to give</h2>
      <div class="prose-nl mt-5"><p>Giving financially honors the Lord and helps us serve each other, and the community every Sunday, throughout the week, and during the year. Consistent giving allows numerous ministries to grow and succeed.</p><p>You can give on a Sunday morning, or online through one-time or scheduled giving. New Life Fellowship has created a simple, safe, and secure way for individuals to give tithes and offerings — a one-time gift or ongoing scheduled donations.</p></div>
      <div class="mt-8 aspect-video rounded-[1.5rem] overflow-hidden" style="box-shadow:var(--sh-2)"><iframe src="https://player.vimeo.com/video/880988092?h=4cfc7f8590" title="How to give at New Life Fellowship" class="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
    </div>
    <div class="surface-float p-8 md:p-10 lg:sticky lg:top-28">
      <h3 class="text-2xl">Give online</h3>
      <p class="mt-3">Give securely through FellowshipOne Giving to one or more funds, one time or on a schedule.</p>
      <div class="mt-7">${btn(LINKS.give, 'Give now')}</div>
      <div class="hair mt-8 pt-6"><h4>2025 annual report</h4><p class="mt-2 text-[1.05rem]">Our 2025 End-of-Year Annual Report includes our financial information and accomplishments from the past year, our vision and goals for 2026, and guidance on how to download your personal statements.</p><p class="mt-4">${a(pdf('2025-Annual-Report.pdf'), 'Download the report')}</p></div>
    </div>
  </div>
</section>
<section class="section bg-paper">
  <div class="wrap">
    <h2>Giving categories</h2>
    <div class="mt-12">${stackPanels('give', [
      { key: 'Tithes', title: 'Tithes', glyph: '10%', glyphSize: 'clamp(8rem,17vw,17rem)', stat: ['10%', 'of our income'],
        text: 'Tithing is the giving of 10% of our income back unto the Lord. These funds are used for New Life Fellowship operations, ministries, programs, and activities.',
        cta: [[LINKS.give, 'Give tithes']] },
      { key: 'Thanksgiving Offering', title: 'Thanksgiving Offering', stat: ['1 week', 'of household income'],
        text: 'Given in addition to tithes, the Thanksgiving Offering is the giving of one week’s household income throughout the year, completed by Thanksgiving. These funds are set aside for campus expansion, building renovations, and upkeep.',
        cta: [[LINKS.give, 'Give the offering'], ['ourfuturehome.html', 'Our Future Home']],
        imgs: [[img('1759510924095-1UEDBI5F0X5RZZXPSPGC/Sanctuary+Building+Final+.1.jpeg', 800), 'Rendering of the new sanctuary building'], [img('1759510896686-LHVJQNLZD8TFBTUPZHOI/New+life+Fellowship+auditorium-1+3-8-25.jpg', 800), 'Rendering of the new auditorium'], [img('1759511074420-Z0A5GC6CL6ZNDZZRWAG6/life+fellowship+interior+Lobby_1+8-5-25.jpg', 800), 'Rendering of the new lobby']] },
      { key: 'Missions', title: 'Missions', 
        text: 'Missions funds are allocated specifically for different missions projects and missions organizations.',
        cta: [[LINKS.give, 'Give to Missions'], ['loveyourneighbor.html', 'Love Your Neighbor']],
        imgs: [[img('1650903451368-0THCI53YLPBCF1171V78/279100310_10159663394048444_2080007471112394665_n.jpg', 800), 'Love Your Neighbor outreach'], [img('1650903453036-QBIMU0A3Q8FQVIVVW5BG/279029266_10159663394363444_1722256602460482150_n.jpg', 800), 'Love Your Neighbor outreach'], [img('1648503023769-W1KBH28320RZJZVEKCZZ/DSC_0245.jpeg', 800), 'Love Your Neighbor outreach']] },
      { key: 'Benevolence', title: 'Benevolence',
        text: 'Each year New Life Fellowship sets aside money in our budget just to help people in need. You are always able to give toward that amount through our Benevolence fund.',
        cta: [[LINKS.give, 'Give to Benevolence'], ['member-support.html', 'Member Support']],
        imgs: [[img('1612394832650-48ZCP85X1XF02SFCYB3Q/Senior%2BBaskets', 800), 'A care ministry gift basket delivery'], [img('1612403613134-ZQUF6RRUTZ43MGOVRFHS/Care%252Bphoto%252B2.jpg', 800), 'A care ministry visit']] },
    ])}</div>
  </div>
</section>
<section class="section">
  <div class="wrap grid lg:grid-cols-2 gap-12">
    <div>
      <h2>FellowshipOne Giving</h2>
      <p class="mt-5">New Life Fellowship has moved from Pushpay to FellowshipOne Giving. This platform makes giving simpler for both you as a giver and for our administration, and is even more secure. FellowshipOne Giving does everything Pushpay does in allowing users to give to multiple funds and set up recurring giving.</p>
    </div>
    <div class="grid gap-5">
      <div class="surface p-7 bg-paper"><h4>Pushpay non-recurring givers</h4><p class="mt-2 text-[1.05rem]">We set up your account with your Pushpay information. Check your email to confirm your password and your account will be created.</p></div>
      <div class="surface p-7 bg-paper"><h4>Pushpay recurring givers</h4><p class="mt-2 text-[1.05rem]">Your F1 giving account is already populated with your recurring giving information. When you receive your email, confirm your payment information and create your password.</p></div>
      <p>Questions? Call ${a('tel:+18174698224', '(817) 469-8224')} or email ${a('mailto:admin@nlifefellowship.org', 'admin@nlifefellowship.org')}.</p>
    </div>
  </div>
</section>`,
};

// ---------------------------------------------------------------- SOAP
export const soap = {
  slug: 'soap.html', title: 'S.O.A.P. Devotional',
  body: `
${pageHead({ title: 'What is S.O.A.P.?', crumbs: [['Connect', '']], intro: 'S.O.A.P. stands for Scripture, Observation, Application, and Prayer. It is a method of Bible journaling developed by Pastor Wayne Cordeiro — a great way to get more out of reading your Bible and record your thoughts, emotions, and the revelation you receive from God’s Word.', image: img('1612403049096-BTSC4I7UJVONAA3MFVZW/SOAP%2Bon%2BiPhone', 800), imageAlt: 'S.O.A.P. devotional on a phone' })}
<section class="section">
  <div class="wrap">
    ${stackPanels('soap', [['S', 'Scripture', 'Read meditatively and thoughtfully through a portion of Scripture. Pick a verse or two that stood out to you and write it in your journal.'], ['O', 'Observation', 'Now write some observations about the verse(s) or passage. What is this passage or verse saying? About God? About people? How is Christ revealed in this?'], ['A', 'Application', 'Now write a few sentences on how this passage applies to your life. Is there truth about God that you are to believe? A promise to receive? Is the Holy Spirit convicting you of something you need to do or stop doing in light of God’s truth? Be doers of the word and not merely hearers. (<a href="https://www.biblegateway.com/passage/?search=James+1%3A22&version=NASB" target="_blank" rel="noopener">James 1:22</a>)'], ['P', 'Prayer', 'Now write out a prayer to God in response to this Scripture. This is a way to turn God’s Word to you back to Him. Be honest and express your heart to Him. God always listens and He delights in your prayers. (<a href="https://www.biblegateway.com/passage/?search=Psalm+34%3A15&version=NASB" target="_blank" rel="noopener">Psalm 34:15</a>; <a href="https://www.biblegateway.com/passage/?search=Proverbs+15%3A8&version=NASB" target="_blank" rel="noopener">Proverbs 15:8</a>)']].map(([l, t, d]) => ({ key: t, title: t, text: d, glyph: l })))}
    <div class="mt-12 flex flex-wrap gap-3">${btn(pdf('SOAP-November-2026.pdf'), 'Download this month’s S.O.A.P.')}${btn('https://www.nlbookstore.com/product/nlf-soap-bible-study-journal/VCTF333G5ADNWTRWXQFJL35A', 'Buy the New Life SOAP Journal', 'ghost')}</div>
  </div>
</section>`,
};

export const holiday = {
  slug: 'nlfholidayseason.html', title: 'Hope For The Holidays',
  body: `
${pageHead({ title: 'Holiday season is upon us!', crumbs: [['Events', 'events.html']], intro: 'As the holiday season approaches, New Life Fellowship is once again excited to support our church and community in meaningful ways — through our Thanksgiving Outreach baskets and by blessing others with gifts for Christmas.' })}
<section class="section">
  <div class="wrap grid lg:grid-cols-2 gap-12 items-start">
    <div class="photo flat rounded-[1.75rem]" style="box-shadow:var(--sh-3)"><img src="${img('a38798dd-cede-4d7c-8231-a91683ec3bf2/Hope+for+the+holidays+final.png', 1200)}" alt="Hope for the Holidays"></div>
    <div class="prose-nl">
      <h2>Hope For The Holidays</h2>
      <p class="mt-5">Join us for the NLF Hope for the Holidays Event, starting November 21st, where we strive to bring joy to our community by providing gifts to children in need through the Angel Tree Prison Fellowship, the local schools, and New Life Members in need. This heartfelt initiative allows us to be the hands and feet of Jesus, spreading His love to families in our area.</p>
      <p>There are numerous ways to get involved this year! You can select a child’s tag from our Christmas tree and purchase gifts for them, or support the cause by donating funds for additional supplies such as wrapping paper and boxes. We also welcome volunteers to help verify information for the children, wrap gifts at our Wrap Party, or serve during the event itself. Visit the HFTH Event table for information on how to register and participate.</p>
      <p>We also invite you to join us for the “Wrap Party,” where families can come together to wrap gifts, enjoy pizza and cookies, and share fellowship. If you’d like to help at the event on December 14th, registration details will be available at the table.</p>
      <p>Thank you for your faithful service. Together, we can bring love and joy to those in need this holiday season!</p>
      <div class="mt-8 flex flex-wrap gap-3">${btn(F1('74335719-ca27-450f-8987-42177ae751cd'), 'Get Connected')}${btn(LINKS.give, 'Donate', 'ghost')}</div>
    </div>
  </div>
</section>`,
};

// ---------------------------------------------------------------- PROTECTED / FORMS
const protectedPage = (slug, title, who) => ({
  slug, title,
  body: `
${pageHead({ title, crumbs: [['NLF Leadership', 'leadervolunteer-hub.html']], intro: `${who} These resources are password protected.` })}
<section class="section">
  <div class="wrap">
    <div class="surface-float p-8 md:p-10 max-w-2xl">
      <h2 class="text-3xl">Password required</h2>
      <p class="mt-4">Open the secure resource page and enter the password provided by your ministry leader. Don’t have it? Contact the church office.</p>
      <div class="mt-7 flex flex-wrap gap-3">${btn(`https://www.nlifefellowship.org/${slug.replace('.html', '')}`, 'Open secure resources')}${btn('contact.html', 'Contact the office', 'ghost')}</div>
    </div>
  </div>
</section>`,
});
export const leaderResources = protectedPage('leader-resources.html', 'Leader Resources', 'Tools and training for New Life leaders.');
export const parentResources = protectedPage('parent-resources.html', 'Parent Resources', 'Tools for New Life parents and families.');

export const marketingForm = {
  slug: 'marketing-request-form.html', title: 'Marketing Request Form',
  body: `
${pageHead({ title: 'Marketing Request Form', crumbs: [['NLF Leadership', 'leadervolunteer-hub.html']], intro: 'To have an event or program marketed by New Life Fellowship, this form will need to be completed. Please ensure that the event or program is at least 60 days from the time you submit this form.' })}
<section class="section">
  <div class="wrap">
    <form class="surface-float p-8 md:p-10 grid gap-5 max-w-3xl" data-mailto="admin@nlifefellowship.org" data-subject="Marketing / event request">
      <div class="field"><label for="rt">Request type</label><select id="rt" name="Request type"><option>Marketing request</option><option>Leaders event request</option></select></div>
      <div class="grid sm:grid-cols-2 gap-5">
        <div class="field"><label for="nm">Your name</label><input id="nm" name="Name" required autocomplete="name"></div>
        <div class="field"><label for="mn">Ministry</label><input id="mn" name="Ministry" required></div>
        <div class="field"><label for="em2">Email</label><input id="em2" type="email" name="Email" required autocomplete="email"></div>
        <div class="field"><label for="ph2">Phone</label><input id="ph2" type="tel" name="Phone" autocomplete="tel"></div>
        <div class="field"><label for="ev">Event or program name</label><input id="ev" name="Event" required></div>
        <div class="field"><label for="dt">Event date</label><input id="dt" type="date" name="Event date" required></div>
      </div>
      <div class="field"><label for="ch">Where should it be promoted?</label><input id="ch" name="Channels" placeholder="Announcements, social media, newsletter, app…"></div>
      <div class="field"><label for="ds">Details</label><textarea id="ds" name="Details" rows="5" required placeholder="Audience, time, location, registration link, and anything else we should know"></textarea></div>
      <div><button type="submit" class="btn btn-primary"><span>Submit request</span></button></div>
      <p data-ok hidden class="ui text-sm text-[color:var(--navy)]">Your email app opened with your request. Press send there to submit it.</p>
    </form>
  </div>
</section>`,
};

// ---------------------------------------------------------------- SEARCH
export function searchPage(allPages) {
  const index = allPages.filter((p) => p.slug !== 'search.html').map((p) => ({
    t: p.title, u: p.slug,
    x: p.body.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<dialog[\s\S]*?<\/dialog>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 4000),
  }));
  return {
    slug: 'search.html', title: 'Search',
    body: `
${pageHead({ title: 'Search' })}
<section class="section" style="padding-top:3rem">
  <div class="wrap max-w-3xl">
    <div class="field"><label for="q">Search New Life Fellowship</label><input id="q" type="search" placeholder="Try “baptism”, “life groups”, or “prayer”" autocomplete="off"></div>
    <ul id="results" class="mt-8" aria-live="polite"></ul>
  </div>
</section>
<script>
(() => {
  const IDX = ${JSON.stringify(index)};
  const q = document.getElementById('q'), out = document.getElementById('results');
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const run = () => {
    const v = q.value.trim().toLowerCase();
    if (!v) { out.innerHTML = IDX.map(p => '<li class="hair"><a class="tile block py-4 ui text-lg text-[color:var(--deep)]" href="'+p.u+'">'+esc(p.t)+'</a></li>').join(''); return; }
    const hits = IDX.map(p => { const tl = p.t.toLowerCase(), xl = p.x.toLowerCase(); const i = xl.indexOf(v);
      return { p, s: (tl.includes(v) ? 10 : 0) + (i > -1 ? 1 : 0), i }; }).filter(h => h.s).sort((a, b) => b.s - a.s);
    out.innerHTML = hits.length ? hits.map(({p, i}) => '<li class="hair"><a class="tile block py-5" href="'+p.u+'"><span class="ui text-lg text-[color:var(--deep)]">'+esc(p.t)+'</span>' + (i > -1 ? '<span class="block mt-1 text-[1rem] muted">…'+esc(p.x.slice(Math.max(0, i - 60), i + 120))+'…</span>' : '') + '</a></li>').join('')
      : '<li class="muted">No pages match “'+esc(q.value)+'”. Try a shorter word, or <a class="link" href="contact.html">contact the church office</a>.</li>';
  };
  const init = new URLSearchParams(location.search).get('q'); if (init) q.value = init;
  q.addEventListener('input', run); run(); q.focus();
})();
</script>`,
  };
}
