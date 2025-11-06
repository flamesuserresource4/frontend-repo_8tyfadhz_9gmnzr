import React from 'react';
import Hero from './components/Hero.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import ContactSection from './components/ContactSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Hero />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
      <footer className="py-10 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Your Name — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
