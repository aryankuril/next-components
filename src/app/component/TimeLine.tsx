"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineData = [
  {
    id: "Ep.1",
    title: "The Phantom Menance",
    text:
      "Obi-Wan Kenobi (Ewan McGregor) is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn (Liam Neeson)...",
  },
  {
    id: "Ep.2",
    title: "Attack of the Clones",
    text:
      'Set ten years after the events of "The Phantom Menace," the Republic continues to be mired in strife and chaos...',
    flipped: true,
  },
  {
    id: "Ep.3",
    title: "Revenge of the Sith",
    text:
      "It has been three years since the Clone Wars began. Jedi Master Obi-Wan Kenobi and Jedi Knight Anakin Skywalker...",
  },
  {
    id: "Ep.4",
    title: "Rogue One",
    text:
      "Former scientist Galen Erso lives on a farm with his wife and young daughter, Jyn. His peaceful existence comes crashing...",
    flipped: true,
  },
  {
    id: "Ep.5",
    title: "Star Wars (A New Hope)",
    text:
      "The Imperial Forces -- under orders from cruel Darth Vader -- hold Princess Leia hostage, in their efforts to quell the rebellion...",
  },
  {
    id: "Ep.6",
    title: "The Empire Strikes Back",
    text:
      'The adventure continues in this "Star Wars" sequel. Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack...',
    flipped: true,
  },
  {
    id: "Ep.7",
    title: "Return of the Jedi",
    text:
      "Luke Skywalker battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance...",
  },
  {
    id: "Ep.8",
    title: "The Force Awakens",
    text:
      "Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren and the First Order...",
    flipped: true,
  },
  {
    id: "Ep.9",
    title: "The Last Jedi",
    text:
      "Yet to be confirmed. The further adventures of Luke Skywalker, Leia and Rey...",
  },

];


import React from "react";

const TimeLine: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <article className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16 relative overflow-hidden">

      <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">
        Time Line
      </h1>

      {/* center vertical line */}
      <div className="absolute lg:top-30 top-40 bottom-500 left-1/2 w-1 h-[1900px] bg-gradient-to-b from-[#151515] via-[#3b3b3b] to-[#151515] -translate-x-1/2 z-0" />

     <ol className="relative z-10">
  {timelineData.map((entry, index) => {
  const [ref, inView] = useInView({
  threshold: 0.15,
  triggerOnce: false, // allow re-trigger on scroll out/in
});

const motionVariants = {
  hidden: { opacity: 0, x: entry.flipped ? 100 : -100 },
  visible: { opacity: 1, x: 0 },
};


    return (
      <li
        key={index}
        className="mb-20 flex flex-col md:flex-row justify-between items-center relative"
      >
        {/* Left content (non-flipped) */}
        {!entry.flipped && (
          <motion.div
            ref={ref}
            variants={motionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-[47%]"
          >
            <div className="bg-[#282727] p-6 text-white relative shadow-md mx-auto md:mx-0">

              <h2 className="text-lg font-bold mb-2">{entry.title}</h2>
              <p className="text-gray-300 text-sm">{entry.text}</p>
              {/* arrow pointer */}
              <div className="hidden md:block absolute top-6 -right-[15px] w-0 h-0 border-y-[15px] border-y-transparent border-l-[15px] border-l-[#282727]" />

            </div>
          </motion.div>
        )}

        {/* Episode badge */}
        <div className="bg-[#282727] text-white text-sm px-4 py-1 font-medium absolute left-1/2 -translate-x-1/2 z-20">
          {entry.id}
        </div>

        {/* Right content (flipped) */}
       {entry.flipped && (
  <motion.div
    ref={ref}
    variants={motionVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-full md:w-[47%] md:ml-auto"
  >
    <div className="bg-[#282727] p-6 lg:right-[-20px]  right-0 top-6 text-white relative shadow-md">
      <h2 className="text-lg font-bold mb-2">{entry.title}</h2>
      <p className="text-gray-300 text-sm">{entry.text}</p>
      {/* flipped arrow */}
      <div className="hidden md:block absolute top-6 -left-[15px] w-0 h-0 border-y-[15px] border-y-transparent border-r-[15px] border-r-[#282727]" />

    </div>
  </motion.div>
)}

      </li>
    );
  })}
</ol>
    </article>
  )
}

export default TimeLine