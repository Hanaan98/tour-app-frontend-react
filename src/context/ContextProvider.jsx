import { createContext, useState } from "react";
export const userContext = createContext({
  user: {},
  setUser: () => {},
});
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const contextValue = {
    user,
    setUser,
  };

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};
export default ContextProvider;
