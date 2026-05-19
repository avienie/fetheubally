import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-6">

      {/* HEADER */}
      <div className="w-full bg-white rounded-[30px] px-10 py-6 shadow-md border-b-4 border-[#0F2B5B] flex justify-between items-center">
        <div>
          <h1 className="text-[30px] font-black text-[#0F2B5B] leading-none">
            The UB
          </h1>
          <h1 className="text-[30px] font-black text-[#D9A431] leading-none">
            Ally
          </h1>

          <p className="text-[12px] text-[#0F2B5B] mt-1">
            Brawijaya Student Alliance
          </p>
        </div>

        <button className="text-[#0F2B5B] font-bold text-[18px]">
          Logout →
        </button>
      </div>

      {/* HERO */}
      <div className="mt-8 bg-[#0F2B5B] rounded-[35px] p-10 text-white">
        <h1 className="text-[55px] font-black">
          Welcome abroad, Bagas!
        </h1>

        <p className="mt-6 text-[22px] leading-[45px]">
          You are currently embarking on your exciting journey as a
          Brawijaya student. Your path to becoming a true Brawijayan
          has just begun.
        </p>

        <p className="mt-10 text-[22px] font-semibold">
          Stay curious and keep exploring!
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-2 gap-6 mt-8">

        {/* LEFT CARD */}
        <div className="bg-white rounded-[35px] p-8 shadow-md">
          <h1 className="text-[40px] font-black text-black">
            Brawijaya Essentials
          </h1>

          <p className="text-[22px] mt-3 text-gray-700">
            Stay connected and informed with these official resources:
          </p>

          <div className="border-b mt-6"></div>

          {/* ITEM */}
          <div className="mt-8">
            <h1 className="text-[32px] font-black">
              📸 Official Instagram
            </h1>

            <p className="text-[22px] mt-2">@univ.brawijaya</p>

            <p className="text-[18px] text-gray-500">
              Campus news & updates
            </p>
          </div>

          {/* ITEM */}
          <div className="mt-10">
            <h1 className="text-[32px] font-black">
              🌐 New Student Portal
            </h1>

            <p className="text-[22px] mt-2">selma.ub.ac.id</p>

            <p className="text-[18px] text-gray-500">
              Admissions & general info
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-[35px] p-8 border-[5px] border-[#0F2B5B]">

          <div className="border border-red-300 rounded-full px-6 py-3 inline-block">
            <h1 className="text-red-500 font-bold text-[22px]">
              Complete Within 7 Days
            </h1>
          </div>

          <h1 className="mt-10 text-[50px] font-black">
            YOUR CURRENT ADVENTURE
          </h1>

          <h1 className="mt-8 text-[45px] font-black text-[#0F2B5B]">
            Week 2 - Digital Campus Master 💻
          </h1>

          <p className="mt-8 text-[22px] leading-[42px] text-gray-700">
            Physical routes secured! Now, it's time to conquer the digital realm.
            Master your academic portal (SIAM), secure your class schedule,
            and get your free campus Wi-Fi access sorted!
          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/week3")}
            className="mt-10 w-full bg-[#D9A431] hover:bg-[#c4921f] transition-all duration-300 rounded-[25px] py-6"
          >
            <h1 className="text-[30px] font-black text-[#0F2B5B]">
              START MISSION
            </h1>
          </button>

        </div>
      </div>
    </div>
  );
}

export default DashboardPage;