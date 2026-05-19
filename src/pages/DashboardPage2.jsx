import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";

export default function DashboardPage2() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="bg-white border-[3px] border-[#0F2B5B] rounded-[28px] shadow-xl p-5 h-full">
        <div className="inline-block border border-red-400 rounded-xl px-3 py-1">
          <p className="text-[#D32F2F] text-xs font-bold">Complete Within 7 Days</p>
        </div>
        <h2 className="mt-4 text-xs font-black uppercase tracking-widest text-gray-500">Your Current Adventure</h2>
        <h1 className="mt-2 text-lg font-black text-[#0F2B5B]">
          💻 Week 2 - Digital Campus Master
        </h1>
        <p className="text-sm text-gray-700 leading-relaxed mt-3">
          Physical routes secured! Now, it's time to conquer the digital realm. Master your academic portal (SIAM), secure your class schedule, and get your free campus Wi-Fi access sorted!
        </p>
        <button
          onClick={() => navigate("/week2")}
          className="mt-5 w-full bg-[#D9A431] hover:bg-[#c4921f] transition rounded-[18px] py-3 shadow-lg"
        >
          <span className="text-base font-black text-[#0F2B5B]">START MISSION</span>
        </button>
      </div>
    </DashboardLayout>
  );
}