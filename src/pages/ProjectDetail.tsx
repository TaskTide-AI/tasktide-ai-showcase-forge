
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Project data - in a real app, this would come from an API or database
const projectData = {
  project1: {
    title: 'AI-Powered Analytics Dashboard',
    description: 'An intelligent analytics platform that leverages machine learning to provide predictive insights and data visualization.',
    features: [
      'Real-time data processing and visualization',
      'AI-driven predictive analytics',
      'Custom reporting and dashboard creation',
      'Integration with multiple data sources',
    ],
    videoId: 'placeholder1'
  },
  project2: {
    title: 'Workflow Automation System',
    description: 'A comprehensive workflow automation solution that streamlines business processes and reduces manual intervention.',
    features: [
      'Visual workflow designer',
      'Integration with existing business tools',
      'Automated task assignment and tracking',
      'Performance metrics and reporting',
    ],
    videoId: 'placeholder2'
  },
  project3: {
    title: 'Smart Document Management',
    description: 'An intelligent document management system that uses AI to categorize, search, and extract information from documents.',
    features: [
      'AI-powered document classification',
      'Text extraction and indexing',
      'Secure document storage and sharing',
      'Version control and change tracking',
    ],
    videoId: 'placeholder3'
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId as keyof typeof projectData];
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-dark-500">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
            <a href="/projects" className="text-tasktide-teal hover:text-tasktide-blue transition-colors">
              Return to all projects
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-dark-500">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gradient mb-8 animate-on-scroll">{project.title}</h1>
          
          <div className="glass-card p-8 rounded-xl shadow-lg mb-12 animate-on-scroll">
            <div className="aspect-video bg-dark-300 rounded-lg mb-8 flex items-center justify-center shadow-inner">
              <div className="text-gray-400 flex flex-col items-center">
                <span className="mb-2">Video Showcase</span>
                <span className="text-sm opacity-70">YouTube placeholder for {project.title}</span>
              </div>
            </div>
            
            <p className="text-gray-200 text-lg mb-6 animate-text">{project.description}</p>
            
            <h2 className="text-2xl font-semibold text-white mb-4 animate-text" style={{animationDelay: '0.1s'}}>Key Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
              {project.features.map((feature, index) => (
                <li key={index} className="animate-text" style={{animationDelay: `${0.2 + index * 0.1}s`}}>{feature}</li>
              ))}
            </ul>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-700">
              <a href="/projects" className="text-tasktide-teal hover:text-tasktide-blue transition-colors">
                ← Back to Projects
              </a>
              <button className="px-4 py-2 bg-gradient-to-r from-tasktide-blue to-tasktide-teal rounded-md text-white button-3d transition-all duration-300 hover:shadow-lg hover:shadow-tasktide-teal/20">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
