import { GetCoursesListService } from "@/entities/course/course.server";
import { CoursesListController } from "@/features/courses-list/controller";
import { Container } from "inversify";

export function init() {
  const container = new Container();

  container.bind(CoursesListController).toSelf();
  container.bind(GetCoursesListService).toSelf();

  return container;
}
