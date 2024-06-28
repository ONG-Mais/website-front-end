import Button from "../Button";
import "./style.css";

interface BannerProps {
  image: string;
  title?: string;
  text?: string;
}

export default function Banner({ image, title, text }: BannerProps) {
  return (
    <div className={`flex h-[524px] w-full -z-20 overflow-hidden bg-neutral-900 sm:h-[100svh] sm:w-[100svw]`}>
      <div
        className="banner w-full -mt-r21 bg-cover relative flex justify-center items-end sm:mt-none sm:bg-center"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="z-40 text-neutral-0 mb-r4 flex flex-col gap-7 font-Mulish text-center sm:mb-r8 ">
          <h3 className="text-ds font-semibold sm:text-h5">{title}</h3>
          <p className="text-h3 font-light sm:text-pl">{text}</p>
          <Button color="green-light" size="lg" rounded className="sm:w-52 sm:px-0 sm:self-center sm:flex hidden">
            Doe Agora
          </Button>
        </div>
      </div>
    </div>
  );
}
