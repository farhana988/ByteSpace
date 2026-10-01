import Image from "next/image";
import { courses } from "@/data/courseData";
import { CourseCard } from "@/components/cards/courseCard";
import LearningProgressCard from "../Banner/cards/LearningProgressCard";

const OverviewHeroVisual = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Course Card */}
      <div className="w-[375px] md:ml-52 lg:ml-0">
        {courses.slice(0, 1).map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      {/* Person */}
      <div className="absolute -bottom-[150px] md:-bottom-[210px] lg:-bottom-[130px] xl:-bottom-[145px]
       -right-[105px] xl:-right-[135px] z-0 
      h-[580px] xl:h-[680px] w-[490px] md:w-[590px] xl:w-[790px] overflow-hidden">
        <Image
          src="/images/overview/v-male.png"
          alt=""
          fill
          priority
          className="object-contain"
          sizes="360px"
        />
      </div>

      {/* Learning Progress */}
      <div className="absolute -right-12 xl:right-4 top-[700px] lg:top-[200px] xl:top-[220px] z-0">
        <LearningProgressCard />
      </div>

      {/* Vector */}
      <div className="absolute -right-16 xl:-right-2 top-[540px] lg:top-[67px] z-0 h-[215px] w-[215px]">
        <Image
          src="/images/overview/overview-vector11.png"
          alt=""
          fill
          className="object-contain"
          sizes="70px"
        />
      </div>
    </div>
  );
};

export default OverviewHeroVisual;
