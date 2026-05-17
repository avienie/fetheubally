import missionIcon from "../../assets/landing/icon-mission.png";
import guideIcon from "../../assets/landing/icon-guide.png";
import certificateIcon from "../../assets/landing/icon-certificate.png";

const steps = [
  { number: "01", icon: missionIcon, title: "Pick a Mission", description: "Choose a weekly campus challenge designed specifically for new Brawijayans." },
  { number: "02", icon: guideIcon, title: "Follow the Guide", description: "Get clear, step by step instructions to conquer your objective easily." },
  { number: "03", icon: certificateIcon, title: "Get Certified", description: "Finish your journey and unlock your UB Ally certificate." },
];

export default function StepsSection() {
  return (
    <>
      {/* card overlap ke biru */}
      <section id="steps" className="relative -mt-36 z-10 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-7 border border-gray-100">
              <div className="flex justify-between items-start">
                <h1 className="text-5xl font-extrabold text-[#D4A02F]">{step.number}</h1>
                <img src={step.icon} alt={step.title} className="w-14 h-14 object-contain" />
              </div>
              <h2 className="mt-5 text-lg font-bold text-[#1a1a1a]">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* white bg fill dari bawah card sampai footer */}
      <div className="bg-white h-16" />
    </>
  );
}