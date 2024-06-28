interface PaginationProps {
  current: number;
  idx: number;
}

export default function Pagination({ current, idx }: PaginationProps) {
  return <div className={`mb-r2 w-2 h-2 rounded-full ${current === idx ? "bg-primary-500" : "bg-neutral-0"}`} />;
}
