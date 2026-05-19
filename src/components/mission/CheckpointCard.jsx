export default function CheckpointCard({ prompt, value, onChange, submitted }) {
  return (
    <div className="border-2 border-gray-200 rounded-[20px] p-6">
      <h2 className="text-base font-black uppercase flex items-center gap-2">
        📋 3. Mission Checkpoint: Provide Proof!
      </h2>
      <div className="mt-3 h-[1px] bg-gray-200" />
      <p className="text-xs text-gray-600 mt-4 leading-relaxed whitespace-pre-line">{prompt}</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={submitted}
        placeholder="Paste your Google Drive link here.."
        className="mt-3 w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-gray-400 disabled:bg-gray-50"
      />
    </div>
  );
}