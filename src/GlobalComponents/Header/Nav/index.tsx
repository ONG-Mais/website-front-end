import Button from "@/GlobalComponents/Button";
import Link from "next/link";
import { routes } from "@/app/lib/routes";
const links = [
  {
    id: 1,
    title: "Quem Somos",
    to: routes.whoAreWe,
  },
  {
    id: 2,
    title: "O que fazemos",
    to: routes.whatWeDo.main,
  },
  {
    id: 3,
    title: "Como ajudar",
    to: "/como-ajudar",
  },
  {
    id: 4,
    title: "Parceiros",
    to: routes.associates,
  },
  {
    id: 5,
    title: "Contato",
    to: routes.contact,
  },
];

export default function Nav() {
  return (
    <nav className="flex gap-10 justify-end w-full items-center h-full text-neutral-0">
      {links.map((link) => (
        <Link key={link.id} href={link.to} className="text-pl">
          {link.title}
        </Link>
      ))}
      <Button color="green-light" className="px-5" rounded link={routes.donate}>
        Doe agora
      </Button>
    </nav>
  );
}
