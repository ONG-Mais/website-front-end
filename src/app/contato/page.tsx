"use client";

import HeroBanner from "@/GlobalComponents/HeroBanner";
import bannerImg from "../../../public/images/kids_playing_swing.jpeg";
import Container from "@/GlobalComponents/Container";
import locationMap from "../../../public/images/location_map.png";
import { adressAndPhone } from "../lib/adressAndPhone";
import { useState } from "react";
import Button from "@/GlobalComponents/Button";
import locationPin from "@/assets/icons/locationPin.svg";
import Image from "next/image";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const inputs = [
    {
      id: 1,
      label: "Nome",
      value: name,
      setter: setName,
      type: "text",
    },
    {
      id: 2,
      label: "Email",
      value: email,
      setter: setEmail,
      type: "text",
    },
    {
      id: 3,
      label: "Assunto",
      value: subject,
      setter: setSubject,
      type: "text",
    },
  ];

  return (
    <>
      <HeroBanner
        image={bannerImg.src}
        mobileSize="half"
        title="VAMOS CONVERSAR?"
        text={`Ficou com alguma dúvida?\nMande uma mensagem!`}
      />
      <Container noMobileXMargin>
        <div className="grid grid-cols-2 items-center mt-r4 sm:flex sm:flex-col-reverse sm:mt-none sm:h-fit">
          <div className="flex flex-col jusify-center items-center">
            <p className="text-neutral-900 font-Mulish text-h3 sm:text-h5 font-bold flex gap-2 items-center">
              <Image src={locationPin} alt="📍" />
              Onde estamos
            </p>
            <br />
            <div id="map-container" className="flex flex-col">
              <div
                id="map-image"
                style={{ backgroundImage: `url('${locationMap.src}')`, backgroundSize: "cover" }}
                className="w-[356px] h-[263px]  shadow-md sm:mb-[16px] sm:w-[300px]"
              />
              <div
                id="data"
                className="font-Lato font-medium text-pxs text-neutral-900 gap-2 flex flex-col sm:self-center"
              >
                <p>{adressAndPhone.street}</p>
                <p>{adressAndPhone.CEP}</p>
                <p>{adressAndPhone.phone}</p>
              </div>
            </div>
          </div>
          <form
            action=""
            className="flex flex-col bg-primary-100 px-16 py-8 rounded-xl shadow-sm sm:shadow-none sm:px-8 sm:w-full sm:rounded-none sm:mb-[32px]"
          >
            {inputs.map((input) => (
              <div key={input.id} className="flex flex-col mb-r4 gap-2">
                <label htmlFor={input.label} className="text-pm text-neutral-900">
                  {input.label}
                </label>
                <input
                  id={input.label}
                  type={input.type}
                  value={input.value}
                  onChange={(e) => input.setter(e.target.value)}
                  className="rounded-md p-3 outline outline-1 outline-neutral-200 sm:shadow-sm font-medium"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <label htmlFor="mensagem" className="text-pm text-neutral-900 font-medium">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ resize: "none" }}
                className="outline outline-1 outline-neutral-200 rounded-md p-3 sm:shadow-sm"
              />
            </div>
            <br />
            <div className="w-72 flex justify-start sm:w-full sm:justify-center">
              <Button color="blue-light" onClick={(e) => e.preventDefault()} className="w-[280px] sm:w-[250px]">
                Enviar mensagem
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
