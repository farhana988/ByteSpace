
import { CourseSection } from "@/components/modules/CourseSection/courseSection";
import HeroSection from "@/components/modules/Hero/HeroSection";
import LearningPaths from "@/components/modules/LearningPath/learningPaths";

const HomePage = async () => {
  return (
    <>
    <HeroSection />
    <section className="max-w-300 mx-auto my-18">

    <CourseSection />
    <LearningPaths />
    </section>
    </>
  );
};

export default HomePage;