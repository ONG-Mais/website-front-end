"use client";

import { useState } from "react";
import AboutArrow from "./Arrow";
import Pagination from "@/app/Components/Feedbacks/Pagination";

type CarrousselImage = {
  id: number;
  src: string;
};

type Carroussel = {
  imageArray: CarrousselImage[];
};
export default function Carroussel({ imageArray }: Carroussel) {
  const [current, setCurrent] = useState(0);

  function showNext() {
    setCurrent(current === imageArray.length - 1 ? 0 : current + 1);
  }

  function showPrevious() {
    setCurrent(current === 0 ? imageArray.length - 1 : current - 1);
  }
  return (
    <div className="gallery-component-section mx-r11 mb-[32px] flex flex-wrap gap-x-[48px] gap-y-[24px] min-h-[250px] smDesktop:justify-center xs:gap-0 xs:grid xs:grid-cols-[10%_70%_10%] xs:items-center xs:justify-items-center xs:mx-none">
      <div className="hidden xs:block xscol-start-1 xs:row-start-1 xs:z-50" onClick={showPrevious}>
        <AboutArrow direction="left" />
      </div>
      {imageArray.map((img, idx) => (
        <div
          key={img.id}
          className={`gallery-component-portrait h-[300px] w-[30%] sm:w-[350px] sm:h-[300px] xs:absolute xs:min-w-[250px] xs:col-start-2 xs:row-start-1" ${
            current === idx ? "xs:min-h-[210px] xs:w-[250px] xs:h-[210px]" : "xs:h-0 xs:w-0"
          }`}
        >
          <div
            style={{ backgroundImage: `url('${img.src}'` }}
            className={`bg-cover xs:bg-center w-[25%] h-[300px] smDesktop:w-[350px] smDesktop:h-[300px] absolute xs:col-start-2 xs:row-start-1 ${
              current === idx ? "xs:visible xs:w-full xs:h-full" : "xs:left-0 xs:invisible xs:h-0 xs:w-0"
            }`}
          />
        </div>
      ))}
      <div className="hidden xs:block xs:col-start-3 xs:row-start-1" onClick={showNext}>
        <AboutArrow direction="right" />
      </div>
      <div className="hidden xs:flex justify-center relative m-none w-full h-full ">
        <div className="flex gap-2 mr-r6 justify-center absolute bottom-0 ">
          {imageArray.map((item, idx) => (
            <Pagination key={item.id} {...{ current, idx }} />
          ))}
        </div>
      </div>
    </div>
  );
}
