import { useState, useEffect } from "react";

// Roda uma vez, só na primeira renderização
const getInitialTheme = () => {
  // 1. Tem uma escolha salva no navegador?
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;

  // 2. Se não, segue a preferência do sistema operacional
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  // Sempre que "theme" mudar: aplica no <html> e salva
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};