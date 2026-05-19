import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

// mode: "dashboard" = hanya boleh kalau currentWeek <= 4
//       "certificate" = hanya boleh kalau currentWeek >= 5
//       "auth" = hanya boleh kalau sudah login
export default function ProtectedRoute({ children, mode = "auth" }) {
  const { user, currentWeek } = useUser();

  if (!user) return <Navigate to="/login" replace />;

  if (mode === "dashboard" && currentWeek >= 5) {
    return <Navigate to="/certificate" replace />;
  }

  if (mode === "certificate" && currentWeek < 5) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}