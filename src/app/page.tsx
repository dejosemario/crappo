import { Button } from "@/components/atom/Button/Button";
import StartCard from "@/components/molecules/StartCard/StartCard";
import CryptLayout from "@/components/organisms/Layouts/CryptLayout/CryptLayout";
import Footer from "@/components/organisms/Layouts/FooterLayout/Footer";
import HeroLayout from "@/components/organisms/Layouts/HeroSectionLayout/HeroLayout";
import IllustrationLayout from "@/components/organisms/Layouts/IllustrationLayout/IllustrationLayout";
import MarketLayout from "@/components/organisms/Layouts/MarketLayout/MarketLayout";
import Header from "@/components/organisms/Layouts/Navlayout/Header";

export default function Home() {
  return (
    <main>
      <div className="container mt-[45px] mb-[60px] flex flex-col overflow-hidden">
        <Header />
        <HeroLayout />
        <IllustrationLayout />
      </div>
      <CryptLayout />
      <MarketLayout />
      <StartCard />
      <div className="container mt-[45px] flex flex-col ">
        <Footer />
      </div>
    </main>
  );
}
