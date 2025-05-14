import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import useInstantAnimation from '../hooks/use-instant-animation';
import { ArrowRight, Database, Filter, RefreshCw, GitCommit } from 'lucide-react';

const DataProcessing = () => {
  // Apply animations immediately without waiting for scroll
  useInstantAnimation();
  return (
    <div className="min-h-screen flex flex-col animate-bg-container text-white">
      <Navbar />
      <main className="flex-grow animate-bg-content">
        <div className="relative overflow-hidden">
          {/* Removed background pattern div as it's replaced by animated background */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <div className="mb-10">
              <Link to="/projects" className="text-tasktide-orange hover:text-white transition-colors">
                ← Back to Projects
              </Link>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight bg-gradient-to-r from-tasktide-orange to-tasktide-teal bg-clip-text text-transparent mb-8 animate-on-scroll">Data Processing</h1>
            
            <div className="glass-card p-8 rounded-xl shadow-lg animate-on-scroll border border-white/10 mb-12">
              <p className="text-gray-300 text-lg mb-6">
                Our data processing solutions transform raw data into actionable insights through efficient collection, cleaning, transformation, and analysis pipelines. Leverage our advanced AI-powered tools to unlock the full potential of your data assets and drive better business decisions.
              </p>
              
              <h2 className="text-2xl font-semibold text-tasktide-orange mb-6">Core Capabilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <div className="flex items-center mb-3">
                    <Database className="h-5 w-5 text-tasktide-orange mr-2" />
                    <h3 className="text-xl font-medium text-white">Data Integration</h3>
                  </div>
                  <p className="text-gray-300">
                    Connect and consolidate data from multiple sources, formats, and systems into a unified view.
                  </p>
                </div>
                
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <div className="flex items-center mb-3">
                    <Filter className="h-5 w-5 text-tasktide-orange mr-2" />
                    <h3 className="text-xl font-medium text-white">Automated Data Cleansing</h3>
                  </div>
                  <p className="text-gray-300">
                    AI-powered tools to identify and fix inconsistencies, duplicates, and errors in your data automatically.
                  </p>
                </div>
                
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <div className="flex items-center mb-3">
                    <RefreshCw className="h-5 w-5 text-tasktide-orange mr-2" />
                    <h3 className="text-xl font-medium text-white">Real-time Processing</h3>
                  </div>
                  <p className="text-gray-300">
                    Process and analyze streaming data in real-time to enable immediate insights and quick decision making.
                  </p>
                </div>
                
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <div className="flex items-center mb-3">
                    <GitCommit className="h-5 w-5 text-tasktide-orange mr-2" />
                    <h3 className="text-xl font-medium text-white">Scalable Pipelines</h3>
                  </div>
                  <p className="text-gray-300">
                    Build data processing workflows that scale seamlessly with your business needs and data volume.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-tasktide-orange mb-4">Featured Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Link to="/projects/data-processing/pipeline-automator" className="block bg-dark-500/50 hover:bg-dark-400 transition-colors p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Data Pipeline Automator</h3>
                  <p className="text-gray-400 mb-4">
                    End-to-end data processing system that automates collection, transformation, and analysis.
                  </p>
                  <div className="flex items-center text-tasktide-orange">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
                
                <Link to="/projects/data-processing/analytics-platform" className="block bg-dark-500/50 hover:bg-dark-400 transition-colors p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Predictive Analytics Platform</h3>
                  <p className="text-gray-400 mb-4">
                    Turn historical data into future insights with our advanced predictive modeling platform.
                  </p>
                  <div className="flex items-center text-tasktide-orange">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-tasktide-orange to-tasktide-teal rounded-lg text-white hover:shadow-lg hover:shadow-tasktide-orange/20 transition-all">
                Discuss Your Data Processing Needs With Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataProcessing;
