"use client";

import { useEffect, useState } from "react";

export default function useWindowYpos() {
  let yPos = 0;
  if (typeof window !== "undefined") {
    yPos = window.scrollY;
  }
  const [currentY, setCurrentY] = useState(yPos);

  function handleScroll() {
    setCurrentY(window.scrollY);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("scroll", handleScroll);
      return () => document.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return { currentY };
}
