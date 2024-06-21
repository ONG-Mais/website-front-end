import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className=" mb-r4 sm:mb-r8 flex flex-col w-svw relative">
      <div className="mx-r11 sm:mx-r6">{children}</div>
    </div>
  );
}
