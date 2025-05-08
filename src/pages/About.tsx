
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1321]">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-8 animate-on-scroll">About Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Story</h2>
              <div className="glass-card p-6 rounded-xl">
                <p className="text-gray-300 mb-4">
                  TaskTide AI was founded with a simple mission: to make advanced AI technology accessible and practical for businesses of all sizes. What started as a one-person operation has grown into a hub of innovation, delivering cutting-edge AI solutions that solve real business problems.
                </p>
                <p className="text-gray-300">
                  We believe that automation and AI shouldn't be complex or intimidating. That's why we focus on creating intuitive, powerful tools that integrate seamlessly with your existing workflows and actually make sense for your business needs.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Approach</h2>
              <div className="glass-card p-6 rounded-xl">
                <p className="text-gray-300 mb-4">
                  We don't believe in one-size-fits-all solutions. Every business is unique, with its own challenges and goals. That's why we take a collaborative approach, working closely with each client to understand their specific needs before designing custom AI solutions that address their exact requirements.
                </p>
                <p className="text-gray-300">
                  Our focus is on delivering practical value, not just impressive technology. We measure our success by the real-world results our solutions achieve for our clients – increased efficiency, reduced costs, and new capabilities that weren't possible before.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 animate-on-scroll" style={{animationDelay: '0.3s'}}>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Why Choose Us</h2>
            <div className="glass-card p-6 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Expert Knowledge</h3>
                  <p className="text-gray-300">Deep expertise in the latest AI technologies and how to apply them effectively to business problems.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Custom Solutions</h3>
                  <p className="text-gray-300">Tailored approaches that fit your specific business needs rather than generic off-the-shelf products.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Measurable Results</h3>
                  <p className="text-gray-300">Focus on delivering quantifiable improvements to your business operations and bottom line.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center animate-on-scroll" style={{animationDelay: '0.4s'}}>
            <Link to="/about/mission" className="inline-block mx-2 px-6 py-3 glass-card rounded-lg text-blue-400 hover:text-blue-300 transition-colors">
              Our Mission →
            </Link>
            <Link to="/about/technology" className="inline-block mx-2 px-6 py-3 glass-card rounded-lg text-blue-400 hover:text-blue-300 transition-colors">
              Our Technology →
            </Link>
            <Link to="/contact" className="inline-block mx-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              Get in Touch →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
