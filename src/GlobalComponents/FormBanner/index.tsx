import { ReactNode } from "react";
import "./styles.css";

type formBanner = {
  children: ReactNode;
  image: string;
};

export default function FormBanner({ children, image }: formBanner) {
  return (
    <div className="bg-gradient mt-[6rem] w-full h-full relative flex">
      <div id="form-wrapper" className="py-12 mx-r11 sm:mx-r4 flex w-2/4 sm:w-full flex-col ">
        {children}
      </div>
      <div
        id="image"
        className="form-banner-image absolute top-0 right-0 bg-cover h-full w-2/4 sm:w-full sm:bg-center -z-50 "
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
}
