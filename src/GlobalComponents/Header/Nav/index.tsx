"use client";

import Button from "@/GlobalComponents/Button";
import Link from "next/link";
import { routes } from "@/app/lib/routes";
import Image from "next/image";
import hamburguerIcon from "../hamburguerIcon.svg";
import closeIcon from "../closeHamburguerIcon.svg";
import { useState } from "react";
import { handleScroll } from "@/app/lib/handleScroll";

const links = [
  {
    id: 1,
    title: "Quem Somos",
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
      {/* mobile -- Hamburguer Menu */}
      <Image
        src={hamburguerIcon}
        alt="menu"
        className={`sm:block hidden sm:z-50 ${showMenu ? "hidden" : "block"}`}
        onClick={() => handleMenu()}
      />
      <div className={`hamburguer-menu hidden z-40 ${showMenu ? "sm:flex" : "sm:hidden"}`}>
        <div className="modal-bg hidden sm:block bg-neutral-800 opacity-30 fixed top-0 left-0 m-none w-svw h-svh z-0 overflow-hidden" />
        <div className="mobile-menu hidden sm:bg-neutral-0 sm:absolute sm:top-0 sm:right-0 sm:h-[93vh] sm:w-svw sm:flex rounded-b-3xl">
          <ul className="text-neutral-900 flex flex-col w-svw justify-start sm:mt-[20vh] sm:ml-px5">
            {links.map((link) => (
              <Link key={link.id} href={link.to} className="text-pl font-semibold border-b border-b-neutral-200 py-5">
                {link.title}
              </Link>
            ))}
            <div className="w-full flex justify-center items-center">
              <Button color="green-light" className="mt-r8" rounded link={routes.donate} size="lg">
                Doe agora
              </Button>
            </div>
          </ul>
          <Image src={closeIcon} alt="close-menu" className="w-5 h-24 mr-r6" onClick={() => handleMenu()} />
        </div>
      </div>
      {/* end of mobile -- Hamburguer Menu*/}
      {links.map((link) => (
        <Link key={link.id} href={link.to} className="text-pl sm:hidden">
          {link.title}
        </Link>
      ))}
      <Button color="green-light" className="px-5 sm:hidden" rounded link={routes.donate}>
        Doe agora
      </Button>
    </nav>
  );
}
