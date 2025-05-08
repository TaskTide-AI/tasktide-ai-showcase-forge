import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AboutMission = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-dark-400 to-dark-300 text-white">
      <Navbar />
      <main className="flex-grow">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItNGgxdjJoLTF2LTJ6bS01IDJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTIgMTNoMXYyaC0xdi0yek0yNyAyNWgxdjFoLTF2LTF6bS0zIDNoMXYxaC0xdi0xem0yLTdoMXYyaC0xdi0yek0zMiAxNGgxdjJoLTF2LTJ6bTEgMTBoMXYyaC0xdi0yek0yNSAyOGgxdjJoLTF2LTJ6bTUgMmgxdjFoLTF2LTF6bS01LTNoMXYxaC0xdi0xem01IDVoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTItNWgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0tMSAyaDJ2LTJoMXYyaDJ2MWgtMnYyaC0xdi0yaC0ydi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <div className="mb-10">
              <Link to="/about" className="text-tasktide-teal hover:text-white transition-colors">
                ← Back to About
              </Link>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8 animate-on-scroll">Our Mission</h1>
            
            <div className="glass-card p-8 rounded-xl shadow-lg animate-on-scroll border border-white/10">
              <p className="text-gray-300 text-lg mb-6">
                At TaskTide AI, our mission is to democratize access to advanced AI technology, making it practical, usable, and valuable for businesses of all sizes. We believe that the power of AI should not be limited to tech giants and enterprises with massive budgets.
              </p>
              
              <h2 className="text-2xl font-semibold text-tasktide-teal mb-4">Core Principles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Practical Innovation</h3>
                  <p className="text-gray-300">
                    We don't pursue technology for its own sake. Every innovation we develop must deliver tangible, practical benefits to our clients' operations or capabilities.
                  </p>
                </div>
                
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Accessibility</h3>
                  <p className="text-gray-300">
                    We design our solutions to be intuitive and easy to use, eliminating unnecessary complexity and making advanced AI capabilities accessible to non-technical users.
                  </p>
                </div>
                
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Ethical Development</h3>
                  <p className="text-gray-300">
                    We commit to developing AI technology responsibly, with consideration for privacy, security, fairness, and the broader societal impacts of our work.
                  </p>
                </div>
                
                <div className="bg-dark-400/70 p-5 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Partnership</h3>
                  <p className="text-gray-300">
                    We see ourselves as partners in our clients' success, not just service providers. Their challenges become our challenges, and their goals become our mission.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-tasktide-teal mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg mb-8">
                We envision a future where businesses of any size can harness the full potential of AI to solve problems, create new opportunities, and work more efficiently. Our role is to build the bridge between cutting-edge AI research and practical business applications, continuously finding new ways to make this powerful technology serve real human needs.
              </p>
              
              <div className="text-center animate-on-scroll" style={{animationDelay: '0.3s'}}>
                <Link to="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-tasktide-orange to-tasktide-teal rounded-lg text-white hover:shadow-lg hover:shadow-tasktide-teal/20 transition-all">
                  Join Us on Our Mission →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMission;
