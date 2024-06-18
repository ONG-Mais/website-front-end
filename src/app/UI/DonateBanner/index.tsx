import Button from "@/GlobalComponents/Button";
import Container from "@/GlobalComponents/Container";
import React from "react";
import girlImage from "../../../../public/images/garota_maquiada.jpg";
import boyImage from "../../../../public/images/garoto_sorrindo_mochila.jpg";
import interBoyImage from "../../../../public/images/garoto_torcedor_inter.png";
import "./style.css";

export default function DonateBanner() {
  return (
    <Container>
      <div className="w-full flex flex-col items-center h-[355px]">
        <div className="flex w-full h-full">
          <div
            className="image img-1 flex-1 h-full bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${girlImage.src})` }}
          />
          <div
            className="image img-2 flex-1 h-full bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${boyImage.src})` }}
          >
            <div className="text-neutral-0 flex flex-col text-center items-center justify-center h-3/4 w-[200%] -ml-[50%] z-10 relative">
              <h3 className="text-h1 font-Mulish font-bold mt-r8">Seja a diferença!</h3>
              <p className="text-h3 font-Mulish">Doe agora e faça a esperança florescer!</p>
            </div>
            <div className=" h-1/6 items-end flex justify-center z-10 relative">
              <Button color="blue-light" rounded bold className="px-12">
                Quero ajudar
              </Button>
            </div>
          </div>
          <div
            className="image img-3 flex-1 h-full bg-cover bg-no-repeat "
            style={{ backgroundImage: `url(${interBoyImage.src})` }}
          />
        </div>
      </div>
    </Container>
  );
}
