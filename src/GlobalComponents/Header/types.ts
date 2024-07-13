export type link = {
  id: number;
  title: string;
  to?: string;
  sublinks?: {
    id: number;
    title: string;
    to: string;
  }[];
};
