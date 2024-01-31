import { Button } from "@/components/atom/Button/Button";
import StartCard from "@/components/molecules/StartCard/StartCard";
import CryptLayout from "@/components/organisms/Layouts/CryptLayout/CryptLayout";
import Footer from "@/components/organisms/Layouts/FooterLayout/Footer";
import HeroLayout from "@/components/organisms/Layouts/HeroSectionLayout/HeroLayout";
import IllustrationLayout from "@/components/organisms/Layouts/IllustrationLayout/IllustrationLayout";
import MarketLayout from "@/components/organisms/Layouts/MarketLayout/MarketLayout";
import React from "react";
import Header from "@/components/organisms/Layouts/Navlayout/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container mt-[1.5625rem] md:mt-[2.8125rem] mb-[3.75rem] flex flex-col overflow-hidden">
        <HeroLayout />
        <IllustrationLayout />
      </div>
      <CryptLayout />
      <MarketLayout />
      <StartCard />
      <div className="container mt-[2.8125rem] flex flex-col ">
        <Footer />
      </div>
    </main>
  );
}
