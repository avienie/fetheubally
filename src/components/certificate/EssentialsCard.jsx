import React from "react";

const EssentialsCard = () => {
  return (
    <div className="bg-white rounded-[32px] shadow-md border border-slate-200 px-8 py-8">
      {/* TITLE */}
      <h2 className="text-[28px] font-black text-black flex items-center gap-3">
        🔗 Brawijaya Essentials
      </h2>

      {/* SUBTEXT */}
      <p className="mt-4 text-[18px] leading-relaxed text-slate-600">
        Stay connected and informed with these official resources:
      </p>

      {/* DIVIDER */}
      <div className="mt-6 h-[2px] bg-slate-300"></div>

      {/* ITEMS */}
      <div className="mt-8 flex flex-col gap-8">
        {/* INSTAGRAM */}
        <div className="flex items-start gap-4">
          {/* GANTI DENGAN ICON FIGMA */}
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl">
            📷
          </div>

          <div>
            <h3 className="text-[20px] font-black text-black">
              Official Instagram
            </h3>

            <p className="text-[17px] font-medium text-slate-700">
              @univ.brawijaya
            </p>

            <p className="text-[15px] text-slate-500 mt-1">
              Campus news & updates
            </p>
          </div>
        </div>

        {/* PORTAL */}
        <div className="flex items-start gap-4">
          {/* GANTI DENGAN ICON FIGMA */}
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl">
            🌐
          </div>

          <div>
            <h3 className="text-[20px] font-black text-black">
              New Student Portal
            </h3>

            <p className="text-[17px] font-medium text-slate-700">
              selma.ub.ac.id
            </p>

            <p className="text-[15px] text-slate-500 mt-1">
              Admissions & general info
            </p>
          </div>
        </div>

        {/* ACADEMIC */}
        <div className="flex items-start gap-4">
          {/* GANTI DENGAN ICON FIGMA */}
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl">
            🎓
          </div>

          <div>
            <h3 className="text-[20px] font-black text-black">
              Academic System
            </h3>

            <p className="text-[17px] font-medium text-slate-700">
              siam.ub.ac.id
            </p>

            <p className="text-[15px] text-slate-500 mt-1">
              Schedules, study plans, & grades
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialsCard;