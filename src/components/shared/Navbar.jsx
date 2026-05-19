import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import logo from "../../assets/landing/logo.png";

export default function Navbar() {
  const { logout } = useUser();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <nav
      className="bg-white rounded-b-[30px] px-8 py-3 flex items-center justify-between"
      style={{ boxShadow: "0 4px 20px rgba(11, 37, 89, 0.15)" }}
    >
      <img src={logo} alt="The UB Ally" className="h-14 w-auto" />
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-[#0B2559] font-bold text-sm hover:opacity-70 transition"
      >
        Logout <span>→</span>
      </button>
    </nav>
  );
}