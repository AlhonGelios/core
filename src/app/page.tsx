import { CourseList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1>Courses production</h1>
      <CreateCourseForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <CourseList revalidatePagePath="/" />
    </main>
  );
}
