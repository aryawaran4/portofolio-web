'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(eyebrowRef.current, { opacity: 0, y: 14, duration: 0.7, delay: 0.15 })
      .from(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { opacity: 0, y: 52, duration: 0.95, stagger: 0.1 },
        '-=0.35'
      )
      .from(subRef.current, { opacity: 0, y: 22, duration: 0.75 }, '-=0.45')
      .from(ctaRef.current, { opacity: 0, y: 16, duration: 0.65 }, '-=0.45')
      .from(scrollHintRef.current, { opacity: 0, duration: 0.6 }, '-=0.2');
  }, []);

  return (
    <section
      id="hero"
      className="circuit-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 88,
        paddingBottom: 80,
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Eyebrow */}
        <span
          ref={eyebrowRef}
          className="eyebrow"
          style={{ display: 'block', marginBottom: 36 }}
        >
          Frontend Engineer
        </span>

        {/* Main headline */}
        <h1
          style={{
            fontSize: 'clamp(52px, 6.8vw, 92px)',
            fontWeight: 500,
            lineHeight: 1.04,
            letterSpacing: '-0.025em',
            color: '#1a1a1a',
            marginBottom: 36,
            overflow: 'hidden',
          }}
        >
          <span ref={line1Ref} style={{ display: 'block' }}>
            Precision-built.
          </span>
          <span ref={line2Ref} style={{ display: 'block' }}>
            Pixel-perfect.
          </span>
          <span
            ref={line3Ref}
            style={{ display: 'block', color: '#c0392b' }}
          >
            Ship-ready.
          </span>
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          style={{
            fontSize: 17,
            fontWeight: 300,
            color: '#888',
            maxWidth: 500,
            lineHeight: 1.75,
            marginBottom: 44,
          }}
        >
          Almost 5 years translating UI/UX designs into clean,
          component-based frontends — across IoT, e-commerce, ERP, and
          government systems, with{' '}
          <span style={{ color: '#1a1a1a', fontWeight: 500 }}>React</span>,{' '}
          <span style={{ color: '#1a1a1a', fontWeight: 500 }}>Vue</span>, and{' '}
          <span style={{ color: '#1a1a1a', fontWeight: 500 }}>Angular</span>.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
        >
          <a href="#work" className="btn-primary">
            View Work →
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 300,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#bbb',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, #bbb, transparent)',
          }}
        />
      </div>
    </section>
  );
}
