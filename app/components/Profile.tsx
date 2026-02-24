"use client";

import type { AboutContent, ProfileContent } from "@/app/types/content";

type ProfileProps = {
  content: ProfileContent;
  about?: AboutContent;
};

export default function Profile({ content, about }: ProfileProps) {
  const experience = content.experience.filter((item) => item?.title && item?.company);
  const skills = content.skills.filter((item) => item?.category && item?.items);
  const education = content.education.filter((item) => item?.degree && item?.institution);
  const story = about?.story?.filter(Boolean) ?? [];

  return (
    <section id="profile" className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {about ? (
          <header className="mb-8" data-aos="fade-up">
            <p className="typ-caption text-gray-400 uppercase tracking-wider">{about.title}</p>
            <h2 className="typ-h2 font-bold text-theme mt-2">{about.subtitle}</h2>
          </header>
        ) : null}

        {story.length > 0 ? (
          <div className="mt-8 backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6 md:p-8" data-aos="fade-up" data-aos-delay="100">
            <h3 className="typ-h3 font-semibold text-theme mb-4">Story</h3>
            <div className="space-y-4">
              {story.map((paragraph, idx) => (
                <p key={idx} className="typ-p text-theme-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6" data-aos="fade-up">
              <h3 className="typ-h3 font-semibold text-theme mb-4">Experience</h3>
              <div className="space-y-6">
                {experience.map((item) => (
                  <div key={`${item.company}-${item.title}`} className="space-y-3 border-l border-white/10 pl-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="typ-p text-white font-semibold">{item.title}</p>
                        <p className="typ-caption text-theme-muted">{item.company}</p>
                      </div>
                      <span className="typ-caption text-gray-400">{item.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="typ-p text-theme-muted flex gap-2">
                          <span className="mt-2 h-2 w-2 rounded-full bg-white/50 grow-0 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {education.length > 0 && (
              <div className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="typ-h3 font-semibold text-theme mb-4">Education</h3>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={`${item.institution}-${item.degree}`}>
                      <p className="typ-p text-white font-semibold">{item.degree}</p>
                      <p className="typ-caption text-theme-muted">{item.institution}</p>
                      <p className="typ-caption text-gray-400">{item.period}</p>
                      <p className="typ-p text-theme-muted mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {skills.length > 0 && (
              <div className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6" data-aos="fade-up" data-aos-delay="150">
                <h3 className="typ-h3 font-semibold text-theme mb-4">Skills</h3>
                <div className="space-y-4">
                  {skills.map((item) => (
                    <div key={item.category}>
                      <p className="typ-caption text-gray-400 uppercase tracking-wider">{item.category}</p>
                      {Array.isArray(item.items) ? (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.items.map((skill) => (
                            <span key={skill} className="typ-caption text-xs bg-white/6 px-3 py-1 rounded-full text-gray-200 grow-0 shrink-0">
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="typ-p text-theme-muted mt-2">{item.items}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.awards.length > 0 && (
              <div className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="typ-h3 font-semibold text-theme mb-4">Awards</h3>
                <ul className="space-y-2">
                  {content.awards.map((award) => (
                    <li key={award} className="typ-p text-theme-muted flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/50 grow-0 shrink-0" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.languages.length > 0 && (
              <div className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6" data-aos="fade-up" data-aos-delay="250">
                <h3 className="typ-h3 font-semibold text-theme mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {content.languages.map((language) => (
                    <span key={language} className="typ-caption text-xs bg-white/6 px-3 py-1 rounded-full text-gray-200 grow-0 shrink-0">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
