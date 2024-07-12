import Image from "next/image";
import closeIcon from "../../closeHamburguerIcon.svg";
import { link } from "../../types";
import Link from "next/link";
import Button from "@/GlobalComponents/Button";
import { routes } from "@/app/lib/routes";

type HamburguerProps = {
  showMenu: boolean;
  links: link[];
  handleMenu(): void;
};

export default function HamburguerMenu({ showMenu, links, handleMenu }: HamburguerProps) {
  return (
    <div
      className={`hamburguer-menu hidden z-40 ${showMenu ? "sm:flex" : "sm:hidden"}`}
      data-testid="hamburguer-container"
    >
      <div className="modal-bg hidden sm:block bg-neutral-800 opacity-30 fixed top-0 left-0 m-none w-svw h-svh z-0 overflow-hidden" />
      <div className="mobile-menu hidden sm:bg-neutral-0 sm:absolute sm:top-0 sm:right-0 sm:h-[93vh] sm:w-svw sm:flex rounded-b-3xl">
        <ul className="text-neutral-900 flex flex-col w-svw justify-start sm:mt-[20vh] sm:ml-px5">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.to}
              onClick={() => handleMenu()}
              className="text-pl font-semibold border-b border-b-neutral-200 py-5"
            >
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
  );
}