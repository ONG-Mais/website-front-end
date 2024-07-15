"use client";

import Button from "@/GlobalComponents/Button";
import Link from "next/link";
import { routes } from "@/app/lib/routes";
import { useState } from "react";
import HamburguerMenu from "./HamburguerMenu";
import Image from "next/image";
import hamburguerIcon from "../hamburguerIcon.svg";
import { handleScroll } from "@/app/lib/handleScroll";
import { DropdownType, isDropdown, isLink, link } from "../types";
import Dropdown from "./Dropdown";

export const navItems: Array<link | DropdownType> = [
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
    links: [
      {
        id: 1,
        title: "Doação",
        to: routes.donate,
      },
      {
        id: 2,
        title: "Voluntariado",
        to: routes.volunteer,
      },
      {
        id: 3,
        title: "Empresa Parceira",
        to: routes.partnerUp,
      },
    ],
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleMobileMenu() {
    setShowMobileMenu((prev) => !prev);
    handleScroll();
  }

  return (
    <nav className="flex gap-10 justify-end w-full items-center h-full text-neutral-0">
      <Image
        src={hamburguerIcon}
        alt="menu"
        className={`sm:block hidden sm:z-50 ${showMobileMenu ? "hidden" : "block"}`}
        onClick={() => handleMobileMenu()}
        data-testid="hamburguer-icon"
      />
      {showMobileMenu && <HamburguerMenu {...{ showMobileMenu, handleMobileMenu, navItems }} />}
      {navItems.map((item) => {
        if (isDropdown(item)) {
          return <Dropdown key={item.id} variant="desktop" {...{ dropdown: item, setShowDropdown, showDropdown }} />;
        }
        if (isLink(item)) {
          return (
            <Link key={item.id} href={item.to} className="text-pl sm:hidden" style={{ wordSpacing: "0.25em" }}>
              {item.title}
            </Link>
          );
        }
      })}
      <Button color="green-light" className="px-5 sm:hidden" rounded link={routes.donate}>
        Doe agora
      </Button>
    </nav>
  );
}
