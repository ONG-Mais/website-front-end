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

  async function postPartner(partner: Partner) {
    setIsLoading(true);
    try {
      await console.log(partner); //TBD
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
