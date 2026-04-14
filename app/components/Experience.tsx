'use client';

import { useEffect, useRef } from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Frontend Engineer',
    company: 'IDEKU',
    period: 'Jun 2024 — Nov 2025',
    bullets: [
      'Built a custom food ordering system for a Singapore luxury hotel — Angular, TypeScript, Tailwind, integrated with a legacy backend.',
      'Integrated Stripe, GrabFood, Doku, UOB, AXS, GDC, and KPay; improved pricing accuracy and transaction reliability.',
      'Raised landing page health score from 25% to 99% via rendering optimization, structural fixes, and loading strategy.',
      'Increased Google indexed pages from ~70 to ~170 across ~400 pages through sitemap and site structure improvements.',
      'Implemented GA4, GTM, Meta Pixel, Google Ads tracking, Hotjar, and Zoho CRM for digital marketing initiatives.',
    ],
    tags: ['Angular', 'React', 'TypeScript', 'Tailwind', 'Stripe', 'SEO'],
  },
  {
    role: 'Frontend Developer',
    company: 'Transcosmos Indonesia',
    period: 'Nov 2022 — May 2024',
    bullets: [
      'Developed and maintained Japanese-language web pages and e-commerce content using Adobe Experience Manager and Mayaa JS.',
      'Built responsive, production-ready company profile platforms using Vue, React, HTML, CSS, and JavaScript.',
      'Led frontend implementation: layout slicing, responsive design, and cross-browser compatibility across real estate, travel, and retail industries.',
      'Conducted detailed QA for high-volume websites (200+ pages), ensuring layout consistency and production stability.',
      'Acted as PIC for Japanese stakeholders; built internal automation tools with Node.js to reduce manual workloads.',
    ],
    tags: ['Vue', 'React', 'AEM', 'Mayaa JS', 'Node.js', 'SEO'],
  },
  {
    role: 'Frontend Developer',
    company: 'Xtend Integrasi Indonesia',
    period: 'Sep 2021 — Oct 2022',
    bullets: [
      'Developed multiple web applications from design to deployment using Angular, Vue, React, Tailwind CSS, and Figma.',
      'Led frontend for ERP systems, attendance systems, and public service dashboards for government sector clients.',
      'Designed scalable component architecture emphasizing maintainability and reusability.',
      'Translated Figma UI/UX designs into production-ready code; collaborated closely with backend teams to refine API contracts.',
    ],
    tags: ['Angular', 'Vue', 'React', 'Tailwind', 'Figma', 'Government'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    const targets = sectionRef.current?.querySelectorAll(
      '.reveal-fade, .reveal-slide'
    );
    targets?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="section"
      ref={sectionRef}
      style={{ backgroundColor: '#f7f7f7' }}
    >
      <div className="container">
        <span
          className="eyebrow reveal-slide"
          style={{ display: 'block', marginBottom: 56 }}
        >
          Experience
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="reveal-fade exp-row"
              style={{
                paddingBottom: i < experiences.length - 1 ? 52 : 0,
                marginBottom: i < experiences.length - 1 ? 52 : 0,
                borderBottom:
                  i < experiences.length - 1 ? '1px solid #e4e4e4' : 'none',
              }}
            >
              {/* Left — meta */}
              <div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 300,
                    color: '#aaa',
                    marginBottom: 6,
                    lineHeight: 1.5,
                  }}
                >
                  {exp.period}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#c0392b',
                    letterSpacing: '0.02em',
                  }}
                >
                  {exp.company}
                </p>
              </div>

              {/* Right — content */}
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    color: '#1a1a1a',
                    letterSpacing: '-0.01em',
                    marginBottom: 16,
                  }}
                >
                  {exp.role}
                </h3>

                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    marginBottom: 20,
                  }}
                >
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      style={{
                        fontSize: 14,
                        fontWeight: 300,
                        color: '#555',
                        lineHeight: 1.7,
                        paddingLeft: 16,
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.6em',
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          backgroundColor: '#c0392b',
                          opacity: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        fontWeight: 300,
                        color: '#888',
                        padding: '3px 9px',
                        border: '1px solid #ddd',
                        borderRadius: 3,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
