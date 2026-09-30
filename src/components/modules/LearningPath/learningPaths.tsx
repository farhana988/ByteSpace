"use client";

import LearningPathCard from "@/components/cards/LearningPathCard";
import { learningPaths } from "@/data/learningPaths.data";

export default function LearningPaths() {
  return (
    <div className="pt-[72px]">
      {/* Heading */}
      <div className="text-center">
        <h2 className="mx-auto max-w-[792px] font-heading text-[32px] font-semibold leading-[1.15] tracking-[-1.1px] text-[#080d20]">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        <p className="mx-auto mt-[18px] max-w-[920px] text-[16px] font-normal leading-[27px] text-[#92959e]">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various
          <br className="hidden md:block" />
          fields, ensuring there&apos;s something for everyone. Unleash your
          potential and explore our carefully curated categories.
        </p>
      </div>

      {/* Categories */}
      <div className="mt-[68px] grid grid-cols-2 justify-items-center gap-x-[40px] gap-y-5 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {learningPaths.map((category) => (
          <LearningPathCard key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
}
