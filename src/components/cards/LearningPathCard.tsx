import { LearningPathCardProps } from "@/types/learningPath.interface";
import Image from "next/image";

export default function LearningPathCard({ category }: LearningPathCardProps) {
  return (
    <button
      type="button"
      className="
        group
        flex
        h-[167px]
        w-full
        max-w-[167px]
        flex-col
        items-center
        justify-center
        rounded-[22px]
        border
        border-[#d6d8dd]
        px-[52px]
        py-[36px]
        transition-all
        duration-200
        hover:border-[#c9ff00]
        hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)]
        focus:outline-none
        focus:ring-2
        focus:ring-[#c9ff00]
        focus:ring-offset-2
      "
    >
      {/* Image */}
      <div className="bg-primary rounded-full p-[12px]">
        <div className="relative h-[36px] w-[36px] overflow-hidden">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="
              object-cover
              transition-transform
              duration-200
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Label */}
      <span className="mt-[13px] whitespace-nowrap text-[20px] font-semibold leading-[22px] tracking-[-0.35px] text-[#242424]">
        {category.title}
      </span>
    </button>
  );
}
