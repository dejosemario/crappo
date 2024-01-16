import { Button } from "@/components/atom/Button/Button";
import Ivcard from "@/components/molecules/IvCard/IvCard";
import Footer from "@/components/organisms/Layouts/FooterLayout/Footer";
import HeroLayout from "@/components/organisms/Layouts/HeroSectionLayout/HeroLayout";
import IllustrationLayout from "@/components/organisms/Layouts/IllustrationLayout/IllustrationLayout";
import Header from "@/components/organisms/Layouts/Navlayout/Header";
import NavLayout from "@/components/organisms/Layouts/Navlayout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mt-[45px]  flex flex-col ">
      <Header />
      <HeroLayout />
      <IllustrationLayout />
      <Footer />
    </main>
  );
}
