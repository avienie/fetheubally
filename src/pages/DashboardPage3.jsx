function DashboardPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F4F4F4] px-4 py-3">
      {/* NAVBAR */}
      <div className="bg-white h-[11vh] rounded-b-[30px] border-b-[4px] border-[#1C3566] shadow-lg px-8 flex items-center justify-between">
        {/* LOGO */}
        <div className="leading-none">
          <h1 className="text-[20px] font-black text-[#0F2B5B]">
            The UB
          </h1>

          <h1 className="text-[20px] font-black text-[#D9A431] -mt-1">
            Ally
          </h1>

          <p className="text-[7px] font-semibold text-[#0F2B5B] mt-1">
            Brawijaya Student Alliance
          </p>
        </div>

        {/* LOGOUT */}
        <div className="flex items-center gap-2">
          <h1 className="text-[16px] font-bold text-[#0F2B5B]">
            Logout
          </h1>

          <span className="text-[16px]">
            ⬅
          </span>
        </div>
      </div>

      {/* HERO */}
      <div className="mt-5 bg-[#0D2554] rounded-[30px] shadow-xl px-8 py-6 h-[30vh]">
        <h1 className="text-white text-[30px] font-black leading-tight">
          Welcome abroad, Bagas!
        </h1>

        <p className="text-white text-[14px] leading-[30px] mt-3 max-w-[1100px]">
          You are currently embarking on your exciting journey as a
          Brawijaya student. Your path to becoming a true Brawijayan
          has just begun. Every mission you complete brings you one
          step closer to mastering campus life.
        </p>

        <p className="text-white text-[14px] mt-5">
          Stay curious and keep exploring!
        </p>
      </div>

      {/* BOTTOM */}
      <div className="grid grid-cols-12 gap-5 mt-5 h-[42vh]">
        {/* LEFT CARD */}
        <div className="col-span-4 bg-white rounded-[28px] shadow-xl p-5">
          <div className="flex items-center gap-2">
            <span className="text-[22px]">
              
            </span>

            <h1 className="text-[20px] font-black">
            🔗 Brawijaya Essentials
            </h1>
          </div>

          <p className="text-[14px] text-gray-600 mt-1 leading-5">
            Stay connected and informed with these official resources:
          </p>

          <div className="border-b border-gray-400 mt-3"></div>

          {/* ITEM */}
          <div className="mt-4 space-y-5">
            <div className="flex gap-2">
              <span></span>

              <div>
                <h2 className="text-[20px] font-black">
                 📸 Official Instagram
                </h2>

                <p className="text-[14px]">
                  @univ.brawijaya
                </p>

                <p className="text-[12px] text-gray-500">
                  Campus news & updates
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <span></span>

              <div>
                <h2 className="text-[20px] font-black">
                 🌐 New Student Portal
                </h2>

                <p className="text-[14px]">
                  selma.ub.ac.id
                </p>

                <p className="text-[12px] text-gray-500">
                 🎓 Admissions & general info
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <span></span>

              <div>
                <h2 className="text-[20px] font-black">
                  Academic System
                </h2>

                <p className="text-[14px]">
                  siam.ub.ac.id
                </p>

                <p className="text-[12px] text-gray-500">
                  Schedules, study plans, & grades
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="col-span-8 bg-white border-[4px] border-[#0F2B5B] rounded-[28px] shadow-xl p-5">
          {/* BADGE */}
          <div className="inline-block border border-red-400 rounded-xl px-4 py-1">
            <p className="text-[#D32F2F] text-[14px] font-bold">
              Complete Within 7 Days
            </p>
          </div>

          {/* TITLE */}
          <h2 className="mt-4 text-[18px] font-black">
            YOUR CURRENT ADVENTURE
          </h2>

          {/* MISSION */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[24px]">
            </span>

            <h1 className="text-[20px] font-black text-[#0F2B5B]">
             Week 3 - The Brawijaya Explorer 🌍
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="text-[14px] text-gray-700 leading-[32px] mt-3">
            Academics are important, but connections make your college years unforgettable. Let's find your community, explore student organizations (UKM), and unlock the central library access!
          </p>

          {/* BUTTON */}
          <button className="mt-5 w-full bg-[#D9A431] hover:bg-[#c4921f] transition-all duration-300 rounded-[18px] py-3 shadow-lg">
            <h1 className="text-[18px] font-black text-[#0F2B5B]">
              START MISSION
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;