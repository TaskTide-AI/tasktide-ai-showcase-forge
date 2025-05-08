
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
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutMission from "./pages/AboutMission";
import AboutTechnology from "./pages/AboutTechnology";

// Initialize scroll animations
const initScrollAnimations = () => {
  // Set dark mode by default
  document.documentElement.classList.add('dark');
  
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

  // Initial check for elements already in viewport - run immediately and then again after a slight delay
  handleScrollAnimation();
  setTimeout(handleScrollAnimation, 100);
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Clean up on unmount
  return () => {
    window.removeEventListener('scroll', handleScrollAnimation);
  };
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/mission" element={<AboutMission />} />
            <Route path="/about/technology" element={<AboutTechnology />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
