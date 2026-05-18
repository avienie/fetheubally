import React from "react";
import { Download, GraduationCap, Award } from "lucide-react";

const CertificatePreview = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* CERTIFICATE */}
      <div className="bg-white border-[5px] border-[#06255D] rounded-[32px] shadow-md px-8 py-8">
        <div className="text-center">
          {/* ICON */}
          <div className="w-16 h-16 rounded-full bg-[#06255D] flex items-center justify-center mx-auto">
            <GraduationCap size={28} className="text-[#D6A12E]" />
          </div>

          {/* HEADER */}
          <p className="mt-6 text-[14px] font-black uppercase">
            Official Certificate of Completion
          </p>

          {/* TITLE */}
          <h2 className="mt-4 text-[42px] font-black text-[#06255D]">
            THE CAMPUS MASTER
          </h2>

          {/* SUB */}
          <p className="mt-6 text-[20px] font-semibold">
            This is to certify that
          </p>

          {/* NAME */}
          <h3 className="mt-4 text-[44px] font-black text-black">
            Bagas Dwitama
          </h3>

          <div className="w-[320px] h-[3px] bg-[#D6A12E] mx-auto mt-2"></div>

          {/* NIM */}
          <p className="mt-3 text-[18px] font-medium">
            NIM: 215020207111069
          </p>

          {/* DESC */}
          <p className="mt-8 max-w-[620px] mx-auto text-[20px] leading-relaxed text-slate-700">
            Has successfully demonstrated exceptional readiness in
            physical mobility, digital systems, social networking, and
            cultural adaptation at Universitas Brawijaya.
          </p>

          {/* FOOTER */}
          <div className="grid grid-cols-3 items-end mt-12">
            {/* SIGN */}
            <div>
              <p className="italic text-[28px]">Lavina M</p>
              <div className="w-44 h-[3px] bg-[#D6A12E] mx-auto mt-2"></div>
              <p className="mt-2 text-[16px] font-black text-[#06255D]">
                THE UB ALLY TEAM
              </p>
            </div>

            {/* SEAL */}
            <div className="flex justify-center">
              <Award size={50} className="text-[#D6A12E]" />
            </div>

            {/* DATE */}
            <div>
              <p className="text-[24px] font-black">
                AUGUST 2026
              </p>
              <div className="w-44 h-[3px] bg-[#D6A12E] mx-auto mt-2"></div>
              <p className="mt-2 text-[16px] font-black text-[#06255D]">
                DATE OF ISSUE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DOWNLOAD */}
      <button className="bg-[#D6A12E] hover:bg-[#C79420] transition rounded-[20px] py-5 shadow-md">
        <div className="flex items-center justify-center gap-3">
          <Download size={26} className="text-[#06255D]" />
          <span className="text-[24px] font-black text-[#06255D]">
            DOWNLOAD YOUR CERTIFICATE
          </span>
        </div>
      </button>
    </div>
  );
};

export default CertificatePreview;