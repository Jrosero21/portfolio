export const profile = {
  name: 'Jonny Rosero',
  shortName: 'Jonny',
  role: 'Data, BI & AI Systems',
  location: 'Newport Beach, CA',
  email: 'jnrosero@gmail.com',
  github: 'https://github.com/Jrosero21',
  linkedin: 'https://www.linkedin.com/in/jonnyrosero/',
  company: { name: 'Rose Analytics & Development', url: 'https://rose-analytics.com' },
  resume: '/resume.pdf',
  currently: 'Lead Data Analyst at Precision Advanced Manufacturing · consulting via Rose Analytics',
};

export const heroStats = [
  { value: '12 yrs', label: 'building the systems a business runs on' },
  { value: '$2M', label: 'stalled billing recovered in 15 days' },
  { value: '18 → 7', label: 'days of work-order cycle time' },
  { value: '2,000+', label: 'commits shipped in 2026' },
];

export const capabilities = [
  {
    title: 'Analytics & BI',
    body: 'Power BI semantic models, DAX, row-level security and self-service rollouts that people actually adopt. PL-300 certified.',
    proof: '140 users across four departments at Branded Group',
  },
  {
    title: 'Data platforms',
    body: 'Reporting databases, ETL and API integrations across ERP, accounting, CRM and machine data, on Azure or GCP, and owned in production.',
    proof: '184-table Postgres platform across five source systems',
  },
  {
    title: 'AI & software',
    body: 'Full-stack apps and AI agents that sit on top of the data, with policy gates, evals and an audit trail so they’re safe to automate.',
    proof: 'PM + FOREMAN, Cielo 141, Greenaway',
  },
];

export const principles = [
  {
    title: 'AI proposes, code decides',
    body: 'Models draft and recommend. Deterministic kernels check evidence, policy and authority before anything reaches a customer.',
    ref: 'FOREMAN',
  },
  {
    title: 'Fail closed',
    body: 'Every capability is denied until it’s granted, and work counts as done only when a test proves it, not when the model says so.',
    ref: 'Lovelace',
  },
  {
    title: 'Measure it honestly',
    body: 'Golden evals, canary injection and published baselines, including when the numbers are unflattering.',
    ref: 'Degens MLB · Greenaway',
  },
  {
    title: 'Fix the process, not just the report',
    body: 'The best dashboard is the one that finds the broken step upstream. Root cause first, then the build.',
    ref: '$2M billing recovery',
  },
];

export interface Role {
  company: string;
  url?: string;
  context?: string;
  title: string;
  period: string;
  summary: string;
  points: string[];
}

export const experience: Role[] = [
  {
    company: 'Precision Advanced Manufacturing',
    context: 'Anaheim, CA',
    title: 'Lead Data Analyst',
    period: 'Jun 2026 — Present',
    summary: 'I lead data for a precision manufacturer: the reporting platform, the Azure environment under it, and the internal platform twelve departments use to reach it.',
    points: [
      'Built the company reporting database from scratch in Azure Database for PostgreSQL: 184 tables and 3,400+ columns integrating ERP, accounting, CRM, machine monitoring and a legacy CRM archive',
      'Set sync cadence per table from a measured change-rate analysis, from two-minute pulls on routings and labor to weekly on lookups',
      'Shipped the company intranet on Azure App Service: twelve department sites, global search across part numbers, drawings, jobs and SOPs, and an embedded AI assistant',
      'Built a production scheduling engine that sequences orders against machine and labor capacity for a 60-person shop floor',
      'Automated a hand-built daily report, recovering about 390 hours a year, and provisioned the Texas branch with Bicep and PowerShell',
    ],
  },
  {
    company: 'Rose Analytics & Development',
    url: 'https://rose-analytics.com',
    context: 'Independent consulting LLC',
    title: 'Senior Data & BI Consultant',
    period: 'May 2025 — Present',
    summary: 'Analytics and software consulting for SaaS, marketing and retail clients, from discovery through delivery.',
    points: [
      'Build Power BI semantic models, dashboards and forecasting, and run discovery end to end: BRDs, FRDs, UAT and sign-off',
      'Develop multi-source ETL across Salesforce, HubSpot, BigQuery, Google Sheets and Firebase, with reconciliation and data-quality controls',
      'Build full-stack tools (React/Next.js, Node.js, SQL) when a custom application fits better than a dashboard',
    ],
  },
  {
    company: 'Branded Group, Inc.',
    context: '$60M+ facilities services firm',
    title: 'Executive Business Analyst · BI & Analytics Lead',
    period: 'Feb 2017 — Nov 2024',
    summary: 'Seven years on the executive team, reporting to ownership. This is where I learned the domain PM + FOREMAN are built for.',
    points: [
      'Cut work-order cycle time from 18 days to 7 and time-to-invoice from 20 days to 2, and automated 24% of recurring work orders for $250K a year in savings',
      'Traced a long-running invoicing failure to a data-capture gap at the point of service, unlocking about $1M in stalled billing and recovering $2M within 15 days',
      'Hired and led a four-person analytics team, and built the vendor relations department from zero to six with an internal promotion to director',
      'Built an API extraction pipeline into GCP Cloud SQL and drove Power BI adoption to 140 users with row-level security by department',
      'Primary contact for an 11-engineer offshore team in Ukraine and India for two years, through requirements, UAT and rollout',
    ],
  },
  {
    company: 'FrontStreet Facility Solutions',
    context: 'Bohemia, NY',
    title: 'Business Analyst',
    period: 'Sep 2014 — Dec 2016',
    summary: 'Promoted through four roles in two years, from invoicing specialist to projects analyst. Recognized as Rookie of the Year.',
    points: [
      'Managed an 8-person AP/AR team across hiring, performance and training',
      'Built financial and operational reporting in Power BI and Excel, expanding from projects to company-wide analysis',
    ],
  },
];

export const credentials = [
  { title: 'Microsoft Certified: Power BI Data Analyst (PL-300)', org: 'Microsoft', year: '2026' },
  { title: 'Full Stack Web Development (MERN)', org: 'MIT xPRO', year: '2024' },
  { title: 'Low-Code Machine Learning & AI', org: 'MIT', year: '2023' },
  { title: 'B.S., Business Communications', org: 'East Carolina University', year: '2012' },
];

export const stack: { group: string; items: string[] }[] = [
  { group: 'BI & analytics', items: ['Power BI (DAX, Power Query)', 'Semantic & star-schema models', 'Row-level security', 'Tableau', 'Looker Studio', 'Advanced Excel'] },
  { group: 'Data & cloud', items: ['Advanced SQL', 'PostgreSQL', 'MySQL', 'BigQuery', 'Azure (App Service, Entra ID, Bicep)', 'GCP Cloud SQL', 'PowerShell'] },
  { group: 'AI & agents', items: ['Claude / Anthropic API', 'OpenAI', 'Vercel AI SDK', 'LangGraph', 'Agent evals & golden tests', 'Embedded assistants'] },
  { group: 'Software', items: ['TypeScript', 'React / Next.js', 'Node.js', 'Python', 'FastAPI', 'Drizzle / Prisma', 'Vercel'] },
  { group: 'Analysis & delivery', items: ['BRDs & FRDs', 'Process redesign', 'Root-cause analysis', 'UAT leadership', 'KPI governance', 'Offshore team management'] },
];
