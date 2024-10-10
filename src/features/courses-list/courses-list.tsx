import { compileMDX } from "@/shared/lib/mdx/server";
import { coursesRepository } from "../../entities/course/_repositories/courses";
import { CourseItem } from "./_ui/course-item";

export async function CourseList() {
  const coursesList = await coursesRepository.getCoursesList();

  const compiledCourses = await Promise.all(
    coursesList.map(async (course) => ({
      ...course,
      description: await compileMDX(course.description).then((r) => r.code),
    })),
  );

  return (
    <div className="flex flex-col gap-3">
      {compiledCourses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}
