export type FormData = {
  id: number;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
};

interface Option {
  id: number;
  title: string;
}

export interface FormSelect {
  id: number;
  name: string;
  placeholder: string;
  label: string;
  options: Option[];
  value: string | number;
  setter: React.Dispatch<React.SetStateAction<number | null>>;
  loader: boolean;
  loadingMessage: string;
}
