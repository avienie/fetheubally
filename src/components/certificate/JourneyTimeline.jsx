import React from "react";
import { Check } from "lucide-react";

const timeline = [
  {
    title: "Week 1:",
    subtitle: "Mobility",
    desc: "Campus Survival Guide",
    side: "right",
  },
  {
    title: "Week 2:",
    subtitle: "Digital",
    desc: "Digital Campus Master",
    side: "left",
  },
  {
    title: "Week 3:",
    subtitle: "Social",
    desc: "Networking & UKM",
    side: "right",
  },
  {
    title: "Week 4:",
    subtitle: "Cultural",
    desc: "Culinary & Local Vibe",
    side: "left",
  },
];

const JourneyTimeline = () => {
  return (
    <div className="bg-white rounded-[28px] shadow-md border border-slate-200 px-6 py-6 h-full">
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <div className="text-2xl">🗺️</div>
        <h2 className="text-[20px] font-black text-black">
          The Journey of Master
        </h2>
      </div>

      <div className="mt-4 h-[2px] bg-slate-300"></div>

      {/* TIMELINE */}
      <div className="relative mt-8 h-[520px]">
        {/* LINE */}
        <div className="absolute left-1/2 top-0 h-full w-[4px] bg-[#22C55E] -translate-x-1/2 rounded-full"></div>

        {timeline.map((item, idx) => {
          const positions = [40, 170, 300, 430];

          return (
            <div key={idx}>
              {/* CHECKPOINT */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#22C55E] border-4 border-white shadow-md flex items-center justify-center"
                style={{ top: `${positions[idx]}px` }}
              >
                <Check size={20} className="text-white font-bold" />
              </div>

              {/* CARD */}
              <div
                className={`absolute w-[150px] bg-[#DDF8E4] border-[3px] border-[#22C55E] rounded-2xl px-4 py-3 shadow-sm ${
                  item.side === "right" ? "right-0" : "left-0"
                }`}
                style={{ top: `${positions[idx] - 15}px` }}
              >
                <h3 className="text-[16px] font-black text-slate-800">
                  {item.title}
                </h3>

                <p className="text-[14px] font-bold text-green-700 mt-1">
                  {item.subtitle}
                </p>

                <p className="text-[13px] text-green-600 mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyTimeline;