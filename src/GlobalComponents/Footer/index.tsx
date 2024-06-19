import Link from "next/link";
import logo from "../../assets/logo.png";
import FbLogo from "./fbIcon.svg";
import IgLogo from "./igIcon.svg";
import WppLogo from "./whatsappIcon.svg";
import Image from "next/image";

const navItems = [
  {
    id: 1,
    title: "Sobre nós",
    to: "/sobre-nos",
    subPages: [
      {
        title: "Atividades",
        to: "/sobre-nos/atividades",
      },
      {
        title: "História e Missão",
        to: "/sobre-nos/historia-e-missao",
      },
    ],
  },
  {
    id: 2,
    title: "Ajudar",
    to: "/ajudar",
    subPages: [
      {
        title: "Doações",
        to: "/ajudar/historia-e-missao",
      },
      {
        title: "Voluntariado",
        to: "/ajudar/atividades",
      },
      {
        title: "Parceria",
        to: "/ajudar/atividades",
      },
    ],
  },
  {
    id: 3,
    title: "Contato",
    to: "/contato",
    subPages: [],
  },
];
const social = [
  {
    id: 1,
    title: "facebook",
    to: "https://www.facebook.com/ong-mais",
    icon: FbLogo,
  },
  {
    id: 2,
    title: "instagram",
    to: "https://www.instagram.com/ong-mais",
    icon: IgLogo,
  },
  {
    id: 3,
    title: "whatsapp",
    to: "https://www.facebook.com/ong-mais",
    icon: WppLogo,
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col h-[530px] text-neutral-900">
      <div className="flex w-full h-1/2 bg-primary-100 items-center">
        <div id="marca" className="flex flex-col w-1/3 mx-r11 text-center gap-2 font-semibold">
          <img src={logo.src} alt="logo" className="w-12 self-center" />
          <p>Dona Veva, 305 , Coronel Aparício Borges</p>
          <p>91710-070, Porto Alegre - RS</p>
          <p>Telefone/WhatsApp (51) 98458-2931</p>
        </div>
        <nav className="flex w-2/3 gap-2 mr-r11  [&>*:nth-of-type(1)]:border-0">
          {navItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-3 h-fit border-l border-l-neutral-200 px-5">
              <Link href={item.to} className="font-bold text-pl ">
                {item.title}
              </Link>
              {item.subPages?.map((sub) => (
                <Link key={sub.title} href={sub.to} className="text-pm">
                  {sub.title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="w-full h-1/2  bg-primary-300 gap-5 flex flex-col justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
          {social.map((item) => (
            <Image src={item.icon} alt={item.title} key={item.id} />
          ))}
        </div>
        <p className="text-ps italic">© 2023 Ong Mais - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
