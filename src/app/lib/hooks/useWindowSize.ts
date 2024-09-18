import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState(0);
  const breakPoints = {
    regular: 1440,
    small: 1230,
  };
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { width, breakPoints };
}
