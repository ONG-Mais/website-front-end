"use client";

import Image from "next/image";
import closeIcon from "../../closeHamburguerIcon.svg";
import { DropdownType, isDropdown, isLink, link } from "../../types";
import Link from "next/link";
import Button from "@/GlobalComponents/Button";
import { routes } from "@/app/lib/routes";
import { useState } from "react";
import Dropdown from "../Dropdown";

type HamburguerProps = {
  showMobileMenu: boolean;
  navItems: Array<link | DropdownType>;
  handleMobileMenu(): void;
};

export default function HamburguerMenu({ showMobileMenu, navItems, handleMobileMenu }: HamburguerProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div
      className={`hamburguer-menu hidden z-40 ${showMobileMenu ? "sm:flex" : "sm:hidden"}`}
      data-testid="hamburguer-container"
    >
      <div className="modal-bg hidden sm:block bg-neutral-800 opacity-30 fixed top-0 left-0 m-none w-svw h-svh z-0 overflow-hidden" />
      <div
        className={`mobile-menu hidden sm:bg-neutral-0 sm:absolute sm:top-0 sm:right-0 sm:h-fit sm:pb-8 sm:w-svw sm:flex rounded-b-3xl z-30`}
      >
        <ul className="text-neutral-900 flex flex-col w-svw justify-start sm:mt-[20vh] sm:ml-px5">
          {navItems.map((item) => {
            if (isDropdown(item)) {
              return (
                <Dropdown
                  key={item.id}
                  variant="mobile"
                  {...{ dropdown: item, handleMobileMenu, setShowDropdown, showDropdown }}
                />
              );
            }
            if (isLink(item)) {
              return (
                <Link
                  key={item.id}
                  href={item.to}
                  onClick={() => handleMobileMenu()}
                  className="text-pl font-semibold border-b border-b-neutral-200 py-5"
                >
                  {item.title}
                </Link>
              );
            }
          })}
          <div className="w-full flex justify-center items-center">
            <Button color="green-light" className="mt-r8" rounded link={routes.donate} size="lg">
              Doe agora
            </Button>
          </div>
        </ul>
        <Image src={closeIcon} alt="close-menu" className="w-5 h-24 mr-r6" onClick={() => handleMobileMenu()} />
      </div>
    </div>
  );
}
