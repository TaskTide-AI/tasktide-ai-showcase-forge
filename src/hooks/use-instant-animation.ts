import { useEffect } from 'react';

/**
 * A hook that immediately applies the 'animated' class to all animation elements
 * to ensure they're visible without requiring scroll on subpages.
 */
export const useInstantAnimation = () => {
  useEffect(() => {
    // Function to apply animations immediately
    const applyAnimations = () => {
      const animationElements = document.querySelectorAll('.animate-on-scroll, .animate-text, .animate-card');
      animationElements.forEach(element => {
        element.classList.add('animated');
      });
    };

    // Apply animations with a small delay to ensure DOM is ready
    setTimeout(applyAnimations, 50);
    
    // Also apply immediately
    applyAnimations();
  }, []);
};

export default useInstantAnimation;
