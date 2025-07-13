import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import InteractiveDashboard from './components/InteractiveDashboard';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="dashboard">
          <InteractiveDashboard />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="blog">
          <BlogSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 Youssef Nasr. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

