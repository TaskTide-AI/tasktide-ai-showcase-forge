import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import useInstantAnimation from '../hooks/use-instant-animation';
import { ArrowRight, Bot, Brain, BarChart3, Network } from 'lucide-react';

const AIAgents = () => {
  // Apply animations immediately without waiting for scroll
  useInstantAnimation();
  return (
    <div className="min-h-screen flex flex-col text-white" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <main className="flex-grow" style={{ position: 'relative', zIndex: 1 }}>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItNGgxdjJoLTF2LTJ6bS01IDJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTIgMTNoMXYyaC0xdi0yek0yNyAyNWgxdjFoLTF2LTF6bS0zIDNoMXYxaC0xdi0xem0yLTdoMXYyaC0xdi0yek0zMiAxNGgxdjJoLTF2LTJ6bTEgMTBoMXYyaC0xdi0yek0yNSAyOGgxdjJoLTF2LTJ6bTUgMmgxdjFoLTF2LTF6bS01LTNoMXYxaC0xdi0xem01IDVoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTItNWgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0tMSAyaDJ2LTJoMXYyaDJ2MWgtMnYyaC0xdi0yaC0ydi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <div className="mb-10">
              <Link to="/projects" className="text-tasktide-teal hover:text-white transition-colors">
                ← Back to Projects
              </Link>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight bg-gradient-to-r from-tasktide-teal to-tasktide-blue bg-clip-text text-transparent mb-8 animate-on-scroll">AI Agents</h1>
            
            <div className="glass-card p-8 rounded-xl shadow-lg animate-on-scroll border border-white/10 mb-12">
              <p className="text-gray-300 text-lg mb-6">
                Our AI agents are autonomous systems designed to perform complex tasks, make decisions, and adapt to changing environments. These intelligent agents leverage the latest advancements in machine learning, reinforcement learning, and natural language understanding to provide powerful automation solutions for your business.
              </p>
              
              <h2 className="text-2xl font-semibold text-tasktide-teal mb-6">Key Capabilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <div className="flex items-center mb-3">
                    <Bot className="h-5 w-5 text-tasktide-teal mr-2" />
                    <h3 className="text-xl font-medium text-white">Autonomous Decision Making</h3>
                  </div>
                  <p className="text-gray-300">
                    Our agents can evaluate situations, make informed decisions, and take appropriate actions without human intervention.
                  </p>
                </div>
                
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <div className="flex items-center mb-3">
                    <Brain className="h-5 w-5 text-tasktide-teal mr-2" />
                    <h3 className="text-xl font-medium text-white">Continuous Learning</h3>
                  </div>
                  <p className="text-gray-300">
                    Agents improve over time by learning from interactions, feedback, and new data, becoming increasingly effective at their assigned tasks.
                  </p>
                </div>
                
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="h-5 w-5 text-tasktide-teal mr-2" />
                    <h3 className="text-xl font-medium text-white">Analytics & Reporting</h3>
                  </div>
                  <p className="text-gray-300">
                    Track agent performance, actions taken, and outcomes achieved with comprehensive analytics dashboards.
                  </p>
                </div>
                
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <div className="flex items-center mb-3">
                    <Network className="h-5 w-5 text-tasktide-teal mr-2" />
                    <h3 className="text-xl font-medium text-white">Integration Ready</h3>
                  </div>
                  <p className="text-gray-300">
                    Seamlessly connect with your existing tools, platforms, and data sources to automate end-to-end workflows.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-tasktide-teal mb-4">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Link to="/projects/ai-agents/customer-service" className="block bg-dark-500/50 hover:bg-dark-400 transition-colors p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Customer Service AI Agent</h3>
                  <p className="text-gray-400 mb-4">
                    Intelligent virtual assistant that handles customer inquiries and provides real-time support.
                  </p>
                  <div className="flex items-center text-tasktide-teal">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
                
                <Link to="/projects/ai-agents/procurement-assistant" className="block bg-dark-500/50 hover:bg-dark-400 transition-colors p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Procurement Assistant</h3>
                  <p className="text-gray-400 mb-4">
                    AI-powered procurement solution that streamlines vendor selection and purchasing processes.
                  </p>
                  <div className="flex items-center text-tasktide-teal">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-tasktide-teal to-tasktide-blue rounded-lg text-white hover:shadow-lg hover:shadow-tasktide-teal/20 transition-all">
                Contact Us to Learn More About Our AI Agents
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAgents;
