function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] px-6 py-5">
      {/* NAVBAR */}
      <div className="bg-white rounded-b-[35px] border-b-[4px] border-[#1C3566] shadow-xl px-10 py-5 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex flex-col leading-none">
          <h1 className="text-[42px] font-black text-[#0F2B5B]">
            The UB
          </h1>

          <h1 className="text-[42px] font-black text-[#D9A431] -mt-1">
            Ally
          </h1>

          <p className="text-[10px] font-semibold text-[#0F2B5B] mt-1">
            Brawijaya Student Alliance
          </p>
        </div>

        {/* LOGOUT */}
        <div className="flex items-center gap-3">
          <h1 className="text-[28px] font-bold text-[#0F2B5B]">
            Logout
          </h1>

          <span className="text-[28px]">
            ⬅
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="mt-10 bg-[#0D2554] rounded-[35px] shadow-xl px-8 py-8">
        <h1 className="text-white text-[64px] font-black leading-tight">
          Welcome abroad, Bagas!
        </h1>

        <p className="text-white text-[24px] mt-4 leading-[40px] max-w-[1200px]">
          You are currently embarking on your exciting journey as a
          Brawijaya student. Your path to becoming a true Brawijayan
          has just begun. Every mission you complete brings you one
          step closer to mastering campus life.
        </p>

        <p className="text-white text-[24px] mt-8">
          Stay curious and keep exploring!
        </p>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-12 gap-5 mt-6">
        {/* LEFT CARD */}
        <div className="col-span-4 bg-white rounded-[30px] shadow-xl p-6">
          {/* TITLE */}
          <div className="flex items-center gap-3">
            <span className="text-[28px]">
              🔗
            </span>

            <h1 className="text-[32px] font-black text-[#1A1A1A]">
              Brawijaya Essentials
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="text-[18px] text-[#4A4A4A] mt-2 leading-[28px]">
            Stay connected and informed with these
            official resources:
          </p>

          <div className="border-b border-gray-400 mt-4"></div>

          {/* ITEM 1 */}
          <div className="mt-6">
            <div className="flex items-start gap-3">
              <span className="text-[22px]">
                📸
              </span>

              <div>
                <h2 className="text-[28px] font-black">
                  Official Instagram
                </h2>

                <p className="text-[18px] font-medium text-gray-700">
                  @univ.brawijaya
                </p>

                <p className="text-[16px] text-gray-500 mt-1">
                  Campus news & updates
                </p>
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="mt-8">
            <div className="flex items-start gap-3">
              <span className="text-[22px]">
                🌐
              </span>

              <div>
                <h2 className="text-[28px] font-black">
                  New Student Portal
                </h2>

                <p className="text-[18px] font-medium text-gray-700">
                  selma.ub.ac.id
                </p>

                <p className="text-[16px] text-gray-500 mt-1">
                  Admissions & general info
                </p>
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="mt-8">
            <div className="flex items-start gap-3">
              <span className="text-[22px]">
                🎓
              </span>

              <div>
                <h2 className="text-[28px] font-black">
                  Academic System
                </h2>

                <p className="text-[18px] font-medium text-gray-700">
                  siam.ub.ac.id
                </p>

                <p className="text-[16px] text-gray-500 mt-1">
                  Schedules, study plans, & grades
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="col-span-8 bg-white border-[5px] border-[#0F2B5B] rounded-[35px] shadow-xl p-6">
          {/* BADGE */}
          <div className="inline-block border border-red-400 rounded-xl px-5 py-2">
            <p className="text-[#D32F2F] text-[24px] font-bold">
              Complete Within 7 Days
            </p>
          </div>

          {/* TITLE */}
          <h2 className="mt-6 text-[22px] font-black text-black">
            YOUR CURRENT ADVENTURE
          </h2>

          {/* MISSION */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-[26px]">
              🎯
            </span>

            <h1 className="text-[48px] font-black text-[#0F2B5B]">
              Week 2 - Digital Campus Master 
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="text-[28px] text-[#333333] leading-[42px] mt-4">
            Physical routes secured! Now, it's time to conquer the digital realm. Master your academic portal (SIAM), secure your class schedule, and get your free campus Wi-Fi access sorted!
          </p>

          {/* BUTTON */}
          <button className="mt-8 w-full bg-[#D9A431] hover:bg-[#c4921f] transition-all duration-300 rounded-[20px] py-4 shadow-lg">
            <h1 className="text-[42px] font-black text-[#0F2B5B]">
              START MISSION
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;