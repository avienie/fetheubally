import logo from "../../assets/landing/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md rounded-b-[40px] px-16 py-1 flex items-center justify-between">
      
      <img
        src={logo}
        alt="The UB Ally"
        className="w-44"
      />

      <div className="flex gap-14 text-[#0B2559] font-bold text-2xl">
        <a href="#about">ABOUT</a>
        <a href="#steps">HOW IT WORKS</a>
      </div>

    </nav>
  );
}