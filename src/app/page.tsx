"use client";
import HeroBanner from "@/GlobalComponents/HeroBanner";
import About from "./Components/About";
import SocialImpact from "./Components/SocialImpact";
import DonateBanner from "./Components/DonateBanner";
import Feedbacks from "./Components/Feedbacks";
import bannerImage from "../../public/images/banner-bgs/home.png";
import bannerImageMobile from "../../public/images/banner-bgs/home_mobile.png";
import Button from "@/GlobalComponents/Button";
import { routes } from "./lib/routes";
import useWindowSize from "./lib/hooks/useWindowSize";

export default function Home() {
  const { width } = useWindowSize();
  return (
    <main>
      <HeroBanner
        image={width <= 768 ? bannerImageMobile.src : bannerImage.src}
        mobileSize="full"
        title="DIGNIDADE, ESPERANÇA E CONHECIMENTO"
        text={`Transformando a vida de crianças e\nadolescentes`}
      >
        <Button
          color="green-light"
          size="lg"
          rounded
          className="sm:w-52 sm:px-0 sm:self-center sm:flex hidden"
          link={routes.donate}
        >
          Doe Agora
        </Button>
      </HeroBanner>
      <About />
      <SocialImpact />
      <DonateBanner />
      <Feedbacks />
    </main>
  );
}
