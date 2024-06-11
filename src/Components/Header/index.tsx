import logo from "../../assets/logo.png";
import Container from "../Container";
import Nav from "./Nav";

export default function Header() {
  return (
    <Container>
      <header className="vw-100 flex h-20 bg-transparent items-center">
        <div className="flex items-start">
          <img src={logo.src} alt="logo" className="w-14 h-14" />
        </div>
        <Nav />
      </header>
    </Container>
  );
}
