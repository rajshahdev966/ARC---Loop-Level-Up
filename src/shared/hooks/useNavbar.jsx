import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

const useNavbar = () => {
  const { handle, archetype } = useSelector((store) => store.auth || {});

  // Initialize theme from localStorage or DOM
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("arc_theme");
      if (saved) {
        return saved === "dark";
      }
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  // Keep DOM class, localStorage, and favicon synchronized
  useEffect(() => {
    const favicon = document.querySelector("link[rel~='icon']");
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("arc_theme", "dark");
      if (favicon) favicon.href = "/arc_dark_logo.png";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("arc_theme", "light");
      if (favicon) favicon.href = "/arc_logo.png";
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const NAV_ITEMS = [
    { id: "vision-board", label: "Vision Board", path: "/main" },
    { id: "sticky-wall", label: "Sticky Wall", path: "/main/sticky" },
    { id: "your-wrapped", label: "Your Wrapped", path: "/main/wrapped" },
  ];

  return {
    NAV_ITEMS,
    handle,
    archetype,
    isDark,
    toggleTheme,
  };
};

export default useNavbar;