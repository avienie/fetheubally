import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import Week1Page from "../pages/Week1Page";
import Week2Page from "../pages/Week2Page";
import Week3Page from "../pages/Week3Page";
import Week4Page from "../pages/Week4Page";
import CertificatePage from "../pages/CertificatePage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/week1" element={<Week1Page />} />
        <Route path="/week2" element={<Week2Page />} />
        <Route path="/week3" element={<Week3Page />} />
        <Route path="/week4" element={<Week4Page />} />
        <Route path="/certificate" element={<CertificatePage />} />
      </Routes>
    </BrowserRouter>
  );
}