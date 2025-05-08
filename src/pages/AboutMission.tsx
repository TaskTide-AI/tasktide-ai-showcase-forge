
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AboutMission = () => {
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
          
          <h1 className="text-4xl font-bold text-white mb-8 animate-on-scroll">Our Mission</h1>
          
          <div className="glass-card p-8 rounded-xl shadow-lg animate-on-scroll">
            <p className="text-gray-300 text-lg mb-6">
              At TaskTide AI, our mission is to democratize access to advanced AI technology, making it practical, usable, and valuable for businesses of all sizes. We believe that the power of AI should not be limited to tech giants and enterprises with massive budgets.
            </p>
            
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Core Principles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#111a2d]/70 p-5 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-2">Practical Innovation</h3>
                <p className="text-gray-300">
                  We don't pursue technology for its own sake. Every innovation we develop must deliver tangible, practical benefits to our clients' operations or capabilities.
                </p>
              </div>
              
              <div className="bg-[#111a2d]/70 p-5 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-2">Accessibility</h3>
                <p className="text-gray-300">
                  We design our solutions to be intuitive and easy to use, eliminating unnecessary complexity and making advanced AI capabilities accessible to non-technical users.
                </p>
              </div>
              
              <div className="bg-[#111a2d]/70 p-5 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-2">Ethical Development</h3>
                <p className="text-gray-300">
                  We commit to developing AI technology responsibly, with consideration for privacy, security, fairness, and the broader societal impacts of our work.
                </p>
              </div>
              
              <div className="bg-[#111a2d]/70 p-5 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-2">Partnership</h3>
                <p className="text-gray-300">
                  We see ourselves as partners in our clients' success, not just service providers. Their challenges become our challenges, and their goals become our mission.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg mb-8">
              We envision a future where businesses of any size can harness the full potential of AI to solve problems, create new opportunities, and work more efficiently. Our role is to build the bridge between cutting-edge AI research and practical business applications, continuously finding new ways to make this powerful technology serve real human needs.
            </p>
            
            <div className="text-center animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <Link to="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Join Us on Our Mission →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMission;
