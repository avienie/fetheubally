export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0B2559] text-white pt-16 pb-48 px-8 relative overflow-visible">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute -top-5 -left-6 w-10 h-10 border-t-4 border-l-4 border-white" />
        <h1 className="text-4xl font-extrabold tracking-wide">WHAT IS THE UB ALLY?</h1>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-white/90">
          <p>Transitioning to a new campus is overwhelming.</p>
          <p>We turn your adaptation process into an engaging, interactive experience.</p>
          <p>Discover how to navigate life at Universitas Brawijaya, from ordering local transportation to finding your faculty building, step by step, stress-free.</p>
        </div>
        <div className="absolute -bottom-5 -right-6 w-10 h-10 border-b-4 border-r-4 border-white" />
      </div>
    </section>
  );
}