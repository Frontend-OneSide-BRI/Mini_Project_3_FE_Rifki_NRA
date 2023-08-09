import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [foundUser, setFoundUser] = useState(null);

  const logout = () => {
    setFoundUser(null); // Menghapus data pengguna dari konteks
  };

  return (
    <UserContext.Provider value={{ foundUser, setFoundUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default { useUserContext, UserProvider };
