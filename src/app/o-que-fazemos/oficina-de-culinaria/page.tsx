import WhatWeDoSubpage from "../(Components)/WhatWeDoSubpage";
import img1 from "../../../../public/images/cooking_workshop/img_1.jpeg";
import img2 from "../../../../public/images/cooking_workshop/img_2.jpeg";
import img3 from "../../../../public/images/cooking_workshop/img_3.jpeg";
import img4 from "../../../../public/images/cooking_workshop/img_4.jpeg";
import img5 from "../../../../public/images/cooking_workshop/img_5.jpeg";
import img6 from "../../../../public/images/cooking_workshop/img_6.jpeg";
import { CarrousselImage, PageText } from "../(Components)/WhatWeDoSubpage/types";

const pageImages: CarrousselImage[] = [
  {
    id: 1,
    src: img1.src,
  },
  {
    id: 2,
    src: img2.src,
  },
  {
    id: 3,
    src: img3.src,
  },
  {
    id: 4,
    src: img4.src,
  },
  {
    id: 5,
    src: img5.src,
  },
  {
    id: 6,
    src: img6.src,
  },
];

const pageText: PageText[] = [
  {
    postition: 1,
    title: "Aprendendo a cozinhar de forma saudável e nutritiva:",
    content: `Na Oficina de Culinária, os participantes aprendem a preparar
     refeições saborosas e nutritivas, utilizando ingredientes acessíveis e criando hábitos alimentares saudáveis.`,
  },
  {
    postition: 2,
    title: "Desenvolvimento de habilidades sociais e autonomia:",
    content: `A oficina também promove o desenvolvimento de habilidades sociais
     como trabalho em equipe, organização e planejamento, além de estimular a autonomia e a criatividade dos participantes.`,
  },
];

const pageTitle = "OFICINA DE CULINÁRIA";

export default function Page() {
  return <WhatWeDoSubpage {...{ pageImages, pageText, pageTitle }} />;
}
