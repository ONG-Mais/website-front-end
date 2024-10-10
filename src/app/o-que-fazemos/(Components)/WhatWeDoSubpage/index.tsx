import Button from "@/GlobalComponents/Button";
import Carroussel from "./Carroussel";
import { routes } from "@/app/lib/routes";
import { CarrousselImage, PageText } from "./types";

type WhatWeDoSuppageProps = {
  pageTitle: string;
  pageText: PageText[];
  pageImages: CarrousselImage[];
};

export default function WhatWeDoSubpage({ pageTitle, pageText, pageImages }: WhatWeDoSuppageProps) {
  return (
    <div className="pt-28 sm:text-center sm:pt-20 flex flex-col w-svw scroll-mt-28 z-20 relative mb-[32px]">
      <div className="pt-8 pb-6 xs:pt-12 mx-r11 xs:mx-r4">
        <h3 className="text-h3 font-Mulish font-bold xs:text-pl">{pageTitle}</h3>
      </div>
      <div id="gray-block" className="bg-neutral-100 w-full pt-9 pb-12 mb-[32px] text-left ">
        <div className="mx-r11 xs:mx-r4 flex flex-col gap-6  ">
          {pageText.map((text) => (
            <div key={text.postition} className="flex flex-col xs:text-ps">
              <h5 className="font-bold mb-[4px]">{text.title}</h5>
              <p className="">{text.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Carroussel imageArray={pageImages} />
      <div className="w-full flex justify-center">
        <Button link={routes.volunteer} color="blue-light" rounded>
          Quero ser voluntário
        </Button>
      </div>
    </div>
  );
}
