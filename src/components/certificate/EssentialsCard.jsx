import React from "react";
import { Camera, Globe, BookOpen } from "lucide-react";

const essentials = [
  {
    icon: <Camera size={18} />,
    title: "Official Instagram",
    subtitle: "@univ.brawijaya",
    desc: "Campus news & updates",
  },
  {
    icon: <Globe size={18} />,
    title: "New Student Portal",
    subtitle: "selma.ub.ac.id",
    desc: "Admissions & general info",
  },
  {
    icon: <BookOpen size={18} />,
    title: "Academic System",
    subtitle: "siam.ub.ac.id",
    desc: "Schedules, study plans, & grades",
  },
];

const EssentialsCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      <h3 className="text-3xl font-bold mb-5 flex items-center gap-2">
        🔗 Brawijaya Essentials
      </h3>

      <div className="space-y-6">
        {essentials.map((item, idx) => (
          <div key={idx} className="flex gap-3">
            <div className="text-blue-700 mt-1">{item.icon}</div>

            <div>
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="font-medium">{item.subtitle}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialsCard;