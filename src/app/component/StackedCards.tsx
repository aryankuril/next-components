"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardsData = [
  {
    title: "Snoop Me",
    text: "Peek into the shadows of the internet and see what we found lurking. You won’t believe item #3.",
    img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Data Dive",
    text: "Explore beautifully chaotic numbers transformed into visuals that even your grandma could love.",
    img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Pixel Playground",
    text: "Where creativity meets code. Drag, drop, or destroy—it’s your sandbox now.",
    img: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
  },
];

export default function CardStack() {
  const [cards, setCards] = useState(cardsData);
  const [swipeDir, setSwipeDir] = useState(0);
  const [swipingCard, setSwipingCard] = useState<string | null>(null);

  const handleSwipe = (dir: number) => {
    const top = cards[0];
    setSwipeDir(dir);
    setSwipingCard(top.title);
    setTimeout(() => {
      setCards((prev) => [...prev.slice(1), top]);
      setSwipingCard(null);
    }, 500); // Match animation duration
  };

  return (
    <div className="relative w-72 h-[22rem] mx-auto [perspective:700px]">
      <AnimatePresence initial={false} custom={swipeDir}>
        {cards.map((card, idx) => {
          const isTop = idx === 0 && !swipingCard;
          const isExiting = swipingCard === card.title;

          return (
            <motion.div
              key={card.title + idx + (isExiting ? "-exit" : "")}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (isTop && Math.abs(info.offset.x) > 100) {
                  handleSwipe(info.offset.x > 0 ? 1 : -1);
                }
              }}
              initial={false}
              animate={{
                x: 0,
                y: idx * 8,
                scale: 1,
                rotateY: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 300, damping: 25 },
              }}
              exit={
                isExiting
                  ? {
                      x: swipeDir > 0 ? 160 : -160,
                      y: 40,
                      rotateY: swipeDir > 0 ? 45 : -45,
                      opacity: 0,
                      scale: 0.9,
                      transition: { duration: 0.5 },
                    }
                  : {}
              }
              className="absolute top-0 left-0 w-full h-full bg-white border rounded-xl shadow-md p-4 flex flex-col gap-4 cursor-grab"
              style={{
                zIndex: cards.length - idx,
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="rounded-md object-cover h-40 w-full pointer-events-none"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.text}</p>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
