"use client";
import { CourseEntity } from "@/entities/course/course";
import { CourseItem } from "./course-item";
import { coursesListApi } from "../_api";

export function CourseListClient({
  defaultList,
}: {
  defaultList: CourseEntity[];
}) {
  const { data: coursesList } = coursesListApi.coursesList.get.useQuery(
    undefined,
    {
      initialData: defaultList,
    },
  );

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}
