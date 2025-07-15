import React from 'react';

// Helper functions (equivalent to Utils object in original JS)
const Utils = {
  formatDecimal: (value: number, decimalPlaces: number) => {
    return value.toFixed(decimalPlaces);
  },
  formatPercent: (value: number,) => {
    return `${(value * 100).toFixed(0)}%`;
  },
  // Simple darkening function for HSL colors
  darkenColor: (hslColor: string) => {
    // Expects hslColor in format "hsl(H, S%, L%)"
    const parts = hslColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (parts) {
      const h = parseInt(parts[1]);
      const s = parseInt(parts[2]);
      let l = parseInt(parts[3]);
      // Darken by reducing lightness, ensure it doesn't go below 0
      l = Math.max(0, l - 30); // Adjust this value to control darkening amount
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
    // Fallback for non-HSL colors or invalid format
    return 'rgba(0, 0, 0, 0.2)'; // A dark transparent fallback
  },
};

// Card data
const cardData = [
  {
    color: "hsl(4, 56%, 48%)",
    background: "grass-top-down",
    icon: "link",
    title: "Resilience",
    description: "Learn how to tackle adversity, challenges, and professional setbacks.",
    rating: 4.1,
    completion: 0.12
  },
  {
    color: "hsl(158, 43%, 33%)",
    background: "grass-left",
    icon: "people",
    title: "Growth",
    description: "Create a development plan that best fits your goals and sense of purpose.",
    rating: 4.5,
    completion: 0.32
  },
  {
    color: "hsl(32, 62%, 47%)",
    background: "curves",
    icon: "link",
    title: "Engagement",
    description: "Develop your sense of belonging and an active involvement in meaningful communities.",
    rating: 5,
    completion: 0.8
  },
  {
    color: "hsl(320, 60%, 58%)",
    background: "circles-top",
    icon: "ribbon",
    title: "Visioning",
    description: "Learn how to strategize and formulate your own professional goals.",
    rating: 4.6,
    completion: 1
  },
  {
    color: "hsl(225, 58%, 53%)",
    background: "circles-corner",
    icon: "coil",
    title: "Goal Orientation",
    description: "Adapt your strategies to maximize personal and professional success.",
    rating: 4.2,
    completion: 0.46
  },
  {
    color: "hsl(262, 44%, 53%)",
    background: "grass-bottom",
    icon: "ribbon",
    title: "Self-belief",
    description: "Gain confidence in your abilities and foment and empowered mindset to overcome.",
    rating: 3.9,
    completion: 0.6
  }
];
 
// Main App component
export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="max-w-[100%] w-full ">
        <SVGSprites />
        <HighlightCardGrid>
          {cardData.map((card, i) => (
            <HighlightCard key={i} index={i} {...card} />
          ))}
        </HighlightCardGrid>
      </div>
    </div>
  );
}

// Background Component
function Background({ name }: { name: string }) {
  const href = `#${name}`;
  return (
    <svg className="absolute top-0 left-0 block w-full h-auto text-current" width="648px" height="648px" aria-hidden="true">
      <use href={href} />
    </svg>
  );
}

// HighlightCard Component
type HighlightCardProps = {
  background: string;
  icon: string;
  title: string;
  description: string;
  color?: string;
  rating?: number;
  completion?: number;
  index: number;
};

function HighlightCard({ background, icon, title, description, color = "#000", rating = 1, completion = 0, index }: HighlightCardProps) {
  const ratingFormatted = Utils.formatDecimal(rating, 1);
  const completionFormatted = Utils.formatPercent(completion);
  const cardStyle = { backgroundColor: color, color: Utils.darkenColor(color) };
  const categoryIconStyle = { color };

  // Conditional classes for desktop grid layout based on original CSS nth-child
  let gridClasses = '';
  let fontSizeClass = '';

  if (index === 2) { // nth-child(3)
    gridClasses = 'lg:col-span-2 lg:row-span-2';
  } else if (index === 3) { // nth-child(4)
    gridClasses = 'lg:col-span-2 lg:row-start-2 lg:row-end-4'; // grid-column: 1 / span 2; grid-row: 2 / span 2;
  } else if (index === 5) { // nth-child(6)
    gridClasses = 'lg:col-start-4 lg:row-start-3'; // grid-column: 4; grid-row: 3;
  }

  // nth-child(4n + 1) and nth-child(4n + 2) for font-size: 0.5em
  if (index % 4 === 0 || index % 4 === 1) { // 0, 1, 4, 5, etc.
    fontSizeClass = 'lg:text-[0.5em]'; // Using arbitrary value for 0.5em
  }

  return (
    
    <div
    className={`relative flex flex-col  justify-between overflow-hidden rounded-[1.25em] p-[1.25em] font-light aspect-square w-full max-w-full ${gridClasses} ${fontSizeClass}`}
    style={cardStyle}
  >
      <Background name={background} />
      <div className="relative z-10 flex items-center justify-between gap-[0.75em] text-white">
        <div className="text-[1.45em]">Organizational</div>
        <div className="relative flex-shrink-0 h-[3.755em] w-[3.755em]">
          <Icon name="star-8" />
          <span className="absolute top-1/2 left-1/2 w-[30%] -translate-x-1/2 -translate-y-1/2" style={categoryIconStyle}>
            <Icon name={icon} />
          </span>
        </div>
      </div>
      <div className="relative z-10 flex flex-col text-white">
        <h2 className="font-serif font-normal text-[2em] mb-[0.25em] line-clamp-1">
          {title}
        </h2>
        <p className="text-[1.45em] leading-tight mb-[1.6em] opacity-90 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-[1em] ">
          <div className="flex items-center font-normal gap-[0.2em]">
            <Icon name="star" />
            {ratingFormatted}
          </div>
          <div className="flex items-center font-normal gap-[0.2em]">
            <Icon name="check-circle" />
            {completionFormatted}
          </div>
        </div>
      </div>
    </div>
  );
}

// HighlightCardGrid Component
function HighlightCardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-[0.5em] p-[0.75em] max-w-[54em]
                    md:grid-cols-2
                    lg:grid-cols-4 ">
      {children}
    </div>
  );
}

// Icon Component
function Icon({ name }: { name: string }) {
  const href = `#${name}`;
  return (
    <svg className="block w-[1em] h-auto" width="16px" height="16px" aria-hidden="true">
      <use href={href} />
    </svg>
  );
}

// SVGSprites Component (contains all SVG symbol definitions)
function SVGSprites() {
  return (
    <svg width="0" height="0" display="none">    
      {/* icons */}
      <symbol id="check-circle" viewBox="0 0 16 16">
        <path fill="currentcolor" d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.72 5.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97z" />
      </symbol>
     
      <symbol id="star" viewBox="0 0 64 64">
        <path fill="currentcolor" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z" />
      </symbol>     

    </svg>
  );
}
