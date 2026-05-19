import { FaRocket } from "react-icons/fa";

export default function LoginButton({ onClick, disabled, label }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-[58px] rounded-[16px] text-[#0B2559] text-[20px] font-extrabold flex items-center justify-center gap-3 transition
        ${disabled
          ? "bg-[#D4A02F]/50 cursor-not-allowed"
          : "bg-[#D4A02F] hover:opacity-90 cursor-pointer"
        }`}
    >
      {label || "Start My Journey"}
      <FaRocket />
    </button>
  );
}