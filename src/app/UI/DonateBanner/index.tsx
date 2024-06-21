"use client";

import Container from "@/GlobalComponents/Container";
import React, { useEffect, useState } from "react";
import girlImage from "../../../../public/images/garota_maquiada.jpg";
import boyImage from "../../../../public/images/garoto_sorrindo_mochila.jpg";
import interBoyImage from "../../../../public/images/garoto_torcedor_inter.png";
import "./style.css";
import { routes } from "@/app/lib/routes";
import useWindowSize from "@/app/hooks/useWindowSize";
import BannerText from "./BannerText";

const images = [
  {
    id: 1,
    src: girlImage.src,
    alt: "Menina maquiada",
    className: "img-1",
  },
  {
    id: 2,
    src: boyImage.src,
    alt: "Menino recebendo tênis",
    className: "img-2",
  },
  {
    id: 3,
    src: interBoyImage.src,
    alt: "Pequeno torcedor do Inter",
    className: "img-3",
  },
];

export default function DonateBanner() {
  const [current, setCurrent] = useState(0);
  const { width } = useWindowSize();
  let slideTimer: NodeJS.Timeout;
  const maxValue = images.length - 1;

  function slideRight() {
    setCurrent(current === maxValue ? 0 : current + 1);
  }

  useEffect(() => {
    if (width <= 500) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      slideTimer = setTimeout(() => {
        slideRight();
      }, 3500);
    }
    return () => clearTimeout(slideTimer);
  }, [current, width]);

  return (
    <Container>
      <div className="w-full flex flex-col items-center h-[355px]">
        <div className="flex w-full h-full sm:flex-col sm:justify-end relative ">
          {images.map((image, idx) => (
            <div
              key={image.id}
              style={{ backgroundImage: `url(${image.src})` }}
              className={`image flex-1 h-full bg-cover bg-center bg-no-repeat
                ${image.className}
                ${idx === current ? "sm:block" : "sm:hidden"}
                `}
            />
          ))}
          <BannerText />
        </div>
      </div>
    </Container>
  );
}
