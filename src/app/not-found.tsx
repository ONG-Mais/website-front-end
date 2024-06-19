import Image from "next/image";
import megaphone from "../assets/megaphone.svg";
import wppIcon from "../assets/whatsappIcon.svg";
import leftArrowIcon from "../assets/leftArrowIcon.svg";
import Button from "@/GlobalComponents/Button";

export default function Custom404() {
  return (
    <div className="mt-[10rem] mb-[4rem] flex flex-col w-full relative">
      <div className="mt-[8em] flex flex-col justify-center items-center w-full mb-r4">
        <h2 className="text-dlxl text-primary-900 font-Mulish font-bold">Estamos em construção</h2>
        <p className="text-h1 text-neutral-700">Volte em breve</p>
      </div>
      <div className="w-full flex flex-col items-center gap-6">
        <Button color="blue-light" rounded bold className="w-72 py-3 flex justify-center items-center relative">
          <Image src={wppIcon} alt="whastapp logo" className="absolute left-[14%] top-[30%]" />
          Entrar em contato
        </Button>
        <Button color="blue-outline" rounded bold className="w-72 flex justify-center items-center relative">
          <Image src={leftArrowIcon} alt="whastapp logo" className="absolute left-[20%] top-[20%]" />
          Página Inicial
        </Button>
      </div>
      <Image src={megaphone} alt="megaphone" className="absolute right-[7%] w-[20vw]" />
    </div>
  );
}
