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

  async function postVolunteer(volunteer: Volunteer) {
    setIsLoading(true);
    try {
      await console.log(volunteer); //TBD
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
