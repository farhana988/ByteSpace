export interface Course {
  title: string;
  image: string;
  lessons: string;
  time: string;
  comments: string;
  instructor: string;
  level: string;
  price: string;
  longevity: string;
  rating: string;
}
export interface CourseCardProps {
  course: Course;
}

export type CourseMetaProps = Pick<Course, "lessons" | "time" | "comments">;