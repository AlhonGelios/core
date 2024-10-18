import { CourseEntitiModule } from "@/entities/course/server";
import { UserEntitiModule } from "@/entities/user/server";
import { CoursesListModule } from "@/features/courses-list/server";
import { Container } from "inversify";

export function init() {
  const container = new Container();

  container.load(CoursesListModule, CourseEntitiModule, UserEntitiModule);

  return container;
}
