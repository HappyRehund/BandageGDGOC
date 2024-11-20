import BestSellerProducts from "@/components/layout/BestsellerProducts";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import Path from "@/components/layout/Path";


export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Path />
      <HeroSection />
      <BestSellerProducts />
    </>
  );
}
