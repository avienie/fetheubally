import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [weekLinks, setWeekLinks] = useState({
    week1: "", week2: "", week3: "", week4: "",
  });
  const [loading, setLoading] = useState(true);

  // saat app pertama buka, cek kalau ada token tersimpan
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
      // load submissions dari backend
      api.get("/api/submissions")
        .then((res) => {
          const subs = res.data;
          const links = { week1: "", week2: "", week3: "", week4: "" };
          let maxWeek = 0;
          subs.forEach((s) => {
            links[`week${s.week}`] = s.drive_link;
            if (s.week > maxWeek) maxWeek = s.week;
          });
          setWeekLinks(links);
          setCurrentWeek(maxWeek + 1 > 4 ? 5 : maxWeek + 1);
        })
        .catch(() => {
          // token expired, logout
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  async function login(name, password) {
    const res = await api.post("/api/login", { name, password });
    const { user, token } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);

    // load submissions setelah login
    const subRes = await api.get("/api/submissions");
    const subs = subRes.data;
    const links = { week1: "", week2: "", week3: "", week4: "" };
    let maxWeek = 0;
    subs.forEach((s) => {
      links[`week${s.week}`] = s.drive_link;
      if (s.week > maxWeek) maxWeek = s.week;
    });
    setWeekLinks(links);
    setCurrentWeek(maxWeek + 1 > 4 ? 5 : maxWeek + 1);

    return user;
  }

  async function register(name, password) {
    const res = await api.post("/api/register", { name, password });
    const { user, token } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setCurrentWeek(1);
    return user;
  }

  async function submitWeekLink(week, link) {
    const weekNum = parseInt(week.replace("week", ""));
    await api.post("/api/submissions", {
      week: weekNum,
      drive_link: link,
    });
    setWeekLinks((prev) => ({ ...prev, [week]: link }));
    if (weekNum >= currentWeek) {
      setCurrentWeek(weekNum + 1);
    }
  }

  function logout() {
    api.post("/api/logout").catch(() => {});
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setCurrentWeek(1);
    setWeekLinks({ week1: "", week2: "", week3: "", week4: "" });
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{
      user, setUser,
      currentWeek,
      weekLinks, submitWeekLink,
      login, register, logout,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}