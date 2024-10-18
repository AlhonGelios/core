import { Profile } from "../_domain/types";
import { SharedSession, UserId } from "@/kernel/domain/user";
import { injectable } from "inversify";
import { ProfileRepository } from "../_repositories/profile";

type UpdateProfile = {
  userId: UserId;
  data: Partial<Profile>;
  session: SharedSession;
};

@injectable()
export class UpdateProfileService {
  constructor(private profileRepository: ProfileRepository) {}
  async exec({ userId, data }: UpdateProfile): Promise<Profile> {
    return await this.profileRepository.update(userId, data);
  }
}
