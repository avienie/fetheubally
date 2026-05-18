import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekCards = [
  {
    week: "Week 1",
    title: "The Campus Survival Guide",
    desc:
      "You're currently mastering the art of campus mobility. Complete your transport setup, locate the main landmarks, and submit your proof before the week ends!",
    icon: "🎯",
  },
  {
    week: "Week 2",
    title: "Digital Campus Master",
    desc:
      "Physical routes secured! Conquer SIAM, schedule, and Wi-Fi access.",
    icon: "💻",
  },
  {
    week: "Week 3",
    title: "The Brawijaya Explorer",
    desc:
      "Find your student community, explore organizations, and unlock library access.",
    icon: "🌍",
  },
  {
    week: "Week 4",
    title: "The Malang Culinary Explorer",
    desc:
      "Explore iconic student food spots and complete your final mission.",
    icon: "🍜",
  },
];

const ResultCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < weekCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const card = weekCards[currentIndex];

  return (
    <div className="relative w-full">
      <button
        onClick={prevCard}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white w-12 h-12 rounded-full shadow-lg border flex items-center justify-center"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextCard}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white w-12 h-12 rounded-full shadow-lg border flex items-center justify-center"
      >
        <ChevronRight size={20} />
      </button>

      <div className="bg-white border-[5px] border-[#06255D] rounded-[32px] shadow-md px-8 py-8">
        <div className="inline-flex px-5 py-2 rounded-xl bg-[#DDF8E4] border border-green-400">
          <span className="text-green-800 font-bold">Done</span>
        </div>

        <p className="mt-6 text-sm font-black uppercase">
          YOUR CURRENT ADVENTURE
        </p>

        <h2 className="mt-4 text-[32px] font-black text-[#06255D]">
          {card.icon} {card.week} - {card.title}
        </h2>

        <p className="mt-5 text-[18px] text-slate-700 leading-relaxed h-[84px] overflow-hidden">
          {card.desc}
        </p>

        <button className="mt-8 w-full bg-[#D6A12E] rounded-[24px] py-5 text-[26px] font-black text-[#06255D] shadow-md">
          SEE THE RESULT
        </button>
      </div>
    </div>
  );
};

export default ResultCarousel;