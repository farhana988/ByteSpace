import { logos } from "@/types/hero.interface";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#F5F5F6]">
      <div className="flex min-h-[120px] lg:min-h-[202px] max-w-300 mx-auto items-center justify-center px-8 py-6">
        <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:justify-between">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center gap-[5px] text-[#858990]"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={40}
                height={40}
                className="h-[20px] w-[20px] object-contain lg:h-[40px] lg:w-[40px]"
              />

              <span className="font-heading text-[8px] font-bold tracking-[-0.35px] md:text-[12px] lg:text-base xl:text-2xl">
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
