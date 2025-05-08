
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AboutTechnology = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1321]">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <Link to="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
              ← Back to About
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-8 animate-on-scroll">Our Technology</h1>
          
          <div className="glass-card p-8 rounded-xl shadow-lg animate-on-scroll">
            <p className="text-gray-300 text-lg mb-8">
              At TaskTide AI, we combine various cutting-edge technologies to create powerful, flexible solutions that solve real business problems. Our technology stack is constantly evolving as we integrate the latest advancements in AI and machine learning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-[#111a2d]/70 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-blue-400 mb-3">Large Language Models</h3>
                <p className="text-gray-300">
                  We leverage state-of-the-art language models to enable natural language understanding, content generation, and human-like interactions in our applications.
                </p>
              </div>
              
              <div className="bg-[#111a2d]/70 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-blue-400 mb-3">Computer Vision</h3>
                <p className="text-gray-300">
                  Our computer vision capabilities allow for image recognition, object detection, and visual data processing across various business applications.
                </p>
              </div>
              
              <div className="bg-[#111a2d]/70 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-blue-400 mb-3">Agent-Based Systems</h3>
                <p className="text-gray-300">
                  We design autonomous AI agents that can perform complex tasks, make decisions, and coordinate with each other to solve multi-step problems.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Development Approach</h2>
            <ul className="text-gray-300 space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-white">Modular Architecture:</strong> We build systems with modular components that can be combined in different ways to address specific client needs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-white">Continuous Integration:</strong> Our development processes ensure that we can quickly incorporate new AI breakthroughs into our solutions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-white">Security by Design:</strong> We integrate robust security measures at every level of our technology stack to protect sensitive data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-white">Scalable Infrastructure:</strong> Our solutions are built to scale, allowing them to grow alongside our clients' businesses.</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Technology Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-5 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-2">Automated Data Processing</h3>
                <p className="text-gray-300">
                  Transform unstructured data into actionable insights with our intelligent data processing pipelines.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-5 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-2">Workflow Automation</h3>
                <p className="text-gray-300">
                  Streamline complex business processes with intelligent automation that adapts to changing conditions.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-5 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-2">Decision Support Systems</h3>
                <p className="text-gray-300">
                  Enhance decision-making with AI systems that analyze data and provide evidence-based recommendations.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-5 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-2">Custom AI Solutions</h3>
                <p className="text-gray-300">
                  Address unique business challenges with tailored AI solutions built specifically for your needs.
                </p>
              </div>
            </div>
            
            <div className="text-center animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <Link to="/projects" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Explore Our Projects →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutTechnology;
