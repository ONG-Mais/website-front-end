"use client";
import { Partner } from "@/app/empresa-parceira/types";
import Button from "../Button";
import { FormData, FormSelect } from "./formTypes";
import { Volunteer } from "@/app/voluntario/types";
import { useState } from "react";
import useLocation from "@/app/lib/hooks/useLocation";
import "./styles.css";
import Loader from "@/assets/icons/loader";
import SelectArrow from "@/assets/icons/selectArrow";

type Form = {
  formAction: ({ ...props }: Partner | Volunteer) => any;
  title: string;
};

/**
 *@description Componente que recebe um objeto como prop. Tal objeto determina quais os componentes serão
 * renderizados e qual a ação o envio do formulário deverá ter. Como o formulário depende de inputs controlados,
 * é importante usar 'use client' no topo do componente que irá usar Form e criar os devidos estados para
 * gerenciar os valores dos inputs dos usuários
 
 * @param {Form} props  - O objeto que contém as propriedades do formulário.
 renderizados e qual a ação o envio do formulário deverá ter
 * @param {function(): void} props.formAction A função que será executada quando o formulário for enviado.
 * @param {string} props.title O texto que será exibido como título do formulário 
 * @param {FormData[]} props.formInputs A lista de inputs que o formulário irá renderizar
 * @param {formSelect[]} props.formSelect A lista de selects que o formulário irá renderizar 
 * 
 *
*/
export default function Form({ formAction, title }: Form) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isStateOpen, setIsStateOpen] = useState<boolean>(false);
  const [isCityOpen, setIsCityOpen] = useState<boolean>(false);

  console.log("states", isStateOpen);
  console.log("cities", isCityOpen);
  const {
    states,
    selectedState,
    setSelectedState,
    loadingStates,
    cities,
    loadingCities,
    selectedCity,
    setSelectedCity,
    location,
  } = useLocation();

  async function handleSubmit(event: React.MouseEvent<Element, MouseEvent>) {
    event.preventDefault();
    if (location) {
      const data = {
        name: name,
        email: email,
        phone: phone,
        location: location,
      };
      formAction(data);
    } else {
      alert("Selecione um estado e uma cidade");
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) {
    setter(event.target.value);
  }

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
      name: "state",
      placeholder: "Selecione um estado",
      label: "Estado",
      options: states?.map((state) => ({ id: state.id, title: state.nome })) || [
        { id: 0, title: "carregando estados..." },
      ],
      value: selectedState ?? "",
      setter: setSelectedState,
      loader: loadingStates,
      loadingMessage: "Carregando estados...",
      isOpen: isStateOpen,
      setIsOpen: setIsStateOpen,
    },
    {
      id: 2,
      name: "city",
      placeholder: "Selecione uma cidade",
      label: "Cidade",
      options: cities?.map((city) => ({ id: city.id, title: city.nome })) || [{ id: 0, title: "carregando cidades" }],
      value: selectedCity ?? "",
      setter: setSelectedCity,
      loader: loadingCities,
      loadingMessage: "Carregando cidades",
      isOpen: isCityOpen,
      setIsOpen: setIsCityOpen,
    },
  ];

  return (
    <>
      <div id="title" className="flex flex-col sm:text-center">
        <h3 className="text-h3  font-Mulish font-bold text-primary-300 mb-r2">Vem com a gente</h3>
        <h5 className="text-h5  font-Mulish font-semibold sm:font-medium text-tertiary-100 mb-r4">{title}</h5>
      </div>
      <form className="flex flex-col gap-3">
        {formInputs.map((input) => (
          <div key={input.id} className="flex flex-col gap-3">
            <label htmlFor={input.name} className="text-neutral-0">
              {input.label}
            </label>
            <input
              className="p-4 rounded-md"
              id={input.name}
              name={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={(event) => handleChange(event, input.setter)}
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
                className="select p-4 rounded-md appearance-none w-full"
                onChange={(event) => select.setter(Number(event.target.value))}
                onClick={() => select.setIsOpen(!select.isOpen)}
                onBlur={() => select.setIsOpen(false)}
                required
              >
                <option>
                  {selectedState != null && !isNaN(selectedState) ? select.placeholder : "Selecione um estado"}
                </option>
                {select.loader || loadingStates ? (
                  <option value="">{select.loadingMessage}</option>
                ) : (
                  select.options.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.title}
                    </option>
                  ))
                )}
              </select>
              <span className="loader">
                <Loader size="5" stroke="#00759a" fill="#00759a" show={select.loader} />
              </span>
              <div className="pointer-events-none absolute top-1/2 right-4">
                <SelectArrow color="#00759a" isSelectOpen={select.isOpen} />
              </div>
            </div>
          </div>
        ))}
        <div className="flex w-full justify-end mt-r2">
          <Button color="blue-light" size="lg" onClick={(event) => handleSubmit(event)}>
            Enviar
          </Button>
        </div>
      </form>
    </>
  );
}
