import { useUser } from "../../context/UserContext";
import Navbar from "../shared/Navbar";

export default function DashboardLayout({ children }) {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navbar />
      <div className="px-6 py-5">
        <div className="bg-[#0D2554] rounded-[28px] shadow-xl px-8 py-7">
          <h1 className="text-white text-2xl font-black leading-tight">
            Welcome abroad, {user?.name}!
          </h1>
          <p className="text-white text-sm leading-relaxed mt-3 max-w-4xl">
            You are currently embarking on your exciting journey as a Brawijaya student. Your path to becoming a true Brawijayan has just begun. Every mission you complete brings you one step closer to mastering campus life.
          </p>
          <p className="text-white text-sm mt-4">Stay curious and keep exploring!</p>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-4 bg-white rounded-[28px] shadow-xl p-5">
            <h1 className="text-base font-black">🔗 Brawijaya Essentials</h1>
            <p className="text-xs text-gray-600 mt-1">Stay connected and informed with these official resources:</p>
            <div className="border-b border-gray-300 mt-3" />
            <div className="mt-4 space-y-4">
              <div>
                <h2 className="text-sm font-black">📸 Official Instagram</h2>
                <p className="text-xs">@univ.brawijaya</p>
                <p className="text-xs text-gray-500">Campus news & updates</p>
              </div>
              <div>
                <h2 className="text-sm font-black">🌐 New Student Portal</h2>
                <p className="text-xs">selma.ub.ac.id</p>
                <p className="text-xs text-gray-500">Admissions & general info</p>
              </div>
              <div>
                <h2 className="text-sm font-black">🎓 Academic System</h2>
                <p className="text-xs">siam.ub.ac.id</p>
                <p className="text-xs text-gray-500">Schedules, study plans, & grades</p>
              </div>
            </div>
          </div>
          <div className="col-span-8">{children}</div>
        </div>
      </div>
    </div>
  );
}