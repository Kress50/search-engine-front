import React, { useState } from "react";

export default function Footer() {
  const currentData = new Date().getFullYear();

  return (
    <footer className="absolute inset-x-0 bottom-0">
      <div className="flex justify-between bg-white p-5 text-sm text-gray-500 dark:bg-zinc-900 dark:text-neutral-400">
        <a href="https://github.com/Kress50/tenjin-web-search">
          <p>Made by Kress50 | {currentData}</p>
        </a>
        <p>
          This project was done for personal use / studying purposes and has no
          affiliation with any existing corporate entities
        </p>
      </div>
    </footer>
  );
}
