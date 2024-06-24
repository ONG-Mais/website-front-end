"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { routes } from "@/app/lib/routes";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const [fixed, setFixed] = useState<boolean>(checkInitialPath(path));

  //não estou totalmente feliz com a solução que encontrei pois estou achando o código muito repetitivo aqui. Retornar aqui no futuro para refatoração!
  //tirar os comentáios quando o as páginas forem implementadas. Atualamente, como caem no 404, precisam ficar como fixed!

  function checkInitialPath(path: string) {
    switch (path) {
      case routes.home: {
        return false;
      }
      // case routes.donate: {
      //   return false;
      // }
      // case routes.contact: {
      //   return false;
      // }
      default: {
        return true;
      }
    }
  }

  useEffect(() => {
    switch (path) {
      case routes.home: {
        setFixed(false);
        break;
      }
      // case routes.donate: {
      //   setFixed(false);
      //   break;
      // }
      // case routes.contact: {
      //   setFixed(false);
      //   break;
      // }
      default: {
        setFixed(true);
      }
    }
  }, [path]);

  return (
    <header
      className={`w-full flex h-24 items-center top-0 left-0 z-50
        ${fixed ? "fixed bg-primary-900" : "absolute"} `}
    >
      <div className="mx-r11 flex w-svw items-center sm:mx-r6">
        <a href={"/"} className="z-50">
          <img src={logo.src} alt="logo" className="w-[4.5rem] h-16" />
        </a>
        <Nav />
      </div>
    </header>
  );
}
