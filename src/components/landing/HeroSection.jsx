import heroIllustration from "../../assets/landing/hero-bg.png";

export default function HeroSection() {
  return (
    <section className="bg-[#F5F5F5] text-center overflow-hidden">

      <div className="pt-24 px-6 relative z-10">

        <h1 className="text-[#0B2559] text-7xl font-extrabold">
          ADAPT. THRIVE. SUCCEED.
        </h1>

        <h2 className="mt-8 text-5xl font-bold">
          Welcome to The UB Ally!
        </h2>

        <p className="mt-6 max-w-4xl mx-auto text-2xl leading-relaxed">
          Your interactive guide to surviving and thriving at
          Universitas Brawijaya. Complete missions, master
          the campus, zero confusion.
        </p>

        <button className="mt-12 bg-[#D4A02F] text-[#0B2559] px-14 py-5 rounded-[25px] text-3xl font-bold shadow-lg hover:scale-105 transition">
          START YOUR JOURNEY
        </button>

      </div>

      <img
        src={heroIllustration}
        alt="Campus Illustration"
        className="w-full mt-12"
      />

    </section>
  );
}