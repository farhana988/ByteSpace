import Image from "next/image";
import BannerContent from "./BannerContent";
import UiUxCard from "./cards/UiUxCard";
import HappyStudentsCard from "./cards/HappyStudentsCard";
import LearningProgressCard from "./cards/LearningProgressCard";

const Banner = () => {
  return (
    <section className="relative mx-auto mt-30 h-225 w-360 overflow-hidden bg-[#003BE2]">
      {/* Background Circle */}
      <div className="absolute -bottom-90 left-1/2 z-0 -translate-x-1/2">
        <Image
          src="/circle.png"
          alt=""
          width={1150}
          height={1150}
          priority
          className="h-287.5 w-287.5 max-w-none object-contain"
        />
      </div>

      {/* Decorative Banner */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/banner.png"
          alt=""
          fill
          priority
          className="object-contain object-bottom"
        />
      </div>

      {/* Hero Content */}
      <BannerContent />

      {/* Person + Floating Cards */}
      <div className="absolute bottom-0 left-1/2 z-30 h-172.75 w-181 -translate-x-1/2">
        {/* Person */}
        <Image
          src="/banner-person.png"
          alt=""
          fill
          priority
          className="ml-16 object-contain object-bottom"
        />

        {/* Floating Cards */}
        <UiUxCard />
        <HappyStudentsCard />
        <LearningProgressCard />
      </div>
    </section>
  );
};

export default Banner;
