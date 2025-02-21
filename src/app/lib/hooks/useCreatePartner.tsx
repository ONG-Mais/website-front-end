"use client";

import { Partner } from "@/app/empresa-parceira/types";
import { useState } from "react";

type Props = {
  partner: Partner;
};

/**
 * @description A implementação virá conforme o andamento do back-end
 */

export default function useCreatePartner() {
  const [isSucess, setIsSucess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const endpoint = "company";

  async function postPartner(partner: Partner) {
    setIsLoading(true);
    const body = {
      name: partner.name,
      email: partner.email,
      telefone: partner.phone,
      state: partner.location.state.nome,
      city: partner.location.city.nome,
      type: "company",
    };
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      setIsLoading(false);
      setIsSucess(true);
    } catch (error) {
      setIsError(true);
      console.log(error);
      setIsLoading(false);
    }
  }

  return [{ isLoading, isError, isSucess, postPartner }];
}
