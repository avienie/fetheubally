import { FaRocket } from "react-icons/fa";

export default function LoginButton() {
  return (
    <button
      className="
        w-full
        h-[58px]
        bg-[#D4A02F]
        rounded-[16px]
        text-[#0B2559]
        text-[20px]
        font-extrabold
        flex
        items-center
        justify-center
        gap-3
        hover:opacity-90
        transition
      "
    >
      Start My Journey
      <FaRocket />
    </button>
  );
}