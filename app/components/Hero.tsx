"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [stars, setStars] = useState<{ id: number; left: number; top: number; size: number; duration: number; delay: number; opacity: number }[]>([]);

  const [experienceText, setExperienceText] = useState<string>("");

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
    const startDate = new Date(2021, 5, 1); // June 1, 2021 (month is 0-indexed)
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    setExperienceText(months > 0 ? `${years}+ years` : `${years} years`);
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
      <div className="max-w-4xl mx-auto text-left relative z-10">
        <h1 className="typ-h1 font-bold text-white mb-2 tracking-tight drop-shadow-lg" data-aos="fade-up">
          Arya Waranggana Susilo
        </h1>

        {/* Role */}
        <p
          className="typ-subtitle bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold mb-4 drop-shadow-lg"
          data-aos="fade-up">
          Frontend Engineer
        </p>

        {/* Value statement (1-2 short sentences) */}
        {experienceText ? (
          <p className="typ-p font-medium text-theme-muted mb-4" data-aos="fade-up">
            <span className="font-semibold">{experienceText}</span> experience. I optimize performance, SEO, and build scalable UI architecture to
            improve search visibility and product reliability.
          </p>
        ) : (
          <p className="typ-p font-medium text-theme-muted mb-4" data-aos="fade-up">
            I optimize performance, SEO, and build scalable UI architecture to improve search visibility and product reliability.
          </p>
        )}

        {/* Optional tagline */}
        <p className="typ-caption text-gray-300 mb-8" data-aos="fade-up">
          Angular · Vue · React · TypeScript
        </p>

        <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
          <a
            href="#projects"
            className="inline-block text-center px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-lg transition duration-300 border border-white tracking-wide text-sm shadow-lg hover:shadow-xl hover:shadow-white/20">
            Explore My Work
          </a>

          <a
            href="#contact"
            className="inline-block text-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 backdrop-blur-md font-semibold rounded-lg transition duration-300 tracking-wide text-sm shadow-lg">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
