export default function LoginInput({
  label,
  type,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">

      <label className="font-bold text-[16px] text-black">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          h-[55px]
          rounded-[16px]
          border-[3px]
          border-[#0B2559]
          px-5
          text-[16px]
          outline-none
          placeholder:text-gray-400
        "
      />

    </div>
  );
}