import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import About from "@/app/components/About";
import Mileage from "@/app/components/Mileage";
import Blog from "@/app/components/Blog";
import ContactForm from "@/app/components/ContactForm";
import Navbar from "@/app/components/Navbar";
import AosInitializer from "@/app/components/AosInitializer";

export default function Home() {
  return (
    <main>
      <AosInitializer />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Mileage />
      {/* <Blog /> */}
      <ContactForm />
    </main>
  );
}
