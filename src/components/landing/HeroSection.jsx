import { useNavigate } from "react-router-dom";
import heroIllustration from "../../assets/landing/hero-bg.png";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F5F5F5] text-center overflow-hidden">
      <div className="pt-10 px-6">
        <h1 className="text-[#0B2559] text-5xl font-extrabold tracking-wide">
          ADAPT. THRIVE. SUCEED.
        </h1>
        <h2 className="mt-3 text-2xl font-bold text-[#1a1a1a]">
          Welcome to The UB Ally!
        </h2>
        <p className="mt-3 max-w-sm mx-auto text-sm leading-relaxed text-gray-600">
          Your interactive guide to surviving and thriving at Universitas Brawijaya. 
          Complete missions, master the campus, zero confusion.
        </p>
      </div>

      <div className="relative" style={{ marginTop: "-30px" }}>
        <img
          src={heroIllustration}
          alt="Campus Illustration"
          className="w-full block"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#D4A02F] text-[#0B2559] px-10 py-3 rounded-2xl text-base font-extrabold tracking-widest shadow-md hover:scale-105 transition-all duration-200"
          >
            START YOUR JOURNEY
          </button>
        </div>
      </div>
    </section>
  );
}