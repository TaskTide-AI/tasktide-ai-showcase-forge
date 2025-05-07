
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import PeopleSection from '../components/PeopleSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <PeopleSection />
      <Footer />
    </div>
  );
};

export default Index;
