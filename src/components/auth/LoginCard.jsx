import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import logo from "../../assets/logo.png";

export default function LoginCard() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, register } = useUser();
  const navigate = useNavigate();

  async function handleSubmit() {
    if (!name.trim() || !password.trim()) return;
    setError("");
    setLoading(true);

    try {
      // coba login dulu
      await login(name.trim(), password);
      navigate("/dashboard");
    } catch (err) {
      if (err.response?.status === 401) {
        // kalau gagal login, coba register
        try {
          await register(name.trim(), password);
          navigate("/dashboard");
        } catch (regErr) {
          setError(regErr.response?.data?.message || "Something went wrong.");
        }
      } else {
        setError(err.response?.data?.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#F8F8F8] max-w-[420px] w-full rounded-[45px] px-10 py-8 border-2 border-black">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-[150px]" />
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-[26px] font-extrabold text-[#0B2559]">
          Ready to Conquer UB?
        </h1>
        <p className="mt-2 text-[14px] leading-relaxed text-gray-700">
          Enter your details to start your 4-week survival journey.
          We'll use this info for your personalized experience and your final certificate.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <LoginInput
          label="Full Name"
          type="text"
          placeholder="e.g., Nazeera Davinci"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <LoginInput
          label="Password"
          type="password"
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
        <div className="mt-1">
          <LoginButton
            onClick={handleSubmit}
            disabled={!name.trim() || !password.trim() || loading}
            label={loading ? "Loading..." : "Start My Journey"}
          />
        </div>
      </div>
    </div>
  );
}