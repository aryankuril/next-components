'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';


const fifthSection = () => {
     const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      question: "How can digital marketing help improve my website’s visibility?",
      answer:
        "Digital marketing boosts website visibility by using SEO, content marketing, and paid ads to rank higher on search engines and attract more visitors.",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "The timeline for results varies but SEO can take months, while paid ads or social media campaigns may show quicker results within weeks.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "Success is measured through metrics like website traffic, lead generation, conversion rates, and ROI using tools like Google Analytics.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
     <section className="container max-w-6xl bg-white lg:mt-30 mt-20 rounded-[20px] mx-auto px-20 py-16">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="lg:w-5/12">
         <h2
  className="text-[#010205] text-[48px] font-semibold leading-[130%] tracking-[-0.045em] mb-4"
>
  Digital Marketing FAQs
</h2>

        <p className="text-[#878C91]  text-[16px] font-medium leading-[150%] mb-6">
  As a leading digital marketing agency, we are dedicated to providing
  comprehensive educational resources and answering frequently asked
  questions to help our clients.
</p>

          <div className="flex gap-10 text-[#010205]  ">
            <button className="border border-black rounded-full px-6 py-2 text-[16px] hover:bg-black hover:text-white transition">
              More Questions
            </button>
            <button className=" text-[16px] font-semibold underline hover:no-underline">
              Contact Us
            </button>
          </div>
        </div>

{/* Right Section */}
<motion.div
  className="lg:w-6/12 space-y-4"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.2 }} // Repeats every time on scroll
>
  {faqs.map((faq, index) => (
    <motion.div
      key={index}
      className="border-t border-black pt-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.2 }} // Repeats every time on scroll
    >
      <div
        onClick={() => toggleFaq(index)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="font-semibold text-[#010205] text-[24px] w-120">{faq.question}</h3>
        <span className="text-2xl text-[#000000] ">
          {activeIndex === index ? "−" : "+"}
        </span>
      </div>

      {activeIndex === index && (
        <motion.p
          className="mt-4  text-[16px] text-[#878C91] "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {faq.answer}
        </motion.p>
      )}
    </motion.div>
  ))}

  <div className="border-t border-black"></div>
</motion.div>

</div>
    </section>
  )
}

export default fifthSection