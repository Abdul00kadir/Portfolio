import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';
import WhatIBuild from './sections/WhatIBuild';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Engineering from './sections/Engineering';
import About from './sections/About';
import EducationCertifications from './sections/EducationCertifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <MainLayout>
      {/* 1. Hero Landing */}
      <Hero />

      {/* 2. What I Build - 4 Core Pillars */}
      <WhatIBuild />

      {/* 3. Selected Work Case Studies */}
      <Projects />

      {/* 4. Professional Career Progression */}
      <Experience />

      {/* 5. Categorized Engineering Toolkit */}
      <Engineering />

      {/* 6. Background & Narrative */}
      <About />

      {/* 7. Education & Certifications */}
      <EducationCertifications />

      {/* 8. Contact CTA */}
      <Contact />

      {/* 9. Minimal Footer */}
      <Footer />
    </MainLayout>
  );
}

export default App;
