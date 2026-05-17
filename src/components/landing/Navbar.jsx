import logo from "../../assets/landing/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm rounded-b-[24px] px-8 py-2 flex items-center justify-between">
      <img src={logo} alt="The UB Ally" className="h-14 w-auto" />
      <div className="flex gap-8 text-[#0B2559] font-bold text-sm tracking-widest">
        <a href="#about" className="hover:text-[#D4A02F] transition-colors">ABOUT</a>
        <a href="#steps" className="hover:text-[#D4A02F] transition-colors">HOW IT WORKS</a>
      </div>
    </nav>
  );
}