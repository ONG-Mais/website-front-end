type AboutArrowProps = {
  direction: "left" | "right";
};
export default function AboutArrow({ direction }: AboutArrowProps) {
  return (
    <div className={`rounded-full hover:bg-neutral-200 ${direction === "left" ? "rotate-180" : ""}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.1333 32L28.1333 24L20.1333 16"
          stroke="#797C7D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
