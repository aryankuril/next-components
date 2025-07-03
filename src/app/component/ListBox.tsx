"use client";

import React from "react";
import { motion } from "framer-motion";

const ListBox = () => {
  const plans = [
    {
      title: "Basic Plan",
      features: [
        { name: "100 Email Lookups / day", included: true },
        { name: "Unlimited Dashboard Access", included: true },
        { name: "API Access", included: false },
        { name: "Priority Support", included: false },
        { name: "Mobile App Access", included: true },
        { name: "Data Export CSV", included: false },
      ],
    },
    {
      title: "Standard Plan",
      features: [
        { name: "200 Email Lookups / day", included: true },
        { name: "Unlimited Dashboard Access", included: true },
        { name: "API Access", included: true },
        { name: "Priority Support", included: false },
        { name: "Mobile App Access", included: true },
        { name: "Data Export CSV", included: true },
      ],
    },
    {
      title: "Premium Plan",
      features: [
        { name: "400 Email Lookups / day", included: true },
        { name: "Unlimited Dashboard Access", included: true },
        { name: "API Access", included: true },
        { name: "Priority Support", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Data Export CSV", included: true },
      ],
    },
    {
      title: "Enterprise Plan",
      features: [
        { name: "1000 Email Lookups / day", included: true },
        { name: "Unlimited Dashboard Access", included: true },
        { name: "API Access", included: true },
        { name: "Priority Support", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Data Export CSV", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "Early Feature Access", included: true },
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-[#121212] mb-6 mt-10">
      list box
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-[#121212] p-6 rounded-lg transition hover:bg-[radial-gradient(circle_at_bottom,rgba(47,129,233,0.5),#151515_70%)]"
          >
            <h3 className="text-white text-xl font-bold mb-4">{plan.title}</h3>
            <ul className="space-y-4">
              {plan.features.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                >
                  {item.included ? <TickIcon /> : <CrossIcon />}
                  <span className={item.included ? "text-white" : "text-[#B3B3B3]"}>
                    {item.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const TickIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#2F81E9" />
    <path
      fill="white"
      d="M6.88 14.88L3.22 10.96C2.72 10.43 2.75 9.58 3.28 9.08C3.82 8.58 4.67 8.61 5.17 9.14L7.99 12.16L12.46 7.99L14.68 5.92C15.22 5.42 16.06 5.45 16.57 5.99C17.07 6.52 17.04 7.37 16.5 7.87L10.09 13.86L7.86 15.93L6.88 14.88Z"
    />
  </svg>
);

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#B3B3B3" />
    <path
      fill="white"
      d="M13.05 14.46L5.97 7.39C5.59 6.99 5.59 6.36 5.97 5.97C6.36 5.58 7 5.58 7.39 5.97L14.46 13.05C14.85 13.43 14.85 14.07 14.46 14.46C14.07 14.85 13.44 14.85 13.05 14.46Z"
    />
    <path
      fill="white"
      d="M5.97 13.05L13.05 5.97C13.44 5.58 14.07 5.58 14.46 5.97C14.85 6.36 14.85 6.99 14.46 7.39L7.39 14.46C7 14.85 6.36 14.85 5.97 14.46C5.59 14.07 5.59 13.43 5.97 13.05Z"
    />
  </svg>
);

export default ListBox;
