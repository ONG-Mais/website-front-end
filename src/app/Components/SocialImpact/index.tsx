import caseIcon from "@/assets/icons/caseIcon.svg";
import familyIcon from "@/assets/icons/familyIcon.svg";
import foodIcon from "@/assets/icons/foodIcon.svg";
import handshakeIcon from "@/assets/icons/handshakeIcon.svg";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "ALIMENTOS",
    icon: foodIcon,
    desc: "+ de 30 mil Kg de alimentos distribuídos",
  },
  {
    id: 2,
    title: "RENDA",
    icon: familyIcon,
    desc: "12 famílias  beneficiadas com auxílio financeiro",
  },
  {
    id: 3,
    title: "TRABALHO",
    icon: caseIcon,
    desc: "7 direcionamentos ao mercado de trabalho bem sucedidos",
  },
  {
    id: 4,
    title: "PARCERIAS",
    icon: handshakeIcon,
    desc: "11 alunos inseridos em outras atividades através de parcerias",
  },
];
export default function SocialImpact() {
  return (
    <div className="w-full bg-neutral-100 mb-r4 sm:mb-none pb-0" id="social-impact">
      <div className="flex flex-col items-center h-[340px] sm:h-auto pt-12 sm:pb-10">
        <h3 className="text-h3 sm:text-pl font-bold font-Mulish ">IMPACTO DESDE 2020</h3>
        <ul className="flex justify-around gap-x-20 sm:gap-y-8 mt-r2 sm:mt-r4 sm:flex-col mx-r11 sm:mx-[19%]">
          {data.map((card) => (
            <li key={card.id} className="flex flex-col text-center items-center sm:w-full">
              <Image src={card.icon} alt="item_icon" />
              <h5 className="py-4 pb-2 sm:py-2 text-pl sm:text-pm font-bold text-neutral-600">{card.title}</h5>
              <p className="font-medium text-neutral-600 sm:text-ps">{card.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
