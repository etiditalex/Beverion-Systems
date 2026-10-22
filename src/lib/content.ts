export const company = {
  name: "Beverion Systems",
  short: "Beverion",
  email: "hello@beverionsystems.com",
  location: "United States",
  response: "Reply within one business day",
  url: "https://beverionsystems.com",
  description:
    "Beverion Systems designs websites, search programs, ticketing and voting platforms, integrations, and the support around them.",
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  badge?: string;
  children?: NavLink[];
};

export const services = [
  {
    slug: "seo",
    title: "SEO",
    short: "Search Engine Optimization",
    nav: "Be found in organic search",
    summary:
      "Technical, content, and authority work so the right pages rank for the searches your buyers already make.",
    audience: "Teams that depend on organic search for pipeline, enrollment, or bookings.",
    outcomes: [
      "A crawlable site structure and indexation plan",
      "Page-level targeting tied to real queries",
      "Measurement you can read without a specialist in the room",
    ],
    includes: [
      "Technical SEO audits and fix lists",
      "Information architecture and internal linking",
      "On-page content briefs and metadata",
      "Local and national search setup",
      "Search Console and analytics reporting",
    ],
  },
  {
    slug: "aeo",
    title: "AEO",
    short: "Answer Engine Optimization",
    nav: "Win the direct answer",
    summary:
      "Structure pages so answer engines, featured results, and voice surfaces can lift a clear response from your site.",
    audience: "Organizations whose buyers ask a question and expect one confident answer.",
    outcomes: [
      "Question-led pages with a direct answer up front",
      "Clean headings, facts, and source lines machines can parse",
      "A map of which questions you should own",
    ],
    includes: [
      "Question and query research",
      "Answer-first page patterns",
      "FAQ and structured data recommendations",
      "Snippet and answer-box reviews",
      "Editorial rules your team can keep using",
    ],
  },
  {
    slug: "geo",
    title: "GEO Consulting",
    short: "Generative Engine Optimization",
    nav: "Show up in AI answers",
    summary:
      "Consulting that prepares your brand to be retrieved, cited, and described accurately by generative systems.",
    audience: "Companies that are already being summarized by AI tools, or need to be.",
    outcomes: [
      "Entity and citation hygiene across your public web",
      "Source pages written so models can attribute you",
      "A practical GEO roadmap, not a pile of jargon",
    ],
    includes: [
      "Generative-surface audit (AI overviews, answer engines, assistants)",
      "Entity, author, and organization clarity",
      "Citation-ready content and source libraries",
      "Brand-fact sheets models can rely on",
      "Monitoring guidance for how answers change",
    ],
  },
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    short: "Sites and web software",
    nav: "Design and build the site",
    summary:
      "Marketing sites and web applications designed for clarity, speed, and the work your team does after launch.",
    audience: "Organizations that have outgrown a template, or need a product-quality web presence.",
    outcomes: [
      "A site that explains the offer in one pass",
      "A front end your team can extend",
      "Performance, accessibility, and SEO basics built in",
    ],
    includes: [
      "UX and interface design",
      "Marketing sites and landing systems",
      "Web application front ends",
      "Design systems and component libraries",
      "Launch, redirects, and care after go-live",
    ],
  },
  {
    slug: "ticketing-voting",
    title: "Ticketing & Voting",
    short: "Events and recorded decisions",
    nav: "Tickets, check-in, and ballots",
    summary:
      "Ticketing for events and voting for membership or organizational decisions, with a record a person can audit.",
    audience: "Associations, venues, campaigns, schools, and operators who cannot afford a muddy result.",
    outcomes: [
      "Capacity, ticket types, and check-in that match the event",
      "Ballots limited to the people who are allowed to vote",
      "Exports and result views your officers can stand behind",
    ],
    includes: [
      "Event and ticket-type setup",
      "Attendee lists and check-in flows",
      "Voter rolls and ballot configuration",
      "Result tallies with an audit trail",
      "Admin roles for staff and officers",
    ],
  },
  {
    slug: "integration",
    title: "Integration",
    short: "Systems that talk to each other",
    nav: "Connect the tools you already run",
    summary:
      "APIs, data handoffs, and identity connections so finance, CRM, web, and operations stop living in separate files.",
    audience: "Teams paying for tools that do not share customers, orders, or records.",
    outcomes: [
      "A map of systems, owners, and data that must move",
      "Reliable handoffs instead of spreadsheet bridges",
      "Failure alerts when a connection stops",
    ],
    includes: [
      "Integration discovery and interface design",
      "API and webhook implementation",
      "CRM, payments, email, and data-warehouse connections",
      "Identity and access handoff",
      "Monitoring and retry behavior",
    ],
  },
  {
    slug: "it-support-consulting",
    title: "IT Support & Consulting",
    short: "Advice and ongoing care",
    nav: "Decide, then keep it running",
    summary:
      "Technology consulting before you buy, and support after the system is in people’s hands.",
    audience: "Leaders who need a direct technical partner, not another vendor slide.",
    outcomes: [
      "A recommendation you can take to finance",
      "A support path with named response expectations",
      "Documentation your staff can use without us on the call",
    ],
    includes: [
      "Technology and vendor advisory",
      "Requirements and architecture reviews",
      "Implementation oversight",
      "Staff onboarding and admin guides",
      "Ongoing support retainers",
    ],
  },
  {
    slug: "data-analysis",
    title: "Data Analysis",
    short: "From exports to decisions",
    nav: "Turn records into a decision",
    summary:
      "We clean, model, and present operational data so a manager can see what changed and what to do next.",
    audience: "Operators sitting on exports, surveys, tickets, or sales data they do not fully trust.",
    outcomes: [
      "A defined question before any chart is built",
      "A dataset someone can refresh",
      "A short read of what the numbers support",
    ],
    includes: [
      "Source review and data cleaning",
      "Metric definitions",
      "Dashboards and recurring reports",
      "Cohort, funnel, and operations analysis",
      "Decision memos in plain language",
    ],
  },
] as const;

export type Service = (typeof services)[number];

export const products = [
  {
    slug: "ticketing",
    title: "Beverion Tickets",
    kicker: "Ticketing system",
    summary:
      "A ticketing system for events that need more than a payment link: capacity, ticket types, attendees, and check-in.",
    image: "/images/hero-events.jpg",
    imageAlt: "Audience seated at a conference, the kind of room a ticketing system has to account for.",
    points: [
      "Multiple ticket types, holds, and capacity limits",
      "Attendee records your door staff can search",
      "Check-in that works the day of the event",
      "Sales and attendance reporting for the organizer",
      "Room to connect payments, email, and your CRM",
    ],
  },
  {
    slug: "voting",
    title: "Beverion Ballot",
    kicker: "Voting system",
    summary:
      "A voting system for organizations that need an eligible list, a clear ballot, and a result someone can explain.",
    image: "/images/work-workshop.jpg",
    imageAlt: "A team working through a decision together in a meeting room.",
    points: [
      "Voter rolls controlled by your officers",
      "Ballots with the questions and options you define",
      "One eligible voter, one recorded submission",
      "Tallies and an export for the minutes",
      "Roles for administrators, observers, and voters",
    ],
  },
] as const;

export type Product = (typeof products)[number];

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Beverion",
    href: "/about",
    children: [
      { label: "Our practice", href: "/about", description: "What Beverion takes on" },
      { label: "How we deliver", href: "/about#delivery", description: "Discover, design, build, support" },
      { label: "Opportunities", href: "/opportunities", description: "Work with the team" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    badge: "Core",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
      description: service.short,
    })),
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Beverion Tickets", href: "/products/ticketing", description: "Event ticketing" },
      { label: "Beverion Ballot", href: "/products/voting", description: "Organizational voting" },
      { label: "Partner promotions", href: "/partners", description: "Products we represent" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Partners",
    href: "/partners",
    badge: "New",
  },
  { label: "Blog", href: "/blog" },
];

export const slides = [
  {
    id: "systems",
    tab: "Systems",
    brand: "Beverion Systems",
    kicker: "Web design, development, and the systems around them",
    line1: "Move the business forward with",
    accent: "systems that hold.",
    body: "Beverion Systems is a technology practice for organizations that need a site, a platform, and a partner who stays after launch.",
    primary: { label: "About us", href: "/about" },
    secondary: { label: "Our services", href: "/services" },
    image: "/images/hero-systems.jpg",
    imageAlt: "A product team working on laptops around a shared table.",
    cards: [
      { value: "End to end", label: "Design through support", icon: "layers" as const },
      { value: "8", label: "Practice areas", icon: "check" as const },
    ],
  },
  {
    id: "search",
    tab: "Search",
    brand: "Search practice",
    kicker: "SEO, AEO, and GEO consulting",
    line1: "Get chosen in search,",
    accent: "answers, and AI.",
    body: "Search engine optimization, answer engine optimization, and generative engine optimization, planned as one visibility system.",
    primary: { label: "See the search work", href: "/services/seo" },
    secondary: { label: "All services", href: "/services" },
    image: "/images/hero-search.jpg",
    imageAlt: "Two colleagues in a bright office, with a laptop open between them.",
    cards: [
      { value: "SEO", label: "Classic search", icon: "search" as const },
      { value: "AEO + GEO", label: "Answers and AI", icon: "check" as const },
    ],
  },
  {
    id: "events",
    tab: "Events",
    brand: "Ticketing & voting",
    kicker: "Events, membership, and recorded decisions",
    line1: "Run tickets and ballots",
    accent: "people can trust.",
    body: "Beverion designs ticketing and voting systems with capacity, eligibility, check-in, and a result your officers can stand behind.",
    primary: { label: "View products", href: "/products" },
    secondary: { label: "Talk to us", href: "/contact" },
    image: "/images/hero-events.jpg",
    imageAlt: "A seated audience at a live event.",
    cards: [
      { value: "Tickets", label: "Capacity and check-in", icon: "layers" as const },
      { value: "Ballots", label: "A record of the result", icon: "check" as const },
    ],
  },
  {
    id: "data",
    tab: "Data",
    brand: "Integration & insight",
    kicker: "IT support, consulting, and data analysis",
    line1: "Connect the stack and",
    accent: "read the data.",
    body: "Integration, IT consulting, support, and data analysis for teams that are done reconciling the business in spreadsheets.",
    primary: { label: "Data analysis", href: "/services/data-analysis" },
    secondary: { label: "IT consulting", href: "/services/it-support-consulting" },
    image: "/images/hero-data.jpg",
    imageAlt: "Engineers working at a bright desk with code on screen.",
    cards: [
      { value: "One map", label: "Systems and owners", icon: "layers" as const },
      { value: "Clear", label: "Analysis you can use", icon: "search" as const },
    ],
  },
  {
    id: "partners",
    tab: "Partners",
    brand: "Partner shelf",
    kicker: "We promote products from companies we work with",
    line1: "Put partner products",
    accent: "in front of buyers.",
    body: "Beverion partners with other companies and promotes products that fit the operators we already serve.",
    primary: { label: "Partner with us", href: "/partners" },
    secondary: { label: "See the model", href: "/partners#model" },
    image: "/images/work-partner.jpg",
    imageAlt: "Professionals in a meeting, the setting for a partner conversation.",
    cards: [
      { value: "Fit first", label: "We review before we list", icon: "check" as const },
      { value: "Shared", label: "Promotion, not a logo wall", icon: "layers" as const },
    ],
  },
];

export const reasons = [
  {
    title: "Shaped to the operation",
    text: "We start from how your team works, then design the site, system, or program around that. A template is not the brief.",
  },
  {
    title: "One accountable team",
    text: "Strategy, design, build, search, and support stay with Beverion. You are not handed between three vendors.",
  },
  {
    title: "Search includes the answer layer",
    text: "SEO, AEO, and GEO are planned together, so you show up in classic results and in the answers people now read.",
  },
  {
    title: "Platforms, not only pages",
    text: "Ticketing, voting, and integrations are product work. We treat admin roles, edge cases, and the day-of staff as part of the design.",
  },
  {
    title: "Connections that keep running",
    text: "Integrations include failure behavior. A silent broken sync is not a finished project.",
  },
  {
    title: "Support after launch",
    text: "Documentation, training, and a support path are part of delivery. The system has to survive the first real week.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Discover",
    text: "We learn the users, the data, the constraints, and what a useful outcome looks like. Scope and sequence get written down.",
  },
  {
    n: "02",
    title: "Design",
    text: "Flows, interfaces, and content structure come before a long build. You can react to something concrete.",
  },
  {
    n: "03",
    title: "Build",
    text: "We ship in short cycles, with a working slice you can click. Search, access, and integrations are in the build, not a later phase we hope to reach.",
  },
  {
    n: "04",
    title: "Support",
    text: "Launch, staff guidance, and a care plan. We stay available while your team takes ownership.",
  },
];

export const showcases = [
  {
    slug: "corporate-web",
    title: "Corporate web platform",
    area: "Web",
    image: "/images/work-web.jpg",
    imageAlt: "A developer workspace with code on a laptop.",
    text: "A marketing and content system with a clear offer, fast pages, and room for campaigns without a redesign every quarter.",
  },
  {
    slug: "search-program",
    title: "Search and answer program",
    area: "Search",
    image: "/images/work-analytics.jpg",
    imageAlt: "Analytics charts on a laptop screen.",
    text: "A combined SEO, AEO, and GEO plan: query map, answer-first pages, and citation-ready source material.",
  },
  {
    slug: "event-desk",
    title: "Event ticketing desk",
    area: "Events",
    image: "/images/hero-events.jpg",
    imageAlt: "Rows of attendees at a live program.",
    text: "Ticket types, capacity, attendee lookup, and a check-in view for the people at the door.",
  },
  {
    slug: "member-ballot",
    title: "Member ballot",
    area: "Events",
    image: "/images/work-workshop.jpg",
    imageAlt: "Colleagues in a working session.",
    text: "An eligible voter list, a timed ballot, and a tally an officer can export into the record.",
  },
  {
    slug: "ops-dashboard",
    title: "Operations readout",
    area: "Data",
    image: "/images/hero-data.jpg",
    imageAlt: "Two people working through data on desktop screens.",
    text: "A cleaned dataset and a short dashboard for the few numbers leadership actually reviews.",
  },
  {
    slug: "partner-shelf",
    title: "Partner product shelf",
    area: "Partners",
    image: "/images/work-partner.jpg",
    imageAlt: "A business conversation across a table.",
    text: "A promotion surface for another company’s product, with Beverion handling the story and the introduction.",
  },
];

export const posts = [
  {
    slug: "seo-aeo-geo",
    title: "SEO, AEO, and GEO are three layers of being found",
    date: "October 8, 2026",
    category: "Search",
    read: "6 min",
    excerpt:
      "Ranking is no longer the only way a buyer meets you. Answers and generative summaries now sit beside the classic results page.",
    paragraphs: [
      "Search engine optimization still matters. People type a query, a results page appears, and the pages that are crawlable, relevant, and trusted earn the click. That work has not gone away.",
      "Answer engine optimization is the layer above a single blue link. Featured results, voice replies, and answer modules try to resolve the question on the spot. Pages that bury the answer under a long introduction are easy to skip. Pages that state the fact, name the source, and then explain tend to travel further.",
      "Generative engine optimization is the consulting work around AI summaries. Assistants and AI overviews do not rank you in the old sense. They retrieve, compress, and sometimes cite. If your organization is described by a messy About page and three conflicting bios, the summary will be messy too.",
      "Beverion treats the three as one program. Technical SEO makes the site legible. AEO makes the answer extractable. GEO makes the entity and the citations accurate enough that a generated paragraph does not invent a version of you. Doing only the first one leaves the newer surfaces to chance.",
    ],
  },
  {
    slug: "ticketing-and-ballots",
    title: "Ticketing and voting fail in the exceptions, not the happy path",
    date: "October 14, 2026",
    category: "Platforms",
    read: "5 min",
    excerpt:
      "A demo sale and a demo vote are easy. The system earns trust when the list is wrong, the door is busy, or the result is close.",
    paragraphs: [
      "Most ticketing tools look finished in a screenshot: a price, a button, a confirmation. The real event shows up later. A sponsor hold. A comp that should not count toward capacity. A name spelled two ways. A volunteer at the door with one bar of signal.",
      "Voting has the same shape. The ballot on a slide is simple. The eligible list is not. People join late, share inboxes, or insist they already voted. If the system cannot show who was allowed to vote and what was recorded, the result becomes an argument.",
      "Beverion designs both products around the record. Tickets need capacity rules and a check-in view a human can operate. Ballots need a voter roll an officer controls, one submission per eligible person, and an export that can sit with the minutes.",
      "We do not treat a close result as a surprise. The interface for administrators is part of the product, because that is who has to explain the night afterward.",
    ],
  },
  {
    slug: "partner-promotions",
    title: "Promoting another company’s product is a fit problem",
    date: "October 18, 2026",
    category: "Partners",
    read: "4 min",
    excerpt:
      "A partner shelf is not a logo strip. Beverion only promotes products we can explain to the operators we already talk to.",
    paragraphs: [
      "Beverion will partner with other companies and promote their products. That is a distribution relationship, and it only works when the product belongs in the same conversation as our own work.",
      "We look for tools an operator would actually adopt: software, infrastructure, event technology, analytics, and industry platforms. If we cannot describe who it is for, what it replaces, and what it costs to take seriously, we do not list it.",
      "Promotion here means a real surface. A page, a recommendation inside a relevant engagement, and an introduction when the fit is obvious. It does not mean renting the footer for a badge.",
      "The partner keeps the product, the price, and the customer relationship. Beverion’s job is to put it in front of buyers who have a reason to care, and to say clearly when it is not the right tool.",
    ],
  },
];

export const faqs = [
  {
    q: "What is the difference between SEO, AEO, and GEO?",
    a: "SEO earns visibility on classic search results. AEO structures your pages so answer engines can lift a direct response. GEO consulting prepares your brand to be retrieved and cited accurately by generative systems. Beverion plans them as one program.",
  },
  {
    q: "Do you only design websites?",
    a: "Web design and development is one practice. We also take on search, ticketing, voting, integration, IT consulting and support, and data analysis.",
  },
  {
    q: "Can you promote another company’s product?",
    a: "Yes. We review the product, and if it fits the organizations we serve, we promote it. The partner remains the seller. Start on the Partners page.",
  },
  {
    q: "How does a project start?",
    a: "Send a note through the contact form with the outcome you need. We reply within one business day with a few direct questions, then a proposed sequence. There is no deck required to begin.",
  },
];

export const interests = [
  "SEO",
  "AEO",
  "GEO consulting",
  "Web design and development",
  "Ticketing system",
  "Voting system",
  "Integration",
  "IT support and consulting",
  "Data analysis",
  "Partner promotion",
  "Working at Beverion",
  "Something else",
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
