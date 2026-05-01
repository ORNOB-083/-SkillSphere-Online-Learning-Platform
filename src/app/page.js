import HeroSection from "@/components/HeroSection";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      
      <TopInstructors></TopInstructors>
      <LearningTips></LearningTips>

    </div>
  );
}
