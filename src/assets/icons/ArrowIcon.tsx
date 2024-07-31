import * as React from "react";
type arrow = {
  direction: "up" | "down" | "left" | "right";
  className?: string;
};

let rotate: string;

export default function ArrowIcon({ direction, className }: arrow) {
  switch (direction) {
    case "up": {
      rotate = "rotate-90";
      break;
    }
    case "down": {
      rotate = "-rotate-90";
      break;
    }
    case "left": {
      rotate = "rotate-0";
      break;
    }
    case "right": {
      rotate = "rotate-180";
      break;
    }
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" className={`${rotate} ${className}`}>
      <path d="M22 12.5H4c-.56 0-1-.33-1-.75S3.44 11 4 11h18c.56 0 1 .33 1 .75s-.44.75-1 .75Z" />
      <path d="M9 17.75a.706.706 0 0 1-.525-.225l-5.25-5.25c-.3-.3-.3-.765 0-1.065l5.25-5.235c.3-.3.765-.3 1.065 0 .3.3.3.765 0 1.065l-4.725 4.725L9.54 16.49c.3.3.3.765 0 1.065a.753.753 0 0 1-.525.225L9 17.75Z" />
    </svg>
  );
}
