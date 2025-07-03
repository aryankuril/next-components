"use client";

import { useEffect, useRef, useState } from "react";

const NumberCounter = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const targetNumber = 120;   // Target count value
  const duration = 2000;      // Animation duration in ms

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCountAnimation();
            observer.disconnect(); // Run only once
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCountAnimation = () => {
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const currentCount = Math.min(
        Math.floor((progress / duration) * targetNumber),
        targetNumber
      );
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full sm:w-[90%] md:w-[70%] lg:w-[438px] h-60 sm:h-72 md:h-80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-black from-gray-900 to-black shadow-xl mx-auto px-10"
     
    >
      <div className="absolute inset-0 bg-black opacity-20 z-0 rounded-2xl"></div>

      <div className="relative z-10">
        <span className="text-white text-[84px] sm:text-5xl md:text-6xl font-bold leading-none">
          {count}
          <span className="text-[#99CF63]">+</span>
        </span>

        <p className="text-[#878C91] text-[19px] sm:text-base mt-2">
          Project finish with superbly
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-2 mt-4 flex-wrap">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center"
          ></div>
        ))}
        <div className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center">
          <span className="text-gray-300 lg:-mr-3 lg:-mt-2 -mt-2 text-7xl">+</span>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
