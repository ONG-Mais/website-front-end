"use client";

import Image from "next/image";
import closeIcon from "../../closeHamburguerIcon.svg";
import { link } from "../../types";
import Link from "next/link";
import Button from "@/GlobalComponents/Button";
import { routes } from "@/app/lib/routes";
import downArrow from "../../../../assets/icons/selectArrow.svg";
import { useState } from "react";

type HamburguerProps = {
  showMobileMenu: boolean;
  links: link[];
  handleMenu(): void;
};

export default function HamburguerMenu({ showMobileMenu, links, handleMenu }: HamburguerProps) {
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
          {links.map((link) => {
            if (link.sublinks) {
              return (
                <div
                  key={link.id}
                  className={`flex flex-col ${showDropdown ? "pb-2" : "border-b border-b-neutral-200 py-5"} `}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    id="dorpdown-title"
                    onClick={() => setShowDropdown((prev) => !prev)}
                    className="flex w-full justify-between"
                  >
                    <p
                      className={`text-pl font-semibold w-full ${showDropdown && "border-b border-b-neutral-200 py-5"}`}
                    >
                      {link.title}
                    </p>
                    <Image
                      src={downArrow}
                      alt="↓"
                      className={`${showDropdown && "border-b border-b-neutral-200 py-5 rotate-180"}`}
                    />
                  </div>
                  <div id="dropdown-menu" className={`${showDropdown ? "flex flex-col" : "hidden"}`}>
                    {link.sublinks.map((sublink) => (
                      <Link
                        key={sublink.id}
                        href={sublink.to}
                        onClick={() => handleMenu()}
                        className="text-pm border-b border-b-neutral-200 py-3"
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
                <Link
                  key={link.id}
                  href={link.to}
                  onClick={() => handleMenu()}
                  className="text-pl font-semibold border-b border-b-neutral-200 py-5"
                >
                  {link.title}
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
        <Image src={closeIcon} alt="close-menu" className="w-5 h-24 mr-r6" onClick={() => handleMenu()} />
      </div>
    </div>
  );
}
