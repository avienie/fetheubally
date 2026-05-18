import React from "react";
import { LogOut } from "lucide-react";

const CertificateNavbar = () => {
  return (
    <nav className="bg-white shadow-md rounded-b-[28px] border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-8 py-5 flex justify-between items-center">
        {/* LOGO */}
        <div className="leading-none">
          <h1 className="text-[42px] font-black text-[#06255D]">
            The UB <span className="text-[#D6A12E]">Ally</span>
          </h1>
          <p className="text-[12px] text-slate-500 font-medium mt-1">
            Brawijaya Student Alliance
          </p>
        </div>

        {/* LOGOUT */}
        <button className="flex items-center gap-3 text-[#06255D] font-black text-[24px] hover:opacity-80 transition">
          Logout
          <LogOut size={24} />
        </button>
      </div>
    </nav>
  );
};

export default CertificateNavbar;