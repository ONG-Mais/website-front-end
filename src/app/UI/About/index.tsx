import Button from "@/GlobalComponents/Button";
import Container from "@/GlobalComponents/Container";

export default function About() {
  return (
    <Container>
      <div className="mt-r4 w-full flex flex-col items-center justify-center gap-7">
        <h3 className="text-h3 font-bold">ONG MAIS</h3>
        <div className="w-[728px] break-words h-44 bg-tertiary-100 px-10 py-8 rounded-2xl flex flex-col">
          <p className="text-pl">
            A ONG Mais de Crianças e Adolescentes dedica-se a oferecer esperança a crianças em situação de
            vulnerabilidade social. Com amor e apoio, buscamos construir um futuro promissor. Sua doação é essencial
            para transformar vidas. Junte-se a nós nessa missão inspiradora e faça parte dessa mudança positiva hoje!
          </p>
          <Button color="green-outline" rounded className="bg-neutral-0 font-bold px-20 py-2 self-end -mr-r24 mt-[1%]">
            Quero ser voluntário
          </Button>
        </div>
      </div>
    </Container>
  );
}
