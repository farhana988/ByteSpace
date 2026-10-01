import OverviewCreator from "./OverviewCreator";
import OverviewHero from "./OverviewHero";

const Overview = () => {
  return (
    <section
      className="px-6 xl:px-0
        relative
        mt-[120px]
        overflow-hidden
        bg-[url('/images/bg/overview_bg.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      <div className="z-10 mx-auto max-w-[400px] md:max-w-[744px] lg:max-w-[1000px] xl:max-w-300 pt-0 lg:pt-[120px]">
        <OverviewHero />
        <OverviewCreator />
      </div>
    </section>
  );
};

export default Overview;
