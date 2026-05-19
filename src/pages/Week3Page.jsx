import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import MissionLayout from "../components/mission/MissionLayout";
import ObjectiveCard from "../components/mission/ObjectiveCard";
import StepGuideCard from "../components/mission/StepGuideCard";
import CheckpointCard from "../components/mission/CheckpointCard";

const steps = [
  {
    title: "Discover Your Community (UKM)",
    desc: "Open Instagram and search for UB's official student organizations (e.g., @em_ubofficial for Student Executive Board, or search \"UKM UB\" for choirs, robotics, sports, etc.). Find one that sparks your interest and hit 'Follow'.",
  },
  {
    title: "The Treasure Trove (UB Library)",
    desc: "Go to lib.ub.ac.id. This is your go-to portal for borrowing books, accessing international journals, and booking study rooms.",
  },
  {
    title: "Snapshot Your Choice!",
    desc: "Take a screenshot showing that you have followed your chosen UKM or organization's official Instagram account. This is your first step to getting involved!",
  },
];

export default function Week3Page() {
  const [link, setLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { submitWeekLink } = useUser();
  
  function handleSubmit() {
    if (!link.trim()) return;
    submitWeekLink("week3", link);
    setSubmitted(true);
    navigate("/dashboard/week4");
  }

  return (
    <MissionLayout week="Week 3" title="The Brawijaya Explorer" badge={submitted ? "done" : "pending"}>
      <ObjectiveCard
        description="University is about expanding your horizon. Universitas Brawijaya has dozens of Student Activity Units (UKM) ranging from sports, arts, to technology. Plus, we have one of the best libraries in the city."
        goal="Find at least one UKM that matches your hobby and check out the UB Central Library portal."
      />
      <StepGuideCard subtitle="Let's build your network and resources:" steps={steps} />
      <CheckpointCard
        prompt={"Which community are you joining?\nUpload the screenshot of the UKM Instagram account you followed to your Google Drive. Make sure the access is set to \"Anyone with the link\", and paste the URL below."}
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
        SUBMIT PROOF & UNLOCK WEEK 4
      </button>
    </MissionLayout>
  );
}