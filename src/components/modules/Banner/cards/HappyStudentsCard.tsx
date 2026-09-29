import Image from "next/image";
import FloatingCard from "../FloatingCard";

const HappyStudentsCard = () => {
  return (
    <FloatingCard className="bottom-[9%] left-[-3%] w-60">
      <p className=" text-black">Happy Students</p>

      <p className="mt-1 text-xs text-black/90">
        4.5 <span className="text-[#82868E]">(240) ⭐</span>
      </p>

      <div className="mt-2 flex items-center">
        <Image
          src="/Auto Layout Horizontal.png"
          alt="Happy students"
          width={230}
          height={40}
        />
      </div>
    </FloatingCard>
  );
};

export default HappyStudentsCard;
