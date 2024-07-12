"use client";

import { useState } from "react";
import Arrow from "./Arrow";
import Pagination from "./Pagination";

const data = [
  {
    id: 1,
    depo: "“Ajudar quem mais necessita, especialmente as crianças, traz satisfação. Aprendo com cada experiência conhecendo suas características e necessidades, e incentivo-os a acreditar em seus sonhos.”",
    author: "Edison, voluntário",
    image: "../images/grupo_futebol.jpg",
  },
  {
    id: 2,
    depo: "“O Projeto  MAIS mudou a minha vida, assim como de muitas famílias.”",
    author: "Alessandra, voluntária",
    image: "../images/vestindo_sapato_crianca.jpg",
  },
  {
    id: 3,
    depo: "“Ser voluntária na ONG MAIS é um aprendizado diário, todos os dias aprendemos a ser pessoas melhores, valorizando a vida ao ver o sorriso de cada criança nos agradecendo. Não tem preço. Venha ser um voluntário você também!”",
    author: "Suellen, voluntária",
    image: "../images/trofeu_futebol.jpg",
  },
];

const arrSize = data.length;
export default function Feedbacks() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative h-[350px] w-full sm:h-[500px]">
      <h2 className="hidden sm:block sm:mb-r6 w-full text-center text-pl font-bold font-Mulish">NOSSOS VOLUNTÁRIOS</h2>
      {data.map((item, idx) => (
        <div
          key={item.id}
          className={`w-full h-full flex absolute sm:flex-col-reverse sm:h-[450px] ${
            idx === current ? "visible" : "invisible"
          }`}
        >
          <Arrow reverse {...{ setCurrent, arrSize }} />
          <div
            className="w-4/6 sm:w-full text-neutral-0 text-h5 flex items-center justify-center flex-col sm:h-2/3"
            style={{ background: "linear-gradient(180deg, #00759A 0%, #004A61 100%)" }}
          >
            <div className="ml-r16 mr-r6 sm:mx-r4 h-2/4 flex justify-center items-center sm:text-pm sm:mt-r4">
              {item.depo}
            </div>
            <div className="relative self-end ml-r16 mr-r6 h-1/4 flex flex-col gap-3 items-end w-2/4 justify-end sm:text-ps ">
              <em>{item.author}</em>
            </div>
          </div>
          <div
            className="w-2/6 sm:w-full sm:h-2/3 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <Arrow {...{ setCurrent, arrSize }} />
        </div>
      ))}
      <div className="flex gap-2 mr-r6 absolute bottom-5 left-2/4 w-1/12 justify-center">
        {data.map((item, idx) => (
          <Pagination key={item.id} {...{ current, idx }} />
        ))}
      </div>
    </div>
  );
}
