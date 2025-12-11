"use client";
import { useEffect, useState } from "react";

//
export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    try {
      await fetch("/theme/api", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ theme: newTheme }),
      });
    } catch (error) {
      console.error("Не удалось установить цветовую тему", error);
    }
  };

  useEffect(() => {
    fetch("/theme/api")
      .then((res) => res.json())
      .then((data) => {
        setTheme(data.theme);
        document.documentElement.setAttribute("data-theme", data.theme);
      });
  }, []);

  //
  return (
    <button
      onClick={toggleTheme}
      className="px-5 py-3 text-white rounded bg-black"
    >
      Сменить тему
    </button>
  );
}
