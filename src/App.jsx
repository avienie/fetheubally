import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage1 from "./pages/DashboardPage1";
import DashboardPage2 from "./pages/DashboardPage2";
import DashboardPage3 from "./pages/DashboardPage3";
import DashboardPage4 from "./pages/DashboardPage4";
import Week1Page from "./pages/Week1Page";
import Week2Page from "./pages/Week2Page";
import Week3Page from "./pages/Week3Page";
import Week4Page from "./pages/Week4Page";
import CertificatePage from "./pages/CertificatePage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardPage1 />} />
        <Route path="/dashboard/week1" element={<DashboardPage1 />} />
        <Route path="/dashboard/week2" element={<DashboardPage2 />} />
        <Route path="/dashboard/week3" element={<DashboardPage3 />} />
        <Route path="/dashboard/week4" element={<DashboardPage4 />} />

        <Route path="/week1" element={<Week1Page />} />
        <Route path="/week2" element={<Week2Page />} />
        <Route path="/week3" element={<Week3Page />} />
        <Route path="/week4" element={<Week4Page />} />

        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/result/:weekId" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;