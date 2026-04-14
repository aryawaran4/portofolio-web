import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
