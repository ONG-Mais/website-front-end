"use client";

import { Volunteer } from "@/app/voluntario/types";
import { useState } from "react";

/**
 * @description A implementação virá conforme o andamento do back-end
 */

export default function useCreateVolunteer() {
  const [isSucess, setIsSucess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const endpoint = "volunteers";

  async function postVolunteer(volunteer: Volunteer) {
    setIsLoading(true);
    const body = {
      name: volunteer.name,
      email: volunteer.email,
      telefone: volunteer.phone,
      state: volunteer.location.state.nome,
      city: volunteer.location.city.nome,
      type: "volunteer",
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

  return [{ isLoading, isError, isSucess, postVolunteer }];
}
