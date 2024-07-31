export type link = {
  id: number;
  title: string;
  to: string;
};

export interface DropdownType extends Omit<link, "to"> {
  links: link[];
}

export function isLink(obj: any): obj is link {
  return (obj as link).to !== undefined;
}

export function isDropdown(obj: any): obj is DropdownType {
  return (obj as DropdownType).links !== undefined;
}
