interface PaginationProps {
  current: number;
  idx: number;
}

export default function Pagination({ current, idx }: PaginationProps) {
  return (
    <div
      className={`mb-r2 w-[8px] h-[8px] sm:w-[6px] sm:h-[6px] rounded-full ${
        current === idx ? "bg-primary-500" : "bg-neutral-200"
      }`}
    />
  );
}
