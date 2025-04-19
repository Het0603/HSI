'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import hero1 from "../../public/Bolivia.jpg";

export default function FirstTimeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white max-w-3xl w-full relative flex">
          <div className="w-1/2 p-6 flex flex-col justify-center items-center">
            <h2 className="text-4xl text-center font-semibold mb-4 text-[#293941]">End animal cruelty</h2>
            <hr className="w-18 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-4 dark:bg-[#d9dcde]" />
            <p className="text-gray-700 mb-4 text-center text-md">
              For every animal saved, countless others are still suffering. Your donation can create a future
              where animals no longer have to suffer cruelty and abuse.
            </p>
            <button onClick={() => setIsOpen(false)} className="bg-red-700 text-white text-xl px-4 py-4 max-w-[15rem] font-extrabold w-full cursor-pointer hover:bg-red-700 transition-colors duration-200">
              Start Saving Lives
            </button>
            <hr className="w-18 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-4 dark:bg-[#d9dcde]" />
          </div>
          <div className="w-1/2 relative">
            <Image
              src={hero1}
              alt="Rescued Dog"
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-4 right-4 text-gray cursor-pointer text-2xl rounded-full px-1"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 hover:text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  );
}
