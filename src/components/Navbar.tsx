import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };
  
  return (
    <nav className={`fixed top-0 w-full z-30 transition-all duration-300 ${scrolled ? 'bg-dark-500/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-gradient text-xl font-bold">
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
                  Our Projects <ChevronDown className="h-4 w-4" />
                </Button>
                <div className="absolute left-0 mt-2 w-80 rounded-xl shadow-lg glass-card border border-white/10 backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-3">
                    <Link to="/projects" className="block px-4 py-3 text-sm hover:bg-dark-300/50 transition-colors rounded-md mx-1">
                      <div className="text-tasktide-teal font-medium">All Projects</div>
                      <div className="text-gray-300 text-xs mt-1">Browse our complete portfolio of AI automation solutions.</div>
                    </Link>
                    <Link to="/projects/llm-workflows" className="block px-4 py-3 text-sm border-t border-gray-700/30 hover:bg-dark-300/50 transition-colors rounded-md mx-1">
                      <div className="text-tasktide-purple font-medium">LLM Workflows</div>
                      <div className="text-gray-300 text-xs mt-1">Advanced language model implementations for business processes.</div>
                    </Link>
                    <Link to="/projects/ai-agents" className="block px-4 py-3 text-sm border-t border-gray-700/30 hover:bg-dark-300/50 transition-colors rounded-md mx-1">
                      <div className="text-tasktide-teal font-medium">AI Agents</div>
                      <div className="text-gray-300 text-xs mt-1">Autonomous AI agents for task automation and decision making.</div>
                    </Link>
                    <Link to="/projects/data-processing" className="block px-4 py-3 text-sm border-t border-gray-700/30 hover:bg-dark-300/50 transition-colors rounded-md mx-1">
                      <div className="text-tasktide-orange font-medium">Data Processing</div>
                      <div className="text-gray-300 text-xs mt-1">Efficient data processing and transformation pipelines.</div>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* About Us instead of Solo Innovator */}
              <div className="relative group">
                <Button variant="ghost" className="font-medium text-white hover:text-tasktide-teal px-3 py-2 rounded-md flex items-center gap-1 top-ribbon-button-hover">
                  About Us <ChevronDown className="h-4 w-4" />
                </Button>
                <div className="absolute left-0 mt-2 w-48 rounded-xl shadow-lg glass-card border border-white/10 backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <Link to="/about" className="block px-4 py-2 text-sm text-white hover:bg-dark-300/50 transition-colors rounded-md mx-1">
                      Company Overview
                    </Link>
                    <Link to="/about/mission" className="block px-4 py-2 text-sm text-white hover:bg-dark-300/50 transition-colors rounded-md mx-1">
                      Our Mission
                    </Link>
                    <Link to="/about/technology" className="block px-4 py-2 text-sm text-white hover:bg-dark-300/50 transition-colors rounded-md mx-1">
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
            <Button 
              variant="ghost"
              className="text-white hover:text-tasktide-teal hover:bg-dark-300/50"
              size="icon"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 glass-card">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal hover:bg-dark-300/50 transition-colors">
            Home
          </Link>
          <div className="relative">
            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal flex items-center justify-between hover:bg-dark-300/50 transition-colors">
              Our Projects
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="pl-6 space-y-1">
              <Link to="/projects" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal hover:bg-dark-300/50 transition-colors">
                All Projects
              </Link>
              <Link to="/projects/llm-workflows" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-purple hover:bg-dark-300/50 transition-colors">
                LLM Workflows
              </Link>
              <Link to="/projects/ai-agents" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal hover:bg-dark-300/50 transition-colors">
                AI Agents
              </Link>
              <Link to="/projects/data-processing" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-orange hover:bg-dark-300/50 transition-colors">
                Data Processing
              </Link>
            </div>
          </div>
          <div className="relative">
            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal flex items-center justify-between hover:bg-dark-300/50 transition-colors">
              About Us
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="pl-6 space-y-1">
              <Link to="/about" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal hover:bg-dark-300/50 transition-colors">
                Company Overview
              </Link>
              <Link to="/about/mission" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal hover:bg-dark-300/50 transition-colors">
                Our Mission
              </Link>
              <Link to="/about/technology" className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-tasktide-teal hover:bg-dark-300/50 transition-colors">
                Our Technology
              </Link>
            </div>
          </div>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-tasktide-teal hover:bg-dark-300/50 transition-colors">
            Contact
          </Link>
          <div className="pt-2">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <Input 
                type="text" 
                placeholder="Search..." 
                className="bg-dark-400/50 border-dark-300 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="ghost" size="icon" className="ml-1">
                <Search className="h-4 w-4 text-white" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/80 z-40 flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium text-white">Search</h2>
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input 
                type="text"
                placeholder="Search for projects, technologies..."
                className="bg-dark-400/50 border-dark-300 text-white pr-10 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
