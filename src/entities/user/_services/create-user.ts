import { CreateUserService } from "@/kernel/lib/next-auth/server";
import { ROLES, SharedUser } from "@/kernel/domain/user";
import { injectable } from "inversify";
import { UserRepository } from "../_repositories/user";
import { AdapterUser } from "next-auth/adapters";
import { privateConfig } from "@/shared/config/private";
import { createId } from "@/shared/lib/id";

@injectable()
export class CreateUserServiceImpl implements CreateUserService {
  constructor(private userRepository: UserRepository) {}
  async exec(data: Omit<AdapterUser, "id">): Promise<AdapterUser> {
    const adminEmails = privateConfig.ADMIN_EMAILS?.split(",") ?? [];
    const role = adminEmails.includes(data.email) ? ROLES.ADMIN : ROLES.USER;

    const user: SharedUser = {
      id: createId(),
      ...data,
      role,
    };

    const res = await this.userRepository.create(user);

    return { ...res, emailVerified: res.emailVerified ?? null };
  }
}
