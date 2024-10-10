import Img1 from "../../../../public/images/kids_reading_test.jpg";
import Img2 from "../../../../public/images/teacher_helping_kid_draw.jpg";
import Img3 from "../../../../public/images/teacher_showing_kids_draws.jpg";
import Img4 from "../../../../public/images/focused_kid_in_class.jpg";
import Img5 from "../../../../public/images/kid_reading.jpg";
import Img6 from "../../../../public/images/kids_book_club.jpg";
import { CarrousselImage, PageText } from "../(Components)/WhatWeDoSubpage/types";
import WhatWeDoSubpage from "../(Components)/WhatWeDoSubpage";

const pageText: PageText[] = [
  {
    postition: 1,
    title: "Matemática, Língua Portuguesa e Educação Ambiental:",
    content: `Com voluntários dedicados-, oferecemos reforço escolar em matemática, 
    língua portuguesa e educação ambiental, visando fortalecer o aprendizado e despertar a 
    paixão pelo conhecimento.`,
  },
  {
    postition: 2,
    title: "Aulas personalizadas e acompanhamento individual:",
    content: `Cada aluno é único e tem suas próprias necessidades. Por isso, oferecemos 
    aulas personalizadas e acompanhamento individual, garantindo que todos recebam o suporte 
    necessário para alcançar seu potencial máximo.`,
  },
];

const pageImages: CarrousselImage[] = [
  {
    id: 1,
    src: Img1.src,
  },
  {
    id: 2,
    src: Img2.src,
  },
  {
    id: 3,
    src: Img3.src,
  },
  {
    id: 4,
    src: Img4.src,
  },
  {
    id: 5,
    src: Img5.src,
  },
  {
    id: 6,
    src: Img6.src,
  },
];

const pageTitle = "APOIO ESCOLAR";

export default function Page() {
  return <WhatWeDoSubpage {...{ pageImages, pageText, pageTitle }} />;
}
