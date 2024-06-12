import Button from "@/GlobalComponents/Button";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Quem Somos",
    to: "/quem-somos",
  },
  {
    id: 2,
    title: "O que fazemos",
    to: "/o-que-fazemos",
  },
  {
    id: 3,
    title: "Como ajudar",
    to: "/como-ajudar",
  },
  {
    id: 4,
    title: "Parceiros",
    to: "/parceiros",
  },
  {
    id: 5,
    title: "Contato",
    to: "/contato",
  },
];

export default function Nav() {
  return (
    <nav className="flex gap-8 justify-center w-full items-center h-full text-neutral-0">
      {links.map((link) => (
        <Link key={link.id} href={link.to}>
          {link.title}
        </Link>
      ))}
      <Button color="green-light" className="px-5" rounded>
        Doe Agora
      </Button>
    </nav>
  );
}
