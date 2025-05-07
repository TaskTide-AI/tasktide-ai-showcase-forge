
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-tasktide-blue to-tasktide-teal text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Workflow Automation with AI
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              TaskTide AI helps businesses streamline operations and boost productivity through intelligent AI-powered automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-tasktide-orange hover:bg-white hover:text-tasktide-blue text-white">
                View Our Work
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-tasktide-blue">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm transform rotate-6"></div>
              <div className="relative bg-white/20 backdrop-blur rounded-lg p-6 shadow-xl">
                <div className="aspect-video bg-black/40 rounded-md flex items-center justify-center">
                  <div className="text-white text-xl">Agency Showcase Video</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 bg-white w-full clip-path-wave-bottom"></div>
    </div>
  );
};

export default Hero;
