import { CoursesRepository } from "../_repositories/courses";
import { injectable } from "inversify";

@injectable()
export class GetCoursesListService {
  constructor(private coursesRepository: CoursesRepository) {}
  async exec() {
    return this.coursesRepository.getCoursesList();
  }
}
