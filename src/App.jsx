import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

import DashboardPage1 from "./pages/DashboardPage1";
import DashboardPage2 from "./pages/DashboardPage2";
import DashboardPage3 from "./pages/DashboardPage3";
import DashboardPage4 from "./pages/DashboardPage4";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LANDING */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* DASHBOARD DEFAULT */}
        <Route
          path="/dashboard"
          element={<DashboardPage1 />}
        />

        {/* WEEK 1 */}
        <Route
          path="/dashboard/week1"
          element={<DashboardPage1 />}
        />

        {/* WEEK 2 */}
        <Route
          path="/dashboard/week2"
          element={<DashboardPage2 />}
        />

        {/* WEEK 3 */}
        <Route
          path="/dashboard/week3"
          element={<DashboardPage3 />}
        />

        {/* WEEK 4 */}
        <Route
          path="/dashboard/week4"
          element={<DashboardPage4 />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;