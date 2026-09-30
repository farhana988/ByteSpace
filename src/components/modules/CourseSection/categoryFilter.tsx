import { categories } from "@/data/courseData";

export function CategoryFilter() {
  return (
    <div className="mt-[42px] flex flex-wrap items-center justify-center gap-4">
      {categories.map((category, index) => {
        const isActive = index === 0;

        return (
          <button
            key={category}
            type="button"
            className={[
              "rounded-full px-4 py-2 lg:py-3 font-medium transition-colors text-sm lg:text-base",
              isActive
                ? "bg-primary hover:bg-[#060702]"
                : "bg-[#F5F5F6] text-black/80 hover:bg-[#ededed]",
            ].join(" ")}
          >
            {category}
          </button>
        );
      })}

      <button
        type="button"
        className="px-4 py-2 lg:py-3 font-medium text-secondary"
      >
        + More
      </button>
    </div>
  );
}
