import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CourseMeta } from "../modules/CourseSection/courseMeta";
import { CourseCardProps } from "@/types/course.interface";

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group overflow-hidden rounded-[24px] border-[#CED0D3] p-4 shadow-none">
      {/* Image */}
      <div className="relative overflow-hidden rounded-[9px]">
        <Image
          src={course.image}
          alt={course.title}
          width={341}
          height={195}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        <CourseMeta
          lessons={course.lessons}
          time={course.time}
          comments={course.comments}
        />
      </div>

      {/* Content */}
      <div className="py-1">
        {/* Title + Rating */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-[18px] xl:text-[20px] font-semibold leading-[17px] text-[#171717]">
            {course.title}
          </h3>

          <div className="flex shrink-0 items-center gap-1 text-[18px] text-[#777]">
            <span>{course.rating}</span>

            <Star
              className="h-4 w-4 fill-[#CED0D3] stroke-[#CED0D3]"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Instructor */}
        <p className="mt-1 text-[12px] leading-[12px] text-[#8c8c8c]">
          by{" "}
          <span className="font-medium text-[#003BE2]">
            {course.instructor}
          </span>
        </p>

        {/* Level + Students */}
        <div className="mt-4 flex h-8 items-center gap-3">
          <Badge
            variant="secondary"
            className="h-8 rounded-full bg-[#f5f5f5] px-3 py-1.5 text-[12px] font-normal text-[#656565] hover:bg-[#f5f5f5]"
          >
            <Image
              src="/images/course/signal.png"
              alt=""
              width={12}
              height={12}
            />

            <span className="ml-1">{course.level}</span>
          </Badge>

          <Image
            src="/images/course/course-person.png"
            alt="Course students"
            width={128}
            height={32}
          />
        </div>

        {/* Price */}
        <div className="mt-5 flex items-baseline gap-[3px]">
          <span className="text-[20px] font-bold text-[#003BE2]">
            {course.price}
          </span>

          <span className="text-[12px] text-[#777]">/{course.longevity}</span>
        </div>
      </div>
    </Card>
  );
}
