import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="mx-r10 mb-r4 flex flex-col">{children}</div>;
}
