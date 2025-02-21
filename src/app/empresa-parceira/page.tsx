"use client";

import FormBanner from "@/GlobalComponents/FormBanner";
import formImage from "../../../public/images/kid_hugs_lunch_lady.jpeg";
import Form from "@/GlobalComponents/Form";
import useCreatePartner from "../lib/hooks/useCreatePartner";
import FormFeedbackMessage from "@/GlobalComponents/Form/FormFeedbackMessage";
import Loader from "@/assets/icons/loader";

export default function Page() {
  const [{ isError, isLoading, isSucess, postPartner }] = useCreatePartner();

  if (isError) {
    return (
      <FormBanner image={formImage.src} imagePosition="center">
        <FormFeedbackMessage variant="error" />
      </FormBanner>
    );
  }

  if (isSucess) {
    return (
      <FormBanner image={formImage.src} imagePosition="center">
        <FormFeedbackMessage variant="volunteer" />
      </FormBanner>
    );
  }

  return (
    <FormBanner image={formImage.src} imagePosition="right">
      {isLoading ? (
        <div className="absolute top-1/3 flex align-center justify-start gap-8 sm:flex-col sm:relative sm:gap-4">
          <p className="text-pl text-neutral-100  xs:text-pm sm:text-center -ml-r6">
            Estamos enviando os dados, aguarde um momento
          </p>
          <Loader fill="#fff" stroke="#fff" show={isLoading} size="10" />
        </div>
      ) : (
        <Form formAction={postPartner} title="Seja uma empresa parceira" />
      )}
    </FormBanner>
  );
}
