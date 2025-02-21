import { ReactNode } from "react";

interface BannerProps {
  image: string;
  title: string;
  text: string;
  mobileSize: "full" | "half";
  imageOffset?: number;
  children?: ReactNode;
}

/**
 * @description Este componente entrega um hero banner nos moldes da aplicação.
 * Sendo assim, ele pede uma imagem que irá servir como background e apresenta
 * um gradiente azul acima desta imagem. Esse banner também renderiza um título
 * e um subtitilo. Pode ainda receber algum conteúdo opcional como children.
 * @param {BannerProps} props O componente aceita as seguintes props:
 * @param {string} props.image A imagem de fundo do banner
 * @param {string} props.imageOffset Ajusta a posição da imagem
 * @param {string} props.title O título do banner
 * @param {string} props.text O subtitulo do banner. Entregue em um <pre>, então a formatação fica a critério de quem chama.
 * @param {"full" | "half"} props.mobileSize Define se a imagem ocupa toda a tela mobile ou somente uma parte
 * @param {ReactNode | undefined} props.children O conteúdo adicional opcional. Comummente
 * um botão
 * @returns
 */

export default function HeroBanner({ image, imageOffset, title, text, mobileSize, children }: BannerProps) {
  return (
    <div
      className={`flex h-[524px] w-full -z-20 overflow-hidden bg-neutral-900 sm:w-[100svw] ${
        mobileSize === "full" ? "sm:h-[85svh]" : "sm:h-[50svh]"
      }`}
    >
      <div
        className={`banner w-full bg-cover relative flex justify-center items-end sm:mt-none bg-top sm:bg-center `}
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="z-40 text-neutral-0 mb-r4 flex flex-col gap-7 font-Mulish text-center sm:mb-r10">
          <h3 className="text-ds font-semibold sm:text-h5 ">{title}</h3>
          <pre className="text-h3 sm:text-pl font-Mulish">{text}</pre>
          {children}
        </div>
      </div>
    </div>
  );
}
