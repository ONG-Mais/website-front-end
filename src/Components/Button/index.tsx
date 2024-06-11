import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color: "blue-light" | "blue-dark" | "blue-outline" | "green-light" | "green-dark" | "green-outline";
  rounded?: boolean;
  className?: string;
}
export default function Button({ children, className, color, rounded }: ButtonProps) {
  let tailwindColorString = "";

  switch (color) {
    case "green-light":
      tailwindColorString += "bg-secondary-500 text-neutral-0";
      break;
    case "green-dark": {
      tailwindColorString += "bg-secondary-700 text-neutral-0";
      break;
    }
    case "green-outline": {
      tailwindColorString += "bg-transparent text-secondary-500 outline outline-secondary-500";
      break;
    }
    case "blue-light": {
      tailwindColorString += "bg-primary-500 text-neutral-0";
      break;
    }
    case "blue-dark": {
      tailwindColorString += "bg-primary-700 text-neutral-0";
      break;
    }
    case "blue-outline": {
      tailwindColorString += "bg-transparent text-primary-500 outline outline-primary-500";
      break;
    }
  }

  if (tailwindColorString) {
    return (
      <button className={`${className} ${tailwindColorString} ${rounded ? "rounded-3xl" : "rounded-lg"} px-10 py-2`}>
        {children}
      </button>
    );
  }
}
