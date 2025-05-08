
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-500">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-8 animate-on-scroll">Our Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="glass-card p-6 rounded-xl shadow-lg animate-card">
              <h2 className="text-2xl font-semibold text-white mb-4">Project 1</h2>
              <p className="text-gray-300 mb-4">An innovative solution that transforms business workflows and enhances productivity.</p>
              <div className="aspect-video bg-dark-400 rounded-md mb-4 flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <span className="mb-2">Video Placeholder</span>
                </div>
              </div>
              <a href="/projects/project1" className="text-tasktide-teal hover:text-tasktide-blue transition-colors">
                Learn more →
              </a>
            </div>
            
            <div className="glass-card p-6 rounded-xl shadow-lg animate-card" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-semibold text-white mb-4">Project 2</h2>
              <p className="text-gray-300 mb-4">A data-driven platform that provides actionable insights for strategic decision making.</p>
              <div className="aspect-video bg-dark-400 rounded-md mb-4 flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <span className="mb-2">Video Placeholder</span>
                </div>
              </div>
              <a href="/projects/project2" className="text-tasktide-teal hover:text-tasktide-blue transition-colors">
                Learn more →
              </a>
            </div>
            
            <div className="glass-card p-6 rounded-xl shadow-lg animate-card" style={{animationDelay: '0.2s'}}>
              <h2 className="text-2xl font-semibold text-white mb-4">Project 3</h2>
              <p className="text-gray-300 mb-4">An automation solution that reduces manual tasks and improves operational efficiency.</p>
              <div className="aspect-video bg-dark-400 rounded-md mb-4 flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <span className="mb-2">Video Placeholder</span>
                </div>
              </div>
              <a href="/projects/project3" className="text-tasktide-teal hover:text-tasktide-blue transition-colors">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
