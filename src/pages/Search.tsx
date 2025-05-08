import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Mock data for search results
const mockProjects = [
  {
    id: 1,
    title: "AI Document Processor",
    category: "LLM Workflows",
    description: "Automated document analysis and data extraction system powered by advanced language models.",
    tags: ["document-processing", "llm", "automation"],
    url: "/projects/llm-workflows/document-processor"
  },
  {
    id: 2,
    title: "Customer Service AI Agent",
    category: "AI Agents",
    description: "Intelligent virtual assistant that handles customer inquiries and provides real-time support.",
    tags: ["customer-service", "virtual-assistant", "ai-agent"],
    url: "/projects/ai-agents/customer-service"
  },
  {
    id: 3,
    title: "Data Pipeline Automator",
    category: "Data Processing",
    description: "End-to-end data processing system that automates collection, transformation, and analysis.",
    tags: ["data-pipeline", "automation", "etl"],
    url: "/projects/data-processing/pipeline-automator"
  },
  {
    id: 4,
    title: "Industry Knowledge Base",
    category: "LLM Workflows",
    description: "Dynamic knowledge repository that leverages LLMs to organize and retrieve domain-specific information.",
    tags: ["knowledge-base", "information-retrieval", "llm"],
    url: "/projects/llm-workflows/knowledge-base"
  },
  {
    id: 5,
    title: "Procurement Assistant",
    category: "AI Agents",
    description: "AI-powered procurement solution that streamlines vendor selection and purchasing processes.",
    tags: ["procurement", "ai-agent", "business-process"],
    url: "/projects/ai-agents/procurement-assistant"
  }
];

const mockContent = [
  {
    id: 1,
    title: "About TaskTide AI",
    category: "Company",
    description: "Learn about our mission to transform businesses through AI automation.",
    url: "/about"
  },
  {
    id: 2,
    title: "Our Technology",
    category: "Company",
    description: "Discover the advanced technologies that power our AI solutions.",
    url: "/about/technology"
  },
  {
    id: 3,
    title: "Contact Us",
    category: "Support",
    description: "Get in touch with our team to discuss your AI automation needs.",
    url: "/contact"
  }
];

const Search = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState({ projects: [], content: [] });
  const [isSearching, setIsSearching] = useState(false);

  // Parse the query parameter
  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q') || '';
    setSearchQuery(query);
    if (query) {
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = (query) => {
    setIsSearching(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase();
      
      // Filter projects based on search query
      const matchedProjects = mockProjects.filter(project => 
        project.title.toLowerCase().includes(normalizedQuery) || 
        project.description.toLowerCase().includes(normalizedQuery) ||
        project.category.toLowerCase().includes(normalizedQuery) ||
        project.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
      );
      
      // Filter content based on search query
      const matchedContent = mockContent.filter(item => 
        item.title.toLowerCase().includes(normalizedQuery) || 
        item.description.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery)
      );
      
      setResults({
        projects: matchedProjects,
        content: matchedContent
      });
      
      setIsSearching(false);
    }, 500); // Simulate network delay
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Update URL with new search query
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('q', searchQuery);
      window.history.pushState({}, '', `${location.pathname}?${searchParams}`);
      
      performSearch(searchQuery);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-white mb-8">Search Results</h1>
        
        {/* Search form */}
        <div className="mb-10">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for projects, technologies..."
              className="bg-dark-700 border-dark-500 text-white flex-grow"
            />
            <Button type="submit" variant="default" className="bg-tasktide-teal hover:bg-tasktide-teal/80">
              <SearchIcon className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
        
        {/* Loading state */}
        {isSearching ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tasktide-teal"></div>
          </div>
        ) : (
          <>
            {/* No results state */}
            {searchQuery && results.projects.length === 0 && results.content.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
                <p className="text-gray-400">Try different keywords or browse our projects.</p>
                <Button variant="outline" className="mt-6" asChild>
                  <Link to="/projects">Browse All Projects</Link>
                </Button>
              </div>
            )}
            
            {/* Results */}
            {searchQuery && (results.projects.length > 0 || results.content.length > 0) && (
              <div>
                {/* Projects results */}
                {results.projects.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-6">Projects ({results.projects.length})</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      {results.projects.map((project) => (
                        <Link 
                          key={project.id} 
                          to={project.url}
                          className="block p-6 rounded-lg bg-dark-800 border border-dark-600 hover:border-tasktide-teal transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-medium text-white">{project.title}</h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dark-700 text-tasktide-teal">
                              {project.category}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-300">{project.description}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                              <span 
                                key={index} 
                                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-dark-700 text-gray-300"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Content results */}
                {results.content.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-6">Pages ({results.content.length})</h2>
                    <div className="space-y-4">
                      {results.content.map((item) => (
                        <Link 
                          key={item.id} 
                          to={item.url}
                          className="block p-4 rounded-lg bg-dark-800 border border-dark-600 hover:border-tasktide-teal transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-medium text-white">{item.title}</h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dark-700 text-gray-300">
                              {item.category}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-300">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;