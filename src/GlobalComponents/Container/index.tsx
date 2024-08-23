import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  id?: string;
  noMobileXMargin?: boolean;
}

export default function Container({ children, id, noMobileXMargin }: ContainerProps) {
  return (
    <div className={`parent pb-10 sm:pb-8 flex flex-col w-svw relative scroll-mt-28 z-20`} id={id}>
      <div className={`children ${noMobileXMargin ? "sm:mx-none" : "sm:mx-r4"} mx-r11 flex flex-col`}>{children}</div>
    </div>
  );
}
