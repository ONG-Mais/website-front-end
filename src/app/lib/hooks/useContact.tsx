import { Contact } from "@/types/contact";
import { useState } from "react";

export default function useContact() {
  const [isSucess, setIsSucess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const endpoint = "contact";

  async function postContact(contact: Contact) {
    setIsLoading(true);
    const body = {
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message,
      type: "contact",
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

  return { isSucess, isError, isLoading, postContact };
}
