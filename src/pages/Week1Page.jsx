import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import MissionLayout from "../components/mission/MissionLayout";
import ObjectiveCard from "../components/mission/ObjectiveCard";
import StepGuideCard from "../components/mission/StepGuideCard";
import CheckpointCard from "../components/mission/CheckpointCard";

const steps = [
  {
    title: "The Daily Commute (Ride-hailing App)",
    desc: "Open Gojek or Grab. Search for your faculty and save it to your 'Favorites' or 'Saved Places'. Take a screenshot of this saved location.",
  },
  {
    title: "The Backup Plan (Trans Bus / Public Transit)",
    desc: "If you are on a budget or prefer modern public transport, Malang is stepping up its Trans Bus system (like Trans Jatim or local city buses). Search Google Maps to find the nearest bus stop (Halte) around the main gates of UB (such as Jl. Veteran or Suhat).",
  },
  {
    title: "The Main Landmarks",
    desc: "Open Google Maps and find the Rektorat Building and Central Library (Perpustakaan Pusat). These are the core of UB, you will definitely need to go here later!",
  },
];

export default function Week1Page() {
  const [link, setLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { submitWeekLink } = useUser();
  
  function handleSubmit() {
    if (!link.trim()) return;
    submitWeekLink("week1", link);
    setSubmitted(true);
    navigate("/dashboard/week2");
  }


  return (
    <MissionLayout week="Week 1" title="The Campus Survival Guide" badge={submitted ? "done" : "pending"}>
      <ObjectiveCard
        description="Welcome to Universitas Brawijaya! For your first week, your survival depends on knowing how to get to your faculty and recognizing the main campus landmarks."
        goal="Set up your daily transportation app, identify your backup modern public transit (Trans Bus), and locate the central campus buildings."
      />
      <StepGuideCard subtitle="Take your time to complete these steps within 7 days:" steps={steps} />
      <CheckpointCard
        prompt={"Have you completed the survival guide? Let's prove it!\nUpload the screenshot of your saved Faculty location (from Step 1) to your Google Drive. Make sure the access is set to \"Anyone with the link\" and paste the URL below."}
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
        SUBMIT PROOF & UNLOCK WEEK 2
      </button>
    </MissionLayout>
  );
}