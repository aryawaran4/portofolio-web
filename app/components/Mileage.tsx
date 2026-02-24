"use client";

import type { MileageContent } from "@/app/types/content";

type MileageProps = {
  content: MileageContent;
};

export default function Mileage({ content }: MileageProps) {

  return (
    <section id="mileage" className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12" data-aos="fade-up">
          <p className="typ-caption text-gray-400 uppercase tracking-wider">{content.title}</p>
          <h2 className="typ-h2 font-bold mb-3 text-white mt-2">Execution Mileage</h2>
          <p className="typ-p text-theme-muted max-w-4xl">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.categories.map((category, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 group"
              data-aos="fade-up"
              data-aos-delay={`${100 * (idx + 1)}`}>
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <div className="flex-1">
                  <h3 className="typ-h3 text-white font-semibold mb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="typ-p text-theme-muted leading-relaxed flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-white/50 grow-0 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
