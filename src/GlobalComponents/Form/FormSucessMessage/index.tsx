import Container from "@/GlobalComponents/Container";

type FormSucessMessage = {
  variant: "partner" | "volunteer";
};

export default function FormSucessMessage({ variant }: FormSucessMessage) {
  let type;
  switch (variant) {
    case "partner":
      type = "empresa parceira";
      break;
    case "volunteer":
      type = "voluntário";
      break;
  }

  return (
    <div className="flex flex-col w-full items-center min-h-[70vh] gap-24 sm:gap-8 pt-8 sm:justify-center">
      <div className="w-full flex justify-center">
        <p className="text-center text-h3 sm:text-pl font-bold font-Mulish  text-primary-300 sm:mx-r6">
          Agradecemos pelo seu cadastro como {type}!
        </p>
      </div>
      <div className="flex flex-col gap-8 sm:gap-4">
        <p className="font-Mulish sm:font-Lato text-h5 sm:text-ps text-center text-neutral-0 ">
          Em breve, entraremos em contato pelo e-mail ou celular fornecido.
        </p>
        <p className="font-Mulish text-h4 sm:text-pm text-center text-tertiary-100">Juntos faremos a diferença!</p>
      </div>
    </div>
  );
}
