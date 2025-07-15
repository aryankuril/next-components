"use client";

import {
  useEffect,
  useRef,
  useState,
  createContext,
  // useContext,
  useCallback,
} from "react";

const data = [
  {
    title: "Protection Score",
    description:
      "This score measures your overall security strength. Higher score means better protection. Aim to maintain or improve.",
    initialScore: 42,
    colors: ["#f97316", "#fb923c"], // orange
  },
  {
    title: "Investment Score",
    description:
      "This score measures portfolio alignment with your goals and strategy. Higher score indicates better performance.",
    initialScore: 83,
    colors: ["#10b981", "#22d3ee"], // green-blue
  },
  {
    title: "Financial Fitness",
    description:
      "Boost financial control in 10 minutes. Get your fitness score—quick, free, no impact on credit or mortgages.",
    initialScore: 10,
    colors: ["#6366f1", "#3b82f6"], // blue
  },
];

const CounterContext = createContext<
  { getNextIndex: () => number } | undefined
>(undefined);
// const useCounter = () => {
//   const context = useContext(CounterContext);
//   if (!context) throw new Error("useCounter must be used within a CounterProvider");
//   return context.getNextIndex;
// };

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const counterRef = useRef(0);
  const getNextIndex = useCallback(() => counterRef.current++, []);
  return (
    <CounterContext.Provider value={{ getNextIndex }}>
      {children}
    </CounterContext.Provider>
  );
};

const formatNumber = (n: number) => new Intl.NumberFormat("en-US").format(n);
const randomInt = (min = 0, max = 1) =>
  Math.round(min + (max - min) * (crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32));

const getStrength = (score: number | null, max: number) => {
  if (!score) return "none";
  const percent = score / max;
  return percent >= 0.8 ? "strong" : percent >= 0.4 ? "moderate" : "weak";
};

const FinancialScore = ({
  title,
  description,
  initialScore,
  colors,
}: {
  title: string;
  description: string;
  initialScore?: number;
  colors: string[];
}) => {
  const [score, setScore] = useState<number | null>(initialScore ?? null);
  const hasScore = score !== null;
  const max = 100;
  const strength = getStrength(score, max);

  const handleGenerateScore = () => {
    if (!hasScore) setScore(randomInt(0, max));
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        {strength !== "none" && (
          <span
            className={`text-xs font-semibold uppercase px-2 py-1 rounded ${
              strength === "weak"
                ? "bg-red-100 text-red-700"
                : strength === "moderate"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {strength}
          </span>
        )}
      </div>

      <div className="relative flex flex-col items-center mb-6">
        <AnimatedHalfCircle
          value={score}
          max={max}
          strength={strength}
          colors={colors}
        />
        <div className="text-center -mt-20">
          <div className="text-5xl font-bold">{hasScore ? score : 0}</div>
          <div className="text-sm text-gray-500 uppercase">
            {hasScore ? `OUT OF ${formatNumber(max)}` : "NO SCORE"}
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-center mb-6 min-h-[4.5em]">{description}</p>

      <button
        className="w-full py-2 px-4 rounded-lg font-medium bg-blue-600 text-white"
        onClick={handleGenerateScore}
      >
        {hasScore ? "Learn more" : "Calculate your score"}
      </button>
    </div>
  );
};

const AnimatedHalfCircle = ({
  value,
  max,
  // strength,
  colors,
}: {
  value: number | null;
  max: number;
  strength: string;
  colors: string[];
}) => {
  const ref = useRef<SVGCircleElement>(null);
  const [inView, setInView] = useState(false);

  const radius = 45;
  const dist = 2 * Math.PI * radius;
  const dasharray = `${dist / 2} ${dist / 2}`;
  const gradId = `grad-${colors[0].slice(1)}-${colors[1].slice(1)}`;

  const targetOffset = value !== null ? ((1 - value / max) * dist) / 2 : dist / 2;
  const fullOffset = dist / 2;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg viewBox="0 0 100 50" className="w-full max-w-xs mb-4">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          {colors.map((stop, i) => (
            <stop
              key={i}
              offset={`${(i / (colors.length - 1)) * 100}%`}
              stopColor={stop}
            />
          ))}
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="10" transform="translate(50,50.5) rotate(-180)">
        <circle r={radius} stroke="#e5e7eb" strokeDasharray={dasharray} />
        <circle
          ref={ref}
          r={radius}
          stroke={`url(#${gradId})`}
          strokeDasharray={dasharray}
          strokeDashoffset={inView ? targetOffset : fullOffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s ease-out",
          }}
        />
      </g>
    </svg>
  );
};


const ProgressCard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        <CounterProvider>
          {data.map((card, i) => (
            <FinancialScore key={i} {...card} />
          ))}
        </CounterProvider>
      </div>
    </div>
  );
};

export default ProgressCard;
