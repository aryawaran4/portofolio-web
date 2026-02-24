"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import type { HeroContent } from "@/app/types/content";

type HeroProps = {
  content: HeroContent;
};

export default function Hero({ content }: HeroProps) {
  const [stars, setStars] = useState<{
    id: number;
    left: number;
    top: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
  }[]>([]);

  const [experienceText, setExperienceText] = useState<string>("");

  const experienceStartDate = useMemo(() => {
    if (!content.experienceStart) {
      return null;
    }

    const parsed = new Date(content.experienceStart);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }, [content.experienceStart]);

  useEffect(() => {
    // generate stars only on the client after mount to avoid SSR/client mismatch
    const generateStars = () => {
      return Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.7 + 0.3,
      }));
    };

    setStars(generateStars());

    // compute experience text on the client only
    if (!experienceStartDate) {
      setExperienceText("");
      return;
    }

    const currentDate = new Date();
    let years = currentDate.getFullYear() - experienceStartDate.getFullYear();
    let months = currentDate.getMonth() - experienceStartDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    setExperienceText(months > 0 ? `${years}+ years` : `${years} years`);
  }, [experienceStartDate]);

  const handleAnchorClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href") ?? "";
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", href);
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Space Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-indigo-900 to-slate-800"></div>

      {/* Stars (rendered only after mount) */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}></div>
      ))}

      {/* Content */}
      <div className="max-w-6xl mx-auto text-left relative z-10 w-full">
        <div className="backdrop-blur-xl bg-white/6 rounded-3xl border border-white/10 p-6 md:p-10 w-full">
          <h1 className="typ-h1 font-bold text-white mb-2 tracking-tight drop-shadow-lg" data-aos="fade-up">
            {content.name}
          </h1>

          {/* Role */}
          <p
            className="typ-subtitle bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold mb-4 drop-shadow-lg"
            data-aos="fade-up">
            {content.role}
          </p>

          {/* Value statement (1-2 short sentences) */}
          {experienceText ? (
            <p className="typ-p font-medium text-theme-muted mb-4" data-aos="fade-up">
              <span className="font-semibold">{experienceText}</span> {content.experienceLabel || "experience"}. {content.valueStatement}
            </p>
          ) : (
            <p className="typ-p font-medium text-theme-muted mb-4" data-aos="fade-up">
              {content.valueStatement}
            </p>
          )}

          {/* Optional tagline */}
          <p className="typ-caption text-gray-300 mb-6 text-pretty" data-aos="fade-up">
            {content.tagline}
          </p>

          <div className="flex flex-wrap gap-3 mb-8" data-aos="fade-up">
            {experienceText && (
              <span className="typ-caption text-xs bg-white/10 px-3 py-1 rounded-full text-gray-200 grow-0 shrink-0">
                {experienceText} {content.experienceLabel || "experience"}
              </span>
            )}
            <span className="typ-caption text-xs bg-white/10 px-3 py-1 rounded-full text-gray-200 grow-0 shrink-0">Frontend Systems</span>
            <span className="typ-caption text-xs bg-white/10 px-3 py-1 rounded-full text-gray-200 grow-0 shrink-0">Design to Delivery</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
            <a
              href={content.primaryCta.href}
              onClick={handleAnchorClick}
              className="inline-block text-center px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-lg transition duration-300 border border-white tracking-wide text-sm shadow-lg hover:shadow-xl hover:shadow-white/20">
              {content.primaryCta.label}
            </a>

            <a
              href={content.secondaryCta.href}
              onClick={handleAnchorClick}
              className="inline-block text-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 backdrop-blur-md font-semibold rounded-lg transition duration-300 tracking-wide text-sm shadow-lg">
              {content.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
