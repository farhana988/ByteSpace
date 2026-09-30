import { Button } from "@/components/ui/button";
import React from "react";

const CTA = () => {
  return (
    <section
      className="relative isolate flex min-h-[320px] md:min-h-[260px] lg:min-h-[350px] xl:min-h-[488px] w-full items-center justify-center overflow-hidden md:bg-contain xl:bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg/CTA_bg.png')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1050px] flex-col items-center px-6 text-center">
        <h1 className="max-w-[650px] text-balance font-semibold font-heading leading-[1.2] tracking-[-1.5px] text-white text-[28px] lg:text-[36px] xl:text-[44px]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h1>

        <p className="my-[20px] xl:my-[40px] max-w-[960px] text-xs lg:text-sm xl:text-[18px] font-normal leading-[16px] lg:leading-[26px] tracking-[-0.1px] text-white/95">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a <br /> part of a
          community comprising over 10,000 local and international creators.
          Utilize our Course Editor, and showcase your <br /> expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>

        <Button className="h-[36px] lg:h-[45px] rounded-full bg-primary px-[20px] lg:px-[25px] text-sm lg:text-[18px] font-semibold text-gray-900 shadow-none transition-colors hover:bg-[#dfff00]/90">
          Join as Creator
        </Button>
      </div>
    </section>
  );
};

export default CTA;
