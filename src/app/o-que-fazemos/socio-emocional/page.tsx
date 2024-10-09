import WhatWeDoSubpage from "../(Components)/WhatWeDoSubpage";
import img1 from "../../../../public/images/social_emotional/img_1.jpeg";
import img2 from "../../../../public/images/social_emotional/img_2.jpeg";
import img3 from "../../../../public/images/social_emotional/img_3.jpeg";
import img4 from "../../../../public/images/social_emotional/img_4.jpeg";
import img5 from "../../../../public/images/social_emotional/img_5.jpeg";
import img6 from "../../../../public/images/social_emotional/img_6.jpeg";
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
    title: "Oficinas e atividades lúdicas:",
    content: `Através de oficinas e atividades lúdicas, trabalhamos habilidades sócio-emocionais como autoconhecimento, 
    comunicação, empatia e resolução de conflitos, promovendo o bem-estar e a saúde mental dos participantes.`,
  },
  {
    postition: 2,
    title: "Grupos de apoio e acompanhamento individual:",
    content: `Para aqueles que necessitam de um suporte mais aprofundado, oferecemos grupos de apoio e acompanhamento 
    individual com psicólogos e assistentes sociais.`,
  },
];

const pageTitle = "SÓCIO-EMOCIONAL";

export default function Page() {
  return <WhatWeDoSubpage {...{ pageImages, pageText, pageTitle }} />;
}
