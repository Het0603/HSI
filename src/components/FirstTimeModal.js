'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import hero1 from "../../public/hero4.jpg";

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
      <div className="fixed inset-0 flex items-center justify-center px-4 sm:px-12 md:px-16 lg:px-24 z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-4xl w-full relative">
          <div className="relative w-full h-[450px] sm:h-[450px] md:h-[450px] lg:h-[550px] overflow-hidden">
            <Image
              src={hero1}
              alt="Hero Image"
              className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-70"
            />

            <div className="flex flex-col justify-center absolute inset-0 bg-opacity-50 px-6 sm:px-10 md:px-16 lg:px-24 text-white">
              <p className="text-lg sm:text-xl md:text-2xl max-w-[38rem]">
                <span className="text-2xl lg:text-4xl">End animal cruelty</span>
                <br />
                <br />
                For every animal saved, countless others are still suffering. Your donation can create a future
                where animals no longer have to suffer cruelty and abuse.
              </p>
              <button onClick={() => setIsOpen(false)} style={{ fontFamily: "Noto Sans" }}
                className="w-full sm:w-[35%] mt-6 bg-red-600 px-5 sm:px-6 py-2 rounded-lg sm:rounded-xl font-medium text-white hover:bg-red-700 text-base sm:text-lg md:text-xl transition-colors duration-200"
              >
                Start Saving Lives
              </button>
            </div>
            <button
              className="absolute top-2 right-2 text-white cursor-pointer text-2xl hover:text-gray-500 rounded-full px-1"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      </div>
    )
  );
}
