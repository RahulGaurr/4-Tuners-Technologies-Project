import HeroSectionMntn from "./components/HeroSectionMntn";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-hero-pattern 2xl:container max-w-7xl mx-auto font-serif">   
      <HeroSectionMntn />
      <Cards />
      <Footer />    
    </div>
  );
}
