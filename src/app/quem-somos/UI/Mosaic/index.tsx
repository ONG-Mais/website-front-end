import drivingKid from "../../../../../public/images/criança_dirigindo.jpeg";
import sportsTeam from "../../../../../public/images/time_esporte.jpeg";
import funnyGlasses from "../../../../../public/images/crianças_oculos.jpeg";
import oralExam from "../../../../../public/images/exame_bucal.jpeg";
import kitchenClass from "../../../../../public/images/aula_cozinha.jpeg";
import bagHolder from "../../../../../public/images/criança_segurando_sacola.jpeg";
import Button from "@/GlobalComponents/Button";
import { routes } from "@/app/lib/routes";

const imagesDiv = [
  {
    id: 1,
    images: [
      {
        id: 101,
        src: drivingKid.src,
        alt: "crianças em um buggy",
      },
      { id: 102, src: sportsTeam.src, alt: "Times de futebol" },
    ],
  },
  {
    id: 2,
    images: [{ id: 201, src: funnyGlasses.src, alt: "Crianças com óculos de festa" }],
  },
  {
    id: 3,
    images: [
      { id: 301, src: oralExam.src, alt: "Teste de Covid" },
      { id: 302, src: kitchenClass.src, alt: "Aula de culinária" },
    ],
  },

  {
    id: 4,
    images: [{ id: 401, src: bagHolder.src, alt: "criança segurando uma sacola" }],
  },
];

export default function Mosaic() {
  return (
    <>
      <div className="flex w-full">
        {imagesDiv.map((div) => (
          <div key={div.id} className="portrait w-full h-96 sm:h-64 sm:odd:w-[98px] sm:even:w-[80px]">
            {div.images.map((image) => (
              <div
                key={image.id}
                style={{ backgroundImage: `url(${image.src})` }}
                className={`image-${image.id} w-full h-2/4 bg-cover bg-center relative`}
              />
            ))}
          </div>
        ))}
      </div>
      <br />
      <Button link={routes.volunteer} size="lg" color="green-outline" rounded bold className="self-center">
        Quero ser voluntário
      </Button>
    </>
  );
}
