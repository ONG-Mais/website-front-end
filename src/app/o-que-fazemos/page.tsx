import Container from "@/GlobalComponents/Container";
import { cardsData } from "./(Components)/data";
import Card from "./(Components)/Card";

export default function Page() {
  return (
    <Container isHero>
      <div className="pt-8 pb-6 xs:pt-12">
        <h3 className="text-h3 font-Mulish font-bold xs:text-pl">NOSSAS ATIVIDADES</h3>
      </div>
      <ul className="flex justify-center gap-8 flex-wrap">
        {cardsData.map((card) => (
          <Card key={card.title} {...{ card }} />
        ))}
      </ul>
    </Container>
  );
}
