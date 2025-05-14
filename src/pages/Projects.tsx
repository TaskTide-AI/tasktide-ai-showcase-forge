
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import useInstantAnimation from '../hooks/use-instant-animation';

const Projects = () => {
  // Apply animations immediately without waiting for scroll
  useInstantAnimation();  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <main className="flex-grow" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-8 animate-on-scroll">Our Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="glass-card p-6 rounded-xl shadow-lg animate-card">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">LLM Workflows</h2>
              <p className="text-gray-300 mb-4">Advanced language model pipelines and automation solutions that transform business workflows and enhance productivity.</p>
              <div className="aspect-video bg-[#111a2d] rounded-md mb-4 flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <span className="mb-2">Video Placeholder</span>
                </div>
              </div>
              <Link to="/projects/llm-workflows" className="text-blue-400 hover:text-blue-300 transition-colors">
                Learn more →
              </Link>
            </div>
            
            <div className="glass-card p-6 rounded-xl shadow-lg animate-card" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">AI Agents</h2>
              <p className="text-gray-300 mb-4">Autonomous AI agents for task automation and decision making that provide actionable insights for strategic decisions.</p>
              <div className="aspect-video bg-[#111a2d] rounded-md mb-4 flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <span className="mb-2">Video Placeholder</span>
                </div>
              </div>
              <Link to="/projects/ai-agents" className="text-blue-400 hover:text-blue-300 transition-colors">
                Learn more →
              </Link>
            </div>
            
            <div className="glass-card p-6 rounded-xl shadow-lg animate-card" style={{animationDelay: '0.2s'}}>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Data Processing</h2>
              <p className="text-gray-300 mb-4">Efficient data processing and transformation pipelines that reduce manual tasks and improve operational efficiency.</p>
              <div className="aspect-video bg-[#111a2d] rounded-md mb-4 flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <span className="mb-2">Video Placeholder</span>
                </div>
              </div>
              <Link to="/projects/data-processing" className="text-blue-400 hover:text-blue-300 transition-colors">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
