import { createApi, createHttpApi } from "@/kernel/lib/trpc/client";
import { CoursesListController } from "./controller";

export const coursesListApi = createApi<CoursesListController["router"]>();

export const coursesListHttpApi =
  createHttpApi<CoursesListController["router"]>();
