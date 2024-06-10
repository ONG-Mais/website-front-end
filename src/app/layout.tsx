import type { Metadata } from "next";
import "./globals.css";
import { lato } from "./font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
