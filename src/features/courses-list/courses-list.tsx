import { CourseListClient } from "./_ui/courses-list";
import { coursesListHttpApi } from "./api";

export async function CourseList() {
  const coursesList = await coursesListHttpApi.coursesList.get.query();

  return <CourseListClient defaultList={coursesList} />;
}
