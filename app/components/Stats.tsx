'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  { value: 5, suffix: '+', label: 'Years', sub: 'of production frontend experience' },
  { value: 3, suffix: '', label: 'Frameworks', sub: 'React, Vue, Angular — all production-grade' },
  { value: 10, suffix: '+', label: 'Integrations', sub: 'payment gateways & third-party APIs' },
  { value: 400, suffix: '+', label: 'Pages', sub: 'optimized across SEO projects' },
];

function useCountUp(target: number, duration = 1200, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, active]);

  return count;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 1000, active);

  return (
    <div
      style={{
        flex: '1 1 0',
        minWidth: 160,
        padding: '0 16px',
        borderLeft: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(40px, 4vw, 60px)',
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: '#fff',
          marginBottom: 8,
        }}
      >
        {count}
        <span style={{ color: '#c0392b', fontSize: '0.7em' }}>{stat.suffix}</span>
      </div>
      <div
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: '#fff',
          marginBottom: 4,
        }}
      >
        {stat.label}
      </div>
      <div
        style={{
          fontSize: 12,
          fontWeight: 300,
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.5,
          maxWidth: 160,
        }}
      >
        {stat.sub}
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#111',
        borderTop: '3px solid #c0392b',
        padding: '72px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Circuit overlay on dark bg */}
      <div
        className="circuit-bg"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          pointerEvents: 'none',
        }}
        aria-hidden
      />

      <div className="container" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0,
          }}
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
