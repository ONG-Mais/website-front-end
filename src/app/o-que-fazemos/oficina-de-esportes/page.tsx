import WhatWeDoSubpage from "../(Components)/WhatWeDoSubpage";
import img1 from "../../../../public/images/sports_workshop/img_1.jpeg";
import img2 from "../../../../public/images/sports_workshop/img_2.jpeg";
import img3 from "../../../../public/images/sports_workshop/img_3.jpeg";
import img4 from "../../../../public/images/sports_workshop/img_4.jpeg";
import img5 from "../../../../public/images/sports_workshop/img_5.jpeg";
import img6 from "../../../../public/images/sports_workshop/img_6.jpeg";
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
    title: "O esporte como agente de perspectiva para o futuro:",
    content: ` O objetivo é investir no desenvolvimento integral das crianças, capacitando-as a superar desafios e construir
     um futuro promissor, utilizando o esporte como catalisador para a transformação e o florescimento de suas vidas.`,
  },
  {
    postition: 2,
    title: "Desenvolvimento de habilidade motoras, criativas e sociais:",
    content: ` Na Oficina de Esportes oferecemos modalidades como futebol, capoeira, jiu-jitsu, boxe e muay thai, promovendo 
    não apenas a saúde física, mas também aspectos essenciais como disciplina, trabalho em equipe e autoconfiança. Cada modalidade contribui para o desenvolvimento de habilidades motoras, expressão criativa e valores sociais.`,
  },
];

const pageTitle = "OFICINA DE ESPORTES";

export default function Page() {
  return <WhatWeDoSubpage {...{ pageImages, pageText, pageTitle }} />;
}
