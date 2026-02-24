"use client";

import type { AboutContent } from "@/app/types/content";

type AboutProps = {
  content: AboutContent;
};

export default function About({ content }: AboutProps) {

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center" data-aos="fade-up">
          <p className="typ-caption text-gray-400 uppercase tracking-wider">{content.title}</p>
          <h2 className="typ-h2 font-bold text-theme mt-2">{content.subtitle}</h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6" data-aos="fade-up" data-aos-delay="100">
            <div className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6">
              <h3 className="typ-h3 text-white font-semibold mb-3">Story</h3>
              <div className="space-y-4">
                {content.story.map((paragraph, idx) => (
                  <p key={idx} className="typ-p text-theme-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6">
              <h3 className="typ-h3 text-white font-semibold mb-3">Philosophy</h3>
              <p className="typ-p text-theme-muted leading-relaxed font-medium">{content.philosophy}</p>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <div className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6">
              <h4 className="typ-h4 text-sm text-gray-400 uppercase tracking-wider mb-4">{content.badgeTitle}</h4>
              <div className="space-y-4">
                {content.skills.map((group) => (
                  <div key={group.category}>
                    <p className="typ-caption text-gray-400 uppercase tracking-wider">{group.category}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill} className="typ-caption text-xs bg-white/6 px-3 py-1 rounded-full text-gray-200 grow-0 shrink-0">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6">
              <h4 className="typ-h4 text-sm text-gray-400 uppercase tracking-wider mb-4">{content.competencyTitle}</h4>
              <div className="flex flex-wrap gap-2">
                {content.competencies.map((c) => (
                  <span key={c} className="typ-caption text-xs bg-white/6 px-3 py-1 rounded-full text-gray-200 grow-0 shrink-0">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="300">
          {content.quotes.map((quote) => (
            <blockquote key={quote} className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6 italic text-gray-300">
              “{quote}”
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
