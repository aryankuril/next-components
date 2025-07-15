// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";

// import img1 from "/Aryan IT/BB/next-component/public/images/img1.jpg";
// import img2 from "/Aryan IT/BB/next-component/public/images/img2.jpg";
// import img3 from "/Aryan IT/BB/next-component/public/images/img3.jpg";
// import img4 from "/Aryan IT/BB/next-component/public/images/img4.jpg";

// const images = [
//   {
//     src: img1,
//     author: "LUNDEV",
//     title: "CREATIVE DESIGN",
//     topic: "NATURE",
//     description: "Explore the wonders of nature with inspiring visuals and deep content.",
//   },
//   {
//     src: img2,
//     author: "LUNDEV",
//     title: "MODERN UI",
//     topic: "TECH",
//     description: "Delve into modern interfaces and the future of digital interaction.",
//   },
//   {
//     src: img3,
//     author: "LUNDEV",
//     title: "WILDLIFE SHOT",
//     topic: "ANIMAL",
//     description: "Experience the beauty of wildlife through stunning photography.",
//   },
//   {
//     src: img4,
//     author: "LUNDEV",
//     title: "URBAN STYLE",
//     topic: "LIFESTYLE",
//     description: "Get inspired by the energy and rhythm of the urban lifestyle.",
//   },
// ];

// const AdvHeroSlider = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const thumbnailRef = useRef<HTMLDivElement>(null);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const timeRef = useRef<NodeJS.Timeout | null>(null);
//   const autoNextRef = useRef<NodeJS.Timeout | null>(null);
  

//   const timeRunning = 3000;
//   const timeAutoNext = 7000;

//   const showSlider = (type: "next" | "prev" | null, index: number | null = null) => {
//     const slider = sliderRef.current;
//     const thumbnails = thumbnailRef.current;
//     const carousel = carouselRef.current;

//     if (!slider || !thumbnails || !carousel) return;

//     const items = Array.from(slider.children);
//     const thumbs = Array.from(thumbnails.children);

//     if (index !== null) {
//       const currentIndex = parseInt(items[0].getAttribute("data-index") || "0");
//       if (currentIndex === index) return;

//       let shiftCount = 0;
//       while (
//         parseInt(slider.children[0].getAttribute("data-index") || "-1") !== index &&
//         shiftCount < items.length
//       ) {
//         slider.appendChild(slider.children[0]);
//         thumbnails.appendChild(thumbnails.children[0]);
//         shiftCount++;
//       }

//       carousel.classList.add("next");

//       if (timeRef.current) clearTimeout(timeRef.current);
//       if (autoNextRef.current) clearTimeout(autoNextRef.current);

//       timeRef.current = setTimeout(() => {
//         carousel.classList.remove("next");
//       }, timeRunning);

//       autoNextRef.current = setTimeout(() => {
//         showSlider("next");
//       }, timeAutoNext);

//       return;
//     }

//     if (type === "next") {
//       slider.appendChild(slider.children[0]);
//       thumbnails.appendChild(thumbnails.children[0]);
//       carousel.classList.add("next");
//     } else if (type === "prev") {
//       slider.prepend(slider.children[slider.children.length - 1]);
//       thumbnails.prepend(thumbnails.children[thumbnails.children.length - 1]);
//       carousel.classList.add("prev");
//     }

//     if (timeRef.current) clearTimeout(timeRef.current);
//     if (autoNextRef.current) clearTimeout(autoNextRef.current);

//     timeRef.current = setTimeout(() => {
//       carousel.classList.remove("next");
//       carousel.classList.remove("prev");
//     }, timeRunning);

//     autoNextRef.current = setTimeout(() => {
//       showSlider("next");
//     }, timeAutoNext);
//   };

//   useEffect(() => {
//     autoNextRef.current = setTimeout(() => showSlider("next"), timeAutoNext);
//     return () => {
//       if (autoNextRef.current) clearTimeout(autoNextRef.current);
//     };
//   }, []);

//   return (
//     <div
//       className="bg-black text-white font-poppins text-xs relative w-full h-screen flex justify-center items-center"
//       ref={carouselRef}
//     >
//       <div className="absolute inset-0 carousel overflow-hidden">
//         <div className="list absolute inset-0 w-full h-full" ref={sliderRef}>
//           {images.map((item, i) => (
//             <div key={i} className="item absolute inset-0 w-full h-full" data-index={i}>
//               <Image src={item.src} alt={`img${i}`} fill className="object-cover w-full h-full" />
//               <div className="content absolute top-[20%] left-1/2 transform -translate-x-1/2 pr-[30%] max-w-[80%] w-[1140px] text-shadow-md">
//                 <div className="author font-bold tracking-[10px]">{item.author}</div>
//                 <div className="title text-[5em] font-bold leading-[1.3em]">{item.title}</div>
//                 <div className="topic text-[5em] font-bold leading-[1.3em] text-orange-500">
//                   {item.topic}
//                 </div>
//                 <div className="des mt-4">{item.description}</div>
//                 <div className="buttons grid grid-cols-2 gap-1 mt-5 w-[260px] h-[40px]">
//                   <button className="bg-white text-black font-medium tracking-[3px]">SEE MORE</button>
//                   <button className="border border-white text-white font-medium tracking-[3px] bg-transparent">
//                     SUBSCRIBE
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div
//           className="thumbnail absolute bottom-[50px] lg:-right-70 -right-[220px]  transform -translate-x-1/2 flex lg:gap-5 gap-2 z-[100]"
//           ref={thumbnailRef}
//         >
//           {images.map((item, i) => (
//             <div
//               key={i}
//               data-index={i}
//              className="item w-[100px] sm:w-[120px] md:w-[150px] h-[140px] sm:h-[180px] md:h-[220px] relative cursor-pointer"

//               onClick={() => showSlider(null, i)}
//             >
//               <Image
//                 src={item.src}
//                 alt={`thumb${i}`}
//                 fill
//                 className="object-cover rounded-[20px]"
//               />
//               <div className="content absolute bottom-2 left-2 right-2 text-white">
//                <div className="title font-medium text-[9px] sm:text-base md:text-lg lg:text-[13px] ">
//   {item.title}
// </div>

//                 <div className="description font-light">{item.topic}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="arrows absolute lg:top-[80%] top-[93  %] right-[35%] z-[100] w-[300px] max-w-[30%] flex gap-2 items-center">
//           <button
//             id="prev"
//             onClick={() => showSlider("prev")}
//             className="w-10 h-10 rounded-full bg-white/25 border-none text-white font-mono font-bold hover:bg-white hover:text-black transition"
//           >
//             &lt;
//           </button>
//           <button
//             id="next"
//             onClick={() => showSlider("next")}
//             className="w-10 h-10 rounded-full bg-white/25 border-none text-white font-mono font-bold hover:bg-white hover:text-black transition"
//           >
//             &gt;
//           </button>
//         </div>

//         <div className="time absolute top-0 left-0 h-[3px] w-0 bg-orange-500 z-[1000]" />
//       </div>
//     </div>
//   );
// };

// export default AdvHeroSlider;
