"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stars, setStars] = useState<{ id: number; left: number; top: number; size: number; duration: number; delay: number; opacity: number }[]>([]);

  useEffect(() => {
    // Generate stars only on the client after mount to avoid SSR/client mismatch
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
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Formspree endpoint should be set as NEXT_PUBLIC_FORMSPREE_ENDPOINT
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';
    if (!endpoint) {
      alert('Formspree endpoint not configured. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your environment.');
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json().catch(() => null);

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const msg = json?.error || json?.message || 'Failed to send message';
        console.error('Formspree error:', msg, json);
        alert(msg);
      }
    } catch (err) {
      console.error('Submission error', err);
      alert('Could not send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Space Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-indigo-900 to-slate-800"></div>

      {/* Stars (rendered only after mount) */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}></div>
      ))}

      {/* Blurred Orbs */}
      <div className="absolute top-20 left-10 w-full h-96 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
      <div
        className="absolute bottom-20 right-10 w-full h-full bg-blue-500 rounded-full blur-3xl opacity-10"
        style={{ maxWidth: "600px", maxHeight: "600px" }}></div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <h2 className="typ-h2 font-bold text-white mb-4 text-center tracking-tight" data-aos="fade-up">Get In Touch</h2>
        <p className="typ-p text-theme-muted text-center mb-12 font-light" data-aos="fade-up" data-aos-delay="100">Have a project in mind? Let's discuss how we can work together</p>

        <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/10 rounded-2xl p-12 border border-white/20 shadow-2xl shadow-white/10" data-aos="fade-up" data-aos-delay="200">
          <div className="mb-6">
            <label htmlFor="name" className="block text-white font-semibold mb-2 text-sm tracking-wide">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 backdrop-blur-md bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:border-white/40 transition duration-300 placeholder-gray-400"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm tracking-wide">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 backdrop-blur-md bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:border-white/40 transition duration-300 placeholder-gray-400"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-white font-semibold mb-2 text-sm tracking-wide">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 backdrop-blur-md bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:border-white/40 transition duration-300 placeholder-gray-400"
              placeholder="Project topic"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 backdrop-blur-md bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:border-white/40 transition duration-300 resize-none placeholder-gray-400"
              placeholder="Tell me about your project..."></textarea>
          </div>

          {isSubmitted && (
            <div className="mb-6 p-4 bg-linear-to-r from-white to-gray-400 text-black rounded-lg text-center font-semibold tracking-wide text-sm">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <button
            type="submit"
            className="w-full px-6 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition duration-300 tracking-wide text-sm border border-white">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
