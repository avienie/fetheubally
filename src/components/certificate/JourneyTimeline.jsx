import React from "react";

const timeline = [
  "Week 1:\nCampus Survival Guide",
  "Week 2:\nDigital Campus Master",
  "Week 3:\nSocial Networking & UKM",
  "Week 4:\nCultural Culinary & Local Vibe",
];

const JourneyTimeline = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      <h3 className="text-2xl font-bold mb-8">
        🗺 The Journey of Master
      </h3>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-green-500 transform -translate-x-1/2"></div>

        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center ${
                idx % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              <div className="w-40 bg-green-100 border-2 border-green-500 rounded-xl p-3 text-sm font-semibold whitespace-pre-line">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;