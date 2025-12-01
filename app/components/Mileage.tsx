"use client";

interface MilestoneCategory {
  icon: string;
  title: string;
  items: string[];
  accentColor: string;
}

export default function Mileage() {
  const milestones: MilestoneCategory[] = [
    {
      icon: "🚀",
      title: "Performance & SEO Achievements",
      accentColor: "",
      items: [
        "Improved Google indexing from ~70 → ~170 pages (+143%)",
        "Increased landing page health score from 25% → 99% (+296%)",
        "Achieved 90+ Lighthouse scores through performance optimization",
      ],
    },
    {
      icon: "🔗",
      title: "System Integrations",
      accentColor: "",
      items: [
        "Payment & platform integrations: Stripe, GrabFood, KPay, Doku, UOB, AXS, GDC, Foodpanda",
        "Seamless integration with 10+ legacy APIs and enterprise backends",
        "Zero downtime deployment across 50+ production environments",
      ],
    },
    {
      icon: "🏆",
      title: "Awards & Recognition",
      accentColor: "",
      items: [
        "Best Team, Frontend (IDEKU 2024)",
        "1st Best Performance Agent (Digital Marketing, April 2023)",
        "2nd Best Performance Agent (Digital Marketing, Dec 2022)",
      ],
    },
    {
      icon: "⚙️",
      title: "Technical Breadth & Industries",
      accentColor: "",
      items: [
        "Tech: Angular, Vue, React, TypeScript, JavaScript, SEO, Tailwind, Node.js, AEM, Figma",
        "Industry expertise: E-commerce, hospitality, real estate, travel, government systems, IoT, POS",
      ],
    },
  ];

  return (
    <section id="mileage" className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="typ-h2 font-bold mb-3 text-white">Mileage</h2>
          <p className="typ-p text-theme-muted max-w-4xl">
            Measurable impact and outcomes across performance, SEO, integrations, and industries. Real numbers, real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((category, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/6 rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 group"
              data-aos="fade-up"
              data-aos-delay={`${100 * (idx + 1)}`}>
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <div className="flex-1">
                  <h3 className="typ-h3 text-white font-semibold mb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="typ-p text-theme-muted leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
