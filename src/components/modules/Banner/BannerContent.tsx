import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const BannerContent = () => {
  return (
    <div className="relative z-20 flex h-full justify-center">
      <div className="text-center">
        {/* Heading */}
        <h1 className="mx-auto mt-12 text-balance font-heading text-[72px] font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[80px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* Description */}
        <p className="mt-12 text-lg text-pTag/80">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search */}
        <div className="mt-16 flex justify-center gap-6">
          <div className="flex w-115.25 items-center rounded-full border border-white/15 bg-white p-2 shadow-2xl backdrop-blur-xl">
            <Search className="ml-6 size-5 shrink-0 text-black/40" />

            <Input
              placeholder="Course, topic, creator"
              className="border-0 bg-transparent text-lg text-black shadow-none placeholder:text-black/35 focus-visible:ring-0"
            />
          </div>

          <Button
            type="button"
            className="h-12 w-26 rounded-full bg-primary text-lg text-black hover:bg-[#DFFF00] hover:text-black"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
