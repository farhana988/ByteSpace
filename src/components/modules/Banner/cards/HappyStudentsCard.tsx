import Image from "next/image";
import FloatingCard from "../FloatingCard";

interface HappyStudentsCardProps {
  imageSrc?: string;
  className?: string;
}

const HappyStudentsCard = ({
  imageSrc = "/Auto Layout Horizontal.png",
  className = "",
}: HappyStudentsCardProps) => {
  return (
    <FloatingCard className={`bottom-[9%] left-[-3%] w-60 ${className} `}>
      <p className=" text-black">Happy Students</p>

      <p className="mt-1 text-xs text-black/90">
        4.5 <span className="text-[#82868E]">(240) ⭐</span>
      </p>

      <div className="mt-2 flex items-center">
        <Image src={imageSrc} alt="Happy students" width={230} height={40} />
      </div>
    </FloatingCard>
  );
};

export default HappyStudentsCard;
