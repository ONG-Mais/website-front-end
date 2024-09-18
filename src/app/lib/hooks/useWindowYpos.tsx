"use client";

import { useEffect, useState } from "react";

export default function useWindowYpos() {
  const yPos = window ? window.scrollY : 0;
  const [currentY, setCurrentY] = useState(yPos);

  function handleScroll() {
    setCurrentY(window && window.scrollY);
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  return { currentY };
}
