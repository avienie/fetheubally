import React, { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { useUser } from "../../context/UserContext";
import html2canvas from "html2canvas";

const CertificatePreview = () => {
  const { user } = useUser();
  const certRef = useRef(null);

  async function handleDownload() {
    if (!certRef.current) return;
    const canvas = await html2canvas(certRef.current, { scale: 2 });
    const link = document.createElement("a");
    link.download = `Certificate_${user?.name || "UBAlly"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <div className="flex flex-col gap-4">
      {/* CERTIFICATE — ref untuk di-capture */}
      <div ref={certRef} className="bg-white border-[5px] border-[#06255D] rounded-[32px] shadow-md px-8 py-8">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-[#06255D] flex items-center justify-center mx-auto">
            <GraduationCap size={28} className="text-[#D6A12E]" />
          </div>
          <p className="mt-6 text-[14px] font-black uppercase">
            Official Certificate of Completion
          </p>
          <h2 className="mt-4 text-[42px] font-black text-[#06255D]">
            THE CAMPUS MASTER
          </h2>
          <p className="mt-6 text-[20px] font-semibold">
            This is to certify that
          </p>
          <h3 className="mt-4 text-[44px] font-black text-black">
            {user?.name || "Your Name"}
          </h3>
          <div className="w-[320px] h-[3px] bg-[#D6A12E] mx-auto mt-2" />
          <p className="mt-8 max-w-[620px] mx-auto text-[20px] leading-relaxed text-slate-700">
            Has successfully demonstrated exceptional readiness in
            physical mobility, digital systems, social networking, and
            cultural adaptation at Universitas Brawijaya.
          </p>
          <div className="grid grid-cols-3 items-end mt-12">
            <div>
              <p className="italic text-[28px]">The UB Ally</p>
              <div className="w-44 h-[3px] bg-[#D6A12E] mx-auto mt-2" />
              <p className="mt-2 text-[16px] font-black text-[#06255D]">THE UB ALLY TEAM</p>
            </div>
            <div className="flex justify-center">
              <Award size={50} className="text-[#D6A12E]" />
            </div>
            <div>
              <p className="text-[24px] font-black">AUGUST 2026</p>
              <div className="w-44 h-[3px] bg-[#D6A12E] mx-auto mt-2" />
              <p className="mt-2 text-[16px] font-black text-[#06255D]">DATE OF ISSUE</p>
            </div>
          </div>
        </div>
      </div>

      {/* DOWNLOAD BUTTON */}
      <button
        onClick={handleDownload}
        className="bg-[#D6A12E] hover:bg-[#C79420] transition rounded-[20px] py-5 shadow-md"
      >
        <span className="text-[24px] font-black text-[#06255D]">
          DOWNLOAD YOUR CERTIFICATE
        </span>
      </button>
    </div>
  );
};

export default CertificatePreview;