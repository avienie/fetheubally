import React from "react";
import { GraduationCap, Download } from "lucide-react";

const CertificatePreview = () => {
  const handleDownload = () => {
    console.log("download certificate");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-3xl border-4 border-slate-800 shadow-md p-10">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-[#06255D] flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="text-yellow-400" size={40} />
          </div>

          <p className="font-bold uppercase tracking-wide">
            Official Certificate of Completion
          </p>

          <h2 className="text-5xl font-extrabold text-[#06255D] mt-4">
            THE CAMPUS MASTER
          </h2>

          <p className="mt-8 text-xl">This is to certify that</p>

          <h3 className="text-5xl font-extrabold mt-3">
            Bagas Dwitama
          </h3>

          <p className="text-xl mt-2">NIM: 215020207111069</p>

          <p className="max-w-3xl mx-auto mt-8 text-xl leading-relaxed">
            Has successfully demonstrated exceptional readiness in physical
            mobility, digital systems, social networking, and cultural adaptation
            at Universitas Brawijaya.
          </p>

          <div className="grid grid-cols-2 mt-14">
            <div>
              <p className="italic text-3xl">The UB Ally Team</p>
              <p className="font-bold text-xl mt-2">AUTHORIZED SIGNATURE</p>
            </div>

            <div>
              <p className="font-bold text-2xl">AUGUST 2026</p>
              <p className="font-bold text-xl mt-2">DATE OF ISSUE</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="bg-yellow-500 hover:bg-yellow-400 transition rounded-2xl shadow-md py-6 text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-3"
      >
        <Download size={30} />
        DOWNLOAD YOUR CERTIFICATE
      </button>
    </div>
  );
};

export default CertificatePreview;