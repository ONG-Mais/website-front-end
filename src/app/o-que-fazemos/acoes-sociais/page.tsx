import WhatWeDoSubpage from "../(Components)/WhatWeDoSubpage";
import img1 from "../../../../public/images/social_actions/image_1.jpeg";
import img2 from "../../../../public/images/social_actions/image_2.jpeg";
import img3 from "../../../../public/images/social_actions/image_3.jpeg";
import img4 from "../../../../public/images/social_actions/image_4.jpeg";
import img5 from "../../../../public/images/social_actions/image_5.jpeg";
import img6 from "../../../../public/images/social_actions/image_6.jpeg";
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
    title: "Doações de alimentos e eventos beneficentes:",
    content: `Realizamos doações de alimentos e organizamos 
    eventos beneficentes para atender às necessidades básicas das famílias em situação de vulnerabilidade social.`,
  },
  {
    postition: 2,
    title: "Promoção da cidadania e do desenvolvimento comunitário:",
    content: `Através de palestras, workshops e campanhas de conscientização, promovemos a cidadania e o desenvolvimento 
    comunitário, empoderando as comunidades para que busquem soluções para seus próprios desafios`,
  },
];

const pageTitle = "AÇÕES SOCIAIS";

export default function Page() {
  return <WhatWeDoSubpage {...{ pageImages, pageText, pageTitle }} />;
}
