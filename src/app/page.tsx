import HeroBanner from "@/GlobalComponents/HeroBanner";
import About from "./Components/About";
import SocialImpact from "./Components/SocialImpact";
import DonateBanner from "./Components/DonateBanner";
import Feedbacks from "./Components/Feedbacks";
import bannerImage from "../../public/images/criança_pintando.jpg";
import Button from "@/GlobalComponents/Button";
import { routes } from "./lib/routes";

export default function Home() {
  return (
    <main>
      <HeroBanner
        image={bannerImage.src}
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
