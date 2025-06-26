export type CourseStatus = "open" | "closed";

export interface Course {
  id: string;
  title: string;
  code: string;
  semester: string;
  status: CourseStatus;
  thumbnail?: string;
  isFavorite: boolean;
  description: string;
}
