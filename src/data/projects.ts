export type Category = 'ai' | 'fullstack' | 'data';

export type Status = 'In production' | 'Production pilot' | 'Shipped' | 'Live' | 'Season complete' | 'Working prototype' | 'MVP';

export type VisualKind =
  | 'agent-loop'
  | 'model-board'
  | 'pipeline'
  | 'draft-room'
  | 'estimator'
  | 'harness'
  | 'crm'
  | 'etl';

export interface Metric {
  value: string;
  label: string;
}

export interface Section {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  year: string;
  role: string;
  status: Status;
  tier: 'flagship' | 'featured' | 'more';
  categories: Category[];
  stack: string[];
  metrics?: Metric[];
  links?: { live?: string; repo?: string; video?: string };
  privateRepo?: boolean;
  image?: string;
  visual?: VisualKind;
  sections?: Section[];
}

export const categoryLabels: Record<Category, string> = {
  ai: 'AI & Agents',
  fullstack: 'Full-stack',
  data: 'Data & ML',
};

export const projects: Project[] = [
  {
    slug: 'pm-foreman',
    title: 'PM + FOREMAN',
    tagline: 'An AI-run operations platform for facilities maintenance.',
    summary:
      'A multi-tenant work-order platform paired with an autonomous coordinator agent. The LLM proposes every action, and a deterministic kernel verifies evidence, policy and authority before anything is sent.',
    year: '2026',
    role: 'Sole engineer: product, architecture, AI, infra',
    status: 'In production',
    tier: 'flagship',
    categories: ['ai', 'fullstack'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Neon', 'Drizzle', 'better-auth', 'Vercel AI SDK', 'Claude', 'OpenAI', 'Resend', 'Zod', 'Vitest', 'Vercel'],
    metrics: [
      { value: '1,700+', label: 'commits across both systems' },
      { value: '800+', label: 'test files' },
      { value: '278', label: 'pull requests on FOREMAN' },
      { value: '29', label: 'documented build phases' },
    ],
    privateRepo: true,
    visual: 'agent-loop',
    sections: [
      {
        heading: 'The problem',
        body: [
          'Facilities-maintenance aggregators sit between national retail clients and thousands of local vendors. Every work order is a long-running negotiation: intake, dispatch, ETAs, not-to-exceed limits, quotes, proposals, invoices. Most of a coordinator’s day is spent chasing people and copying data between portals.',
          'I spent seven years on the executive team of a facilities services firm, redesigning exactly these workflows, so I knew where the time went. I wanted to see how much of the job could be handed to an agent without giving up the control and audit trail operations teams depend on.',
        ],
      },
      {
        heading: 'PM: the platform',
        body: [
          'PM is a multi-tenant SaaS that runs the whole client → aggregator → vendor workflow. Work orders come in through manual entry, client portals, email or API, then move through dispatch, SLA tracking, quotes and proposals, vendor and client invoicing, preventative maintenance and snow operations. Vendor and client portals give each side its own view.',
          'AI agents draft scopes, proposals and invoices, and an in-app assistant called Mason answers operational questions. Hard policy gates decide what any of them is actually allowed to do.',
        ],
        bullets: [
          '~150k lines of TypeScript and 300+ test files over 1,000+ commits (May → Oct 2026)',
          'Postgres on Neon with Drizzle and strict tenant isolation',
          'Vercel AI SDK with Claude as the primary model and OpenAI as fallback',
        ],
      },
      {
        heading: 'FOREMAN: the coordinator agent',
        body: [
          'FOREMAN manages work orders over days or weeks. It wakes only when an event or timer needs it, evaluates the work order against per-tenant policy, decides the next action and records why. Typical actions are chasing a vendor for an ETA, replying to a client status request, approving a not-to-exceed (NTE) increase under a cap, or drafting the client invoice.',
          'The core rule is AI proposes, the kernel verifies. The model can suggest anything, but a deterministic kernel checks evidence, policy and authority before a message leaves the system. Autonomy is switched on per tenant and per client, so operators can start every action as approve-first and loosen it as trust builds.',
        ],
        bullets: [
          'Event- and timer-driven evaluation with a full decision log for every action',
          'Golden evaluation pins that catch behavioral regressions before deploy',
          'v1 was a two-week proof of concept; v2 replaced it with 721 commits and ~500 test files',
        ],
      },
      {
        heading: 'What I learned',
        body: [
          'Reliability in agent systems comes from the boundaries around the model, not the model itself. Making the policy kernel boring, deterministic and well-tested is what let me give the agent more autonomy safely.',
        ],
      },
    ],
  },
  {
    slug: 'cielo-141',
    title: 'Cielo 141',
    tagline: 'Ordering, payments and a kitchen board for a real food truck.',
    summary:
      'A mobile-first ordering system run by a Puerto Rican pop-up. Customers order and pay from their phones and get SMS updates. Staff work a live kitchen board and a menu manager with camera uploads.',
    year: '2026',
    role: 'Designer & full-stack engineer',
    status: 'Live',
    tier: 'featured',
    categories: ['fullstack'],
    stack: ['Next.js 16', 'TypeScript', 'Neon Postgres', 'Drizzle', 'Stripe', 'Twilio', 'Vercel Blob', 'Zustand', 'Tailwind v4'],
    metrics: [
      { value: 'Real', label: 'customers & payments' },
      { value: '1 week', label: 'from first commit to taking orders' },
    ],
    links: { live: 'https://cielo141.com', repo: 'https://github.com/Jrosero21/cielo141' },
    image: '/images/projects/cielo141.png',
    sections: [
      {
        heading: 'The brief',
        body: [
          'A Puerto Rican pop-up needed to take orders on the street without a line forming at the window. It had to be fast on a phone, accept card or in-person payment, and tell customers when their plate was ready.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'The customer side is a branded, mobile-first menu with Stripe Checkout and live order status. Twilio sends an SMS when an order is confirmed and when it’s ready. The staff side is a passphrase-protected kitchen board for working orders in real time, with order history and a menu manager that takes photos straight from a phone or webcam into Vercel Blob.',
        ],
        bullets: [
          'Next.js 16 App Router with Neon Postgres and Drizzle',
          'Stripe Checkout for online payments, with pay-at-pickup as an option',
          'Twilio toll-free SMS, with privacy and terms pages written to pass carrier verification',
          'Orders also export to a MySQL warehouse for reporting',
        ],
      },
    ],
  },
  {
    slug: 'degens-mlb',
    title: 'Degens MLB',
    tagline: 'A daily MLB prediction pipeline, audited honestly.',
    summary:
      'An ensemble of gradient-boosted and run-distribution models that priced every game of the 2026 season. Picks went to a public board with Kelly sizing, and every claim was checked against the Vegas baseline.',
    year: '2026',
    role: 'Data engineering, modeling, frontend',
    status: 'Season complete',
    tier: 'featured',
    categories: ['data', 'ai'],
    stack: ['Python', 'pandas', 'XGBoost', 'scikit-learn', 'CatBoost', 'MySQL', 'React', 'Vite', 'Vercel', 'cron'],
    metrics: [
      { value: '55.8%', label: 'live winner accuracy (n=233)' },
      { value: '52.4%', label: 'breakeven at −110' },
      { value: '2,400+', label: 'automated board snapshots' },
    ],
    links: { repo: 'https://github.com/Jrosero21/degens-mlb-v2' },
    visual: 'model-board',
    sections: [
      {
        heading: 'The pipeline',
        body: [
          'Every morning a cron pipeline pulls StatsAPI, Statcast, ten seasons of Retrosheet, odds feeds, umpire assignments and weather. These feed an ensemble: XGBoost and HistGBM classifiers pick the winner, and separate run models price the run line and total. Results land in MySQL, then get published as a JSON snapshot to a Vercel-hosted board with Kelly bankroll sizing and a chat assistant.',
        ],
      },
      {
        heading: 'The honest part',
        body: [
          'Early backtests showed 67–68% accuracy. That was too good, and it turned out to be train/serve skew: features available in the backtest weren’t available at prediction time. I retracted those numbers, wrote a postmortem and a trust audit, and rebuilt the pipeline.',
          'The rebuilt model hit 55.8% on live 2026 games, above the 52.4% breakeven at standard odds. The board also reports that simply picking the Vegas favorite won 60.3% of the time, and the model doesn’t beat that. Publishing the baseline next to the result is the point.',
        ],
      },
      {
        heading: 'The wider quant stack',
        body: ['The same MySQL warehouse and tooling power a few sibling projects:'],
        bullets: [
          'NFL Predictive Engine: 10,000-run Monte Carlo player simulations for fantasy projections and +EV prop detection against de-vigged multi-book odds',
          'Kalshi edge scanner: streams prediction-market prices over WebSocket, compares them with sharp sportsbook lines, tracks closing-line value and paper-trades',
          'March Madness model: logistic-regression bracket predictions with a live board refreshing every 5 minutes through the 2026 tournament',
        ],
      },
    ],
  },
  {
    slug: 'greenaway',
    title: 'Greenaway',
    tagline: 'An agentic publishing line, from niche research to an Amazon listing.',
    summary:
      'Claude subagents research niches, generate art and write listings. A deterministic Python core enforces print geometry, economics and a three-tier QA gate. Each title takes about 90 minutes end to end.',
    year: '2026',
    role: 'Sole engineer',
    status: 'Shipped',
    tier: 'featured',
    categories: ['ai'],
    stack: ['Python', 'Claude Code subagents', 'Pillow', 'NumPy', 'pytest', 'Image generation APIs'],
    metrics: [
      { value: '242', label: 'tests, built test-first' },
      { value: '~90 min', label: 'per finished title' },
      { value: '6', label: 'titles produced for KDP' },
    ],
    privateRepo: true,
    visual: 'pipeline',
    sections: [
      {
        heading: 'How it’s split',
        body: [
          'Greenaway has two halves, divided by one question: can a command check this? Anything checkable, like trim size, bleed, spine width, page count economics, 1-bit line-art cleanliness or IP and niche gates, lives in a tested Python core. Anything that needs judgment, like niche research, art direction and listing copy, goes to Claude subagents: a scout, a producer, a QA reviewer and a merchandiser.',
        ],
      },
      {
        heading: 'QA that can catch itself failing',
        body: [
          'The QA gate has three tiers: deterministic page checks, a fit check against the book’s profile, and a visual review. Before the visual reviewer’s verdict counts, known-bad “canary” pages are injected into its batch. If the reviewer misses a canary, the whole review is voided. That turns an LLM judgment into something you can measure.',
        ],
      },
    ],
  },
  {
    slug: 'coach-lasso',
    title: 'Coach Lasso',
    tagline: 'An AI draft room and weekly coach for fantasy football.',
    summary:
      'Ranks players by the weekly wins they add, not by generic rankings, using scarcity, byes, injuries, weather and betting-market props. It connects to Yahoo and ESPN leagues and was used live at the 2026 drafts.',
    year: '2026',
    role: 'Sole engineer',
    status: 'Shipped',
    tier: 'featured',
    categories: ['ai', 'data'],
    stack: ['Python', 'FastAPI', 'Streamlit', 'Claude API', 'polars', 'nflreadpy', 'SQLAlchemy', 'MariaDB'],
    metrics: [
      { value: '122', label: 'commits in four weeks' },
      { value: '~23k', label: 'lines of Python' },
      { value: '2', label: 'live leagues (Yahoo + ESPN)' },
    ],
    privateRepo: true,
    visual: 'draft-room',
    sections: [
      {
        heading: 'What it does',
        body: [
          'On draft night, a FastAPI draft room tracks every pick and re-ranks the board by marginal weekly win value, factoring in roster construction, positional scarcity and bye-week collisions. In season, the same engine drives start/sit and waiver recommendations from injuries, weather and player-prop markets, with push alerts when something changes.',
          'A Claude-powered advisor explains its recommendations in plain language and answers “what if” questions against the live model.',
        ],
      },
    ],
  },
  {
    slug: 'barker',
    title: 'Barker',
    tagline: 'An AI cost estimator that refuses to guess.',
    summary:
      'Forecasts what a repair job should cost, audits subcontractor quotes against that baseline and packages a client proposal. Every price traces to cited web evidence or is marked unresolved.',
    year: '2026',
    role: 'Sole engineer',
    status: 'MVP',
    tier: 'more',
    categories: ['ai'],
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'OpenAI', 'Tavily', 'Prometheus', 'React', 'Vite'],
    metrics: [
      { value: '51', label: 'test files' },
      { value: 'Multi-tenant', label: 'hashed API keys + metrics' },
    ],
    privateRepo: true,
    visual: 'estimator',
    sections: [
      {
        heading: 'Why it exists',
        body: [
          'In facilities work, the hardest question is whether a vendor’s quote is fair. Barker is a standalone service that answers it. It builds an internal cost baseline for the work order, prices materials from live web evidence, flags quote lines that don’t match, and drafts a marked-up client proposal.',
          'The key design rule is that an unconfirmed listing never counts as a defensible price. Barker reports a gap as unresolved rather than letting the model fill it in.',
        ],
        bullets: [
          'FastAPI + Postgres, with migrations and Prometheus metrics',
          'An operator console (React/Vite) that only displays Barker’s verdicts and computes nothing itself',
        ],
      },
    ],
  },
  {
    slug: 'lovelace',
    title: 'Lovelace',
    tagline: 'A fail-closed harness for unattended AI coding runs.',
    summary:
      'Every capability is denied unless granted for that run: read/write globs, allowed commands, and proof-of-done patterns. I used it to grow a 525-file production codebase’s test suite from 175 to 515 tests across unattended batches.',
    year: '2026',
    role: 'Sole engineer',
    status: 'Working prototype',
    tier: 'more',
    categories: ['ai'],
    stack: ['Python', 'Pydantic', 'pytest', 'TypeScript', 'LangGraph', 'Claude', 'Next.js'],
    metrics: [
      { value: '175 → 515', label: 'tests added unattended' },
      { value: '−57%', label: 'cost per call via prompt caching (v2)' },
    ],
    privateRepo: true,
    visual: 'harness',
    sections: [
      {
        heading: 'Fail closed by default',
        body: [
          'Coding agents are productive until they wander. Lovelace runs one objective against one directory with an explicit contract: the files it may read, the files it may write, the commands it may run, and the output a test command must produce to prove the work is done. Anything outside the contract stops the run.',
          'Plan, campaign and loop modes chain many contracts into unattended batches. v2 is a TypeScript/LangGraph rewrite with a Next.js client, where prompt caching cut cost per call by 57%.',
        ],
      },
    ],
  },
  {
    slug: 'rose-platform',
    title: 'Rose Ops Platform',
    tagline: 'An internal AI sales and delivery platform for my consultancy.',
    summary:
      'Ranks incoming opportunities with LLMs, drafts proposals under human review and tracks project delivery. Every AI action is logged with its prompt version, model, latency and cost.',
    year: '2026',
    role: 'Founder & engineer',
    status: 'In production',
    tier: 'more',
    categories: ['ai', 'fullstack'],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'MySQL', 'Claude', 'OpenAI', 'Resend', 'Zod', 'Playwright'],
    metrics: [
      { value: '~52k', label: 'lines of TypeScript' },
      { value: 'V1 → V3', label: 'shipped releases' },
    ],
    privateRepo: true,
    visual: 'crm',
    sections: [
      {
        heading: 'What it does',
        body: [
          'Rose runs the business side of Rose Analytics & Development. It takes in opportunities, scores each against search profiles with an LLM, drafts proposals for me to review, and then tracks delivery: projects, phases and AI-drafted client updates.',
          'Because the business depends on it, observability came first. Every model call records its prompt version, model, latency and cost, and reporting dashboards compare prompt versions head to head on real outcomes.',
        ],
      },
    ],
  },
  {
    slug: 'rose-analytics',
    title: 'Rose Analytics & Development',
    tagline: 'Company site for my analytics and engineering consultancy.',
    summary:
      'A custom editorial site with a contact pipeline that takes file uploads, stores each submission in MySQL and sends notifications through Resend. The React client runs on Vercel and the Express API on Railway.',
    year: '2026',
    role: 'Founder, designer & engineer',
    status: 'Live',
    tier: 'more',
    categories: ['fullstack'],
    stack: ['React', 'Vite', 'Express', 'Node.js', 'MySQL', 'Railway', 'Resend', 'Framer Motion'],
    links: { live: 'https://rose-analytics.com' },
    image: '/images/projects/rose-analytics.png',
  },
  {
    slug: 'records-pipeline',
    title: 'Public-Records Data Pipeline',
    tagline: 'Geospatial ETL joining court filings to 531k property parcels.',
    summary:
      'Ingests daily county court filings, fuzzy-matches names against a 531k-parcel property roll, scores equity and feeds a lead-management app. It was built under robots.txt and bulk-data compliance constraints.',
    year: '2026',
    role: 'Data engineer',
    status: 'Working prototype',
    tier: 'more',
    categories: ['data'],
    stack: ['Python', 'pandas', 'GIS / DBF', 'FastAPI', 'React', 'Streamlit', 'MySQL'],
    metrics: [{ value: '531k', label: 'parcels joined daily' }],
    privateRepo: true,
    visual: 'etl',
  },
  {
    slug: 'ad-analytics',
    title: 'Ad Analytics Dashboard',
    tagline: 'Cross-channel ad analytics with an embedded Claude analyst.',
    summary:
      'Facebook, Google and TikTok performance from a live MySQL database, with interactive filters, campaign breakdowns and a Claude-powered analyst that answers questions about the data.',
    year: '2026',
    role: 'Full-stack engineer',
    status: 'Live',
    tier: 'more',
    categories: ['fullstack', 'ai', 'data'],
    stack: ['React', 'Vite', 'Recharts', 'Express', 'MySQL', 'Claude API', 'Vercel'],
    links: { live: 'https://improvado-dash.vercel.app/', repo: 'https://github.com/Jrosero21/improvado-dash' },
    image: '/images/projects/improvado.png',
  },
  {
    slug: 'ebay-generator',
    title: 'eBay AI Listing Generator',
    tagline: 'Product photos in, a priced, ready-to-post listing out.',
    summary:
      'Combines computer vision, LLM copywriting and live market data to turn product photos into optimized titles, descriptions, safety checks and competitive pricing.',
    year: '2025',
    role: 'Full-stack engineer',
    status: 'Shipped',
    tier: 'more',
    categories: ['ai', 'fullstack'],
    stack: ['React', 'Node.js', 'Express', 'AWS Rekognition', 'OpenAI', 'eBay Browse API'],
    links: {
      video: 'https://drive.google.com/file/d/1qetVBJenqMAoSXTLa2DJU84-e3EvzIZ7/view?usp=sharing',
      repo: 'https://github.com/Jrosero21/ebay-listing-generator',
    },
    image: '/images/projects/ebaysnapshot.png',
  },
  {
    slug: 'finmodel',
    title: 'FinModel',
    tagline: 'SaaS financial dashboard: MRR, churn, LTV, CAC, runway.',
    summary: 'Seven analytics views with live filtering by date, product, plan and data source.',
    year: '2025',
    role: 'Frontend engineer',
    status: 'Live',
    tier: 'more',
    categories: ['data', 'fullstack'],
    stack: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    links: { live: 'https://financial-model-woad.vercel.app/', repo: 'https://github.com/Jrosero21/financialModel' },
    image: '/images/projects/finmodel.png',
  },
  {
    slug: 'bi-dashboard',
    title: 'BI Analytics Dashboard',
    tagline: 'Executive, sales, ops, vendor and accounting views in one place.',
    summary: 'Six department dashboards over seeded data, with filters, CSV export, dark mode and skeleton loading states.',
    year: '2026',
    role: 'Frontend engineer',
    status: 'Live',
    tier: 'more',
    categories: ['data'],
    stack: ['React', 'Vite', 'Recharts', 'Tailwind CSS'],
    links: { live: 'https://bi-dash-v2.vercel.app/', repo: 'https://github.com/Jrosero21/bi-dash-v2' },
    image: '/images/projects/bidash.png',
  },
];

export const flagship = projects.find((p) => p.tier === 'flagship')!;
export const featured = projects.filter((p) => p.tier === 'featured');
export const moreWork = projects.filter((p) => p.tier === 'more');
export const caseStudies = projects.filter((p) => p.sections && p.sections.length > 0);

export const earlierWork = [
  { title: 'Skinstric A.I.', note: 'Internship · AI skin-analysis flow', year: '2025', live: 'https://skinstric-delta.vercel.app/', repo: 'https://github.com/Jrosero21/skinstric' },
  { title: 'Ultraverse', note: 'Internship · NFT marketplace', year: '2025', live: 'https://jonny-utraverse.vercel.app/', repo: 'https://github.com/Jrosero21/jonny-internship' },
  { title: 'Twitter clone', note: 'Next.js · Prisma · MongoDB', year: '2025', live: 'https://fitter-clone.vercel.app/', repo: 'https://github.com/Jrosero21/fitter-clone' },
  { title: 'Drive clone', note: 'Next.js · SingleStore · auth', year: '2025', live: 'https://drive-tutorial-eight.vercel.app/', repo: 'https://github.com/Jrosero21/drive-tutorial' },
  { title: 'My Movie DB', note: 'React · TMDB API', year: '2025', live: 'https://mmdbv2-nine.vercel.app/', repo: 'https://github.com/Jrosero21/mmdbv2' },
  { title: 'Library', note: 'E-commerce mockup', year: '2025', live: 'https://e-commerce-app-main-orcin.vercel.app/', repo: 'https://github.com/Jrosero21/e-commerce-app-main' },
];
