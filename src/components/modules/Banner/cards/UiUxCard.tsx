import FloatingCard from "../FloatingCard";

const UiUxCard = () => {
  return (
    <FloatingCard className="left-[7%] top-[44%] w-52 h-17.5">
      <p className=" font-medium text-black">UI/UX Design</p>

      <p className="mt-1 text-xs text-gray-400 flex items-center gap-1 justify-between">
        <span>200 Courses</span>•<span>1000+ Students</span>
      </p>
    </FloatingCard>
  );
};

export default UiUxCard;
