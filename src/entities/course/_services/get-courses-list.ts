import { injectable } from "inversify";
import { coursesRepository } from "../_repositories/courses";

type GetCoursesList = {};

@injectable()
export class GetCoursesListService {
  async exec(data?: GetCoursesList) {
    return coursesRepository.getCoursesList();
  }
}
