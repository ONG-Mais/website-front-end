import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className=" mb-r4 flex flex-col w-svw">
      <div className="mx-r11">{children}</div>
    </div>
  );
}
