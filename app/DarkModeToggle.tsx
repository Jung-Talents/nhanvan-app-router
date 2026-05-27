"use client";

import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-black px-5 py-3 text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}