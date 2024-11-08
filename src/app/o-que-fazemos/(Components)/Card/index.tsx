import Button from "@/GlobalComponents/Button";
import { CardLink } from "../data";

type Card = {
  card: CardLink;
};

export default function Card({ card }: Card) {
  return (
    <div className="w-[30%] min-w-[315px] flex flex-col rounded-xl shadow-lg ">
      <div className="w-[100%] h-[235px] rounded-xl  ">
        <div style={{ backgroundImage: `url(${card.img})` }} className="w-full h-full bg-cover rounded-t-xl" />
      </div>
      <div className="w-full text-center text-h5 font-Mulish font-bold px-7 pb-2 pt-5">{card.title}</div>
      <div className="w-full text-pm px-7 pb-5 text-start">{card.desc}</div>
      <div className="px-7 pb-7">
        <Button color="green-outline" link={card.url} size="lg" bold className="font-Mulish">
          <span className="text-pl">Saiba mais</span>
        </Button>
      </div>
    </div>
  );
}
