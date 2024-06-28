import Button from "@/GlobalComponents/Button";
import { routes } from "@/app/lib/routes";
import { imageDivType } from "../../page";

interface MosaicProps {
  arr: imageDivType[];
}

export default function Mosaic({ arr }: MosaicProps) {
  return (
    <>
      <div className="flex w-full">
        {arr.map((div) => (
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
      <br />
    </>
  );
}
