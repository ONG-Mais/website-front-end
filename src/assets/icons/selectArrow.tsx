type SelectArrowProps = {
  color: string;
  isSelectOpen: boolean;
};

export default function SelectArrow({ color, isSelectOpen }: SelectArrowProps) {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={` transition-all duration-300 ${isSelectOpen && "rotate-180"}`}
    >
      <path d="M1 1L6.3769 7L11.7538 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
