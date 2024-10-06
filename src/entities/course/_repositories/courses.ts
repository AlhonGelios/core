import { cache } from "react";
import { CourseEntity } from "../_domaim/types";

class CoursesRepository {
  getCoursesList = cache(async (): Promise<CourseEntity[]> => {
    return [
      {
        id: "asjcbjabskjc",
        slug: "hey",
        description: "description",
        name: "name",
      },
    ];
  });
}

export const coursesRepository = new CoursesRepository();
