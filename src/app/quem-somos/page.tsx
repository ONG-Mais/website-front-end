import Container from "@/GlobalComponents/Container";
import "./styles.css";
import Mosaic from "./UI/Mosaic";

export default function Page() {
  return (
    <div className="mt-r8 sm:mt-[20vh]">
      <Container>
        <div className="flex flex-col sm:justify-center sm:items-center">
          <h2 className="font-Mulish font-bold text-h3 sm:text-center sm:text-pl pb-8 sm:pb-4 flex">SOBRE NÓS</h2>
        </div>
        <p className="sm:text-ps">
          Somos um coletivo dedicado a assegurar que crianças e adolescentes vulneráveis tenham acesso a oportunidades
          que estimulem seu desenvolvimento integral e permitam que alcancem sua plena dignidade. Por meio de oficinas
          de educação, esporte, cultura e artes, buscamos fomentar a aprendizagem, o crescimento pessoal e a inclusão
          social. Nossa iniciativa surgiu durante o <b>auge da pandemia</b>, com o propósito de{" "}
          <b>acolher e auxiliar mais de 100 crianças</b> que enfrentavam um período crítico, marcado pela escassez de
          alimentos e atividades.
        </p>
        <br />
        <Mosaic />
      </Container>
    </div>
  );
}
