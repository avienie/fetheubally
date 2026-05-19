export default function ObjectiveCard({ description, goal }) {
  return (
    <div className="bg-[#0B2559] text-white rounded-[20px] p-6">
      <h2 className="text-base font-black uppercase flex items-center gap-2">
        🎯 1. The Objective
      </h2>
      <div className="mt-3 h-[1px] bg-white/20" />
      <p className="mt-4 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 border-l-4 border-[#D4A02F] pl-4">
        <p className="text-sm leading-relaxed">
          <span className="text-[#D4A02F] font-bold">Your Goal: </span>
          {goal}
        </p>
      </div>
    </div>
  );
}