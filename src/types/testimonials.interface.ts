export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}
export interface TestimonialCardProps {
  testimonial: Testimonial;
}
