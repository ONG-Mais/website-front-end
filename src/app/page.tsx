import Banner from "@/GlobalComponents/Banner";
export default function Home() {
  return (
    <main>
      <Banner
        image={"/images/criança_pintando.jpg"}
        title="DIGNIDADE, ESPERANÇA E CONHECIMENTO"
        text="Transformando a vida de crianças e adolescentes"
        absolute={{ top: "0", left: "0" }}
      />
    </main>
  );
}
