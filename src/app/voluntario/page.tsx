"use client";

import { useState } from "react";
import FormBanner from "@/GlobalComponents/FormBanner";
import bannerImg from "../../../public/images/thumbs_up_batman_kid.jpg";
import "./styles.css";
import Button from "@/GlobalComponents/Button";

type formData = {
  id: number;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
};

interface FormSelect extends formData {
  options: {
    id: number;
    title: string;
  }[];
}

type volunteer = {
  name: string;
  email: string;
  phone: string;
  state: string;
  city: string;
};

export default function Page() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");

  const formInputs: formData[] = [
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
      placeholder: "Digite seu celular/Whatsapp",
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

  function createVolunteer() {
    const volunteer: volunteer = {
      name: name,
      email: email,
      phone: phone,
      state: state,
      city: city,
    };
  }

  return (
    <FormBanner image={bannerImg.src}>
      <div id="title" className="flex flex-col sm:text-center">
        <h3 className="text-h3  font-Mulish font-bold text-primary-300 mb-r2">Vem com a gente</h3>
        <h5 className="text-h5  font-Mulish font-semibold sm:font-medium text-tertiary-100 mb-r4">
          Seja um voluntário
        </h5>
      </div>
      <form action={createVolunteer} className="flex flex-col gap-3">
        {formInputs.map((input) => (
          <div key={input.id} className="flex flex-col gap-3">
            <label htmlFor={input.name} className="text-neutral-0">
              {input.label}
            </label>
            <input
              className="p-3 rounded-md"
              id={input.name}
              name={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={(e) => input.setter(e.target.value)}
              required
            />
          </div>
        ))}
        {formSelect.map((select) => (
          <div key={select.id} className="flex flex-col gap-3 w-full">
            <label htmlFor={select.name} className="text-neutral-0">
              {select.label}
            </label>
            <div className="select-container w-full relative">
              <select
                id={select.name}
                name={select.name}
                value={select.value}
                onChange={(e) => select.setter(e.target.value)}
                className="select p-3 rounded-md appearance-none w-full"
                required
              >
                <option value="" hidden disabled>
                  {select.placeholder}
                </option>
                {select.options.map((option) => (
                  <option key={option.id} value={option.title}>
                    {option.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <div className="flex w-full justify-end mt-r2">
          <Button color="blue-light" size="lg">
            Enviar
          </Button>
        </div>
      </form>
    </FormBanner>
  );
}
