import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { SmoothScroll } from "@/components/SmoothScroll";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Cursor } from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <SmoothScroll />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
