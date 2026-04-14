'use client';

import { useEffect, useRef, useState } from 'react';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  highlight: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Hotel Food Ordering System',
    category: 'Food Tech',
    description:
      'Custom food ordering platform built for a Singapore luxury hotel. Full integration with a legacy backend system, real-time menu management, and multi-gateway payment flow.',
    stack: ['Angular', 'TypeScript', 'Tailwind', 'Stripe', 'GrabFood', 'KPay'],
    highlight: 'Singapore luxury hotel · Production',
  },
  {
    number: '02',
    title: 'Landing Page & SEO Overhaul',
    category: 'Performance',
    description:
      'End-to-end frontend performance and SEO optimization across a multi-product suite — rendering strategy, Core Web Vitals, structured data, and marketing analytics wiring.',
    stack: ['React', 'Next.js', 'GA4', 'GTM', 'Meta Pixel', 'Hotjar'],
    highlight: '25% → 99% health score · 70 → 170 indexed pages',
  },
  {
    number: '03',
    title: 'ERP & Attendance Platform',
    category: 'Enterprise',
    description:
      'Led frontend for internal ERP and attendance management systems for government sector clients — scalable component architecture, Figma-to-code translation, and API integration.',
    stack: ['Angular', 'Vue', 'React', 'Tailwind', 'REST API', 'Figma'],
    highlight: 'Government sector · Enterprise scale',
  },
  {
    number: '04',
    title: 'Japanese Corporate Web Suite',
    category: 'Web',
    description:
      'Maintained and extended a large-scale Japanese e-commerce and corporate web presence — 200+ pages across real estate, travel, and retail industries with strict QA and stakeholder management.',
    stack: ['Vue', 'React', 'AEM', 'Mayaa JS', 'Node.js'],
    highlight: '200+ pages · Multi-industry',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="card reveal-fade"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${index * 0.1}s`,
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      {/* Dark thumbnail */}
      <div
        className="circuit-bg"
        style={{
          width: 260,
          minHeight: 200,
          backgroundColor: '#0d0d0d',
          flexShrink: 0,
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 20,
          backgroundBlendMode: 'normal',
          opacity: hovered ? 1 : 0.92,
          transition: 'opacity 0.3s ease',
        }}
      >
        {/* Ghost project number */}
        <span
          style={{
            position: 'absolute',
            bottom: -10,
            right: 8,
            fontSize: 120,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.03)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          {project.number}
        </span>

        {/* Category pill */}
        <span className="cat-pill">{project.category}</span>
      </div>

      {/* Info panel */}
      <div
        style={{
          flex: 1,
          padding: '28px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 300,
              color: '#aaa',
              letterSpacing: '0.08em',
              marginBottom: 10,
            }}
          >
            {project.highlight}
          </p>
          <h3
            style={{
              fontSize: 19,
              fontWeight: 500,
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
              marginBottom: 12,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: '#666',
              lineHeight: 1.75,
              marginBottom: 20,
              maxWidth: 480,
            }}
          >
            {project.description}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {project.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: 11,
                  fontWeight: 300,
                  color: '#888',
                  padding: '3px 8px',
                  border: '1px solid #ddd',
                  borderRadius: 3,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <span
            style={{
              fontSize: 18,
              color: hovered ? '#c0392b' : '#ccc',
              transition: 'color 0.2s ease, transform 0.2s ease',
              transform: hovered ? 'translateX(4px)' : 'translateX(0)',
              display: 'inline-block',
              marginLeft: 16,
              flexShrink: 0,
            }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.2 }
    );
    if (labelRef.current) observer.observe(labelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      className="section"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="container">
        <span
          ref={labelRef}
          className="eyebrow reveal-slide"
          style={{ display: 'block', marginBottom: 56 }}
        >
          Selected Work
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
