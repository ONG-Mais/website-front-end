import { ReactNode } from "react";
import "./styles.css";

type formBanner = {
  children: ReactNode;
  image: string;
  imagePosition: "center" | "right";
};

/**
 * @description Este componente deve ser usado como um wraper de forms de cadastro da aplicação, quando eles demandarem um fundo 
 com uma imagem e um degradê azul. Presente nos formulários de cadastro de empresa e de voluntário, por exemplo.

 * @param {formBanner}  props O componente recebe duas props obrigatórias:
 * @param {ReactNode} props.children Elementos filhos. Note que o componente entrega uma div, portanto você pode fazer uma tag <form>
 * como filho deste componente
 * @param {string} props.image A url da imagem de background. Somente o caminho para a imagem, não aceita objetos
 *@param {"center" | "right"} props.imagePosition ajusta a posição da imagem e, conforme os critérios do design, o degradê fundo
 */

export default function FormBanner({ children, image, imagePosition }: formBanner) {
  const tailwindBackgroundEffect = {
    center: "form-banner-bg-image-light-gradient",
    right: "form-banner-bg-gradient",
  };
  const tailwindDivPosition = {
    center: "mx-r4 w-full",
    right: "mx-r11 w-2/6",
  };
  const tailwindImagePosition = {
    center: "w-full bg-no-repeat bg-cover sm:bg-center",
    right: "w-2/4 bg-cover form-banner-image",
  };

  return (
    <div
      className={`${
        imagePosition === "right" ? tailwindBackgroundEffect.right : tailwindBackgroundEffect.center
      } bg-gradient mt-[6rem] w-full h-full relative flex`}
    >
      <div
        id="form-wrapper"
        className={`py-12 flex flex-col  sm:mx-r4 sm:w-full ${
          imagePosition === "right" ? tailwindDivPosition.right : tailwindDivPosition.center
        }`}
        style={imagePosition === "center" ? { backgroundPosition: "top -10px left 0" } : {}}
      >
        {children}
      </div>
      <div
        id="image"
        className={`form-banner-bg-image absolute top-0 right-0 h-full sm:w-full sm:bg-center -z-50
          ${imagePosition === "right" ? tailwindImagePosition.right : tailwindImagePosition.center}
          `}
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
}
