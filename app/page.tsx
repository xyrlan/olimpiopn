import AboutSection from "./components/AboutSection.tsx/AboutSection";
import FraseSection from "./components/FraseSection/FraseSection";
import HeroSection from "./components/HomeSection/HeroSection";


export default function Home() {
  
  return (
    <div className="">
      <main>
        <HeroSection />
      </main>
      <FraseSection />
      <AboutSection />
    </div>
  );
}
