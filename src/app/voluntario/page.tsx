"use client";

import { useState } from "react";
import FormBanner from "@/GlobalComponents/FormBanner";
import bannerImg from "../../../public/images/thumbs_up_batman_kid.jpg";
import "./styles.css";
import Form from "@/GlobalComponents/Form";
import { FormData, FormSelect } from "@/GlobalComponents/Form/formTypes";
import { Volunteer } from "./types";
import useCreateVolunteer from "../lib/hooks/useCreateVolunteer";
import FormSucessMessage from "@/GlobalComponents/Form/FormSucessMessage";

export default function Page() {
  let volunteer: Volunteer;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [{ isError, isLoading, isSucess, postVolunteer }] = useCreateVolunteer();

  const formInputs: FormData[] = [
    {
      id: 1,
      name: "name",
      placeholder: "Digite seu nome completo",
      label: "Nome",
      type: "text",
      value: name,
      setter: setName,
    },
    {
      id: 2,
      name: "email",
      placeholder: "Digite seu melhor email",
      label: "Email",
      type: "email",
      value: email,
      setter: setEmail,
    },
    {
      id: 3,
      name: "phone",
      placeholder: "(00) 00000 0000",
      label: "Celular/Whatsapp",
      type: "text",
      value: phone,
      setter: setPhone,
    },
  ];
  const formSelect: FormSelect[] = [
    {
      id: 1,
      label: "Estado",
      name: "estado",
      placeholder: "Escolha seu estado",
      value: state,
      setter: setState,
      options: [
        {
          id: 1,
          title: "Distrito Federal",
        },
      ],
    },
    {
      id: 2,
      label: "Cidade",
      name: "cidade",
      placeholder: "Escolha sua cidade",
      value: city,
      setter: setCity,
      options: [
        {
          id: 1,
          title: "Brasília",
        },
      ],
    },
  ];

  if (isSucess) {
    return (
      <FormBanner image={bannerImg.src} imagePosition="center">
        <FormSucessMessage variant="volunteer" />
      </FormBanner>
    );
  }

  return (
    <FormBanner image={bannerImg.src} imagePosition="right">
      <Form formAction={postVolunteer} title="Seja um voluntário" {...{ formInputs, formSelect }} />
    </FormBanner>
  );
}
