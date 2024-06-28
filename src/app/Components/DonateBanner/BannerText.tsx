import Button from "@/GlobalComponents/Button";
import { routes } from "@/app/lib/routes";

export default function BannerText() {
  return (
    <div className="text-container w-full flex flex-col absolute self-center justify-center items-center text-center sm:mb-r8">
      <div className="title-subtitle text-neutral-100 sm:mb-r4">
        <h3 className="text-h1 font-Mulish font-bold mt-r8 sm:text-h4 sm:mb-r6"> Seja a diferença!</h3>
        <p className="text-h3 sm:text-pl font-Mulish mb-r6">Doe agora e faça a esperança florescer!</p>
      </div>
      <div className="button items-end flex justify-center z-10">
        <Button color="blue-light" size="lg" rounded bold className="font-Mulish text-pm" link={routes.donate}>
          Quero ajudar
        </Button>
      </div>
    </div>
  );
}
