import ChooseUs from "@/components/ChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructers from "@/components/Instructers";
import MovingCards from "@/components/MovingCards";
import Webniers from "@/components/Webniers";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <FeaturedCourses />
    <ChooseUs />
    <MovingCards />
    <Webniers />
    <Instructers />
    <Footer />
    </>
  );
}
