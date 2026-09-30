import Image from "next/image";
import { courses } from "@/data/courseData";
import { CourseCard } from "@/components/cards/courseCard";
import LearningProgressCard from "../Banner/cards/LearningProgressCard";

const OverviewHeroVisual = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Course Card */}
      <div className="w-[375px]">
        {courses.slice(0, 1).map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      {/* Person */}
      <div className="absolute -bottom-[145px] -right-[135px] z-0 h-[680px] w-[790px] overflow-hidden">
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
      <div className="absolute right-4 top-[220px] z-0">
        <LearningProgressCard />
      </div>

      {/* Vector */}
      <div className="absolute -right-2 top-[67px] z-0 h-[215px] w-[215px]">
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
