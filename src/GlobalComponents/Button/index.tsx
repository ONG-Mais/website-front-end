import { routeValues } from "@/app/lib/routes";
import Link from "next/link";
import { ReactNode } from "react";

const tailwindButtonColors = {
  "green-light": "bg-secondary-500 text-neutral-0 hover:bg-secondary-900 ",
  "green-dark": "bg-secondary-700 text-neutral-0 ",
  "green-outline":
    " text-secondary-500 outline outline-secondary-500 hover:bg-secondary-900 hover:text-neutral-100 hover:outline-1 hover:outline-secondary-90 ",
  "blue-light": "bg-primary-500 text-neutral-0 hover:bg-primary-900 ",
  "blue-dark": "bg-primary-700 text-neutral-0 ",
  "blue-outline":
    " text-primary-500 outline outline-primary-500 hover:bg-primary-900 hover:text-neutral-100 hover:outline-1 hover:outline-primary-900 ",
} as const;

interface ButtonProps {
  children: ReactNode;
  color: keyof typeof tailwindButtonColors;
  rounded?: boolean;
  bold?: boolean;
  className?: string;
  size?: "lg" | "sm";
  link?: routeValues;
}

export default function Button({ children, className, color, rounded, bold, size, link }: ButtonProps) {
  let sizeString = "";

  switch (size) {
    case "lg": {
      sizeString += " px-16 py-3 ";
      break;
    }
    case "sm": {
      sizeString += " px-5 py-2 ";
      break;
    }
    default: {
      sizeString += " px-7 py-2 ";
    }
  }

  if (link) {
    return (
      <Link
        href={link}
        className={`
          text-pl duration-300 flex justify-center items-center
          ${sizeString} 
           ${tailwindButtonColors[color]} 
          ${rounded ? "rounded-3xl" : "rounded-lg"} 
          ${bold ? "font-bold" : "font-normal"} 
          ${className} 
     `}
      >
        <button>{children}</button>
      </Link>
    );
  }

  return (
    <button
      className={`
        text-pl duration-300 flex justify-center items-center
        ${tailwindButtonColors[color]} 
        ${sizeString} 
        ${rounded ? "rounded-3xl" : "rounded-lg"} 
        ${bold ? "font-bold" : "font-normal"}
        ${className}
     `}
    >
      {children}
    </button>
  );
}
