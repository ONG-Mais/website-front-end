import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  id?: string;
  noMobileXMargin?: boolean;
  isHero?: boolean;
}

export default function Container({ children, id, noMobileXMargin, isHero }: ContainerProps) {
  return (
    <div
      className={`parent pb-10 relative sm:pb-8 flex flex-col w-svw  scroll-mt-28 z-20 ${
        isHero && "pt-28 sm:text-center sm:pt-16"
      }`}
      id={id}
    >
      <div className={`children ${noMobileXMargin ? "sm:mx-none" : "sm:mx-r4"} mx-r11 flex flex-col`}>{children}</div>
    </div>
  );
}
