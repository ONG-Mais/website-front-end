import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color: "blue-light" | "blue-dark" | "blue-outline" | "green-light" | "green-dark" | "green-outline";
  rounded?: boolean;
  bold?: boolean;
  className?: string;
  size?: "lg" | "sm";
  link?: string;
}
export default function Button({ children, className, color, rounded, bold, size, link }: ButtonProps) {
  let tailwindColorString = "";

  switch (color) {
    case "green-light":
      tailwindColorString += "bg-secondary-500 text-neutral-0 hover:bg-secondary-900";
      break;
    case "green-dark": {
      tailwindColorString += "bg-secondary-700 text-neutral-0";
      break;
    }
    case "green-outline": {
      tailwindColorString +=
        "bg-transparent text-secondary-500 outline outline-secondary-500 hover:bg-secondary-900 hover:text-neutral-100 hover:outline-1 hover:outline-secondary-900";
      break;
    }
    case "blue-light": {
      tailwindColorString += "bg-primary-500 text-neutral-0 hover:bg-primary-900";
      break;
    }
    case "blue-dark": {
      tailwindColorString += "bg-primary-700 text-neutral-0";
      break;
    }
    case "blue-outline": {
      tailwindColorString +=
        "bg-transparent text-primary-500 outline outline-primary-500 hover:bg-primary-900 hover:text-neutral-100 hover:outline-1 hover:outline-primary-900";
      break;
    }
  }

  switch (size) {
    case "lg": {
      tailwindColorString += " px-16 py-3";
      break;
    }
    case "sm": {
      tailwindColorString += " px-5 py-2";
      break;
    }
    default: {
      tailwindColorString += " px-7 py-2";
    }
  }

  if (link) {
    return (
      <Link
        href={link}
        className={`
          text-pl duration-300 
          ${tailwindColorString} 
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
        text-pl duration-300 
        ${tailwindColorString} 
        ${rounded ? "rounded-3xl" : "rounded-lg"} 
        ${bold ? "font-bold" : "font-normal"}
        ${className}
     `}
    >
      {children}
    </button>
  );
}
