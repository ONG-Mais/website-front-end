import Container from "@/GlobalComponents/Container";
import caseIcon from "./caseIcon.svg";
import familyIcon from "./familyIcon.svg";
import foodIcon from "./foodIcon.svg";
import handshakeIcon from "./handshakeIcon.svg";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "ALIMENTOS",
    icon: foodIcon,
    desc: "+ de 30 mil Kg de alimentos distribuiídos",
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
    desc: "7 direcionamentos ao mercado de trabalho bem sucedidos.",
  },
  {
    id: 4,
    title: "PARCERIAS",
    icon: handshakeIcon,
    desc: "11 alunos inseridos em outras atividades através de parcerias.",
  },
];
export default function SocialImpact() {
  return (
    <div className="w-full bg-neutral-100">
      <Container>
        <div className="flex flex-col items-center h-[360px] pt-12">
          <h3 className="text-h3 font-bold font-Mulish">IMPACTO DESDE 2020</h3>
          <ul className="flex justify-around  gap-x-20 mt-r4">
            {data.map((card) => (
              <li key={card.id} className="flex flex-col text-center items-center w-1/5">
                <Image src={card.icon} alt="item_icon" />
                <h5 className="py-4 text-pl font-bold">{card.title}</h5>
                <p className="p-0 font-medium">{card.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
