import { createContext, useContext } from "react";

const UserContext = createContext();
export const UserProvider = ({ Children }) => {
  return (
    <UserContext.Provider value={{ user: "xyz" }}>
      {Children}
    </UserContext.Provider>
  );
};
export const UserData = () => useContext(useContext);
