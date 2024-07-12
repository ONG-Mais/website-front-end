import HeroBanner from "@/GlobalComponents/HeroBanner";
import About from "./Components/About";
import SocialImpact from "./Components/SocialImpact";
import DonateBanner from "./Components/DonateBanner";
import Feedbacks from "./Components/Feedbacks";
import bannerImage from "../../public/images/criança_pintando.jpg";

export default function Home() {
  return (
    <main>
      <HeroBanner
        image={bannerImage.src}
        title="DIGNIDADE, ESPERANÇA E CONHECIMENTO"
        text="Transformando a vida de crianças e adolescentes"
      />
      <About />
      <SocialImpact />
      <DonateBanner />
      <Feedbacks />
    </main>
  );
}
