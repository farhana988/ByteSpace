import { courses } from "@/data/courseData";
import { CategoryFilter } from "./categoryFilter";
import { CourseCard } from "@/components/cards/courseCard";

export function CourseSection() {
  return (
    <section>
      {/* Heading */}
      <div className="text-center">
        <h1 className="font-heading text-xl md:text-[36px] xl:text-[44px] font-semibold tracking-[-0.7px] text-[#10152b]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h1>

        <p className="mt-4 text-xs md:text-sm xl:text-lg text-[#999]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different
          <br className="hidden sm:block" />
          fields, from technology to the arts, and make a difference in your
          career and life.
        </p>
      </div>

      {/* Categories */}
      <CategoryFilter />

      {/* Courses */}
      <div className="mt-[77px] grid grid-cols-1 gap-6 xl:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  );
}
