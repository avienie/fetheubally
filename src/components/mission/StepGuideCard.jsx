export default function StepGuideCard({ subtitle, steps }) {
  return (
    <div className="border-2 border-[#D4A02F] rounded-[20px] p-6">
      <h2 className="text-base font-black uppercase flex items-center gap-2">
        🛠️ 2. Step-By-Step Guide
      </h2>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
      <div className="mt-4 h-[1px] bg-gray-200" />
      <div className="mt-4 flex flex-col gap-5">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-3">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 text-white
              ${i === 0 ? "bg-[#D4A02F]" : i === 1 ? "bg-[#c4921f]" : "bg-[#0B2559]"}`}>
              {i + 1}
            </div>
            <div>
              <h3 className="text-sm font-bold">{step.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}