import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import StepsSection from "../components/landing/StepsSection";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <div className="relative bg-white">
        <AboutSection />
        <StepsSection />
      </div>
      <Footer />
    </div>
  );
}