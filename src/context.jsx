import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    
  const [searchTerm, setSearchTerm] = useState("cat");

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");
    console.log(body);
  };

  const greeting = "hello goodafternoon";
  return (
    <AppContext.Provider
      value={{
        greeting,
        isDarkTheme,
        toggleDarkTheme,
        setSearchTerm,
        searchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
