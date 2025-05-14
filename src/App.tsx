import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import AIAgents from "./pages/AIAgents";
import DataProcessing from "./pages/DataProcessing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutMission from "./pages/AboutMission";
import AboutTechnology from "./pages/AboutTechnology";
import Search from "./pages/Search";
import AnimatedBackground from "./components/AnimatedBackground";

// Initialize scroll animations
const initScrollAnimations = () => {
  // Set dark mode by default
  document.documentElement.classList.add('dark');
  
  // Update body class based on path
  const updateBodyClass = () => {
    // Set home-page class only on root path
    if (window.location.pathname === '/') {
      document.body.classList.add('home-page');
    } else {
      document.body.classList.remove('home-page');
    }
  };
  
  // Function to check if an element is in viewport
  const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9
    );
  };

  // Function to handle scroll animations
  const handleScrollAnimation = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-text, .animate-card');
    
    animatedElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  };

  // Immediately animate all elements on non-homepage routes
  const animateAllIfNotHomepage = () => {
    updateBodyClass();
    
    // If not on homepage, animate everything immediately
    if (window.location.pathname !== '/') {
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-text, .animate-card');
      animatedElements.forEach((element) => {
        element.classList.add('animated');
      });
    } else {
      // On homepage, only animate visible elements
      handleScrollAnimation();
    }
  };

  // Initial setup
  animateAllIfNotHomepage();
  
  // Run again after a slight delay to ensure all elements are processed
  setTimeout(animateAllIfNotHomepage, 100);
  
  // Add scroll event listener for homepage animations
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Handle route changes
  const handleRouteChange = () => {
    setTimeout(animateAllIfNotHomepage, 100);
  };
  
  // Listen for history/navigation changes
  window.addEventListener('popstate', handleRouteChange);
  
  // Clean up on unmount
  return () => {
    window.removeEventListener('scroll', handleScrollAnimation);
    window.removeEventListener('popstate', handleRouteChange);
  };
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize scroll animations and get cleanup function
    const cleanup = initScrollAnimations();
    
    return () => {
      // Clean up event listeners when component unmounts
      cleanup();
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatedBackground />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} /><Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/projects/ai-agents" element={<AIAgents />} />
            <Route path="/projects/data-processing" element={<DataProcessing />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/mission" element={<AboutMission />} />
            <Route path="/about/technology" element={<AboutTechnology />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
