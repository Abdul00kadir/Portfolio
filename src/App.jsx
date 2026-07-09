import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <MainLayout>
      {/* Hero Intro landing */}
      <Hero />

      {/* Profile Bio details */}
      <About />

      {/* Tech stack grid */}
      <Skills />

      {/* Work Portfolio grid */}
      <Projects />

      {/* Scroll Timeline work progress */}
      <Experience />

      {/* Left aligned luxury timeline education */}
      <Education />

      {/* Certifications grid showcase */}
      <Certifications />

      {/* Tech insights grid blogs */}
      <Blog />

      {/* Contact Form with validation */}
      <Contact />

      {/* Branded copyrights & scroll progress top */}
      <Footer />
    </MainLayout>
  );
}

export default App;
