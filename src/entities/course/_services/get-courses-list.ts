import { coursesRepository } from "../_repositories/courses";

export class GetCoursesListService {
  async exec() {
    return coursesRepository.getCoursesList();
  }
}

export const getCoursesListService = new GetCoursesListService();
