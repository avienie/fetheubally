import { Routes, Route } from "react-router-dom";

import DashboardPage1 from "./pages/DashboardPage1";
import DashboardPage2 from "./pages/DashboardPage2";
import DashboardPage3 from "./pages/DashboardPage3";
import DashboardPage4 from "./pages/DashboardPage4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage1 />} />
      <Route path="/week2" element={<DashboardPage2 />} />
      <Route path="/week3" element={<DashboardPage3 />} />
      <Route path="/week4" element={<DashboardPage4 />} />
    </Routes>
  );
}

export default App;