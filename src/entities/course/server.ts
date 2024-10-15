import { ContainerModule } from "inversify";
import { GetCoursesListService } from "./_services/get-courses-list";
import { CoursesRepository } from "./_repositories/courses";

export const CourseEntitiModule = new ContainerModule((bind) => {
  bind(GetCoursesListService).toSelf();
  bind(CoursesRepository).toSelf();
});

export { GetCoursesListService };
