
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ManifestSection from '../components/ManifestSection';
import ProjectsSection from '../components/ProjectsSection';
import PeopleSection from '../components/PeopleSection';
import Footer from '../components/Footer';

const Index = () => {
  // Initialize animations for home page
  useEffect(() => {
    // Make sure home-page class is applied
    document.body.classList.add('home-page');
    
    // Trigger animation check only for elements that are visible on initial load
    const triggerVisibleAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-text, .animate-card');
      
      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9) {
          element.classList.add('animated');
        }
      });
    };
    
    // Run initial animation check after a short delay to ensure DOM is ready
    setTimeout(triggerVisibleAnimations, 200);
    
    // No need to handle cleanup as App.tsx is managing the body class
  }, []);
  return (
    <div className="min-h-screen flex flex-col animate-bg-container">
      <Navbar />      <div className="animate-bg-content">
        <Hero />
        <ManifestSection />
        <ProjectsSection />
        <PeopleSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
