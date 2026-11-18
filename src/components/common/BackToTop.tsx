import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 bg-white border border-cygnusa-border text-cygnusa-void hover:text-cygnusa-sky hover:border-cygnusa-sky/50 rounded-[5px] shadow-card transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cygnusa-sky active:scale-95"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
