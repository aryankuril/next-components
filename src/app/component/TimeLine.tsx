"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// -----------------------------------------------------------------------------
// 1 . Data & types
// -----------------------------------------------------------------------------
type TimelineEntry = {
  id: string;
  title: string;
  text: string;
  flipped?: boolean;
};

const timelineData: TimelineEntry[] = [
  {
    id: "Ep.1",
    title: "The Phantom Menace",
    text: "Obi‑Wan Kenobi (Ewan McGregor) is a young apprentice Jedi knight under the tutelage of Qui‑Gon Jinn (Liam Neeson)…",
  },
  {
    id: "Ep.2",
    title: "Attack of the Clones",
    text: "Set ten years after the events of “The Phantom Menace,” the Republic continues to be mired in strife and chaos…",
    flipped: true,
  },
  {
    id: "Ep.3",
    title: "Revenge of the Sith",
    text: "It has been three years since the Clone Wars began. Jedi Master Obi‑Wan Kenobi and Jedi Knight Anakin Skywalker…",
  },
  {
    id: "Ep.4",
    title: "Rogue One",
    text: "Former scientist Galen Erso lives on a farm with his wife and young daughter, Jyn. His peaceful existence comes crashing…",
    flipped: true,
  },
  {
    id: "Ep.5",
    title: "Star Wars (A New Hope)",
    text: "The Imperial Forces — under orders from cruel Darth Vader — hold Princess Leia hostage in their efforts to quell the rebellion…",
  },
  {
    id: "Ep.6",
    title: "The Empire Strikes Back",
    text: "The adventure continues in this “Star Wars” sequel. Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack…",
    flipped: true,
  },
  {
    id: "Ep.7",
    title: "Return of the Jedi",
    text: "Luke Skywalker battles Jabba the Hutt and cruel Darth Vader to save his comrades in the Rebel Alliance…",
  },
  {
    id: "Ep.8",
    title: "The Force Awakens",
    text: "Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from Kylo Ren and the First Order…",
    flipped: true,
  },
  {
    id: "Ep.9",
    title: "The Last Jedi",
    text: "Yet to be confirmed. The further adventures of Luke Skywalker, Leia and Rey…",
  },
];

// -----------------------------------------------------------------------------
// 2 . Reusable entry component
// -----------------------------------------------------------------------------
const Entry: React.FC<{ entry: TimelineEntry }> = ({ entry }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const variants: Variants = {
    hidden: { opacity: 0, x: entry.flipped ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <li className="mb-20 flex flex-col md:flex-row justify-between items-center relative">
      {/* Content (left if not flipped, right if flipped) */}
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full md:w-[47%] ${
          entry.flipped ? "md:ml-auto" : ""
        } relative`}
      >
        <div className="bg-[#282727] p-6 text-white shadow-md">
          <h2 className="text-lg font-bold mb-2">{entry.title}</h2>
          <p className="text-gray-300 text-sm leading-relaxed">{entry.text}</p>

          {/* Arrow pointers */}
          <div
            className={`hidden md:block absolute top-6 ${
              entry.flipped
                ? "-left-[15px] border-y-[15px] border-y-transparent border-r-[15px] border-r-[#282727]"
                : "-right-[15px] border-y-[15px] border-y-transparent border-l-[15px] border-l-[#282727]"
            } w-0 h-0`}
          />
        </div>
      </motion.div>

      {/* Episode badge (always centered) */}
      <div className="bg-[#282727] text-white text-sm px-4 py-1 font-medium absolute left-1/2 -translate-x-1/2 z-20">
        {entry.id}
      </div>
    </li>
  );
};

// -----------------------------------------------------------------------------
// 3 . Timeline wrapper
// -----------------------------------------------------------------------------
const TimeLine: React.FC = () => (
  <article className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16 relative overflow-hidden">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">Time Line</h1>

    {/* Vertical center line */}
    <div className="absolute top-40 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#151515] via-[#3b3b3b] to-[#151515] -translate-x-1/2 z-0" />

    <ol className="relative z-10">
      {timelineData.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </ol>
  </article>
);

export default TimeLine;
