import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (    <div className="animate-bg-panel text-white relative overflow-hidden">
      {/* Removed background pattern and gradient as it's replaced by animated background */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-on-scroll">
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-tasktide-teal/20 to-tasktide-purple/20 text-tasktide-teal text-sm font-semibold mb-2 border border-tasktide-teal/10">
              Intelligent Automation Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient">
              Workflow Automation with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 animate-text" style={{ animationDelay: '0.2s' }}>
              TaskTide AI helps businesses streamline operations and boost productivity through intelligent AI-powered automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-text" style={{ animationDelay: '0.3s' }}>
              <Button className="bg-gradient-to-r from-tasktide-teal to-tasktide-purple hover:shadow-lg hover:shadow-tasktide-purple/20 text-white button-3d transition-all duration-300">
                View Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-dark-400/50 text-white border border-white/10 hover:bg-dark-300/80 hover:text-tasktide-teal button-3d">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden md:block animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-tasktide-teal/10 via-tasktide-purple/10 to-tasktide-blue/10 rounded-2xl backdrop-blur-sm transform rotate-6 border border-white/5"></div>
              <div className="relative glass-card rounded-lg p-6 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-dark-300 to-dark-400 rounded-md flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-tasktide-blue/20 via-tasktide-purple/20 to-tasktide-teal/20 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <Button variant="ghost" className="bg-dark-300/40 hover:bg-dark-300/60 rounded-full h-16 w-16 flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 text-white" />
                  </Button>
                  <div className="absolute bottom-4 left-4 text-white text-xl font-medium">Agency Showcase</div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-300/50 p-3 rounded-md hover:bg-dark-300/80 transition-colors">
                      <h3 className="text-sm font-semibold text-tasktide-teal mb-1">AI Integration</h3>
                      <p className="text-xs text-gray-300">Seamlessly connect AI with your tools</p>
                    </div>
                    <div className="bg-dark-300/50 p-3 rounded-md hover:bg-dark-300/80 transition-colors">
                      <h3 className="text-sm font-semibold text-tasktide-purple mb-1">Custom Workflows</h3>
                      <p className="text-xs text-gray-300">Build automated processes that scale</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
