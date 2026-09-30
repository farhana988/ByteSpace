import { CourseMetaProps } from "@/types/course.interface";

export function CourseMeta({ lessons, time, comments }: CourseMetaProps) {
  const items = [lessons, time, comments];

  return (
    <div className="absolute inset-x-0 bottom-5 flex items-center justify-between gap-1 px-[8px] xl:px-[13px] text-[9px] xl:text-[12px] text-white">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-[#F6F6F6]/60 px-3 py-1.5 text-black/70 backdrop-blur-[2px]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
