'use client';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed flex justify-center items-center bottom-10 right-10 p-3 sm:p-4 md:p-5 w-12 sm:w-14 md:w-14 h-12 sm:h-14 md:h-14 bg-[#00352C] text-white rounded-full shadow-2xl hover:shadow-2xl hover:bg-[#005a3c] focus:outline-none transform transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <span className="text-xl sm:text-2xl md:text-3xl">↑</span>
    </button>
  );
};

export default ScrollToTopButton;
