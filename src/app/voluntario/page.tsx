"use client";

import FormFeedbackMessage from "@/GlobalComponents/Form/FormFeedbackMessage";
import bannerImg from "../../../public/images/thumbs_up_batman_kid.jpg";
import useCreateVolunteer from "../lib/hooks/useCreateVolunteer";
import FormBanner from "@/GlobalComponents/FormBanner";
import Form from "@/GlobalComponents/Form";
import Loader from "@/assets/icons/loader";

export default function Page() {
  const [{ isError, isLoading, isSucess, postVolunteer }] = useCreateVolunteer();

  if (isError) {
    return (
      <FormBanner image={bannerImg.src} imagePosition="center">
        <FormFeedbackMessage variant="error" />
      </FormBanner>
    );
  }

  if (isSucess) {
    return (
      <FormBanner image={bannerImg.src} imagePosition="center">
        <FormFeedbackMessage variant="volunteer" />
      </FormBanner>
    );
  }

  return (
    <FormBanner image={bannerImg.src} imagePosition="right">
      {isLoading ? (
        <div className="absolute top-1/3 flex align-center justify-start gap-8 sm:flex-col sm:relative sm:gap-4">
          <p className="text-pl text-neutral-100  xs:text-pm sm:text-center -ml-r6">
            Estamos enviando os dados, aguarde um momento
          </p>
          <Loader fill="#fff" stroke="#fff" show={isLoading} size="10" />
        </div>
      ) : (
        <Form formAction={postVolunteer} title="Seja um voluntário" />
      )}
    </FormBanner>
  );
}
