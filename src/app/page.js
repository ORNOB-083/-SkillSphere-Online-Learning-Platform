import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";
import LearningTips from "@/components/LearningTips";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PopularCourses />
      <TopInstructors />
      <LearningTips />
    </div>
  );
}