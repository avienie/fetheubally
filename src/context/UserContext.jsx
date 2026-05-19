import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [weekLinks, setWeekLinks] = useState({
    week1: "",
    week2: "",
    week3: "",
    week4: "",
  });

  function submitWeekLink(week, link) {
    setWeekLinks((prev) => ({ ...prev, [week]: link }));
  }

  return (
    <UserContext.Provider value={{ user, setUser, weekLinks, submitWeekLink }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}