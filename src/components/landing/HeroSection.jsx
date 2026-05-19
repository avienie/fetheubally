import { useNavigate } from "react-router-dom";
import heroIllustration from "../../assets/landing/hero-bg.png";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F5F5F5] text-center overflow-hidden">
      
      {/* TEXT */}
      <div className="pt-6 px-6">
        <h1
          className="
            text-[#0B2559]
            text-[72px]
            font-extrabold
            leading-none
          "
        >
          ADAPT. THRIVE. SUCEED.
        </h1>

        <h2
          className="
            mt-4
            text-[38px]
            font-bold
            text-[#1a1a1a]
          "
        >
          Welcome to The UB Ally!
        </h2>

        <p
          className="
            mt-4
            max-w-[720px]
            mx-auto
            text-[22px]
            leading-relaxed
            text-gray-600
          "
        >
          Your interactive guide to surviving and thriving at
          Universitas Brawijaya. Complete missions, master the
          campus, zero confusion.
        </p>
      </div>

      {/* IMAGE + BUTTON */}
      <div className="relative mt-2">
        
        <img
          src={heroIllustration}
          alt="Campus Illustration"
          className="
            w-full
            block
          "
        />

        {/* BUTTON */}
        <button
          onClick={() => navigate("/login")}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            bottom-44

            bg-[#D4A02F]
            text-[#0B2559]

            px-12
            py-4

            rounded-[22px]

            text-[28px]
            font-extrabold
            tracking-wide

            hover:scale-105
            transition-all
            duration-200
          "
        >
          START YOUR JOURNEY
        </button>

      </div>
    </section>
  );
}