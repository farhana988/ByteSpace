import { CheckCircle2 } from "lucide-react";
import OverviewCreatorVisual from "./OverviewCreatorVisual";
import { creatorFeatures } from "@/data/overviewData";

const OverviewCreator = () => {
  return (
    <div className="relative mt-24 grid items-start gap-20 pb-[120px] lg:grid-cols-[1fr_1fr]">
      {/* Left visual */}
      <OverviewCreatorVisual />

      {/* Right text */}
      <div className="max-w-[520px] py-[104px]">
        <h2 className="text-[44px] font-heading font-semibold leading-[1.08] tracking-[-1.6px] text-[#292b30]">
          Create &amp; Manage
          <br />
          Courses Easily.
        </h2>

        <p className="my-10 max-w-[574px] text-[18px] leading-[1.75] text-gray-700">
          <b className="text-gray-950">ByteSpace</b> supports individuals or
          entities in the creation, publication, and administration of
          educational courses.
        </p>

        <div className="space-y-3">
          {creatorFeatures.map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <CheckCircle2 className="h-[24px] w-[24px] fill-secondary stroke-white" />

              <span className="text-[18px] font-semibold text-gray-900">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewCreator;
