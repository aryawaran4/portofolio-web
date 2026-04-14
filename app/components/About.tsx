'use client';

import { useEffect, useRef } from 'react';

const quickFacts = [
  { label: 'Based in', value: 'South Jakarta, Indonesia' },
  { label: 'Currently at', value: 'Open to opportunities' },
  { label: 'Education', value: 'B.Sc. Computer Science' },
  { label: 'Languages', value: 'English, Bahasa Indonesia' },
];

export default function About() {
  const labelRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const factsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    [labelRef.current, textRef.current, factsRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="section"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="container">
        {/* Eyebrow */}
        <span
          ref={labelRef}
          className="eyebrow reveal-slide"
          style={{ marginBottom: 48, display: 'block' }}
        >
          About
        </span>

        <div className="about-grid">
          {/* Left — summary */}
          <div ref={textRef} className="reveal-fade">
            <h2
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: '#1a1a1a',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                marginBottom: 24,
              }}
            >
              Engineer who ships things that{' '}
              <span style={{ color: '#c0392b' }}>actually work</span>.
            </h2>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: '#666',
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              With almost 5 years across IoT, POS, ERP, government, and
              e-commerce domains, I've learned that the best frontend work is
              invisible — it just works, loads fast, and gets out of the way of
              the user.
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: '#666',
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              My background spans full design-to-deployment cycles with{' '}
              <span style={{ color: '#1a1a1a', fontWeight: 500 }}>Angular</span>,{' '}
              <span style={{ color: '#1a1a1a', fontWeight: 500 }}>React</span>,
              and{' '}
              <span style={{ color: '#1a1a1a', fontWeight: 500 }}>Vue</span>,
              with deep experience in REST API integration, payment gateways,
              and performance optimization.
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: '#666',
                lineHeight: 1.8,
              }}
            >
              I collaborate closely with designers and backend engineers, and I
              believe clean component architecture and thoughtful SEO aren't
              optional — they're the baseline.
            </p>
          </div>

          {/* Right — quick facts */}
          <div ref={factsRef} className="reveal-fade" style={{ transitionDelay: '0.15s' }}>
            {/* Quick facts */}
            <div
              style={{
                background: '#f7f7f7',
                borderRadius: 13,
                border: '1px solid #e4e4e4',
                overflow: 'hidden',
                marginBottom: 28,
              }}
            >
              {quickFacts.map((fact, i) => (
                <div
                  key={fact.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 20px',
                    borderBottom:
                      i < quickFacts.length - 1 ? '1px solid #e4e4e4' : 'none',
                  }}
                >
                  <span
                    style={{ fontSize: 12, fontWeight: 300, color: '#aaa' }}
                  >
                    {fact.label}
                  </span>
                  <span
                    style={{ fontSize: 13, fontWeight: 500, color: '#1a1a1a' }}
                  >
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div
              style={{
                borderLeft: '3px solid #c0392b',
                paddingLeft: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#c0392b',
                  marginBottom: 4,
                }}
              >
                Recognition
              </p>
              {[
                'Best Team "Frontend" — IDEKU 2024',
                '1st Best Performance Agent, KPI Apr 2023 — Transcosmos',
                '2nd Best Performance Agent, KPI Dec 2022 — Transcosmos',
              ].map((award) => (
                <p
                  key={award}
                  style={{ fontSize: 13, fontWeight: 300, color: '#555', lineHeight: 1.5 }}
                >
                  {award}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
