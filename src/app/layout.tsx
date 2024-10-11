import type { Metadata } from "next";
import "./global.css";
import { lato } from "./font";
import Header from "@/GlobalComponents/Header";
import Footer from "@/GlobalComponents/Footer";
import Script from "next/script";
import { CSPostHogProvider } from "./providers";

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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W80VK7F70E"></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W80VK7F70E');
          `}
        </Script>
      </head>
      <CSPostHogProvider>
        <body className={`${lato.className} overflow-x-hidden`}>
          <Header />
          {children}
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
