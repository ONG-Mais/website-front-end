import { useEffect, useState } from "react";

export default function useWindowYpos() {
  const [currentY, setCurrentY] = useState(typeof window !== "undefined" ? window.scrollY : 0);

  function handleScroll() {
    if (typeof window !== "undefined") {
      setCurrentY(window.scrollY);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return { currentY };
}
