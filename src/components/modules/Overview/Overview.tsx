import OverviewCreator from "./OverviewCreator";
import OverviewHero from "./OverviewHero";

const Overview = () => {
  return (
    <section
      className="
        relative
        mt-[120px]
        overflow-hidden
        bg-[url('/images/bg/overview_bg.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      <div className="z-10 mx-auto max-w-300 pt-[120px]">
        <OverviewHero />
        <OverviewCreator />
      </div>
    </section>
  );
};

export default Overview;
