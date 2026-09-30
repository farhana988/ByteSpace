
import { CourseSection } from "@/components/modules/CourseSection/courseSection";
import HeroSection from "@/components/modules/Hero/HeroSection";
import LearningPaths from "@/components/modules/LearningPath/learningPaths";
import Overview from "@/components/modules/Overview/Overview";

const HomePage = async () => {
  return (
    <>
    <HeroSection />
    <section className="max-w-300 mx-auto mt-18">

    <CourseSection />
    <LearningPaths />
    </section>
    <Overview />  
    </>
  );
};

export default HomePage;