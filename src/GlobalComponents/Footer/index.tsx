import Link from "next/link";
import logo from "../../assets/images/logo.png";
import FbLogo from "../../assets/icons/fbFooterIcon.svg";
import IgLogo from "../../assets/icons/igFooterIcon.svg";
import WppLogo from "../../assets/icons/whatsappFooterIcon.svg";
import Image from "next/image";
import { externalLinks } from "@/app/lib/externalLinks";
import { routes } from "@/app/lib/routes";
import { adressAndPhone } from "@/app/lib/adressAndPhone";

const navItems = [
  {
    id: 1,
    title: "Sobre nós",
    to: routes.whoAreWe,
    subPages: [
      {
        title: "História e Missão",
        to: `${routes.whoAreWe}#sobre-nos`,
      },
      {
        title: "Atividades",
        to: routes.whatWeDoHome,
      },
    ],
  },
  {
    id: 2,
    title: "Ajuda",
    to: routes.donate,
    subPages: [
      {
        title: "Doações",
        to: routes.donate,
      },
      {
        title: "Voluntariado",
        to: routes.volunteer,
      },
      {
        title: "Parceria",
        to: routes.partnerUp,
      },
    ],
  },
  {
    id: 3,
    title: "Contato",
    to: routes.contact,
  },
];
const social = [
  {
    id: 1,
    title: "facebook",
    to: externalLinks.facebookURL,
    icon: FbLogo,
  },
  {
    id: 2,
    title: "instagram",
    to: externalLinks.instagramURL,
    icon: IgLogo,
  },
  {
    id: 3,
    title: "whatsapp",
    to: externalLinks.whatsappURL,
    icon: WppLogo,
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col h-[530px] sm:h-fit text-neutral-900">
      <div className="flex sm:flex-col w-full h-1/2 bg-primary-100 items-center">
        <div
          id="marca"
          className="flex flex-col w-1/3 sm:w-full mx-r11 sm:mx-r6 text-center gap-2 font-semibold sm:text-pm sm:text-neutral-700 sm:border-b-neutral-400 sm:border-b sm:p-6"
        >
          <img src={logo.src} alt="logo" className="w-12 self-center sm:my-r4" />
          <p>{adressAndPhone.street}</p>
          <p>{adressAndPhone.CEP}</p>
          <p>{adressAndPhone.phone}</p>
        </div>
        <nav className="flex w-2/3 sm:w-full gap-2 mr-r11 sm:mx-r6 [&>*:nth-of-type(1)]:border-0 sm:text-start sm:py-6 sm:justify-center">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-3 h-fit border-l border-l-neutral-200 px-5 sm:p-2 sm:border-0"
            >
              <Link href={item.to} className="font-bold text-pl sm:text-pm ">
                {item.title}
              </Link>
              {item.subPages?.map((sub) => (
                <Link key={sub.title} href={sub.to} className="text-pm sm:text-ps sm:text-start">
                  {sub.title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="w-full h-1/2 sm:h-[150px] bg-primary-300 gap-5 flex flex-col justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
          {social.map((item) => (
            <a key={item.id} href={item.to} target="_blank" data-testid={item.title}>
              <Image src={item.icon} alt={item.title} key={item.id} className="hover:mix-blend-darken duration-300" />
            </a>
          ))}
        </div>
        <p className="text-ps italic">© 2024 ONG Mais - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
