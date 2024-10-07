import { cache } from "react";
import { CourseEntity } from "../_domaim/types";
import { fetchManifest } from "@/shared/api/content";
import { privateConfig } from "@/shared/config/private";

class CoursesRepository {
  getCoursesList = cache(async (): Promise<CourseEntity[]> => {
    const manifest = await fetchManifest();
    console.log(manifest);

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
