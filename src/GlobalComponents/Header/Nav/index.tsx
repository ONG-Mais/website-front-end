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
import downArrow from "../../../assets/icons/selectArrow.svg";

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
    sublinks: [
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

  function handleMenu() {
    setShowMobileMenu((prev) => !prev);
    handleScroll();
  }

  return (
    <nav className="flex gap-10 justify-end w-full items-center h-full text-neutral-0">
      <Image
        src={hamburguerIcon}
        alt="menu"
        className={`sm:block hidden sm:z-50 ${showMobileMenu ? "hidden" : "block"}`}
        onClick={() => handleMenu()}
        data-testid="hamburguer-icon"
      />
      {showMobileMenu && <HamburguerMenu {...{ showMobileMenu, handleMenu, links }} />}
      {links.map((link) => {
        if (link.sublinks) {
          return (
            <div
              key={link.id}
              className={`flex-col text-pl sm:hidden h-[25px] w-fit items-center relative`}
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <div className="flex gap-3 items-center ">
                {link.title}
                <Image
                  src={downArrow}
                  alt="↓"
                  className={`${showDropdown && "rotate-180"} duration-300 saturate-200`}
                />
              </div>
              <div
                className={`${
                  showDropdown
                    ? " bg-neutral-0 text-neutral-900 text-ps gap-y-3 p-6 visible w-[180px] top-10 -left-7 transition-spacing duration-200 shadow-lg drop-shadow-lg"
                    : "invisible w-0"
                } flex flex-col text-neutral-900 `}
              >
                {link.sublinks.map((sublink) => (
                  <Link
                    href={sublink.to}
                    key={sublink.id}
                    className="py-2 px-1 hover:bg-primary-300 transition-bgAndSpacing duration-200 "
                  >
                    {sublink.title}
                  </Link>
                ))}
              </div>
            </div>
          );
        }
        if (link.to) {
          return (
            <Link key={link.id} href={link.to} className="text-pl sm:hidden" style={{ wordSpacing: "0.25em" }}>
              {link.title}
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
