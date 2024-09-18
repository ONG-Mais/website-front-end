import schoolImage from "../../../../../public/images/school_support.png";
import socialActionsImage from "../../../../../public/images/social_actions.png";
import emotionalImage from "../../../../../public/images/social_emotional.png";
import cookingImage from "../../../../../public/images/cooking_workshop.png";
import sportImage from "../../../../../public/images/sports_workshop.png";
import { routes, routeValues } from "@/app/lib/routes";

export type CardLink = {
  title: string;
  desc: string;
  img: string;
  url: routeValues;
};

export const cardsData: CardLink[] = [
  {
    title: "Apoio escolar",
    desc: "Conheça as atividades de apoio escolar que geram oportunidades educacionais enriquecedoras.",
    img: schoolImage.src,
    url: routes.whatWeDoSchoolSupport,
  },
  {
    title: "Ações sociais",
    desc: "Acompanhe de perto as ações sociais impactantes desenvolvidas pela nossa ONG.",
    img: socialActionsImage.src,
    url: routes.whatWeDoSocialAction,
  },
  {
    title: "Sócio-emocional",
    desc: "Acompanhe as iniciativas que promovem crescimento pessoal, empatia e bem-estar.",
    img: emotionalImage.src,
    url: routes.whatWeDoEmotionalSupport,
  },
  {
    title: "Oficina de culinária",
    desc: "Vem conferir as receitas incríveis que nossas crianças fazem. É pura superação e felicidade na cozinha!",
    img: cookingImage.src,
    url: routes.whatWeDoCookingClass,
  },
  {
    title: "Oficina de esportes",
    desc: " Confira as imagens inspiradoras de superação e alegria. Veja o potencial transformador do esporte!",
    img: sportImage.src,
    url: routes.whatWeDoSports,
  },
];
