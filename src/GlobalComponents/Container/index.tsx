import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  id?: string;
  noMobileMargin?: boolean;
}

export default function Container({ children, id, noMobileMargin }: ContainerProps) {
  return (
    <div className={`parent pb-10 sm:pb-12 flex flex-col w-svw relative scroll-mt-28 z-20`} id={id}>
      <div className={`children ${noMobileMargin ? "sm:mx-none" : "sm:mx-r4"} mx-r11 flex flex-col`}>{children}</div>
    </div>
  );
}
