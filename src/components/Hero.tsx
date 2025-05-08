
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-dark-400 to-dark-300 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItNGgxdjJoLTF2LTJ6bS01IDJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTIgMTNoMXYyaC0xdi0yek0yNyAyNWgxdjFoLTF2LTF6bS0zIDNoMXYxaC0xdi0xem0yLTdoMXYyaC0xdi0yek0zMiAxNGgxdjJoLTF2LTJ6bTEgMTBoMXYyaC0xdi0yek0yNSAyOGgxdjJoLTF2LTJ6bTUgMmgxdjFoLTF2LTF6bS01LTNoMXYxaC0xdi0xem01IDVoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTItNWgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0tMSAyaDJ2LTJoMXYyaDJ2MWgtMnYyaC0xdi0yaC0ydi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Workflow Automation with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 animate-text" style={{ animationDelay: '0.2s' }}>
              TaskTide AI helps businesses streamline operations and boost productivity through intelligent AI-powered automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-text" style={{ animationDelay: '0.3s' }}>
              <Button className="bg-gradient-to-r from-tasktide-orange to-tasktide-teal hover:shadow-lg hover:shadow-tasktide-teal/20 text-white button-3d">
                View Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-tasktide-teal button-3d">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden md:block animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-tasktide-teal/20 to-tasktide-blue/20 rounded-lg backdrop-blur-sm transform rotate-6 border border-white/10"></div>
              <div className="relative glass-card rounded-lg p-6 shadow-xl">
                <div className="aspect-video bg-dark-400 rounded-md flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-tasktide-blue/30 to-tasktide-teal/30 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <Button variant="ghost" className="bg-white/20 hover:bg-white/30 rounded-full h-16 w-16 flex items-center justify-center backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white" />
                  </Button>
                  <div className="absolute bottom-4 left-4 text-white text-xl font-medium">Agency Showcase</div>
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
