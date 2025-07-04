/* eslint-disable @next/next/no-img-element */

"use client";

import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Tikoh Amin",
    rating: 4,
    content:
      "When you think of Apple you automatically think expensive if your anything like me. When purchasing this laptop I was skeptical on laptops I purchased.",
    tagline: "Great Support",
    designation: "CEO, ExampleCorp",
    image: "/images/card-img.jpg",
  },
  {
    name: "Jane Smith",  
    rating: 5,
    content:
      "When you think of Apple you automatically think expensive if your anything like me. When purchasing this laptop I was skeptical on laptops I purchased.",
    tagline: "Outstanding Experience",
    designation: "CEO, ExampleCorp",
    image: "/images/card-img.jpg",
  },
  {
    name: "Alex Johnson",
    rating: 2,
    content:
      "When you think of Apple you automatically think expensive if your anything like me. When purchasing this laptop I was skeptical on laptops I purchased.",
    tagline: "Fast & Efficient",
    designation: "CEO, ExampleCorp",
    image: "/images/card-img.jpg",
  },
  {
    name: "Emily Brown",
    rating: 1,
    content:
      "When you think of Apple you automatically think expensive if your anything like me. When purchasing this laptop I was skeptical on laptops I purchased.",
    tagline: "Great Support",
    designation: "CEO, ExampleCorp",
    image: "/images/card-img.jpg",
  },
  {
    name: "Michael Scott",
    rating: 5,
    content:
      "When you think of Apple you automatically think expensive if your anything like me. When purchasing this laptop I was skeptical on laptops I purchased.",
    tagline: "Outstanding Experience",
    designation: "CEO, ExampleCorp",
    image: "/images/card-img.jpg",
  },
  {
    name: "Dwight Schrute",
    rating: 5,
    content:
      "When you think of Apple you automatically think expensive if your anything like me. When purchasing this laptop I was skeptical on laptops I purchased.",
    tagline: "Great Support",
    designation: "CEO, ExampleCorp",
    image: "/images/card-img.jpg",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-[#121212] mb-6 mt-10">
        TestimonialCarousel
      </h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="p-4">
            <div className="flex flex-col justify-between h-full bg-white shadow-lg border border-gray-200 rounded-lg p-6">
              <div className="flex flex-row gap-5 text-blue-500 text-2xl mb-4">
                <FaQuoteLeft />
                <p className="italic text-[15px]">{item.tagline}</p>
              </div>

              <p className="text-gray-700 mb-2 text-sm">{item.content}</p>

              <div className="flex justify-center md:justify-start items-center">
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

              <div className="flex items-center gap-3 pt-2 border-none">
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
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
