import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Mileage from "@/app/components/Mileage";
import ContactForm from "@/app/components/ContactForm";
import Navbar from "@/app/components/Navbar";
import AosInitializer from "@/app/components/AosInitializer";
import Profile from "@/app/components/Profile";
import portfolioContent from "@/app/data/portfolio-content.json";
import type { PortfolioContentMap, SiteContent } from "@/app/types/content";

type HomePageProps = {
  siteKey?: string;
};

export default function HomePage({ siteKey }: HomePageProps) {
  const contentMap = portfolioContent as PortfolioContentMap;
  const resolvedKey = siteKey ?? process.env.NEXT_PUBLIC_SITE_KEY ?? "portofolio-web";
  const content: SiteContent = contentMap[resolvedKey] ?? contentMap["portofolio-web"];

  return (
    <main>
      <AosInitializer />
      <Navbar showProfile={Boolean(content.profile)} />
      <Hero content={content.hero} />
      {content.profile ? <Profile content={content.profile} about={content.about} /> : null}
      <Projects content={content.projects} />
      <Mileage content={content.mileage} />
      <ContactForm />
    </main>
  );
}
