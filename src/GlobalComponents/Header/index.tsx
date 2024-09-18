"use client";

import logo from "@/assets/images/logo.png";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { routes } from "@/app/lib/routes";
import { usePathname } from "next/navigation";
import useWindowYpos from "@/app/lib/hooks/useWindowYpos";

/**
 * @description Rotas nas quais o Header deverá possuir uma cor de fundo transparente quando o usuário estiver no topo da página
 */
const initialTransparetBgRoutes: string[] = [routes.home, routes.contact];

const bgInitialColor = {
  blue: "bg-primary-900",
  transparent: "bg-transparent",
};

export default function Header() {
  const path = usePathname();
  const { currentY } = useWindowYpos();
  const [color, setColor] = useState<string>(
    initialTransparetBgRoutes.includes(path) ? bgInitialColor.transparent : bgInitialColor.blue
  );

  useEffect(() => {
    function changeColor(): any {
      return currentY > 0
        ? setColor(bgInitialColor.blue)
        : setColor(initialTransparetBgRoutes.includes(path) ? bgInitialColor.transparent : bgInitialColor.blue);
    }
    changeColor();
  }, [path, currentY]);

  return (
    <header className={`fixed transition-all duration-300 w-full flex h-24 items-center top-0 left-0 z-50 ${color}`}>
      <div className="mx-r11 flex w-svw items-center sm:mx-r6">
        <a href={"/"} className="z-50">
          <img src={logo.src} alt="logo" className="w-[4.5rem] sm:w-20 h-16" />
        </a>
        <Nav />
      </div>
    </header>
  );
}
