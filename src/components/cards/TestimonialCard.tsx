import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialCardProps } from "@/types/testimonials.interface";

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="rounded-[21px] border-none px-2 py-6">
      <CardContent>
        {/* Profile Image */}
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        {/* Name & Role */}
        <div className="mt-[21px]">
          <h3 className="font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.4px] text-black">
            {testimonial.name}
          </h3>

          <p className="mt-[5px] text-[18px] leading-[1.2] text-[#155cff]">
            {testimonial.role}
          </p>
        </div>

        {/* Testimonial */}
        <p className="mt-6 text-sm leading-[1.72] tracking-[-0.12px] text-[#5b5b5b] md:text-[18px]">
          {testimonial.quote}
        </p>
      </CardContent>
    </Card>
  );
}
