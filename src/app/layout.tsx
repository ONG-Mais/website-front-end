import type { Metadata } from "next";
import "./global.css";
import { lato } from "./font";
import Header from "@/GlobalComponents/Header";
import Footer from "@/GlobalComponents/Footer";

export const metadata: Metadata = {
  title: "ONG Mais",
  description: "Mudando a vida dos jovens do RS",
  openGraph: {
    title: "ONG Mais",
    description: "Mudando a vida dos jovens do RS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="w-full overflow-x-hidden">
      <body className={`${lato.className} overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
