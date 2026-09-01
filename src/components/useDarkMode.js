import { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("theme");
  return saved === "light" || saved === "dark" ? saved : "dark";
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", next);
      return next;
    });
  };

  return [theme, toggleTheme, mounted];
};

export default useDarkMode;
