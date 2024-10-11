import drivingKid from "../../../public/images/criança_dirigindo.jpeg";
import sportsTeam from "../../../public/images/time_esporte.jpeg";
import funnyGlasses from "../../../public/images/crianças_oculos.jpeg";
import oralExam from "../../../public/images/exame_bucal.jpeg";
import kitchenClass from "../../../public/images/aula_cozinha.jpeg";
import bagHolder from "../../../public/images/criança_segurando_sacola.jpeg";
import Container from "@/GlobalComponents/Container";
import Mosaic from "./Components/Mosaic";
import Mission from "./Components/Mission";
import Values from "./Components/Values";
import Button from "@/GlobalComponents/Button";
import { routes } from "../lib/routes";

export type imageDivType = {
  id: number;
  images: { id: number; src: string; alt: string }[];
};

const imagesDiv: imageDivType[] = [
  {
    id: 1,
    images: [
      {
        id: 101,
        src: drivingKid.src,
        alt: "crianças em um buggy",
      },
      { id: 102, src: sportsTeam.src, alt: "Times de futebol" },
    ],
  },
  {
    id: 2,
    images: [{ id: 201, src: funnyGlasses.src, alt: "Crianças com óculos de festa" }],
  },
  {
    id: 3,
    images: [
      { id: 301, src: oralExam.src, alt: "Teste de Covid" },
      { id: 302, src: kitchenClass.src, alt: "Aula de culinária" },
    ],
  },

  {
    id: 4,
    images: [{ id: 401, src: bagHolder.src, alt: "criança segurando uma sacola" }],
  },
];

export default function Page() {
  return (
    <div className="mt-r8 sm:mt-[20vh]">
      <Container id="sobre-nos">
        <div className="flex justify-between sm:justify-center sm:items-center mt-[77px] sm:mt-none">
          <h2 className="font-Mulish font-bold text-h3 sm:text-center sm:text-pl pb-8 sm:pb-4 flex">SOBRE NÓS</h2>
          <Button color="green-outline" rounded link={routes.volunteer} size="lg" className="h-fit sm:hidden">
            Quero ser voluntário
          </Button>
        </div>
        <p className="text-pl sm:text-ps">
          Somos um coletivo dedicado a assegurar que crianças e adolescentes vulneráveis tenham acesso a oportunidades
          que estimulem seu desenvolvimento integral e permitam que alcancem sua plena dignidade. Por meio de oficinas
          de educação, esporte, cultura e artes, buscamos fomentar a aprendizagem, o crescimento pessoal e a inclusão
          social. Nossa iniciativa surgiu durante o <b>auge da pandemia</b>, com o propósito de{" "}
          <b>acolher e auxiliar mais de 100 crianças</b> que enfrentavam um período crítico, marcado pela escassez de
          alimentos e atividades.
        </p>
        <br />
        <Mosaic arr={imagesDiv} />
        <br />
        <Mission />
        <Values />
        <br />
        <div className="w-full flex flex-col items-center gap-5 mb-r4 sm:mb-r2">
          <span className="font-bold font-Mulish text-pl sm:text-pm">Faça parte dessa causa, entre em contato!</span>
          <Button color="blue-light" rounded link={routes.contact}>
            Quero apoiar a causa
          </Button>
        </div>
      </Container>
    </div>
  );
}
