import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dark-200 border-b border-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-tasktide-teal text-xl font-bold bg-gradient-to-r from-tasktide-teal to-tasktide-blue bg-clip-text text-transparent">TaskTide AI</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#" className="font-medium text-white hover:text-tasktide-teal px-3 py-2 rounded-md top-ribbon-button-hover">
                Home
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-medium text-white hover:text-tasktide-teal px-3 py-2 rounded-md flex items-center gap-1 top-ribbon-button-hover">
                    Projects <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-dark-200 border-white/10 backdrop-blur-lg">
                  <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white">
                    <a href="#projects" className="w-full">All Projects</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white">
                    <a href="#project1" className="w-full">Project 1</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white">
                    <a href="#project2" className="w-full">Project 2</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white">
                    <a href="#project3" className="w-full">Project 3</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-medium text-white hover:text-tasktide-teal px-3 py-2 rounded-md flex items-center gap-1 top-ribbon-button-hover">
                    Team <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-dark-200 border-white/10 backdrop-blur-lg">
                  <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white">
                    <a href="#people" className="w-full">Our Team</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white">
                    <a href="#leadership" className="w-full">Leadership</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 text-white">
                    <a href="#developers" className="w-full">Developers</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#contact" className="font-medium text-white hover:text-tasktide-teal px-3 py-2 rounded-md top-ribbon-button-hover">
                Contact
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Button className="bg-gradient-to-r from-tasktide-orange to-tasktide-teal hover:shadow-lg hover:shadow-tasktide-orange/20 text-white button-3d transition-all duration-300">
              Get Started
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="bg-dark-200 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-tasktide-teal focus:outline-none"
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-200 shadow-lg">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal">
            Home
          </a>
          <div className="relative">
            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal">
              Projects
            </button>
            <div className="pl-6 space-y-1">
              <a href="#projects" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-tasktide-teal">
                All Projects
              </a>
              <a href="#project1" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-tasktide-teal">
                Project 1
              </a>
              <a href="#project2" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-tasktide-teal">
                Project 2
              </a>
              <a href="#project3" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-tasktide-teal">
                Project 3
              </a>
            </div>
          </div>
          <div className="relative">
            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal">
              Team
            </button>
            <div className="pl-6 space-y-1">
              <a href="#people" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-tasktide-teal">
                Our Team
              </a>
              <a href="#leadership" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-tasktide-teal">
                Leadership
              </a>
              <a href="#developers" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-tasktide-teal">
                Developers
              </a>
            </div>
          </div>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal">
            Contact
          </a>
          <div className="pt-2">
            <Button className="w-full bg-gradient-to-r from-tasktide-orange to-tasktide-teal hover:bg-tasktide-teal text-white button-3d transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
