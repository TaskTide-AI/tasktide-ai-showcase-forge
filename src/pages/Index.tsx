
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ManifestSection from '../components/ManifestSection';
import ProjectsSection from '../components/ProjectsSection';
import PeopleSection from '../components/PeopleSection';
import Footer from '../components/Footer';

const Index = () => {
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
