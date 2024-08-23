"use client";

import FormBanner from "@/GlobalComponents/FormBanner";
import formImage from "../../../public/images/kid_hugs_lunch_lady.jpeg";
import Form from "@/GlobalComponents/Form";
import { useState } from "react";
import { FormData, FormSelect } from "@/GlobalComponents/Form/formTypes";
import useCreatePartner from "../lib/hooks/useCreatePartner";
import FormSucessMessage from "@/GlobalComponents/Form/FormSucessMessage";

export default function Page() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");

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
  ] as const;

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
  ] as const;

  const [{ isError, isLoading, isSucess, postPartner }] = useCreatePartner();

  if (isSucess) {
    return (
      <FormBanner image={formImage.src} imagePosition="center">
        <FormSucessMessage variant="partner" />
      </FormBanner>
    );
  }

  return (
    <FormBanner image={formImage.src} imagePosition="right">
      <Form formAction={postPartner} title="Seja uma empresa parceira" {...{ formInputs, formSelect }} />
    </FormBanner>
  );
}
