import { Button } from "@/components/atom/Button/Button";
import Footer from "@/components/organisms/Layouts/FooterLayout/Footer";
import HeroLayout from "@/components/organisms/Layouts/HeroSectionLayout/HeroLayout";
import Header from "@/components/organisms/Layouts/Navlayout/Header";
import NavLayout from "@/components/organisms/Layouts/Navlayout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" mx-[120px] mt-[45px] ] flex min-h-screen flex-col items-center justify-between p-x-24">
      <Header />
      <HeroLayout />      
      <Footer />
    </main>
  );
}
