import React from "react";
import CertificateNavbar from "../components/certificate/CertificateNavbar";
import CongratulationsHero from "../components/certificate/CongratulationsHero";
import EssentialsCard from "../components/certificate/EssentialsCard";
import ResultCarousel from "../components/certificate/ResultCarousel";
import JourneyTimeline from "../components/certificate/JourneyTimeline";
import CertificatePreview from "../components/certificate/CertificatePreview";

const CertificatePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <CertificateNavbar />

      <div className="p-8">
        <CongratulationsHero />

        <div className="grid grid-cols-12 gap-8 mt-8">
          <div className="col-span-4 flex flex-col gap-8">
            <EssentialsCard />
            <JourneyTimeline />
          </div>

          <div className="col-span-8 flex flex-col gap-8">
            <ResultCarousel />
            <CertificatePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;