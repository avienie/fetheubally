import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import MissionLayout from "../components/mission/MissionLayout";
import ObjectiveCard from "../components/mission/ObjectiveCard";
import StepGuideCard from "../components/mission/StepGuideCard";
import CheckpointCard from "../components/mission/CheckpointCard";

const weekData = {
  week1: {
    week: "Week 1",
    title: "The Campus Survival Guide",
    description: "Welcome to Universitas Brawijaya! For your first week, your survival depends on knowing how to get to your faculty and recognizing the main campus landmarks.",
    goal: "Set up your daily transportation app, identify your backup modern public transit (Trans Bus), and locate the central campus buildings.",
    subtitle: "Take your time to complete these steps within 7 days:",
    steps: [
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
    ],
    prompt: "Have you completed the survival guide? Let's prove it!\nUpload the screenshot of your saved Faculty location (from Step 1) to your Google Drive. Make sure the access is set to \"Anyone with the link\" and paste the URL below.",
  },
  week2: {
    week: "Week 2",
    title: "Digital Campus Master",
    description: "Welcome to the matrix of Brawijaya! Your physical survival is guaranteed, but to survive your classes, you must understand SIAM (Sistem Informasi Akademik Mahasiswa).",
    goal: "Log into your student portal, locate your class schedule, and find the credentials for the campus Wi-Fi.",
    subtitle: "Follow these steps to master your digital tools:",
    steps: [
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
    ],
    prompt: "Let's see your battle plan!\nUpload the screenshot of your Class Schedule (from SIAM) to your Google Drive. Make sure the access is set to \"Anyone with the link\", and paste the URL below.",
  },
  week3: {
    week: "Week 3",
    title: "The Brawijaya Explorer",
    description: "University is about expanding your horizon. Universitas Brawijaya has dozens of Student Activity Units (UKM) ranging from sports, arts, to technology. Plus, we have one of the best libraries in the city.",
    goal: "Find at least one UKM that matches your hobby and check out the UB Central Library portal.",
    subtitle: "Let's build your network and resources:",
    steps: [
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
    ],
    prompt: "Which community are you joining?\nUpload the screenshot of the UKM Instagram account you followed to your Google Drive. Make sure the access is set to \"Anyone with the link\", and paste the URL below.",
  },
  week4: {
    week: "Week 4",
    title: "The Malang Culinary Explorer",
    description: "Welcome to your final week! You cannot call yourself a true Brawijayan if you haven't tasted the local student culinary scene. The areas around UB (like Jl. Kerto, Watugong, or Sigura-gura) are packed with legendary, budget-friendly food.",
    goal: "Step out of your boarding house, find a local food stall (Warung), order a classic Malang student meal, and learn the local prices!",
    subtitle: "Let's hunt for some good food:",
    steps: [
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
    ],
    prompt: "What did you have for lunch?\nUpload the photo of your local Malang food to your Google Drive. Make sure the access is set to \"Anyone with the link\", and paste the URL below.",
  },
};

export default function ResultPage() {
  const { weekId } = useParams();
  const { weekLinks } = useUser();
  const navigate = useNavigate();
  const data = weekData[weekId];

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Result not found.</p>
    </div>
  );

  return (
    <MissionLayout week={data.week} title={data.title} badge="done">
      <ObjectiveCard description={data.description} goal={data.goal} />
      <StepGuideCard subtitle={data.subtitle} steps={data.steps} />
      <CheckpointCard
        prompt={data.prompt}
        value={weekLinks[weekId] || ""}
        onChange={() => {}}
        submitted={true}
      />
      <button
        onClick={() => navigate("/certificate")}
        className="w-full py-4 rounded-[18px] text-base font-black text-white bg-[#0B2559] hover:opacity-80 transition"
      >
        ← BACK TO CERTIFICATE
      </button>
    </MissionLayout>
  );
}