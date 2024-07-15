import Image from "next/image";
import { DropdownType } from "../../types";
import downArrow from "../../../../assets/icons/selectArrow.svg";
import Link from "next/link";

type DesktopDropdownType = {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  dropdown: DropdownType;
};

interface MobileDropdownType extends DesktopDropdownType {
  handleMobileMenu: () => void;
}

type DropdownProps = (DesktopDropdownType & { variant: "desktop" }) | (MobileDropdownType & { variant: "mobile" });

function DesktopDropdown({ setShowDropdown, showDropdown, dropdown }: DesktopDropdownType) {
  return (
    <div
      key={dropdown.id}
      className={`flex flex-col text-pl sm:hidden h-[25px] w-fit items-center relative cursor-pointer`}
      onClick={() => setShowDropdown((prev) => !prev)}
    >
      <div className="flex gap-3 items-center ">
        {dropdown.title}
        <Image src={downArrow} alt="↓" className={`${showDropdown && "rotate-180"} duration-300 saturate-200`} />
      </div>
      <div
        className={`${
          showDropdown
            ? " bg-neutral-0 text-neutral-900 text-ps gap-y-3 p-6 visible w-[180px] top-10 -left-7 transition-spacing duration-200 shadow-lg drop-shadow-lg cursor-default"
            : "invisible w-0"
        } flex flex-col text-neutral-900 `}
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
  const { variant, dropdown, setShowDropdown, showDropdown } = props;

  if (variant === "mobile") {
    const { handleMobileMenu } = props as MobileDropdownType;
    return <MobileDropdown {...{ dropdown, handleMobileMenu, setShowDropdown, showDropdown }} />;
  }

  return <DesktopDropdown {...{ dropdown, setShowDropdown, showDropdown }} />;
}
