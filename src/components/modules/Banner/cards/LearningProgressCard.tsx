import FloatingCard from "../FloatingCard";

const LearningProgressCard = () => {
  return (
    <FloatingCard className="right-[2.5%] top-[45%] w-56">
      <p className="text-sm font-medium text-black">
        Learning Progress
      </p>

      <h3 className="mt-2 text-5xl font-extrabold text-black/80 font-heading">
        55%
      </h3>

      <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
        <div className="h-full w-[55%] rounded-full bg-primary" />
      </div>
    </FloatingCard>
  );
};

export default LearningProgressCard;
