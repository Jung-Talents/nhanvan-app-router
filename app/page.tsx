"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`flex min-h-screen items-center justify-center font-sans ${
        dark ? "bg-black text-white" : "bg-zinc-50 text-black"
      }`}
    >
      <main
        className={`flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start ${
          dark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <Image
          className={dark ? "invert" : ""}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <button
          onClick={() => setDark(!dark)}
          className={`rounded-full px-5 py-3 transition ${
            dark
              ? "bg-white text-black hover:bg-zinc-200"
              : "bg-black text-white hover:bg-zinc-700"
          }`}
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            To get started, edit the page.tsx file.
          </h1>

          <p
            className={`max-w-md text-lg leading-8 ${
              dark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className={`flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors md:w-[158px] ${
              dark
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-black text-white hover:bg-zinc-700"
            }`}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={dark ? "invert" : ""}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>

          <a
            className={`flex h-12 w-full items-center justify-center rounded-full border px-5 transition-colors md:w-[158px] ${
              dark
                ? "border-white hover:bg-zinc-800"
                : "border-black hover:bg-zinc-100"
            }`}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}