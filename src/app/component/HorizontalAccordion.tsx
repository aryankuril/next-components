"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";

// Data for each day's schedule. This makes the component easy to update.
const scheduleData = [
  {
    id: 1,
    title: "Day One",
    date: "Sunday",
    
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis ex suscipit odio accusantium debitis, alias reiciendis ea dolore amet beatae quia est, vitae dolorem. Totam aliquid accusantium id qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit at dolorem sint! Recusandae voluptas ducimus architecto earum iure et aliquam, non velit accusamus, illo voluptate, dolore eos in vitae nihil!",
    dress: [
      { type: "Daytime dress", attire: "Travel Attire", color: "#E07C00" },
      { type: "Evening dress", attire: "Resort Casual", color: "#AA0061" },
    ],
  },
  {
    id: 2,
    title: "Day Two",
    date: "Monday",
   
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis ex suscipit odio accusantium debitis, alias reiciendis ea dolore amet beatae quia est, vitae dolorem. Totam aliquid accusantium id qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit at dolorem sint! Recusandae voluptas ducimus architecto earum iure et aliquam, non velit accusamus, illo voluptate, dolore eos in vitae nihil!",
    dress: [
      { type: "Daytime dress", attire: "Resort Casual", color: "#E07C00" },
      { type: "Evening dress", attire: "Resort Attire", color: "#AA0061" },
    ],
  },
  {
    id: 3,
    title: "Day Three",
    date: "Tuesday",
   
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis ex suscipit odio accusantium debitis, alias reiciendis ea dolore amet beatae quia est, vitae dolorem. Totam aliquid accusantium id qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit at dolorem sint! Recusandae voluptas ducimus architecto earum iure et aliquam, non velit accusamus, illo voluptate, dolore eos in vitae nihil!",
    dress: [
      { type: "Daytime dress", attire: "Resort Casual", color: "#E07C00" },
      { type: "Evening dress", attire: "Resort Elegant", color: "#AA0061" },
    ],
  },
  {
    id: 4,
    title: "Day Four",
    date: "Wednesday",
  
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis ex suscipit odio accusantium debitis, alias reiciendis ea dolore amet beatae quia est, vitae dolorem. Totam aliquid accusantium id qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit at dolorem sint! Recusandae voluptas ducimus architecto earum iure et aliquam, non velit accusamus, illo voluptate, dolore eos in vitae nihil!",
    dress: [
      { type: "Daytime dress", attire: "Resort Casual", color: "#E07C00" },
      { type: "Evening dress", attire: "Resort Attire", color: "#AA0061" },
    ],
  },
  {
    id: 5,
    title: "Day Five",
    date: "Thursday",
    
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis ex suscipit odio accusantium debitis, alias reiciendis ea dolore amet beatae quia est, vitae dolorem. Totam aliquid accusantium id qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit at dolorem sint! Recusandae voluptas ducimus architecto earum iure et aliquam, non velit accusamus, illo voluptate, dolore eos in vitae nihil!",
    dress: [
      { type: "Daytime dress", attire: "Travel Attire", color: "#E07C00" },
    ],
  },
];

export default function App() {
  // State to track the active accordion item.
  const [activeItem, setActiveItem] = useState(scheduleData[0].id);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 font-sans">
      <div className="flex h-[400px] w-full max-w-[900px] shadow-lg rounded-lg overflow-hidden">
        {scheduleData.map((item) => {
          const isActive = activeItem === item.id;
          const isFirstItem = item.id === 1;
          const isLastItem = item.id === scheduleData.length;

          return (
            <motion.div
              key={item.id}
              className={`
                relative flex transition-all duration-500 ease-in-out overflow-hidden
                border-t-2 border-b-2 border-l-2 border-[#62cbc9]
                ${isFirstItem ? "" : "border-l-2 border-white"}
                ${isLastItem ? "border-r-2 border-[#62cbc9]" : ""}
              `}
              animate={{
                flexGrow: isActive ? 1 : 0,
                width: isActive ? "100%" : "64px",

              }}
              onClick={() => setActiveItem(item.id)}
            >
              {/* Vertical heading for all items */}
              <div className={`
                flex-shrink-0 w-[50px] bg-[#62cbc9] text-white flex flex-col items-center justify-center cursor-pointer transition-transform duration-500
              `}>
                <h1 className="text-xl font-sans font-bold leading-[0.75] writing-mode-vertical-lr p-4">
                  <FaArrowRight className={`inline-block mr-2 transform transition-transform duration-500 ${isActive ? 'rotate-90' : 'rotate-0'}`} />
                  {item.title}
                </h1>
              </div>

              {/* Content body for active item */}
     <AnimatePresence mode="wait">
  {isActive && (
    <motion.div
      key={item.id}
      className="p-6 overflow-y-auto bg-white text-[#443635] flex-1"
      initial={{ opacity: 0, x: -20, position: "absolute" }}
      animate={{ opacity: 1, x: 0, position: "relative" }}
      exit={{ opacity: 0, x: 20, position: "absolute" }}
      transition={{ duration: 0.4 }}
    >

                   
                    <div className="w-full h-0"></div>
                    <p className="mt-4 text-sm md:text-base text-gray-700">{item.content}</p>
                    
                    <div className="flex flex-col sm:flex-row text-center justify-around mt-8">
                      {item.dress.map((dressItem, index) => (
                        <div key={index} className="flex-1 mt-4 sm:mt-0">
                         
                          <p className="mt-3">
                            <strong>{dressItem.type}</strong> <br />
                            <b style={{ color: "#62cbc9" }}>{dressItem.attire}</b>
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      
      {/* Custom CSS for writing mode */}
      <style jsx>{`
        .writing-mode-vertical-lr {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}
