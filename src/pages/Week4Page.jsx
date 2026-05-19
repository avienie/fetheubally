import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import MissionLayout from "../components/mission/MissionLayout";
import ObjectiveCard from "../components/mission/ObjectiveCard";
import StepGuideCard from "../components/mission/StepGuideCard";
import CheckpointCard from "../components/mission/CheckpointCard";

const steps = [
  {
    title: "The Exploration",
    desc: "Take a walk around the campus gates or your boarding house area. Look for a busy local eatery.",
  },
  {
    title: "The Local Taste",
    desc: "Order a classic student meal. We highly recommend trying Lalapan, Nasi Pecel, or an authentic bowl of Bakso Malang. Bonus points if the meal costs you under Rp 15.000!",
  },
  {
    title: "Snapshot Your Choice!",
    desc: "Before you dig in, take an aesthetic (or totally random) photo of your food. This is the ultimate proof that you are ready to survive your college years.",
  },
];

export default function Week4Page() {
  const [link, setLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { submitWeekLink } = useUser();

  function handleSubmit() {
    if (!link.trim()) return;
    submitWeekLink("week4", link);
    setSubmitted(true);
    navigate("/certificate");
  }

  return (
    <MissionLayout week="Week 4" title="The Malang Culinary Explorer" badge={submitted ? "done" : "pending"}>
      <ObjectiveCard
        description="Welcome to your final week! You cannot call yourself a true Brawijayan if you haven't tasted the local student culinary scene. The areas around UB (like Jl. Kerto, Watugong, or Sigura-gura) are packed with legendary, budget-friendly food."
        goal="Step out of your boarding house, find a local food stall (Warung), order a classic Malang student meal, and learn the local prices!"
      />
      <StepGuideCard subtitle="Let's hunt for some good food:" steps={steps} />
      <CheckpointCard
        prompt={"What did you have for lunch?\nUpload the photo of your local Malang food to your Google Drive. Make sure the access is set to \"Anyone with the link\", and paste the URL below."}
        value={link}
        onChange={(e) => setLink(e.target.value)}
        submitted={submitted}
      />
      <button
        onClick={handleSubmit}
        disabled={!link.trim()}
        className={`w-full py-4 rounded-[18px] text-base font-black text-[#0B2559] transition ${
          link.trim() ? "bg-[#D4A02F] hover:bg-[#c4921f]" : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        SUBMIT PROOF & CLAIM CERTIFICATE
      </button>
    </MissionLayout>
  );
}