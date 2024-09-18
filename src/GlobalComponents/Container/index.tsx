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
      className={`parent pb-10 ${
        isHero && "pt-28 sm:text-center sm:pt-16"
      } sm:pb-8 flex flex-col w-svw relative scroll-mt-28 z-20`}
      id={id}
    >
      <div className={`children ${noMobileXMargin ? "sm:mx-none" : "sm:mx-r4"} mx-r11 flex flex-col`}>{children}</div>
    </div>
  );
}
