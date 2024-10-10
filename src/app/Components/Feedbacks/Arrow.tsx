interface ArrowProps {
  reverse?: boolean;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  arrSize: number;
}

export default function Arrow({ reverse, setCurrent, arrSize }: ArrowProps) {
  function goLeft() {
    setCurrent((prev) => (prev === 0 ? arrSize - 1 : prev - 1));
  }

  function goRight() {
    setCurrent((prev) => (prev === arrSize - 1 ? 0 : prev + 1));
  }

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`group ${reverse ? "rotate-180 left-10" : "right-10"} top-[44%] absolute z-20 cursor-pointer`}
      onClick={() => (reverse ? goLeft() : goRight())}
    >
      <rect
        width="48"
        height="48"
        rx="24"
        fill={"#00ADE2"}
        fillOpacity="0.4"
        className={`group-hover:fill-primary-900`}
      />
      <path d="M20 32L28 24L20 16" stroke={"#fefefe"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
