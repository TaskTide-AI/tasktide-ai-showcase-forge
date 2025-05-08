
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a server
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1321]">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-blue-400 mb-8 animate-on-scroll">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="glass-card p-6 rounded-xl shadow-lg animate-card">
                <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-[#111a2d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-[#111a2d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-[#111a2d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 bg-[#111a2d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:shadow-lg hover:shadow-blue-500/20 text-white button-3d transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            <div>
              <div className="glass-card p-6 rounded-xl shadow-lg animate-card" style={{animationDelay: '0.2s'}}>
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-blue-400 font-medium mb-1">Address</h3>
                    <p className="text-gray-300">
                      123 Innovation Street<br />
                      Tech Valley, CA 94043
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-blue-400 font-medium mb-1">Email</h3>
                    <p className="text-gray-300">
                      contact@example.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-blue-400 font-medium mb-1">Phone</h3>
                    <p className="text-gray-300">
                      +1 (555) 123-4567
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-blue-400 font-medium mb-1">Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl shadow-lg mt-6 animate-card" style={{animationDelay: '0.3s'}}>
                <h2 className="text-2xl font-semibold text-white mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
