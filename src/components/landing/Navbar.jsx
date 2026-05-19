import logo from "../../assets/landing/logo.png";

export default function Navbar() {
  return (
    <nav
      className="bg-white rounded-b-[30px] px-8 py-3 flex items-center justify-between"
      style={{ boxShadow: "0 4px 20px rgba(11, 37, 89, 0.15)" }}
    >
      <img src={logo} alt="The UB Ally" className="h-14 w-auto" />
      <div className="flex gap-10 text-[#0B2559] font-extrabold text-sm tracking-widest">
        <a href="#about" className="hover:text-[#D4A02F] transition-colors">ABOUT</a>
        <a href="#steps" className="hover:text-[#D4A02F] transition-colors">HOW IT WORKS</a>
      </div>
    </nav>
  );
}