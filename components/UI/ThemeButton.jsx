import { SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import React from "react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="h-10 w-10 cursor-pointer rounded-full p-1 text-white hover:bg-gray-200 hover:text-gray-200 dark:text-zinc-800 dark:hover:bg-zinc-600  dark:hover:text-zinc-600"
      >
        <div className="h-8 w-8 rounded-full bg-zinc-900 dark:bg-white">
          <SunIcon className="relative top-1 left-1 h-6 w-6" />
        </div>
      </div>
    </>
  );
}
