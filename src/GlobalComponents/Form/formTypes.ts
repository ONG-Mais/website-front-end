export type FormData = {
  id: number;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
};

export interface FormSelect extends FormData {
  options: {
    id: number;
    title: string;
  }[];
}
