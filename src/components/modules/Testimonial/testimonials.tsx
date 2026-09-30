import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonialData";

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg/Testimonials_bg.png')",
      }}
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-[57px] pt-[74px] xl:px-0">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-[44px]">
          <div>
            <h2 className="mt-5 max-w-[520px] font-heading text-[32px] font-bold leading-[1.25] text-black md:text-[42px]">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div>
            <p className="max-w-[580px] text-sm leading-[1.72] tracking-[-0.15px] text-[#4f4f4f] md:text-[18px]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-[72px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
