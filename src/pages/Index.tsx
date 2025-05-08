
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ManifestSection from '../components/ManifestSection';
import ProjectsSection from '../components/ProjectsSection';
import PeopleSection from '../components/PeopleSection';
import Footer from '../components/Footer';

const Index = () => {
  // Force animation refresh when component mounts
  useEffect(() => {
    // Trigger animation check for elements that are visible on initial load
    const triggerAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-text, .animate-card');
      
      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9) {
          element.classList.add('animated');
        }
      });
    };
    
    // Run initial animation check after a short delay to ensure DOM is ready
    setTimeout(triggerAnimations, 200);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ManifestSection />
      <ProjectsSection />
      <PeopleSection />
      <Footer />
    </div>
  );
};

export default Index;
