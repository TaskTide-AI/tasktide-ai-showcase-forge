
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, Briefcase, Info } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0d1321] border-b border-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-tasktide-teal text-xl font-bold bg-gradient-to-r from-tasktide-teal to-tasktide-blue bg-clip-text text-transparent">
                TaskTide AI
              </Link>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/" className="font-medium text-white hover:text-tasktide-teal px-3 py-2 rounded-md top-ribbon-button-hover">
                Home
              </Link>
              
              {/* Projects Dropdown - Modified to show on hover with descriptions */}
              <div className="relative group">
                <Button variant="ghost" className="font-medium text-white hover:text-tasktide-teal px-3 py-2 rounded-md flex items-center gap-1 top-ribbon-button-hover">
                  <Briefcase className="h-4 w-4" />
                  Our Projects <ChevronDown className="h-4 w-4" />
                </Button>
                <div className="absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-[#0d1321] border-white/10 backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <Link to="/projects" className="block px-4 py-2 text-sm text-white hover:bg-white/10">
                      All Projects
                    </Link>
                    <Link to="/projects/llm-workflows" className="block px-4 py-3 text-sm border-t border-gray-700">
                      <div className="text-blue-400 font-medium">LLM Workflows</div>
                      <div className="text-gray-300 text-xs mt-1">Advanced language model pipelines and automation solutions.</div>
                    </Link>
                    <Link to="/projects/ai-agents" className="block px-4 py-3 text-sm border-t border-gray-700">
                      <div className="text-blue-400 font-medium">AI Agents</div>
                      <div className="text-gray-300 text-xs mt-1">Autonomous AI agents for task automation and decision making.</div>
                    </Link>
                    <Link to="/projects/data-processing" className="block px-4 py-3 text-sm border-t border-gray-700">
                      <div className="text-blue-400 font-medium">Data Processing</div>
                      <div className="text-gray-300 text-xs mt-1">Efficient data processing and transformation pipelines.</div>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* About Us instead of Solo Innovator */}
              <div className="relative group">
                <Button variant="ghost" className="font-medium text-white hover:text-tasktide-teal px-3 py-2 rounded-md flex items-center gap-1 top-ribbon-button-hover">
                  <Info className="h-4 w-4" />
                  About Us <ChevronDown className="h-4 w-4" />
                </Button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#0d1321] border-white/10 backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <Link to="/about" className="block px-4 py-2 text-sm text-white hover:bg-white/10">
                      Company Overview
                    </Link>
                    <Link to="/about/mission" className="block px-4 py-2 text-sm text-white hover:bg-white/10">
                      Our Mission
                    </Link>
                    <Link to="/about/technology" className="block px-4 py-2 text-sm text-white hover:bg-white/10">
                      Our Technology
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="font-medium text-white hover:text-tasktide-teal px-3 py-2 rounded-md top-ribbon-button-hover">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:shadow-lg hover:shadow-blue-500/20 text-white button-3d transition-all duration-300">
              Get Started
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="bg-[#0d1321] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-tasktide-teal focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0d1321] shadow-lg">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal">
            Home
          </Link>
          <div className="relative">
            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              Our Projects
            </button>
            <div className="pl-6 space-y-1">
              <Link to="/projects" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal">
                All Projects
              </Link>
              <Link to="/projects/llm-workflows" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal">
                LLM Workflows
              </Link>
              <Link to="/projects/ai-agents" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal">
                AI Agents
              </Link>
              <Link to="/projects/data-processing" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal">
                Data Processing
              </Link>
            </div>
          </div>
          <div className="relative">
            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal flex items-center">
              <Info className="h-4 w-4 mr-2" />
              About Us
            </button>
            <div className="pl-6 space-y-1">
              <Link to="/about" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal">
                Company Overview
              </Link>
              <Link to="/about/mission" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal">
                Our Mission
              </Link>
              <Link to="/about/technology" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal">
                Our Technology
              </Link>
            </div>
          </div>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal">
            Contact
          </Link>
          <div className="pt-2">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:bg-tasktide-teal text-white button-3d transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
