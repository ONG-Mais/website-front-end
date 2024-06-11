import Link from "next/link";
import logo from "../../assets/logo.png";
import Container from "../Container";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="vw-100 flex h-24 bg-transparent items-center bg-primary-900">
      <div className="mx-r10 flex w-svw items-center">
        <Link href={"/"}>
          <img src={logo.src} alt="logo" className="w-16 h-16 self-start" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
