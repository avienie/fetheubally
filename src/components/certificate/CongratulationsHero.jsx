import React from "react";
import { GraduationCap } from "lucide-react";

const CongratulationsHero = () => {
  return (
    <section className="bg-[#06255D] rounded-[40px] px-12 py-16 shadow-md">
      <div className="text-center text-white">
        {/* ICON */}
        <div className="w-20 h-20 rounded-full bg-[#D6A12E] flex items-center justify-center mx-auto">
          <GraduationCap size={42} className="text-[#06255D]" />
        </div>

        {/* TITLE */}
        <h2 className="mt-8 text-[64px] font-black leading-none">
          Congratulations, Bagas!
        </h2>

        {/* DESC */}
        <p className="mt-8 max-w-[980px] mx-auto text-[30px] leading-relaxed font-medium">
          You have successfully completed all 4 weeks of missions.
          You are now officially{" "}
          <span className="text-[#D6A12E] font-black">
            100% READY
          </span>{" "}
          to conquer Universitas Brawijaya.
          Welcome to the campus!
        </p>
      </div>
    </section>
  );
};

export default CongratulationsHero;