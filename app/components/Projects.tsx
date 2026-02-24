"use client";

import type { ProjectsContent } from "@/app/types/content";

type ProjectsProps = {
  content: ProjectsContent;
};

export default function Projects({ content }: ProjectsProps) {
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="typ-caption text-gray-400 uppercase tracking-wider" data-aos="fade-up">{content.title}</p>
            <h2 className="typ-h2 font-bold text-theme mt-2 tracking-tight" data-aos="fade-up" data-aos-delay="50">
              Selected Projects
            </h2>
          </div>
          <p className="typ-p text-theme-muted max-w-xl" data-aos="fade-up" data-aos-delay="100">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {content.items.map((project, idx) => (
            <article
              key={project.id}
              className="group backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6 md:p-8 hover:border-white/30 transition"
              data-aos="fade-up"
              data-aos-delay={`${150 * (idx + 1)}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-lg grow-0 shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <p className="typ-caption text-gray-400 uppercase tracking-wider">Project</p>
                  <h3 className="typ-h3 font-semibold text-theme">{project.title}</h3>
                </div>
              </div>

              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="typ-p leading-relaxed text-theme-muted flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white/50 grow-0 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <p className="typ-caption text-gray-400 uppercase tracking-wider mb-2">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(",").map((tag) => (
                    <span key={tag} className="typ-caption text-xs bg-white/6 px-3 py-1 rounded-full text-gray-200 grow-0 shrink-0">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
