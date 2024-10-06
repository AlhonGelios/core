import { coursesRepository } from "../../entities/course/_repositories/courses";
import { CourseItem } from "./_ui/course-item";

export async function CourseList() {
  const coursesList = await coursesRepository.getCoursesList();

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}
