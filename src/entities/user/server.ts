import { ContainerModule } from "inversify";
import { GetProfileService } from "./_services/get-profile";
import { ProfileRepository } from "./_repositories/profile";
import { UpdateProfileService } from "./_services/update-profile";

export const UserEntitiModule = new ContainerModule((bind) => {
  bind(GetProfileService).toSelf();
  bind(UpdateProfileService).toSelf();
  bind(ProfileRepository).toSelf();
});

export { UpdateProfileService, GetProfileService };
