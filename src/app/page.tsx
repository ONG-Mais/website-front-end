import Banner from "@/GlobalComponents/Banner";
import About from "./UI/About";
import SocialImpact from "./UI/SocialImpact";
import DonateBanner from "./UI/DonateBanner";
import Feedbacks from "./UI/Feedbacks";
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
