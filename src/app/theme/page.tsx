"use client";
import { ThemeSwitcher } from "../components/ThemeSwitcher/page";

//
export default function ThemePage() {

  return (
    <div className="flex flex-col items-center mt-5 mx-10 gap-4">
      <h1 className="p-3 text-xl rounded text-gray-700 bg-gray-400">
        🧐 На этой странице (/theme) реализована работа с cookies на примере
        темной/светлой темы
      </h1>

      <p className="p-6 border rounded-lg bg-gray-300 dark:bg-gray-700">
        Текущая тема сохраняется в cookies и будет применена при следующем
        посещении страницы
      </p>

      <ThemeSwitcher />
    </div>
  );
}
