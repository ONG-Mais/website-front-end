import Link from "next/link";
import logo from "../../assets/logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-svw flex h-24 bg-transparent items-center bg-transparent">
      <div className="mx-r11 flex w-svw items-center">
        <Link href={"/"}>
          <img src={logo.src} alt="logo" className="w-16 h-16 self-start" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
