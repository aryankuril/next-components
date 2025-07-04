import Image from "next/image";
import React from "react";

const cardhover = () => {
  return (
     <div className="w-full">
    <h2 className="text-center text-3xl md:text-5xl font-bold text-[#121212] mb-6 mt-10">
       Card Hover
      </h2>
   <div className="relative w-[350px] h-[500px] overflow-hidden rounded-xl shadow-xl mx-auto group">
         {/* Background Image */}
         <Image
           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg"
           alt="Blog Card"
           fill
           className="object-cover"
         />
   
         {/* Color Overlay */}
         <div className="absolute inset-0 bg-[#54686e66] group-hover:bg-[#54686ecc] transition duration-300 z-10"></div>
   
         {/* Gradient Overlay */}
         <div className="absolute top-[350px] left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent z-15"></div>
   
         {/* Title Content */}
         <div className="absolute top-0 left-0 w-full text-center z-20 mt-16">
           <h3 className="text-[#9CC9E3] text-xl font-medium tracking-[2px] mb-3">SPRING FEVER</h3>
           <div className="w-12 h-[3px] bg-[#D0BB57] mx-auto mb-3"></div>
           <p className="w-[170px] mx-auto text-[#DCE3E7] italic text-sm font-serif leading-5">Yllamco laboris nisi ut aliquip ex ea commodo.</p>
         </div>
   
         {/* Card Info (hidden, appears on hover) */}
         <div className="absolute bottom-[100px] left-0 w-full px-12 text-[#DCE3E7] text-[16px] leading-6 font-serif opacity-0 group-hover:opacity-100 group-hover:bottom-[120px] transition-all duration-300 z-20">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </div>
   
         {/* Utility Info */}
         <div className="absolute bottom-0 left-0 z-20">
           <ul className="flex items-center space-x-4 m-5">
             <li className="pl-6 bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/icon-chat.svg')] bg-no-repeat bg-left text-[#DCE3E7]">12</li>
             <li className="pl-6 bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/icon-calendar.svg')] bg-no-repeat bg-left text-[#DCE3E7]">03.12.2015</li>
           </ul>
         </div>
       </div>
       </div>
  )
}

export default cardhover