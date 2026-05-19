import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekCards = [
  {
    id: "week1",
    week: "Week 1",
    title: "The Campus Survival Guide",
    desc: "You're currently mastering the art of campus mobility. Complete your transport setup, locate the main landmarks, and submit your proof before the week ends!",
    icon: "🎯",
  },
  {
    id: "week2",
    week: "Week 2",
    title: "Digital Campus Master",
    desc: "Physical routes secured! Conquer SIAM, schedule, and Wi-Fi access.",
    icon: "💻",
  },
  {
    id: "week3",
    week: "Week 3",
    title: "The Brawijaya Explorer",
    desc: "Find your student community, explore organizations, and unlock library access.",
    icon: "🌍",
  },
  {
    id: "week4",
    week: "Week 4",
    title: "The Malang Culinary Explorer",
    desc: "Explore iconic student food spots and complete your final mission.",
    icon: "🍜",
  },
];

const ResultCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const card = weekCards[currentIndex];

  return (
    <div className="relative w-full">
      <button
        onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-lg border flex items-center justify-center disabled:opacity-30"
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={() => currentIndex < weekCards.length - 1 && setCurrentIndex(currentIndex + 1)}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-lg border flex items-center justify-center disabled:opacity-30"
        disabled={currentIndex === weekCards.length - 1}
      >
        <ChevronRight size={18} />
      </button>

      <div className="bg-white border-[3px] border-[#06255D] rounded-[28px] shadow-md px-7 py-7">
        <div className="inline-flex px-4 py-1 rounded-lg bg-green-100 border border-green-400">
          <span className="text-green-700 font-bold text-xs">Done</span>
        </div>

        <p className="mt-4 text-xs font-black uppercase tracking-widest text-gray-500">
          Your Current Adventure
        </p>

        <h2 className="mt-2 text-lg font-black text-[#06255D]">
          {card.icon} {card.week} - {card.title}
        </h2>

        <p className="mt-3 text-sm text-slate-700 leading-relaxed min-h-[60px]">
          {card.desc}
        </p>

        <button
          onClick={() => navigate(`/result/${card.id}`)}
          className="mt-6 w-full bg-[#D6A12E] hover:bg-[#c4921f] transition rounded-[18px] py-4 text-base font-black text-[#06255D] shadow-md"
        >
          SEE THE RESULT
        </button>
      </div>

      {/* dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {weekCards.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition ${
              i === currentIndex ? "bg-[#06255D]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultCarousel;