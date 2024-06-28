import airplaneIcon from "@/assets/icons/airplaneicon.svg";
import Image from "next/image";

export default function Mission() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center mb-[3%] gap-2">
        <Image src={airplaneIcon} alt="mission-icon" />
        <h4 className="font-Mulish font-bold text-h4 sm:text-h5">MISSÃO</h4>
      </div>
      <p className="text-pl text-neutral-700 mb-r4 sm:text-pm">
        Elevar a dignidade de crianças e adolescentes vulneráveis residentes no Morro da Polícia em Porto Alegre - RS é
        a nossa missão primordial. Estamos empenhados em proporcionar oportunidades e recursos que permitam o pleno
        desenvolvimento e bem-estar desses jovens, visando criar um impacto positivo e duradouro em suas vidas.
      </p>
    </div>
  );
}
