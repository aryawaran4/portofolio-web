"use client";

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['Angular', 'Vue', 'React', 'TypeScript', 'JavaScript'] },
    { category: 'Styling & Design', items: ['TailwindCSS', 'HTML/CSS', 'Figma', 'UI/UX'] },
    { category: 'Performance & Backend', items: ['SEO Optimization', 'Web Performance', 'Node.js (automation & integrations)'] },
    { category: 'Enterprise Platforms', items: ['AEM', 'Mayaa JS'] },
  ];

  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center" data-aos="fade-up">
          <h2 className="typ-h2 font-bold text-theme">About</h2>
          <p className="typ-p text-theme-muted mt-2">A concise summary of my approach, values, and skills.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Story */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <p className="typ-p text-theme-muted leading-relaxed">
              I build frontends that treat performance and clarity as core features. Over the past several years I’ve delivered production systems across IoT, POS, e‑commerce, hospitality, enterprise, and government, improving search visibility, stabilizing critical flows, and raising product reliability. My work spans hybrid Angular–WordPress platforms, food ordering systems, and ERP dashboards. I focus on measurable outcomes and durable solutions.
            </p>

            <p className="typ-p text-theme-muted leading-relaxed">
              I prefer pragmatic, long-term solutions: clean architecture, observable systems, and repeatable processes. Cross-cultural client work (including Japanese-market projects) taught me to prioritize clarity in communication and delivery. I take ownership of the product surface, from accessible markup to integrations and monitoring, so teams can move faster with confidence.
            </p>

            <p className="typ-p text-theme-muted leading-relaxed font-medium">
              Engineering Philosophy: I optimize for performance, maintainability, and clear developer ergonomics. I focus on small, testable components, well-defined contracts, and incremental performance wins that compound over time.
            </p>
          </div>

          {/* Right: Skills & Tools as bubbles */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="typ-h4 text-sm text-gray-400 uppercase tracking-wider mb-4">Skills & Tools</h4>

            <div className="flex flex-wrap gap-2 mb-6">
              {skills.flatMap((s) => s.items).map((skill) => (
                <span key={skill} className="typ-caption text-xs bg-white/6 px-3 py-1 rounded-full text-gray-200">{skill}</span>
              ))}
            </div>

            <h4 className="typ-h4 text-sm text-gray-400 uppercase tracking-wider mb-4">Competency</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'SEO Optimization',
                'Web Performance',
                'System Integrations',
                'Monitoring & Observability',
                'Accessibility',
              ].map((c) => (
                <span key={c} className="typ-caption text-xs bg-white/6 px-3 py-1 rounded-full text-gray-200">{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Quotes below the section */}
        <div className="mt-12 max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="300">
          <blockquote className="italic text-gray-300">“I define success by how well you can keep going and not complaining about everything.”</blockquote>
          <blockquote className="italic text-gray-300 mt-4">“Ownership means taking responsibility for what you work with, and continuously improving it.”</blockquote>
        </div>
      </div>
    </section>
  );
}
