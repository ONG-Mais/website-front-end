import Banner from "@/GlobalComponents/Banner";
import About from "./Components/About";
import SocialImpact from "./Components/SocialImpact";
import DonateBanner from "./Components/DonateBanner";
import Feedbacks from "./Components/Feedbacks";
export default function Home() {
  return (
    <main>
      <Banner
        image={"/images/criança_pintando.jpg"}
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
