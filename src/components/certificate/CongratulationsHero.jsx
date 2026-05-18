import React from "react";
import { GraduationCap } from "lucide-react";

const CongratulationsHero = () => {
  return (
    <section className="bg-[#06255D] text-white rounded-3xl py-14 px-10 text-center shadow-lg">
      <GraduationCap size={60} className="mx-auto text-yellow-400 mb-5" />

      <h2 className="text-5xl font-extrabold mb-5">
        Congratulations, Bagas!
      </h2>

      <p className="text-2xl max-w-4xl mx-auto leading-relaxed">
        You have successfully completed all 4 weeks of missions. You are now
        officially{" "}
        <span className="text-yellow-400 font-bold">100% READY</span> to
        conquer Universitas Brawijaya.
      </p>
    </section>
  );
};

export default CongratulationsHero;