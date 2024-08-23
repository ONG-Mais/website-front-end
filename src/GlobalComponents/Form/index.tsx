"use client";
import { Partner } from "@/app/empresa-parceira/types";
import Button from "../Button";
import { FormData, FormSelect } from "./formTypes";
import { Volunteer } from "@/app/voluntario/types";
import { useState } from "react";

type Form = {
  formAction: ({ ...props }: Partner | Volunteer) => any;
  title: string;
  formInputs: FormData[];
  formSelect: FormSelect[];
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
export default function Form({ formAction, title, formInputs, formSelect }: Form) {
  const [object, setObject] = useState<Partner | Volunteer>({
    name: "",
    phone: "",
    city: "",
    email: "",
    state: "",
  } as const);
  type objKeys = keyof typeof object;

  function handleChange(
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<any>>
  ) {
    setter(e.target.value);
    const currentKey: objKeys = e.target.name as objKeys;
    const currentValue = e.target.value;
    setObject((prev) => ({
      ...prev,
      [currentKey]: currentValue,
    }));
  }

  async function handleSubmit(e: React.MouseEvent<Element, MouseEvent>) {
    e.preventDefault();
    await formAction(object);
  }

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
              onChange={(e) => handleChange(e, input.setter)}
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
                onChange={(e) => handleChange(e, select.setter)}
                className="select p-4 rounded-md appearance-none w-full"
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
          <Button color="blue-light" size="lg" onClick={(e) => handleSubmit(e)}>
            Enviar
          </Button>
        </div>
      </form>
    </>
  );
}
