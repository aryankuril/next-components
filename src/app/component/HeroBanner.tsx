"use client";

import Image from "next/image";

const banner = {
  // You can upload either image or video

  // type: "video",
  // desktop: "/video/desktop-video.mp4",
  // mobile: "/video/mobile-video.mp4",

  type: "image",
  desktop: "/images/desktop-banner.png",
  mobile: "/images/mobile-banner.png", // if missing, fallback happens
};

const HeroBanner = () => {
  return (
    <div className="relative max:w-[1800px] w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden">   
      {/* Desktop Display - Hidden on mobile */}
      <div className="hidden md:block w-full h-full">
        {banner.type === "image" ? (
          <Image
            src={banner.desktop}
            alt="Hero Banner"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <video
            src={banner.desktop}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Mobile Display - Shows on mobile only */}
      <div className="block md:hidden w-full h-full">
        {banner.type === "image" ? (
          <Image
            src={banner.mobile || banner.desktop}
            alt="Hero Banner"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <video
            src={banner.mobile || banner.desktop}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
