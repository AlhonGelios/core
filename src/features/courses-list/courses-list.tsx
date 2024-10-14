import { CourseListClient } from "./_ui/courses-list";
import { coursesListServerApi } from "./controller";

export async function CourseList() {
  const coursesList = await coursesListServerApi.coursesList.get.fetch();

  return <CourseListClient defaultList={coursesList} />;
}
