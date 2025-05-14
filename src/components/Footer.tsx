import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {  return (
    <footer className="animate-bg-panel text-white relative overflow-hidden" id="contact">
      {/* Removed background pattern and gradient as it's replaced by animated background */}
      <div className="section-container relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">TaskTide AI</h3>
            <p className="text-gray-300 mb-6">
              Intelligent automation solutions to streamline your business workflows and boost productivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-dark-300/80 hover:bg-tasktide-teal/20 flex items-center justify-center transition-colors border border-white/5">
                <Linkedin className="h-4 w-4 text-white" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-dark-300/80 hover:bg-tasktide-purple/20 flex items-center justify-center transition-colors border border-white/5">
                <Twitter className="h-4 w-4 text-white" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-dark-300/80 hover:bg-tasktide-orange/20 flex items-center justify-center transition-colors border border-white/5">
                <Github className="h-4 w-4 text-white" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-tasktide-teal mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-tasktide-teal transition-colors inline-block py-1">Home</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-tasktide-purple transition-colors inline-block py-1">Projects</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-tasktide-orange transition-colors inline-block py-1">Our Team</Link></li>
              <li><Link to="/about/technology" className="text-gray-300 hover:text-tasktide-teal transition-colors inline-block py-1">Technology</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-tasktide-purple transition-colors inline-block py-1">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-tasktide-teal mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-tasktide-teal mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p>1234 Innovation Drive</p>
                  <p>Suite 500</p>
                  <p>San Francisco, CA 94103</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-tasktide-purple mr-3 flex-shrink-0" />
                <p className="hover:text-tasktide-purple transition-colors"><a href="mailto:contact@tasktideai.com">contact@tasktideai.com</a></p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-tasktide-orange mr-3 flex-shrink-0" />
                <p className="hover:text-tasktide-orange transition-colors"><a href="tel:+15551234567">(555) 123-4567</a></p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <div className="glass-card inline-block px-4 py-2 rounded-full text-sm">
            <p>© {new Date().getFullYear()} TaskTide AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
