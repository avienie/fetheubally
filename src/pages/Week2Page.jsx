import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import MissionLayout from "../components/mission/MissionLayout";
import ObjectiveCard from "../components/mission/ObjectiveCard";
import StepGuideCard from "../components/mission/StepGuideCard";
import CheckpointCard from "../components/mission/CheckpointCard";

const steps = [
  {
    title: "The Holy Grail (SIAM)",
    desc: "Go to siam.ub.ac.id and log in using your NIM (Student ID) and password. This portal holds your grades, schedules, and financial status.",
  },
  {
    title: "The Battle Plan (Jadwal Kuliah)",
    desc: "Navigate to the \"KRS\" or \"Jadwal\" section. Find your schedule for this semester. Take a screenshot of your schedule, you will look at this everyday!",
  },
  {
    title: "The Free Internet (Eduroam / UB-Hotspot)",
    desc: "Still in SIAM, look for the \"Profil\" or \"Pengaturan\" menu to find your specific username and password for UB's official Wi-Fi. Write it down or save it securely on your phone.",
  },
];

export default function Week2Page() {
  const [link, setLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { submitWeekLink } = useUser();
  
  function handleSubmit() {
    if (!link.trim()) return;
    submitWeekLink("week2", link);
    setSubmitted(true);
    navigate("/dashboard/week3");
  }

  return (
    <MissionLayout week="Week 2" title="Digital Campus Master" badge={submitted ? "done" : "pending"}>
      <ObjectiveCard
        description="Welcome to the matrix of Brawijaya! Your physical survival is guaranteed, but to survive your classes, you must understand SIAM (Sistem Informasi Akademik Mahasiswa)."
        goal="Log into your student portal, locate your class schedule, and find the credentials for the campus Wi-Fi."
      />
      <StepGuideCard subtitle="Follow these steps to master your digital tools:" steps={steps} />
      <CheckpointCard
        prompt={"Let's see your battle plan!\nUpload the screenshot of your Class Schedule (from SIAM) to your Google Drive. Make sure the access is set to \"Anyone with the link\", and paste the URL below."}
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
        SUBMIT PROOF & UNLOCK WEEK 3
      </button>
    </MissionLayout>
  );
}