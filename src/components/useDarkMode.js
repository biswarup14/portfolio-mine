import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const initial = saved === "light" || saved === "dark" ? saved : "dark";
    setTheme(initial);
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
