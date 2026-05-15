import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import logo from "../../assets/logo.png";

export default function LoginCard() {
  return (
    <div
      className="
        bg-[#F8F8F8]
        max-w-[420px]
        w-full
        rounded-[45px]
        px-10
        py-8
        border-2
        border-black
      "
    >

      {/* LOGO */}
      <div className="flex justify-center">
        <img
          src={logo}
          alt="logo"
          className="w-[150px]"
        />
      </div>

      {/* TITLE */}
      <div className="mt-4 text-center">

        <h1
          className="
            text-[26px]
            font-extrabold
            text-[#0B2559]
          "
        >
          Ready to Conquer UB?
        </h1>

        <p
          className="
            mt-2
            text-[14px]
            leading-relaxed
            text-gray-700
          "
        >
          Enter your details to start your 4-week survival
          journey. We'll use this info for your personalized
          experience and your final certificate.
        </p>

      </div>

      {/* FORM */}
      <div className="mt-6 flex flex-col gap-4">

        <LoginInput
          label="Full Name"
          type="text"
          placeholder="e.g., Nazeera Davinci"
        />

        <LoginInput
          label="Password"
          type="password"
          placeholder="Enter your password here"
        />

        <div className="mt-1">
          <LoginButton />
        </div>

      </div>

    </div>
  );
}