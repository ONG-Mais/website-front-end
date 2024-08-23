import Button from "@/GlobalComponents/Button";
import Container from "@/GlobalComponents/Container";
import { routes } from "@/app/lib/routes";

export default function About() {
  return (
    <Container>
      <div className="mt-r4 sm:mt-r8 w-full flex flex-col items-center justify-center sm:justify-end gap-7 sm:gap-4">
        <h3 className="text-h3 font-bold sm:text-pl">ONG MAIS</h3>
        <div className="w-[728px] h-44 sm:w-full sm:h-auto py-8 px-10 sm:px-5 sm:py-4 bg-tertiary-100 rounded-2xl flex flex-col break-words">
          <p className="text-pl sm:text-ps">
            A ONG Mais de Crianças e Adolescentes dedica-se a oferecer esperança a crianças em situação de
            vulnerabilidade social. Com amor e apoio, buscamos construir um futuro promissor. Sua doação é essencial
            para transformar vidas. Junte-se a nós nessa missão inspiradora e faça parte dessa mudança positiva hoje!
          </p>
        </div>
        <Button
          color="green-outline"
          bold
          rounded
          size="lg"
          className="bg-neutral-0 font-bold self-end mr-r14 -mt-r4 py-[8px] sm:mt-none sm:mr-none sm:self-center sm:mb-r4"
          link={routes.volunteer}
        >
          Quero ser voluntário
        </Button>
      </div>
    </Container>
  );
}
