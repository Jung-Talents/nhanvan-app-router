"use client";

import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "bg-black text-white p-4 rounded"
          : "bg-white text-black p-4 rounded"
      }
    >
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}