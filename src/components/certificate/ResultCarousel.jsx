import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const weekCards = [
  {
    week: "Week 1",
    title: "The Campus Survival Guide",
    desc: "You're currently mastering the art of campus mobility. Complete your transport setup, locate the main landmarks, and submit your proof before the week ends!",
    icon: "🎯",
  },
  {
    week: "Week 2",
    title: "Digital Campus Master",
    desc: "Physical routes secured! Now, it's time to conquer the digital realm.",
    icon: "💻",
  },
  {
    week: "Week 3",
    title: "The Brawijaya Explorer",
    desc: "Explore communities, organizations, and library access.",
    icon: "🌍",
  },
  {
    week: "Week 4",
    title: "The Malang Culinary Explorer",
    desc: "Discover iconic student food spots around campus.",
    icon: "🍜",
  },
];

const ResultCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={scrollRight}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
      >
        <ChevronRight size={28} />
      </button>

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-2"
      >
        {weekCards.map((card, idx) => (
          <div
            key={idx}
            className="min-w-[420px] bg-white rounded-3xl border-4 border-slate-800 shadow-md p-6 flex-shrink-0"
          >
            <span className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2">
              <CheckCircle size={16} />
              Done
            </span>

            <p className="text-sm mt-5 uppercase font-semibold text-gray-500">
              Your Current Adventure
            </p>

            <h3 className="text-3xl font-extrabold mt-2">
              {card.icon} {card.week}
            </h3>

            <h4 className="text-xl font-bold mt-2">{card.title}</h4>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {card.desc}
            </p>

            <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-extrabold text-xl py-4 rounded-2xl shadow">
              SEE THE RESULT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCarousel;