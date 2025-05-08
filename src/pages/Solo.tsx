
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { User } from 'lucide-react';

const Solo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-500">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-white mb-6 animate-on-scroll">Solo Innovator</h1>
              <p className="text-xl text-gray-300 mb-8 animate-text" style={{animationDelay: '0.1s'}}>
                Leveraging AI and automation to deliver enterprise-grade solutions as a one-person powerhouse.
              </p>
              
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl animate-card" style={{animationDelay: '0.2s'}}>
                  <h2 className="text-2xl font-semibold text-white mb-3">Agility & Focus</h2>
                  <p className="text-gray-300">
                    As a solo innovator, I bring exceptional agility and focus to every project. 
                    Without the overhead of large teams, I deliver solutions faster and with unwavering attention to your needs.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl animate-card" style={{animationDelay: '0.3s'}}>
                  <h2 className="text-2xl font-semibold text-white mb-3">AI-Powered Efficiency</h2>
                  <p className="text-gray-300">
                    I leverage cutting-edge AI tools to multiply my capabilities, allowing me to deliver work that 
                    would traditionally require multiple specialists.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl animate-card" style={{animationDelay: '0.4s'}}>
                  <h2 className="text-2xl font-semibold text-white mb-3">Direct Communication</h2>
                  <p className="text-gray-300">
                    Work directly with the person building your solution. No account managers, no communication gaps - 
                    just clear, effective collaboration from start to finish.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex items-center justify-center animate-on-scroll" style={{animationDelay: '0.5s'}}>
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-tasktide-blue via-tasktide-teal to-tasktide-orange opacity-20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-dark-300 rounded-full flex items-center justify-center shadow-xl">
                  <User className="w-32 h-32 text-white opacity-30" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Your Name</h3>
                  <p className="text-tasktide-teal">AI Solutions Specialist</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12 animate-on-scroll">My Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl animate-card" style={{animationDelay: '0.1s'}}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-tasktide-blue to-tasktide-teal rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-3">Understand</h3>
                <p className="text-gray-300 text-center">
                  I take the time to deeply understand your business challenges and objectives before proposing any solutions.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-card" style={{animationDelay: '0.2s'}}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-tasktide-teal to-tasktide-orange rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-3">Design</h3>
                <p className="text-gray-300 text-center">
                  I design tailored solutions that align with your specific needs, optimizing for both current requirements and future scalability.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-card" style={{animationDelay: '0.3s'}}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-tasktide-orange to-tasktide-blue rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-3">Deliver</h3>
                <p className="text-gray-300 text-center">
                  I implement solutions with a focus on quality, efficiency, and operational excellence, ensuring smooth adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solo;
