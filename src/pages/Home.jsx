import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import Work from '../components/Work/Work';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Home() {
  useDocumentMeta();

  return (
    <>
      <Hero />
      <Work />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
