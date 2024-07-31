import Button from "@/GlobalComponents/Button";
import { routes } from "@/app/lib/routes";
import { imageDivType } from "../../page";
import "./styles.css";

interface MosaicProps {
  arr: imageDivType[];
}

export default function Mosaic({ arr }: MosaicProps) {
  return (
    <>
      <div className="flex w-full justify-center">
        {arr.map((portrait) => (
          <div key={portrait.id} className="portrait w-full h-[360px] sm:h-64">
            {portrait.images.map((image) => (
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
      <Button
        link={routes.volunteer}
        size="lg"
        color="green-outline"
        rounded
        bold
        className="sm:flex hidden self-center"
      >
        Quero ser voluntário
      </Button>
      <br />
    </>
  );
}
