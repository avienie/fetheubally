import React from "react";
import { LogOut } from "lucide-react";

const CertificateNavbar = () => {
  return (
    <nav className="bg-white shadow-md rounded-b-3xl px-10 py-5 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">
          The UB <span className="text-yellow-500">Ally</span>
        </h1>
        <p className="text-xs text-gray-500">Brawijaya Student Alliance</p>
      </div>

      <button className="flex items-center gap-2 font-bold text-xl hover:text-yellow-500 transition">
        Logout
        <LogOut size={22} />
      </button>
    </nav>
  );
};

export default CertificateNavbar;