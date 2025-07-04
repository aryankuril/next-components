"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Tikoh Amin",
    rating: 4,
    content:
      "When you think of Apple you automatically think expensive if you're anything like me. When purchasing this laptop I was skeptical on laptops I purchased.",
    tagline: "Great Support",
    designation: "CEO, ExampleCorp",
    image: "/images/card-img.jpg",
  },
  {
    name: "Jane Smith",
    rating: 5,
    content:
      "Excellent product quality, exceeded my expectations!",
    tagline: "Outstanding Experience",
    designation: "CMO, TechCorp",
    image: "/images/card-img.jpg",
  },
  {
    name: "Alex Johnson",
    rating: 2,
    content:
      "Support team was helpful but delivery could be faster.",
    tagline: "Fast & Efficient",
    designation: "Manager, SoftInc",
    image: "/images/card-img.jpg",
  },
  {
    name: "Emily Brown",
    rating: 1,
    content:
      "Product did not meet my expectations.",
    tagline: "Could Improve",
    designation: "Founder, StartUpX",
    image: "/images/card-img.jpg",
  },
];

const TestimonialCarousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 8,
        },
      },
    },
  });

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-[#121212] mb-10">
        Testimonial Carousel
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((item, index) => (
          <div key={index} className="keen-slider__slide p-4">
            <div className="flex flex-col justify-between h-full bg-white shadow-lg border border-gray-200 rounded-lg p-6">
              
              <div className="flex flex-row gap-3 text-blue-500 text-2xl mb-4">
                <FaQuoteLeft />
                <p className="italic text-sm">{item.tagline}</p>
              </div>

              <p className="text-gray-700 mb-4 text-sm">{item.content}</p>

              <div className="flex justify-center md:justify-start items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-4 w-4 ${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm">{item.rating}/5</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-gray-300"
                />
                <div>
                  <h3 className="font-bold text-base">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
