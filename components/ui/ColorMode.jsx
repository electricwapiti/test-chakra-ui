"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setMode(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
    document.documentElement.setAttribute("data-theme", newMode);
  };

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  return useContext(ColorModeContext);
}