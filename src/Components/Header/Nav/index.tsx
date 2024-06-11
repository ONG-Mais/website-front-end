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
    <nav className="flex gap-6 justify-center w-full">
      {links.map((link) => (
        <Link key={link.id} href={link.to}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
