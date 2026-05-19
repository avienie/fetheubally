import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import CertificatePage from "./pages/CertificatePage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/certificate" element={<CertificatePage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;