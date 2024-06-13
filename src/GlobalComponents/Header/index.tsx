import Link from "next/link";
import logo from "../../assets/logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full flex h-24 bg-transparent items-center bg-transparent fixed top-0 left-0 z-50">
      <div className="mx-r11 flex w-svw items-center">
        <Link href={"/"}>
          <img src={logo.src} alt="logo" className="w-[4.5rem] h-16" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
