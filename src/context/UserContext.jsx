import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [weekLinks, setWeekLinks] = useState({
    week1: "", week2: "", week3: "", week4: "",
  });

  function submitWeekLink(week, link) {
    setWeekLinks((prev) => ({ ...prev, [week]: link }));
    const weekNum = parseInt(week.replace("week", ""));
    if (weekNum >= currentWeek) {
      setCurrentWeek(weekNum + 1);
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{
      user, setUser,
      currentWeek,
      weekLinks, submitWeekLink,
      logout,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}