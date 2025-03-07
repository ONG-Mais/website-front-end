import Image from "next/image";
import { DropdownType } from "../../types";
import downArrow from "../../../../assets/icons/selectArrow.svg";
import Link from "next/link";

type DesktopDropdownType = {
  dropdown: DropdownType;
};

interface MobileDropdownType extends DesktopDropdownType {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  handleMobileMenu: () => void;
}

type DropdownProps = (DesktopDropdownType & { variant: "desktop" }) | (MobileDropdownType & { variant: "mobile" });

function DesktopDropdown({ dropdown }: DesktopDropdownType) {
  return (
    <div
      key={dropdown.id}
      className={`header-desktop-dropdown-title flex flex-col text-pl sm:hidden h-[25px] w-[145px] items-center relative cursor-pointer group`}
    >
      <div className="flex gap-3 items-center hover:text-primary-300 ">
        {dropdown.title}
        <Image src={downArrow} alt="↓" className={`group-hover:rotate-180 duration-300 `} />
      </div>
      <div
        className={`invisible w-0 h-0 flex flex-col text-neutral-900 
          group-hover:bg-neutral-0 group-hover:text-ps group-hover:gap-y-3 group-hover:p-6 
          group-hover:visible group-hover:h-72 group-hover:w-[180px] group-hover:top-10 group-hover:-left-7 
          group-hover:transition-spacing group-hover:duration-300 group-hover:shadow-lg group-hover:drop-shadow-lg 
          group-hover:cursor-default `}
      >
        {dropdown.links.map((link) => (
          <Link
            href={link.to}
            key={link.id}
            className="py-2 px-1 hover:bg-primary-300 transition-bgAndSpacing duration-200 "
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileDropdown({ dropdown, setShowDropdown, showDropdown, handleMobileMenu }: MobileDropdownType) {
  return (
    <div key={dropdown.id} className={`flex flex-col ${showDropdown ? "pb-2" : "border-b border-b-neutral-200 py-5"} `}>
      <div
        role="button"
        tabIndex={0}
        id="dorpdown-title"
        onClick={() => setShowDropdown((prev) => !prev)}
        className="flex w-full justify-between"
      >
        <p className={`text-pl font-semibold w-full ${showDropdown && "border-b border-b-neutral-200 py-5"}`}>
          {dropdown.title}
        </p>
        <Image
          src={downArrow}
          alt="↓"
          className={`${showDropdown && "border-t border-t-neutral-200 py-5 rotate-180"}`}
        />
      </div>
      <div id="dropdown-menu" className={`${showDropdown ? "flex flex-col" : "hidden"}`}>
        {dropdown.links.map((link) => (
          <Link
            key={link.id}
            href={link.to}
            onClick={() => handleMobileMenu()}
            className="text-pm border-b border-b-neutral-200 py-3"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Dropdown(props: DropdownProps) {
  const { variant, dropdown } = props;

  if (variant === "mobile") {
    const { setShowDropdown, showDropdown, handleMobileMenu } = props as MobileDropdownType;
    return <MobileDropdown {...{ dropdown, handleMobileMenu, setShowDropdown, showDropdown }} />;
  }

  return <DesktopDropdown {...{ dropdown }} />;
}
