'use client';
import { useState, useEffect } from 'react';

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
        <div className="bg-white max-w-4xl w-full relative flex">
          <div className="w-1/2 p-6 flex flex-col justify-center gap-10">
            <h2 className="text-3xl text-center font-bold mb-2 text-[#293941]">End animal cruelty</h2>
            <p className="text-gray-700 mb-4">
              For every animal saved, countless others are still suffering. Your donation can create a future
              where animals no longer have to suffer cruelty and abuse.
            </p>
            <button onClick={() => setIsOpen(false)} className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold w-full">
              Start Saving Lives
            </button>
          </div>
          <div className="w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1560807707-8cc77767d783"
              alt="Rescued Dog"
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-2 right-2 text-white"
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
