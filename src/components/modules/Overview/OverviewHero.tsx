import Stat from "./Stat";
import OverviewHeroVisual from "./OverviewHeroVisual";

const OverviewHero = () => {
  return (
    <div className="relative grid items-start gap-10 xl:gap-20 lg:grid-cols-[1fr_1.05fr]">
      {/* Left content */}
      <div className="max-w-[550px] py-[74px]">
        <h1 className="text-[36px] xl:text-[44px] font-heading font-semibold leading-[1.08] tracking-[-1.8px] text-[#292b30]">
          Your Path to Professional
          <br />
          Growth Starts Here!
        </h1>

        <p className="my-5 xl:my-10 max-w-[477px] text-base xl:text-[18px] leading-[1.75] text-gray-700">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey.
          <br />
          Whether you are looking to sharpen specific skills, gain industry
          expertise, or embark on a new career path entirely, we have the
          resources you need.
        </p>

        <div className="flex gap-14">
          <Stat value="12K" label="Students" />
          <Stat value="70+" label="Courses" />
          <Stat value="16" label="Creators" />
        </div>
      </div>

      {/* Right visual */}
      <OverviewHeroVisual />
    </div>
  );
};

export default OverviewHero;
