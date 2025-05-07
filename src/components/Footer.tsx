
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tasktide-blue text-white" id="contact">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TaskTide AI</h3>
            <p className="text-gray-300 mb-4">
              Intelligent automation solutions to streamline your business workflows and boost productivity.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="sr-only">LinkedIn</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="sr-only">Twitter</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="sr-only">GitHub</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
              <li><a href="#people" className="text-gray-300 hover:text-white">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p>1234 Innovation Drive</p>
              <p>Suite 500</p>
              <p>San Francisco, CA 94103</p>
              <p className="mt-2">contact@tasktideai.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TaskTide AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
