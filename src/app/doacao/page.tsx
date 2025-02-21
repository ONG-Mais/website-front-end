"use client";
import bannerImage from "../../../public/images/banner-bgs/donate.png";
import bannerImageMobile from "../../../public/images/banner-bgs/donate_mobile.png";
import qrCodeImage from "../../../public/images/qr_code.jpeg";
import whatsappIcon from "../../assets/icons/whatsappIcon.svg";
import HeroBanner from "@/GlobalComponents/HeroBanner";
import Container from "@/GlobalComponents/Container";
import Button from "@/GlobalComponents/Button";
import { externalLinks } from "../lib/externalLinks";
import useWindowSize from "../lib/hooks/useWindowSize";

export default function Page() {
  const { width } = useWindowSize();
  return (
    <>
      <HeroBanner
        image={width <= 768 ? bannerImageMobile.src : bannerImage.src}
        title="DOE AGORA"
        text={`Ajude a transformar a vida de crianças\nadolescentes!`}
        mobileSize="half"
      ></HeroBanner>
      <Container>
        <div className="flex flex-col justify-center items-center mt-px13 gap-8 mb-px8">
          <div className="flex flex-col gap-8 bg-neutral-100 items-center py-8 px-16 w-[500px] xs:w-[358px] rounded-xl sm:p-4 sm:px-8 ">
            <h3 className="text-h5 font-bold font-Mulish">Doe usando o pix</h3>
            <img src={qrCodeImage.src} alt="QR Code" className="w-60" />
            <p className="text-pl font-bold text-neutral-700">Chave pix: 44. 888. 110/0001-07</p>
          </div>
          <div className="flex flex-col gap-8 bg-neutral-100 items-center py-8 px-12 w-[500px] rounded-xl sm:gap-4 xs:px-6 xs:py-8 xs:w-[358px]">
            <h3 className="text-h5 font-bold font-Mulish">Doe por depósito bancário</h3>
            <div className="flex flex-col gap-4 text-neutral-700 font-bold text-pl sm:text-pm">
              <p>Banco: 748 - BancoCooperativo Sicredi S.A. - Bansicredi</p>
              <p>Razão Social: Associação de moradores Multiplicar Amor Incluir Saber</p>
              <p>CNPJ: 44.888.110/0001-07</p>
              <p>Agência: 0116</p>
              <p>Conta: 44336-4</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Button color="green-light" rounded link={externalLinks.whatsappURL} className="px-20 sm:px-12">
            <img src={whatsappIcon.src} alt="whatsapp logo" />
            Quero doar de outra forrma
          </Button>
        </div>
      </Container>
    </>
  );
}
