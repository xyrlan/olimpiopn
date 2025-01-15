import FraseSection from "./components/FraseSection/FraseSection";
import HeroSection from "./components/HeroSection/HeroSection";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <main>
        <HeroSection />
      </main>
      <FraseSection />
    </div>
  );
}
