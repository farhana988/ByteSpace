
import { CourseSection } from "@/components/modules/CourseSection/courseSection";
import CTA from "@/components/modules/CTA/CTA";
import HeroSection from "@/components/modules/Hero/HeroSection";
import LearningPaths from "@/components/modules/LearningPath/learningPaths";
import Overview from "@/components/modules/Overview/Overview";

const HomePage = async () => {
  return (
    <>
    <HeroSection />
    <section className="max-w-300 mx-auto mt-18 px-6 xl:px-0">

    <CourseSection />
    <LearningPaths />
    </section>
    <Overview />  
    <CTA/>
    </>
  );
};

export default HomePage;