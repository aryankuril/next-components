"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
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
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">3D Slider</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="!w-44 md:!w-48 lg:!w-52">
            <div className="h-60 md:h-64 lg:h-72 w-full overflow-hidden rounded-xl shadow-lg relative">
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
