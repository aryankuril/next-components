// app/components/ThreeDCarousel.tsx
"use client";

import { useState, useMemo } from "react";

const images = [
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/anton-ploom.jpg", caption: "Anton Ploom" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/annija-kopstsale.jpg", caption: "Annija Kopshtale" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/daria-elmakova.jpg", caption: "Daria Elmakova" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/margaret-rodchenkova.jpg", caption: "Margaret Rodchenkova" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/marta-ozolina.jpg", caption: "Marta Ozolina" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/victoria-ananyan.jpg", caption: "Victoria Ananyan" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ekaterina-gusarova.jpg", caption: "Ekaterina Gusarova" },
];

export default function ThreeDCarousel() {
const [step, setStep] = useState(0);


  // 💡 pick sizes once per render so we can use the same z‑distance everywhere
  const { width, height, z } = useMemo(() => {
    /* 
      0‑639px : slide 70vw wide
      640‑1023 : 48 (rem) ≈ 768px base slide 320px
      >=1024  : 300px slide
    */
    if (typeof window === "undefined") {
      return { width: 300, height: 400, z: 500 }; // SSR fallback
    }

    const vw = window.innerWidth;
    if (vw < 640) {
      const w = vw * 0.7;           // 70vw
      return { width: w, height: w * 1.33, z: w * 1.1 };
    } else if (vw < 1024) {
      return { width: 320, height: 420, z: 500 };
    } else {
      return { width: 300, height: 400, z: 500 };
    }
  }, []);

  const angle = 360 / images.length;

const next = () => setStep((p) => p + 1);
const prev = () => setStep((p) => p - 1);


  return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-[#100000] text-white select-none px-4 overflow-x-hidden">
      {/* 3‑D scene */}
      <div
        className="relative mx-auto [perspective:1000px]"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* rotating ring */}
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 1s",
            transform: `translateZ(-${z}px) rotateY(-${step * angle}deg)`

          }}
        >
          {images.map((img, i) => (
            <figure
              key={i}
              className="absolute left-1/2 top-0 -translate-x-1/2 text-center"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                transform: `rotateY(${i * angle}deg) translateZ(${z}px)`,
              }}
            >
              <img
                src={img.src}
                alt={img.caption}
                style={{ height: `${height * 0.75}px` }}
                className="w-full object-cover rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
              <figcaption className="mt-2 text-xs sm:text-sm">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="mt-6 flex gap-8">
        <button
          onClick={prev}
          className="text-3xl sm:text-4xl hover:scale-110 transition-transform"
        >
          &lt;
        </button>
        <button
          onClick={next}
          className="text-3xl sm:text-4xl hover:scale-110 transition-transform"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
