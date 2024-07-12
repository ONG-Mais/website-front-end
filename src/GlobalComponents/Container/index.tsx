import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  id?: string;
}

export default function Container({ children, id }: ContainerProps) {
  return (
    <div className={`parent pb-10 sm:pb-12  flex flex-col w-svw relative scroll-mt-28 z-50`} id={id}>
      <div className={`children mx-r11 sm:mx-r4 flex flex-col`}>{children}</div>
    </div>
  );
}
