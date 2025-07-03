"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const PricingPlans = () => {
  const plan_1 = [
    { name: "10 Email Lookups per Day", included: true },
    { name: "Basic Support", included: true },
    { name: "Limited Data Access", included: true },
    { name: "Email Reports", included: true },
    { name: "1 User Seat", included: true },
  ];

  const plan_2 = [
    { name: "200 Email Lookups per Day", included: true },
    { name: "Priority Support", included: true },
    { name: "Advanced Data Access", included: true },
    { name: "Email & Phone Reports", included: true },
    { name: "3 User Seats", included: true },
  ];

  const plan_3 = [
    { name: "400 Email Lookups per Day", included: true },
    { name: "Dedicated Support Manager", included: true },
    { name: "Full Data Access", included: true },
    { name: "Custom Reports & Analytics", included: true },
    { name: "Unlimited User Seats", included: true },
  ];

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative z-[1] w-full bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/pricing.jpeg")' }}
    >
      <div className="py-[50px] max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <PlanCard
            title="Daily Plan"
            price="₹200/day"
            features="20 email lookups"
            planItems={plan_1}
          />

          <PlanCard
            title="Monthly Plan"
            price="₹1000/month"
            features="200 email lookups/day"
            planItems={plan_2}
          />

          <PlanCard
            title="Annually Plan"
            price="₹825/month (₹9900)"
            features="400 email lookups/day"
            planItems={plan_3}
          />

        </div>
      </div>
    </div>
  );
};

interface PlanCardProps {
  title: string;
  price: string;
  features: string;
  planItems: { name: string; included: boolean }[];
}

const PlanCard = ({ title, price, features, planItems }: PlanCardProps) => {
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-[744px] p-8 rounded bg-[#121212] transition-colors duration-1000 hover:bg-[radial-gradient(circle_at_bottom,rgba(47,129,233,0.5),#151515_70%)]">
      <p className="text-white text-base font-normal mb-2">{title}</p>

      <div className="mb-5">
        <h4 className="text-[36px] font-semibold text-white sm:text-[24px]">{price}</h4>
        <p className="text-[#C5C5C5] text-base font-normal">{features}</p>
       <Button className="!bg-[#2F81E9] !text-white !rounded-[10px] !w-full !mt-5 hover:!bg-[#2F81E9]">
  Get Started
</Button>


      </div>

      <div className="mb-5">
        <h4 className="text-[24px] font-semibold text-white">Features</h4>
        <p className="text-[15px] font-semibold text-[#C5C5C5]">Everything included</p>
      </div>

      <motion.ul
        className="list-none mt-8"
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {planItems.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center mb-2.5"
            variants={listItemVariants}
          >
            {item.included ? <TickIcon /> : <CrossIcon />}
            <span className={`ml-2 ${item.included ? "text-white" : "text-[#B3B3B3]"}`}>
              {item.name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

const TickIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#2F81E9" />
    <path fill="white" d="M6.88 14.88L3.22 10.96C2.72 10.43 2.75 9.58 3.28 9.08C3.82 8.58 4.67 8.61 5.17 9.14L7.99 12.16L12.46 7.99L14.68 5.92C15.22 5.42 16.06 5.45 16.57 5.99C17.07 6.52 17.04 7.37 16.5 7.87L10.09 13.86L7.86 15.93L6.88 14.88Z" />
  </svg>
);

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#B3B3B3" />
    <path fill="white" d="M13.05 14.46L5.97 7.39C5.59 6.99 5.59 6.36 5.97 5.97C6.36 5.58 7 5.58 7.39 5.97L14.46 13.05C14.85 13.43 14.85 14.07 14.46 14.46C14.07 14.85 13.44 14.85 13.05 14.46Z" />
    <path fill="white" d="M5.97 13.05L13.05 5.97C13.44 5.58 14.07 5.58 14.46 5.97C14.85 6.36 14.85 6.99 14.46 7.39L7.39 14.46C7 14.85 6.36 14.85 5.97 14.46C5.59 14.07 5.59 13.43 5.97 13.05Z" />
  </svg>
);

export default PricingPlans;
