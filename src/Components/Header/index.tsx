import Link from "next/link";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="vw-100 flex h-20 bg-transparent justify-center items-center">
      <div>
        <img src={logo.src} alt="logo" className="w-14 h-14" />
      </div>
      <nav className="flex w-full h-full justify-center items-center">
        <Link href={"/"}>teste</Link>
        <Link href={"/"}>teste</Link>
      </nav>
    </header>
  );
}
