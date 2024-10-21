import "reflect-metadata";

import { CourseEntitiModule } from "@/entities/course/server";
import { UserEntitiModule } from "@/entities/user/server";
import { CoursesListModule } from "@/features/courses-list/server";
import { UpdateProfileModule } from "@/features/update-profile/server";
import { NextAuthModule } from "@/kernel/lib/next-auth/server";
import { Container } from "inversify";

export function createServer() {
  const container = new Container();

  container.load(
    CoursesListModule,
    CourseEntitiModule,
    UserEntitiModule,
    UpdateProfileModule,
    NextAuthModule,
  );

  return container;
}

export const server = createServer();
