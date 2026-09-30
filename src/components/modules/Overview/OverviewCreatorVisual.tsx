import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import HappyStudentsCard from "../Banner/cards/HappyStudentsCard";

const OverviewCreatorVisual = () => {
  return (
    <div className="mx-auto h-[420px] w-full max-w-[530px]">
      {/* Total Revenue Card */}
      <Card className="relative -left-4 top-[75px] h-[112px] w-[235px] overflow-hidden rounded-[15px] border-0 bg-[#073de0] p-0 text-white shadow-none">
        <div className="p-[16px]">
          <div className="text-[16px] font-medium leading-[18px]">
            Total Revenue
          </div>

          <div className="mt-[1px] text-[10px] font-normal leading-[12px] text-gray-50">
            July 1-28
          </div>

          <div className="mt-[7px] flex items-center justify-between">
            <div className="text-[24px] font-heading leading-[26px] tracking-[-0.5px]">
              $120.29
            </div>

            <Badge className="mr-[1px] h-[23px] rounded-full border-0 bg-[#CBFC01] px-[10px] text-[9px] font-normal text-[#111] shadow-none hover:bg-[#baff00]">
              +12$
            </Badge>
          </div>

          {/* Progress */}
          <div className="absolute bottom-[14px] left-[15px] right-[15px] h-[7px] overflow-hidden rounded-full bg-[#f4f4f4]">
            <div className="h-full w-[52%] rounded-full bg-[#CBFC01]" />
          </div>
        </div>
      </Card>

      {/* Year to Date Card */}
      <Card className="relative -left-4 top-[110px] h-[127px] w-[126px] overflow-hidden rounded-[15px] border-0 bg-[#073de0] p-0 text-white shadow-none">
        <div className="p-[16px]">
          <div className="text-[16px] font-normal leading-[17px]">
            Year to Date
          </div>

          <div className="mt-[1px] text-[12px] font-normal leading-[12px] text-white/90">
            2023
          </div>

          <div className="mt-[8px] text-[24px] font-heading leading-[26px] tracking-[-0.5px]">
            $1,200.38
          </div>

          <Badge className="mt-[9px] h-[23px] rounded-full border-0 bg-[#CBFC01] px-[10px] text-[9px] font-normal text-[#111] shadow-none hover:bg-[#baff00]">
            +12$
          </Badge>
        </div>
      </Card>

      {/* Female Person */}
      <div className="absolute bottom-2 -left-28 z-0 h-[680px] w-[790px] overflow-hidden">
        <Image
          src="/images/overview/overview-female.png"
          alt=""
          fill
          priority
          className="object-contain"
          sizes="360px"
        />
      </div>

      {/* Happy Students Card */}
      <div className="absolute bottom-[180px] left-[270px] z-0">
        <HappyStudentsCard />
      </div>

      {/* Vector */}
      <div className="absolute left-[285px] top-[127px] z-0 h-[215px] w-[215px]">
        <Image
          src="/images/overview/overview-vector2.png"
          alt=""
          fill
          className="object-contain"
          sizes="70px"
        />
      </div>
    </div>
  );
};

export default OverviewCreatorVisual;
