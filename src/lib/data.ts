export const personalInfo = {
  name: "Arya Waranggana Susilo",
  role: "Frontend Engineer",
  tagline: "Building scalable frontends across POS, IoT, ERP, and e-commerce for 5 years",
  location: "South Jakarta, Jakarta",
  email: "aryawaranggana.susilo@gmail.com",
  phone: "+62 853 7272 7292",
  portfolio: "https://aryawaran4.github.io/portofolio-web",
  github: "https://github.com/aryawaran4",
  linkedin: "https://www.linkedin.com/in/aryawarangganasusilo",
  summary:
    "Frontend Engineer with almost 5 years of experience across IoT, POS, ERP, government, and e-commerce domains using React, Vue, and Angular — translating UI/UX designs into clean, reusable, and scalable component-based architectures with deep experience integrating REST APIs, payment gateways, and legacy backend systems.",
};

export const experiences = [
  {
    title: "Frontend Engineer",
    company: "IDEKU",
    location: "Jakarta, Indonesia",
    period: "Jun 2024 – Nov 2025",
    duration: "17 months",
    color: "#22C55E",
    highlights: [
      "Architected frontends across 4 product lines — Ideku Portal, Idefood, Restaurant QR, Landing Page — using Angular & React, supporting a 7-person frontend team within a 50+ person org over 17 months",
      "Integrated 7 payment gateways (Stripe, UOB, AXS, NETS, GDC, DOKU, KPay), enabling transactions for 100+ merchants across Singapore, Indonesia, and Taiwan",
      "Elevated Core Web Vitals scores from 20–40 to 60–90 and landing page health score from 25% to 99% via SSR and lazy loading strategies",
      "Grew Google-indexed pages from ~70 to ~170 across ~400 pages within 3 months using GTM, GA4, Meta Pixel, and structured SEO optimization",
      "Led a full landing page revamp with region-aware CMS supporting 4 languages (EN, ID, ZH-TW, ZH-CN) within 3 months",
      "Designed a 6-layer RBAC system (Admin, Super Admin, Owner, User, Customer, custom roles) securing access for hundreds of merchant users across 3 markets",
      "Led daily code reviews averaging ~10 PRs across 4 product lines over 17 months, maintaining quality across a 7-person team",
    ],
    stack: ["Angular", "React", "NgRx", "Redux", "TypeScript", "Jest", "SSR"],
  },
  {
    title: "Frontend Developer",
    company: "Transcosmos Indonesia",
    location: "Jakarta, Indonesia",
    period: "Nov 2022 – May 2024",
    duration: "18 months",
    color: "#3B82F6",
    highlights: [
      "Delivered production frontends for 9 Japanese enterprise clients — ANA, Nissen JP, SMBC, MUFG, and more — using Vue, React, and Angular within a 12-person team",
      "Maintained ANA (All Nippon Airways) platform over 2 years including a custom vanilla JS interactive route map with no external libraries, serving millions of monthly users",
      "Built product listing, pricing, and promo features for Nissen JP — a large-scale fashion e-commerce platform with thousands of SKUs — over 6 months",
      "Solely delivered 8 enterprise projects end-to-end — Japan Tobacco, SMBC, MUFG, Panasonic, Kansai Electric, Aburayama, Ishiguro, and corporate landing page — within 1-month cycles each",
      "Built Node.js tooling that saved ~30 min/developer/week across 8 devs, reducing ANA release risk",
      "Served as PIC for 3 Japanese client accounts, managing cross-language technical communication",
    ],
    stack: ["Vue", "React", "Angular", "Node.js", "JavaScript", "GitLab CI/CD"],
  },
  {
    title: "Frontend Developer",
    company: "Xtend Integrasi Indonesia",
    location: "Jakarta, Indonesia",
    period: "Sep 2021 – Oct 2022",
    duration: "13 months",
    color: "#A855F7",
    highlights: [
      "Designed and delivered 6 production systems over 13 months spanning government, IoT, ERP, and hospitality using Angular, Vue, React, and Tailwind CSS",
      "Solely built IoT Tirtanadi from scratch in 6 months — real-time dashboard for a water utility managing hundreds of sensors with 3-tier role system (Operator, Admin, Super Admin)",
      "Solely delivered North Sumatra Government Staff Management System in 1 month, managing hundreds of ASN records across fewer than 10 administrative modules",
      "Solely built SIBADA government archive system in 2 months, and TULO task management platform (designed in 1 day, built in 1 month)",
      "Developed TSF hospitality IoT dashboard managing hundreds of hotel rooms over 12 months alongside a development team",
    ],
    stack: ["Angular", "Vue", "React", "Tailwind CSS", "Figma"],
  },
];

export const projects = [
  {
    title: "Ideku Portal",
    description:
      "Multi-market POS platform with 7 integrated payment gateways (Stripe, UOB, AXS, NETS, GDC, DOKU, KPay) serving 100+ merchants across Singapore, Indonesia, and Taiwan.",
    stack: ["Angular", "NgRx", "TypeScript", "Stripe", "REST API"],
    type: "POS / Fintech",
    year: "2024–2025",
    highlight: "100+ merchants · 3 countries",
  },
  {
    title: "Landing Page + SEO",
    description:
      "Company landing page revamp with region-aware CMS in 4 languages (EN, ID, ZH-TW, ZH-CN). Grew Google-indexed pages from ~70 to ~170 across ~400 pages. Health score 25% → 99%.",
    stack: ["Angular", "SSR", "GTM", "GA4", "SEO", "Meta Pixel"],
    type: "Marketing / SEO",
    year: "2024",
    highlight: "25% → 99% health score",
  },
  {
    title: "IoT Tirtanadi",
    description:
      "Real-time monitoring dashboard and management portal for a regional water utility. Manages hundreds of sensor devices with a 3-tier role system (Operator, Admin, Super Admin).",
    stack: ["Angular", "TypeScript", "Tailwind CSS", "REST API"],
    type: "IoT / Government",
    year: "2022",
    highlight: "Solo · 6 months",
  },
  {
    title: "ANA Flight Platform",
    description:
      "Maintained All Nippon Airways' flight booking and campaign platform over 2 years. Built a custom interactive route map in vanilla JavaScript — no external animation libraries.",
    stack: ["Vue", "JavaScript", "Vanilla JS", "CSS Animation"],
    type: "Aviation / E-commerce",
    year: "2022–2024",
    highlight: "Millions of monthly users",
  },
  {
    title: "North Sumatra Gov System",
    description:
      "Government staff management system managing hundreds of ASN personnel records across fewer than 10 administrative modules. Built solo from scratch to production in 1 month.",
    stack: ["Angular", "Tailwind CSS", "REST API", "Figma"],
    type: "Government",
    year: "2022",
    highlight: "Solo · 1 month",
  },
  {
    title: "TULO Task Management",
    description:
      "Internal Trello-like task management platform designed in 1 day and built in 1 month. Full product ownership from system architecture through UX design to production.",
    stack: ["Angular", "Tailwind CSS", "Figma"],
    type: "Productivity",
    year: "2022",
    highlight: "Designed + built solo",
  },
];

export const skills: Record<string, string[]> = {
  "Frameworks & Libraries": ["Angular", "React", "Vue", "Next.js"],
  "Languages": ["TypeScript", "JavaScript", "HTML", "CSS / SCSS"],
  "Styling": ["Tailwind CSS", "Component-Based Architecture"],
  "State Management": ["NgRx", "Redux", "Context API"],
  "Backend / Server": ["Node.js", "SSR / SSG", "REST API Integration"],
  "Tools & Platforms": ["Figma", "Git", "GitHub", "GitLab", "Jest"],
  "Analytics & Marketing": ["GTM", "GA4", "Google Ads", "Hotjar", "Meta Pixel", "Zoho CRM"],
  "Practices": ["SEO / Core Web Vitals", "CI/CD", "Code Review", "Agile / Scrum"],
};

export const stats = [
  { label: "Years Experience", value: "~5" },
  { label: "Companies", value: "3" },
  { label: "Projects Delivered", value: "13+" },
  { label: "Countries Served", value: "3" },
];

export const awards = [
  {
    title: "Best Team Frontend",
    org: "IDEKU",
    year: "2024",
    detail: "Out of 8 competing teams · KPI-based evaluation",
  },
  {
    title: "1st Best Performance Agent",
    org: "Transcosmos Indonesia",
    year: "Apr 2023",
    detail: "Out of dozens of agents · task volume + zero trouble reports",
  },
  {
    title: "2nd Best Performance Agent",
    org: "Transcosmos Indonesia",
    year: "Dec 2022",
    detail: "Within first 2 months of joining",
  },
];
