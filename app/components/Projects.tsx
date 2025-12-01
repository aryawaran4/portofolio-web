"use client";

interface Project {
  id: number;
  title: string;
  highlights: string[];
  stack: string;
  description?: string;
  tags?: string[];
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Angular–WordPress Hybrid Optimization (IDEKU)",
    highlights: [
      "Transformed a slow, fragmented codebase into a highly optimized hybrid system.",
      "Improved Google indexing 70 → 170 pages",
      "Increased landing page health score 25% → 99%",
      "Implemented SEO fixes, sitemap restructuring, performance tuning",
    ],
    stack: "Angular, TypeScript, Tailwind, WordPress, SEO Tools, GA4, GTM",
  },
  {
    id: 2,
    title: "Food Ordering Platform (IDEKU)",
    highlights: [
      "Designed and built a fully custom ordering system integrated with legacy backend architecture.",
      "Implemented seamless payment integrations (Stripe, GrabFood, KPay, Doku, UOB, AXS, GDC)",
      "Solved critical backend pricing logic issues",
      "Fully responsive UI with optimized performance",
      "Built reusable atomic components to scale development across products",
    ],
    stack: "Angular, TypeScript",
  },
  {
    id: 3,
    title: "Japanese Market Websites & AEM Ecosystem (Transcosmos Indonesia)",
    highlights: [
      "Created and maintained Japanese-language e-commerce and landing pages.",
      "Developed using Adobe Experience Manager & Mayaa JS",
      "Built internal automation tools to reduce manual workload",
      "Acted as PIC for Japanese clients, ensuring accurate delivery",
    ],
    stack: "HTML/CSS/JS, AEM, Mayaa JS, Node.js Automation",
  },
  {
    id: 4,
    title: "Government & Enterprise Systems (Xtend Integrasi)",
    highlights: [
      "Led frontend development for ERP systems, attendance & employee systems, and public service dashboards",
      "Delivered clean component architecture, UI/UX support, and smooth backend integration.",
    ],
    stack: "Angular, Vue.js, Tailwind, Figma",
  },
  {
    id: 5,
    title: "Military Company Landing Page (Freelance)",
    highlights: [
      "Designed and built a high-impact landing page from scratch, combining strategic UX with brand storytelling.",
      "Implemented comprehensive SEO infrastructure: technical SEO, schema markup, and performance optimization to secure top search rankings.",
      "Achieved fast page load times and Core Web Vitals compliance to improve search visibility and user engagement.",
      "Structured content hierarchy and internal linking strategy to improve indexing and organic traffic.",
    ],
    stack: "React, TypeScript, Tailwind, Next.js, SEO Tools, Core Web Vitals",
  },
  {
    id: 6,
    title: "Interior Design Studio Site + AI Blog Automation (Freelance)",
    highlights: [
      "Built a full-featured portfolio website from design to development, showcasing interior design projects and services.",
      "Implemented technical SEO best practices and optimized for search visibility across competitive keywords.",
      "Integrated AI-powered automatic blog generation to enable the studio to publish fresh content daily, improving search rankings and lead generation.",
      "Set up content automation pipeline so the company can maintain a consistent publishing schedule without manual effort, scaling organic reach.",
    ],
    stack: "React, TypeScript, Tailwind, Next.js, OpenAI API, SEO Tools, Content Automation",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen theme-bg py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="typ-h2 font-bold text-theme mb-4 tracking-tight" data-aos="fade-up">Projects</h2>
        <p className="typ-p text-theme-muted mb-12 max-w-3xl" data-aos="fade-up" data-aos-delay="100">Selected projects with measurable outcomes and the stacks used.</p>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <article key={project.id} className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6 md:p-8" data-aos="fade-up" data-aos-delay={`${150 * (idx + 1)}`}>
              <div className="flex items-start gap-6">
                <div className="flex-none">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-lg">{idx + 1}</div>
                </div>

                <div className="flex-1">
                  <h3 className="typ-h3 font-semibold text-theme">{project.title}</h3>
                  <div className="mt-3 text-theme-muted space-y-2">
                    {project.highlights.map((h, i) => (
                      <p key={i} className="typ-p leading-relaxed text-theme-muted">
                        - {h}
                      </p>
                    ))}
                  </div>

                  <div className="mt-4 typ-caption text-theme-muted">
                    <span className="font-semibold">Stack:</span> {project.stack}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
