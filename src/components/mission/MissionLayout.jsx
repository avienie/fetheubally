import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";

export default function MissionLayout({ week, title, badge, children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="px-6 py-6 max-w-3xl mx-auto">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-1 text-[#0B2559] font-bold text-sm hover:opacity-70 transition"
        >
          ← Back to Dashboard
        </button>
        <h1 className="mt-4 text-2xl font-black text-[#0B2559] uppercase">
          {week} : {title}
        </h1>
        <div className={`mt-2 inline-block px-3 py-1 rounded-lg text-xs font-bold border ${
          badge === "done"
            ? "bg-green-100 text-green-700 border-green-400"
            : "bg-red-50 text-red-600 border-red-400"
        }`}>
          {badge === "done" ? "Done" : "Complete Within 7 Days"}
        </div>
        <div className="mt-6 flex flex-col gap-5">{children}</div>
      </div>
    </div>
  );
}