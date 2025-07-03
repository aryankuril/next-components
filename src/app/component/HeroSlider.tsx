"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    type: "image",
    desktop: "/images/desktop-banner.png",
    mobile: "/images/mobile-banner.png",
    heading: "Welcome to Our Platform",
    subText: "Discover the best services for you",
  },
  {
    id: 2,
    type: "video",
    desktop: "/video/desktop-video.mp4",
    mobile: "/video/mobile-video.mp4",
    heading: "Experience Innovation",
    subText: "We deliver cutting-edge solutions",
  },
  {
    id: 3,
    type: "image",
    desktop: "/images/desktop-banner.png",
    mobile: "/images/mobile-banner.png",
    heading: "Join Our Community",
    subText: "Be part of something great",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden">
      {slides.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
        >
          {/* Desktop Display */}
          <div className="hidden md:block w-full h-full">
            {item.type === "image" ? (
              <Image
                src={item.desktop}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === currentSlide}
              />
            ) : (
              <video
                src={item.desktop}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Mobile Display with fallback */}
          <div className="block md:hidden w-full h-full">
            {item.type === "image" ? (
              <Image
                src={item.mobile ? item.mobile : item.desktop}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === currentSlide}
              />
            ) : (
              <video
                src={item.mobile ? item.mobile : item.desktop}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      ))}

      {/* Text Content */}
    <div className="absolute bottom-12 left-1/2 w-[500px] -translate-x-1/2 flex flex-col items-center text-white text-center px-4 z-10">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
    {slides[currentSlide]?.heading}
  </h1>
  <p className="text-base sm:text-lg md:text-xl">
    {slides[currentSlide]?.subText}
  </p>
  <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 lg:py-2 md:py-3 text-sm sm:text-base md:text-lg rounded-full hover:bg-gray-200 transition">
  Learn More
</button>

</div>


      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              currentSlide === i ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
