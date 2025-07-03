import React from "react";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    image: "/images/card-img.jpg",
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
  },
  {
    id: 2,
    image: "/images/card-img.jpg",
    title: "Sunset",
    description:
      "A beautiful sunset over the mountains, reminding us of nature's beauty and tranquility.",
  },
  {
    id: 3,
    image: "/images/card-img.jpg",
    title: "Beach Vibes",
    description:
      "Relax at the beach with crystal clear water and golden sand, your perfect getaway spot.",
  },
  {
    id: 4,
    image: "/images/card-img.jpg",
    title: "Forest Adventure",
    description:
      "Explore deep green forests filled with wildlife, fresh air, and scenic hiking trails.",
  },
];

interface ImageBoxProps {
  image: string;
  title: string;
  description: string;
}

const ImageBox = ({ image, title, description }: ImageBoxProps) => {
  return (
    <div className="max-w-[345px] w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      
      {/* Image */}
      <div className="h-[140px] w-full relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Actions */}
      <div className="flex justify-start gap-3 p-4">
        <button className="bg-black text-white border border-black rounded-[20px] px-5 py-2 transition hover:bg-transparent hover:text-black">
  Learn More
</button>

      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="w-full px-4 py-6">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-[#121212] mb-6 mt-10">
       Image Box
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {cardData.map((item) => (
          <ImageBox
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
