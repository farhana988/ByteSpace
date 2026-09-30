import Image from "next/image";

const logos = [
  "/images/hero/vector 1.png",
  "/images/hero/vector 2.png",
  "/images/hero/vector 3.png",
  "/images/hero/vector 4.png",
  "/images/hero/vector 5.png",
];

const HeroSection = () => {
  return (
    <div className="flex h-[202px]  items-center justify-center">
      <div className="flex w-full items-center justify-between px-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-[5px] text-[#858990]"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={40}
              height={40}
              className="w-[40px] h-[40px] object-contain"
            />

            <span className="text-2xl font-heading font-bold tracking-[-0.35px]">
              Logoipsum
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
