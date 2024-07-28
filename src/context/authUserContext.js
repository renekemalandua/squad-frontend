import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("squad-user")) || null
  );

  const login = () => {
    // to do
    setCurrentUser({
        id:1,
        name: "John Doe",
        photo: "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740"
    })
  };

  useEffect(() => {
    localStorage.setItem("squad-user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser, login}}>
      {children}
    </AuthContext.Provider>
  );
};
