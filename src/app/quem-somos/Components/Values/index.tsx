import starIcon from "@/assets/icons/starIcon.svg";
import Image from "next/image";

const values = [
  {
    id: 1,
    title: "ÉTICA",
    desc: " O correto é sempre o correto, mesmo quando ninguém está fazendo",
    color: "tertiary-500",
  },
  {
    id: 2,
    title: "CONEXÃO",
    desc: "O amor e o respeito são a base das relações",
    color: "primary-500",
  },
  {
    id: 3,
    title: "CONFIANÇA",
    desc: "Fundamental para construir laços duradouros",
    color: "accent-700",
  },
  {
    id: 4,
    title: "PERSISTÊNCIA",
    desc: "Em busca do acerto, devemos persistir mesmo diante dos erros",
    color: "tertiary-500",
  },
  {
    id: 5,
    title: "AUTENTICIDADE",
    desc: "Não importa quem você é; ser você mesmo é o que realmente importa",
    color: "secondary-500",
  },
];

export default function Values() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center mb-[3%] gap-2">
        <Image src={starIcon} alt="mission-icon" />
        <h4 className="font-Mulish font-bold text-h4 sm:text-h5">VALORES</h4>
      </div>
      <ul className="text-pl text-neutral-700 mb-[3%] w-full flex flex-col gap-y-6">
        {values.map((value) => (
          <li key={value.id} className="w-full">
            <div className="flex gap-2 items-center">
              <div className={`w-3 h-3 sm:w-2 sm:h-2 bg-${value.color} rounded-full mr-[10px] text-neutral-700`} />
              <div className="w-full">
                <span className="w-fit font-bold text-pl sm:text-pm">{value.title}: </span> <span>{value.desc}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
