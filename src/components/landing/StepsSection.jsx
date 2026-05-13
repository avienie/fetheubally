import missionIcon from "../../assets/landing/icon-mission.png";
import guideIcon from "../../assets/landing/icon-guide.png";
import certificateIcon from "../../assets/landing/icon-certificate.png";

const steps = [
  {
    number: "01",
    icon: missionIcon,
    title: "Pick a Mission",
    description:
      "Choose a weekly campus challenge designed specifically for new Brawijayans.",
  },
  {
    number: "02",
    icon: guideIcon,
    title: "Follow the Guide",
    description:
      "Get clear, step by step instructions to conquer your objective easily.",
  },
  {
    number: "03",
    icon: certificateIcon,
    title: "Get Certified",
    description:
      "Finish your journey and unlock your UB Ally certificate.",
  },
];

export default function StepsSection() {
  return (
    <section
      id="steps"
      className="bg-[#F5F5F5] py-24 px-10"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] shadow-xl p-10"
          >

            <div className="flex justify-between items-start">

              <h1 className="text-6xl font-bold text-[#D4A02F]">
                {step.number}
              </h1>

              <img
                src={step.icon}
                alt={step.title}
                className="w-20"
              />

            </div>

            <h2 className="mt-8 text-3xl font-bold">
              {step.title}
            </h2>

            <p className="mt-5 text-xl leading-relaxed">
              {step.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}