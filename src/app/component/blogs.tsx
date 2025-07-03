"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogsData = [
  {
    id: 1,
    image: "/images/card-img.jpg",
    title: "Mastering SEO in 2024",
    subtitle: "Boost your traffic with modern SEO strategies and stay ahead with Google's evolving algorithms to  leads results.",
  },
  {
    id: 2,
    image: "/images/card-img.jpg",
    title: "Social Media Hacks",
    subtitle: "Top social tactics that actually work to increase followers, boost engagement, and drive real leads results.",
  },
  {
    id: 3,
    image: "/images/card-img.jpg",
    title: "The Power of Email Marketing",
    subtitle: "Increase conversions with personalized, targeted email campaigns designed to nurture leads and grow revenue.",
  },
  {
    id: 4,
    image: "/images/card-img.jpg",
    title: "Website Speed Optimization",
    subtitle: "Improve user experience, boost SEO rankings, and reduce bounce rates by optimizing your website performance.",
  },
  {
    id: 5,
    image: "/images/card-img.jpg",
    title: "AI Tools for Business",
    subtitle: "Leverage AI to automate repetitive tasks, gain insights from data, and supercharge your leads business growth.",
  },
];

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-[#121212] mb-6 mt-10">
        Blogs
      </h2>
      <Slider {...settings}>
        {blogsData.map((item) => (
          <div key={item.id} className="p-4">
            <div className="flex flex-col h-full bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden">
              {/* Image */}
              <div className="relative w-full h-[180px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col  flex-grow">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-gray-600 text-sm mb-3">{item.subtitle}</p>
                <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blogs;
