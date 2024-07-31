import Image from "next/image";
import megaphone from "../assets/images/megaphone.svg";
import wppIcon from "../assets/icons/whatsappIcon.svg";
import Button from "@/GlobalComponents/Button";
import { routes } from "./lib/routes";
import { externalLinks } from "./lib/externalLinks";
import ArrowIcon from "@/assets/icons/ArrowIcon";

export default function Custom404() {
  return (
    <div className="mt-[10rem] mb-[4rem] flex flex-col w-full relative">
      <div className="mt-[8em] sm:mt-r22 flex flex-col justify-center items-center w-full mb-r4">
        <h2 className="text-dlxl sm:text-h4 text-primary-900 font-Mulish font-bold mb-[12px] sm:mb-r2 ">
          Estamos em construção
        </h2>
        <p className="text-h1 sm:text-pl text-neutral-700 sm:mb-r4">Volte em breve</p>
      </div>
      <div className="w-full flex flex-col items-center gap-6">
        <Button
          color="blue-light"
          rounded
          link={externalLinks.whatsappURL}
          className="w-72 py-3 flex justify-center items-center relative"
        >
          <Image src={wppIcon} alt="whastapp logo" className="absolute left-[15%] top-[30%]" />
          <span className="ml-[10px]">Entrar em contato</span>
        </Button>
        <Button
          color="blue-outline"
          rounded
          bold
          className="w-72 flex justify-center items-center relative group"
          link={routes.home}
        >
          <ArrowIcon
            direction="left"
            className="absolute left-[15%] top-[22%] fill-primary-500 group-hover:fill-neutral-0 duration-300 "
          />
          Página Inicial
        </Button>
      </div>
      <Image src={megaphone} alt="megaphone" className="absolute right-[7%] w-[20vw]" />
    </div>
  );
}
