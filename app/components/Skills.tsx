'use client';

import { useEffect, useRef } from 'react';

interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frameworks',
    skills: ['React', 'Vue.js', 'Angular', 'Next.js'],
  },
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Styling',
    skills: ['Tailwind CSS', 'SCSS/Sass', 'CSS Modules', 'Styled Components'],
  },
  {
    category: 'Tooling',
    skills: ['Figma', 'Git', 'Webpack', 'Vite', 'Node.js'],
  },
  {
    category: 'Analytics & Marketing',
    skills: ['GA4', 'GTM', 'Meta Pixel', 'Google Ads', 'Hotjar', 'Zoho CRM'],
  },
  {
    category: 'Integrations',
    skills: ['Stripe', 'GrabFood', 'Doku', 'REST APIs', 'AEM', 'Mayaa JS'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const targets = sectionRef.current?.querySelectorAll(
      '.reveal-fade, .reveal-slide'
    );
    targets?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.06}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="section"
      ref={sectionRef}
      style={{ backgroundColor: '#f7f7f7' }}
    >
      <div className="container">
        <span
          className="eyebrow reveal-slide"
          style={{ display: 'block', marginBottom: 56 }}
        >
          Skills
        </span>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.category} className="reveal-fade">
              {/* Category label */}
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#aaa',
                  marginBottom: 14,
                }}
              >
                {group.category}
              </p>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: 13,
                      fontWeight: 300,
                      color: '#444',
                      padding: '6px 12px',
                      background: '#fff',
                      border: '1px solid #e4e4e4',
                      borderRadius: 4,
                      transition: 'border-color 0.18s ease, color 0.18s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#c0392b';
                      e.currentTarget.style.color = '#c0392b';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e4e4e4';
                      e.currentTarget.style.color = '#444';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education strip */}
        <div
          className="reveal-fade"
          style={{
            marginTop: 56,
            padding: '28px 32px',
            background: '#fff',
            border: '1px solid #e4e4e4',
            borderRadius: 13,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div
              style={{
                width: 3,
                height: 40,
                backgroundColor: '#c0392b',
                flexShrink: 0,
                borderRadius: 2,
              }}
            />
            <div>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#1a1a1a', marginBottom: 3 }}>
                Bachelor of Computer Science
              </p>
              <p style={{ fontSize: 13, fontWeight: 300, color: '#888' }}>
                University of North Sumatera · Sep 2018 – Jul 2022
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: 13,
              fontWeight: 300,
              color: '#aaa',
              maxWidth: 360,
              lineHeight: 1.5,
              textAlign: 'right',
            }}
          >
            Thesis: MOORA Implementation of Decision Support System in Determining the Best
            Performance Team in Basketball
          </p>
        </div>
      </div>
    </section>
  );
}
