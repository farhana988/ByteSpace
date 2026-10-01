import { courses } from "@/data/courseData";
import { CourseCard } from "../cards/courseCard";
import HappyStudentsCard from "../modules/Banner/cards/HappyStudentsCard";
import Image from "next/image";

export function LearningPreview() {
  return (
    <div className="absolute left-0 top-42 h-[500px] w-[438px] select-none">
      {/* BACK CARD */}
      <div className="absolute -left-3 top-[78px] rounded-[20px] p-[14px] text-[#15171b] shadow-sm">
        {courses.slice(1, 2).map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      {/* MAIN CARD */}
      <div className="absolute -right-[62px] top-0 w-[400px] rounded-[20px] p-[14px] text-[#15171b] shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        {courses.slice(2, 3).map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      {/* STUDENTS CARD */}
      <div className="absolute -bottom-18 -right-[69px] w-[254px] rounded-[17px] px-4 py-3 text-[#111] shadow-sm z-10">
        <HappyStudentsCard
          className="!bg-primary"
          imageSrc="/Auto Layout Horizontal 2.png"
        />
      </div>

      {/* NEON RING */}
      <div className="absolute left-[16px] top-0 h-[185px] w-[185px]">
        <Image src="/images/auth/ring.png" alt="" fill />
      </div>

      {/* NEON ARROW */}
      <div className="absolute -bottom-[102px] -left-[25px] h-[188px] w-[188px]">
        <Image src="/images/auth/Cone.png" alt="" fill />
      </div>

      {/* WHITE RIBBON */}
      <div className="absolute -bottom-[20px] -right-[85px] h-[175px] w-[175px] z-20">
        <Image src="/images/auth/line.png" alt="" fill />
      </div>
    </div>
  );
}
