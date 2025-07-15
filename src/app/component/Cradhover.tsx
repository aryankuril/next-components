"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [41, 42, 33, 24, 25, 26, 27, 28, 29, 22];

export default function CardHover() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll to start on mount
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center overflow-x-auto">
      <div
        ref={containerRef}
        className="flex gap-2 px-4 md:px-12 w-max md:w-full scroll-smooth snap-x snap-mandatory"
      >
        {images.map((id, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`
                snap-start transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative
                ${
                  activeIndex === null || activeIndex === index
                    ? "flex-[6] opacity-100"
                    : "flex-[0.7] opacity-20"
                }
                w-[30px] md:w-[80px] h-[300px] md:h-[500px]
              `}
            >
              <div className="bg-white rounded-lg overflow-hidden flex items-center justify-center h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={`https://picsum.photos/id/${id}/800/800`}
                    alt={`Image ${index}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
