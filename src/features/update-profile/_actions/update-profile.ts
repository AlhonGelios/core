"use server";

import { z } from "zod";
import { profileSchema } from "@/entities/user/profile";
import { getAppSessionStrictServer } from "@/entities/user/get-app-session.server";
import { updateProfileUseCase } from "@/entities/user/profile.server";

const propsSchema = z.object({
  userId: z.string(),
  data: profileSchema.partial(),
});

const resultSchema = z.object({
  profile: profileSchema,
});

export const updateProfileAction = async (
  props: z.infer<typeof propsSchema>,
) => {
  const { userId, data } = propsSchema.parse(props);

  const session = await getAppSessionStrictServer();

  const user = await updateProfileUseCase.exec({ session, userId, data });

  return resultSchema.parseAsync({ profile: user });
};
