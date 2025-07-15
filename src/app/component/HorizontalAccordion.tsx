"use client";
import { useState } from "react";
import { FaChevronRight} from "react-icons/fa6";
import { motion } from "framer-motion";


const HorizontalAccordion = () => {
     const [active, setActive] = useState(1);

  return (
  <div className="font-[Poppins] px-3 sm:px-5 py-5 sm:py-10">
  
  {/* Heading */}
  <p className="text-xl sm:text-2xl font-bold text-center">
    Horizontal Accordion
  </p>

  <div className="border-t mt-4 mb-4 border-transparent bg-gradient-to-r from-white via-gray-500 to-white h-[1px]" />

  {/* Accordion */}
  <div className="w-full max-w-[860px] min-h-[440px] border border-gray-500 mx-auto flex flex-row flex-wrap sm:flex-nowrap items-stretch">

    {/* Section 1 */}
    <div
      role="tabpanel"
      aria-labelledby="Preview"
      className={`transition-all ease-in-out duration-300 cursor-pointer flex flex-col ${
        active === 1 ? "flex-[5] bg-white shadow-inner" : "flex-[0.1] bg-orange-500 shadow-[inset_-12px_0px_20px_-15px_#63410b]"
      } min-w-[50px] sm:min-w-[65px] md:min-w-[80px]`}
      onClick={() => setActive(1)}
    >
      <div className="flex justify-end">
        <button
          role="tab"
          aria-label="Click to expand Section 1"
          aria-expanded={active === 1}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center mr-2 lg:mr-5 ${
            active === 1
              ? "border-orange-500 text-orange-500 rotate-180 ml-1 mt-3 sm:mt-5"
              : "border-white text-white ml-2 mt-3 sm:mt-5"
          } transition-transform`}
        >
          <FaChevronRight />
        </button>
      </div>

      <motion.p
        className={`font-bold ${
          active === 1
            ? "text-orange-500 p-4 sm:p-5"
            : "text-white mr-2 lg:mr-4 mt-3 sm:mt-5 writing-mode-vertical-rl transform origin-[20%_100%]"
          } text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Preview
      </motion.p>

      {active === 1 && (
        <motion.p
          className="text-gray-600 font-light text-sm sm:text-base overflow-hidden max-h-[440px] m-4 sm:m-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Preview your text and other study materials before class to develop a big picture of what you’ll be covering. Skim through the chapters, noting all headings, subheadings, bold words, graphs, pictures and summaries. Once you’ve developed a big picture, it will be much easier to remember and learn the details. Also, attending a class or a lecture with this basic understanding of the material makes it feel less overwhelming and creates opportunities to formulate any questions during class.
        </motion.p>
      )}
    </div>

    {/* Section 2 */}
    <div
      role="tabpanel"
      aria-labelledby="Study"
      className={`transition-all ease-in-out duration-300 cursor-pointer flex flex-col ${
        active === 2 ? "flex-[5] bg-white shadow-inner" : "flex-[0.1] bg-pink-500 shadow-[inset_-12px_0px_20px_-15px_#50213b]"
      } min-w-[50px] sm:min-w-[65px] md:min-w-[80px]`}
      onClick={() => setActive(2)}
    >
      <div className="flex justify-end">
        <button
          role="tab"
          aria-label="Click to expand Section 2"
          aria-expanded={active === 2}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center mr-2 lg:mr-5  ${
            active === 2
              ? "border-pink-500 text-pink-500 rotate-180 ml-1 mt-3 sm:mt-5"
              : "border-white text-white ml-2 mt-3 sm:mt-5"
          } transition-transform`}
        >
          <FaChevronRight />
        </button>
      </div>

      <p
        className={`font-bold ${
          active === 2
            ? "text-pink-500 p-4 sm:p-5"
            : "text-white mr-2 lg:mr-4 mt-3 sm:mt-5 writing-mode-vertical-rl transform origin-[20%_100%]"
        } text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
      >
        Study
      </p>

      {active === 2 && (
        <motion.p
          className="text-gray-600 font-light text-sm sm:text-base overflow-hidden max-h-[440px] m-4 sm:m-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
            To reinforce the new material you learned during class, and to make sure you thoroughly understand the subject matter being taught. Take about 30-50 minutes to interact with material ‐ organize material, draw concept maps, summarize information, review your notes, read your textbook, work problems, or even form a study group. As you study, ask yourself ‘how’, ‘why’ and ‘what if’ questions. Don’t forget, repetition is the key, set yourself realistic goals and don't forget to take breaks!
        </motion.p>
      )}
    </div>

    {/* Section 3 */}
    <div
      role="tabpanel"
      aria-labelledby="Revise"
      className={`transition-all ease-in-out duration-300 cursor-pointer flex flex-col ${
        active === 3 ? "flex-[5] bg-white shadow-inner" : "flex-[0.1] bg-blue-500 shadow-[inset_-12px_0px_20px_-15px_#0a3a69]"
      } min-w-[50px] sm:min-w-[65px] md:min-w-[80px]`}
      onClick={() => setActive(3)}
    >
      <div className="flex justify-end">
        <button
          role="tab"
          aria-label="Click to expand Section 3"
          aria-expanded={active === 3}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center mr-2 lg:mr-5  ${
            active === 3
              ? "border-blue-500 text-blue-500 rotate-180 ml-1 mt-3 sm:mt-5"
              : "border-white text-white ml-2 mt-3 sm:mt-5"
          } transition-transform`}
        >
          <FaChevronRight />
        </button>
      </div>

      <p
        className={`font-bold ${
          active === 3
            ? "text-blue-500 p-4 sm:p-5"
            : "text-white mr-2 lg:mr-4 mt-3 sm:mt-5 writing-mode-vertical-rl transform origin-[20%_100%]"
      } text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
      >
        Revise
      </p>

      {active === 3 && (
        <motion.p
          className="text-gray-600 font-light text-sm sm:text-base overflow-hidden max-h-[440px] m-4 sm:m-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Reflect and evaluate your mastery and understanding of the material you learned and studied. Ask yourself, “Is the information I’m studying making sense?”, “Am I confident with the new material?”, “Do I understand the material well enough that I can teach it to someone else?” Assessing your studying from time to time is an essential aspect of learning and gives you an opportunity to reflect and improve. Finally, always look for opportunities to advance the knowledge you just learned.
        </motion.p>
      )}
    </div>
  </div>

  <div className="border-t mt-10 mb-10 border-transparent bg-gradient-to-r from-white via-gray-500 to-white h-[1px]" />
</div>

  )
}

export default HorizontalAccordion