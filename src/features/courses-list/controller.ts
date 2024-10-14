import {
  createPublicServerApi,
  publicProcedure,
  router,
} from "@/kernel/lib/trpc/server";
import { compileMDX } from "@/shared/lib/mdx/server";
import { getCoursesListService } from "@/entities/course/course.server";
import { injectable } from "inversify";

@injectable()
export class CoursesListController {
  public router = router({
    coursesList: router({
      get: publicProcedure.query(async () => {
        const coursesList = await getCoursesListService.exec();

        const compiledCourses = await Promise.all(
          coursesList.map(async (course) => ({
            ...course,
            description: await compileMDX(course.description).then(
              (r) => r.code,
            ),
          })),
        );

        return compiledCourses;
      }),
    }),
  });
}
