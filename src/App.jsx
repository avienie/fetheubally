import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/shared/ProtectedRoute";

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

        <Route path="/dashboard" element={<ProtectedRoute mode="dashboard"><DashboardPage1 /></ProtectedRoute>} />
        <Route path="/dashboard/week1" element={<ProtectedRoute mode="dashboard"><DashboardPage1 /></ProtectedRoute>} />
        <Route path="/dashboard/week2" element={<ProtectedRoute mode="dashboard"><DashboardPage2 /></ProtectedRoute>} />
        <Route path="/dashboard/week3" element={<ProtectedRoute mode="dashboard"><DashboardPage3 /></ProtectedRoute>} />
        <Route path="/dashboard/week4" element={<ProtectedRoute mode="dashboard"><DashboardPage4 /></ProtectedRoute>} />

        <Route path="/week1" element={<ProtectedRoute mode="dashboard"><Week1Page /></ProtectedRoute>} />
        <Route path="/week2" element={<ProtectedRoute mode="dashboard"><Week2Page /></ProtectedRoute>} />
        <Route path="/week3" element={<ProtectedRoute mode="dashboard"><Week3Page /></ProtectedRoute>} />
        <Route path="/week4" element={<ProtectedRoute mode="dashboard"><Week4Page /></ProtectedRoute>} />

        <Route path="/certificate" element={<ProtectedRoute mode="certificate"><CertificatePage /></ProtectedRoute>} />
        <Route path="/result/:weekId" element={<ProtectedRoute mode="certificate"><ResultPage /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;