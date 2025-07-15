"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const images = [
  "/images/flower1.jpg",
  "/images/flower2.jpg",
  "/images/flower3.jpg",
  "/images/flower4.jpg",
  "/images/flower5.jpg",
  "/images/flower6.jpg",
  "/images/flower7.jpg",
];

const Slider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<any>(null);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Ping-pong autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      const swiper = swiperRef.current?.swiper;
      if (!swiper) return;

      if (direction === "forward") {
        if (swiper.isEnd) {
          setDirection("backward");
          swiper.slidePrev();
        } else {
          swiper.slideNext();
        }
      } else {
        if (swiper.isBeginning) {
          setDirection("forward");
          swiper.slideNext();
        } else {
          swiper.slidePrev();
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div
      className={`mx-auto px-4 ${
        isMobile ? "pt-10 pb-10" : "py-10"
      } max-w-4xl`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        3D Slider
      </h2>

      <Swiper
        ref={swiperRef}
        direction={isMobile ? "vertical" : "horizontal"}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: isMobile ? 300 : 200,
          modifier: isMobile ? 6 : 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={!isMobile}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={`w-full ${isMobile ? "h-[720px]" : "h-auto"} overflow-visible`}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className={`${
              isMobile
                ? "!w-[260px] !h-[320px]"
                : "!w-44 md:!w-48 lg:!w-52 !h-[300px] md:!h-[350px]"
            } transition-transform duration-300`}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg z-[1] swiper-slide-active:z-[10]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
