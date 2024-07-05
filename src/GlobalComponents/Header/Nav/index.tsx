"use client";

import Button from "@/GlobalComponents/Button";
import Link from "next/link";
import { routes } from "@/app/lib/routes";
import { useState } from "react";
import HamburguerMenu from "./HamburguerMenu";
import Image from "next/image";
import hamburguerIcon from "../hamburguerIcon.svg";
import { handleScroll } from "@/app/lib/handleScroll";
import { link } from "../types";

export const links: link[] = [
  {
    id: 1,
    title: "Quem somos",
    to: routes.whoAreWe,
  },
  {
    id: 2,
    title: "O que fazemos",
    to: routes.whatWeDoHome,
  },
  {
    id: 3,
    title: "Como ajudar",
    to: "/como-ajudar",
  },
  {
    id: 4,
    title: "Parceiros",
    to: routes.associates,
  },
  {
    id: 5,
    title: "Contato",
    to: routes.contact,
  },
];

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu((prev) => !prev);
    handleScroll();
  }

  return (
    <nav className="flex gap-10 justify-end w-full items-center h-full text-neutral-0">
      <Image
        src={hamburguerIcon}
        alt="menu"
        className={`sm:block hidden sm:z-50 ${showMenu ? "hidden" : "block"}`}
        onClick={() => handleMenu()}
        data-testid="hamburguer-icon"
      />
      {showMenu && <HamburguerMenu {...{ showMenu, handleMenu, links }} />}
      {links.map((link) => (
        <Link key={link.id} href={link.to} className="text-pl sm:hidden" style={{ wordSpacing: "0.25em" }}>
          {link.title}
        </Link>
      ))}
      <Button color="green-light" className="px-5 sm:hidden" rounded link={routes.donate}>
        Doe agora
      </Button>
    </nav>
  );
}
