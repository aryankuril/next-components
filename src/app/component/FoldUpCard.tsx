"use client";
import { useState } from "react";

export default function TextCard() {
  const cardData = [
    {
      title: "Big Heading Card 1",
      subtitle: "All text, no images. Serious!",
      paragraphs: [
        { text: "This is the first paragraph of card 1." },
        { heading: "First Subheading", text: "Details about the first point." },
        { heading: "Second Subheading", text: "More info in card one." },
      ],
    },
    {
      title: "Insightful Title 2",
      subtitle: "Minimalism at its peak.",
      paragraphs: [
        { text: "Card 2 starts with this summary." },
        { heading: "Why Minimalism?", text: "It reduces clutter and enhances focus." },
        { heading: "Apply It", text: "Start with small things in your workspace." },
      ],
    },
    {
      title: "Creative Sparks 3",
      subtitle: "Ideas start small and grow.",
      paragraphs: [
        { text: "Creativity is a muscle—train it." },
        { heading: "Daily Habits", text: "Sketch, journal, or brainstorm regularly." },
        { heading: "Share Ideas", text: "Put your thoughts out in the world." },
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-background text-text grid place-items-center p-8">
      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((card, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className={`border border-primary rounded-[3.5rem] p-8 max-w-[20rem] transition-all duration-300 ${
                !isExpanded ? "fold" : ""
              }`}
            >
              <h1 className="text-2xl leading-none py-2">{card.title}</h1>
              <h3 className="inline-block text-base leading-tight py-2 bg-[length:100%_0.8rem] bg-no-repeat bg-center bg-[color:color-mix(in_hsl,theme(colors.primary),theme(colors.background)_60%)]">
                {card.subtitle}
              </h3>
              <div
                className={`relative overflow-hidden transition-[max-height] duration-300 ${
                  isExpanded ? "max-h-[140vh]" : "max-h-[1.4rem]"
                } text`}
              >
                {card.paragraphs.map((para, pIndex) => (
                  <div key={pIndex}>
                    {pIndex === 0 ? (
                      <p
                        className={`pt-0 max-w-[calc(100vw-10.8rem)] overflow-hidden ${
                          !isExpanded
                            ? "whitespace-nowrap text-ellipsis h-[1.2rem]"
                            : ""
                        }`}
                      >
                        {para.text}
                      </p>
                    ) : (
                      <>
                        {para.heading && (
                          <h5 className="text-primary py-2">{para.heading}</h5>
                        )}
                        <p className="leading-relaxed py-2">{para.text}</p>
                      </>
                    )}
                  </div>
                ))}
                <div
                  className={`absolute bottom-0 h-[1px] w-full rounded-full bg-primary transition-transform duration-300 ${
                    !isExpanded ? "scale-x-0" : "scale-x-100"
                  }`}
                />
              </div>
              <button
                onClick={() => toggleCard(index)}
                className="relative inline-block text-primary text-lg mt-2 ml-[-1.4rem] px-6 py-3 hover:before:scale-100 active:text-background active:before:bg-primary"
              >
                {isExpanded ? "Fold up" : "Read more"}
                <span className="absolute inset-0 rounded-full border border-primary opacity-0 scale-0 transition-all duration-100 hover:opacity-100 hover:scale-100" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
