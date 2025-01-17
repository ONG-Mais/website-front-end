import engSemFronteirasLogo from "../../../public/images/associates/eng_sem_fronteiras.jpg";
import gerandoFalcoesLogo from "../../../public/images/associates/gerando_falcoes.jpg";
import marmitaLogo from "../../../public/images/associates/marmita_solidaria.jpg";
import ctaBannerImage from "../../../public/images/associates/associates_banner.png";
import fLogo from "../../../public/images/associates/frigelar_logo.png";
import qutoesImage from "../../assets/icons/quotes.svg";
import Container from "@/GlobalComponents/Container";
import Button from "@/GlobalComponents/Button";
import { routes } from "../lib/routes";

const companies = [
  {
    id: 1,
    name: "Marmita Solidária",
    img: marmitaLogo.src,
    href: "",
  },
  {
    id: 2,
    name: "passaro",
    img: gerandoFalcoesLogo.src,
    href: "",
  },
  {
    id: 3,
    name: "F",
    img: fLogo.src,
    href: "",
  },
  {
    id: 4,
    name: "Globo",
    img: engSemFronteirasLogo.src,
    href: "",
  },
];

const contributions = [
  {
    id: 1,
    title: "+150",
    detail: "crianças com educação",
    style: "bg-primary-500",
  },
  {
    id: 2,
    title: "+200",
    detail: "famílias com alimentos",
    style: "bg-primary-700",
  },
  {
    id: 3,
    title: "+200",
    detail: "pessoas impactadas",
    style: "bg-primary-900",
  },
];

const depos = [
  {
    id: 1,
    contenet: `Contribuir com o Projeto MAIS significa construir o coração de cada criança e 
    jovem do Morro da Polícia com pedaços do nosso coração. Não se trata apenas de sonhar com um 
    futuro melhor para cada um deles, mas sim de lutar continuamente e persistentemente pela
    implementação dos meios necessários que transformarão este sonho em realidade.`,
    author: "Ana, voluntária no Marmita Solidária ",
  },
  {
    id: 2,
    contenet: `A ONG MAIS é um refúgio de oportunidades para crianças e jovens, proporcionando 
    um espaço onde podem florescer e prosperar. Participar desse projeto inspirador, que irradia 
    vida, felicidade e perspectiva, é uma honra indescritível. Cada momento dedicado a contribuir
     para essa causa é uma fonte de gratificação e realização pessoal. `,
    author: "Camila, UX Designer na SouJunior",
  },
];

export default function Page() {
  return (
    <>
      <Container isHero>
        <div id="content-header" className="flex justify-between mb-r4 sm:justify-center">
          <h3 className="text-h3 font-bold font-Mulish sm:text-h5">Parceiros</h3>
          <Button color="green-outline" rounded link={routes.partnerUp} className="sm:hidden">
            Quero ser uma empresa parceira
          </Button>
        </div>
        <ul className="flex w-full justify-between sm:mb-[32px] sm:gap-4 sm:overflow-x-scroll sm:p-4 sm:pl-0">
          {companies.map((company) => (
            <li key={company.id} className="min-w-[240px] min-h-[240px] w-[240px] h-[240px] ">
              <img src={company.img} alt={company.name} className="shadow-lg" />
            </li>
          ))}
        </ul>
        <Button color="green-outline" rounded link={routes.partnerUp} className="hidden sm:flex">
          Quero ser uma empresa parceira
        </Button>
      </Container>
      <div className="bg-neutral-100">
        <Container>
          <div className="flex w-full justify-center my-px8">
            <h2 className="text-h4 font-bold font-Mulish sm:text-pl sm:text-center">
              EM 2023 O APOIO DESSES PARCEIROS AJUDARAM...
            </h2>
          </div>
          <div className="w-full flex justify-center mb-px15 sm:flex sm:flex-col">
            <div id="data-rectangle" className=" flex sm:flex-col">
              {contributions.map((contribution) => (
                <div
                  key={contribution.id}
                  className={`w-full flex items-center justify-center gap-4 p-4 text-neutral-100 ${contribution.style}`}
                >
                  <p className="text-h4 font-bold font-Mulish sm:text-h1">{contribution.title}</p>
                  <p className="text-pm text-center sm:text-h5 xs:max-w-[205px]">{contribution.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="depo-container" className="flex w-full justify-center gap-8 xs:flex-col xs:items-center">
            {depos.map((depo) => (
              <div
                key={depo.id}
                id="depo-card"
                className="relative flex flex-col w-[440px] min-h-[315px] min-w-[345px] gap-4 p-6 text-neutral-900 bg-neutral-0 shadow-md rounded-lg sm:h-[520px] xs:w-[350px] xs:h-[400px]"
              >
                <div className="flex flex-col z-10" id="content">
                  <p className="text-pl font-normal italic">{depo.contenet}</p>
                  <p className="absolute text-pl bottom-8 right-8 font-bold self-end sm:bottom-2">{depo.author}</p>
                </div>
                <img src={qutoesImage.src} className="absolute w-24 top-8 right-8" />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div id="cta-container" className="w-full h-[550px] sm:h-fit sm:justify-center sm:flex">
        <div
          id="cta-image"
          className="w-full h-full sm:py-8"
          style={{
            backgroundImage: `url(${ctaBannerImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="flex items-center w-full h-full mx-r11 sm:mx-none">
            <div
              id="cta-content-container"
              className="flex flex-col w-[35.5%] h-full text-neutral-0 gap-8 justify-center font-Mulish sm:w-fit sm:gap-y-6 sm:mx-[16px]"
            >
              <h5 className="text-h2 text-center font-bold sm:text-h5">
                Faça parte dessa história! Seja uma empresa parceira.
              </h5>
              <p className="text-h5 text-center sm:text-pm">
                Juntos, podemos construir um futuro promissor, promovendo responsabilidade social e gerando um impacto
                positivo duradouro. Junte-se a nós na jornada de fazer a diferença!
              </p>
              <div className="flex justify-center">
                <Button
                  color="blue-light"
                  rounded
                  bold
                  link={routes.partnerUp}
                  className="w-3/4 text-[24px] sm:w-full sm:py-4"
                >
                  Quero fazer a diferença
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
