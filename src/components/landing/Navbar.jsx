import logo from "../../assets/landing/logo.png";

export default function Navbar() {
  return (
    <nav
      className="
        w-full
        bg-white
        rounded-b-[32px]
        shadow-md
        px-16
        py-4
        flex
        items-center
        justify-between
      "
    >
      {/* LOGO */}
      <img
        src={logo}
        alt="The UB Ally"
        className="h-[72px] w-auto object-contain"
      />

      {/* MENU */}
      <div
        className="
          flex
          items-center
          gap-14
          text-[#0B2559]
          font-extrabold
          text-[20px]
          tracking-wide
        "
      >
        <a
          href="#about"
          className="
            hover:text-[#D4A02F]
            transition-all
            duration-200
          "
        >
          ABOUT
        </a>

        <a
          href="#steps"
          className="
            hover:text-[#D4A02F]
            transition-all
            duration-200
          "
        >
          HOW IT WORKS
        </a>
      </div>
    </nav>
  );
}