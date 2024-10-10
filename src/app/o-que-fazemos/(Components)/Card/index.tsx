import Button from "@/GlobalComponents/Button";
import { CardLink } from "../data";

type Card = {
  card: CardLink;
};

export default function Card({ card }: Card) {
  return (
    <div className="w-[335px] flex flex-col rounded-xl shadow-lg xs:w-full">
      <div className="w-[335px] h-[235px] xs:w-full ">
        <div style={{ backgroundImage: `url(${card.img})` }} className="w-full h-full bg-cover" />
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
