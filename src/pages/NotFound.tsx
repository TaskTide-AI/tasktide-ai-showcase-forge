import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useInstantAnimation from '../hooks/use-instant-animation';

const NotFound = () => {
  const location = useLocation();
  
  // Apply animations immediately without waiting for scroll
  useInstantAnimation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex items-center justify-center animate-bg-container">      <div className="text-center animate-bg-panel rounded-xl p-10">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-300 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-400 hover:text-blue-300 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
