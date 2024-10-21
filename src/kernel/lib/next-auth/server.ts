import { ContainerModule } from "inversify";
import { SessionService } from "./_session-service";
import { NextAuthConfig } from "./_next-auth-config";
export { CreateUserService } from "./_create-user-service";

export const NextAuthModule = new ContainerModule((bind) => {
  bind(NextAuthConfig).toSelf();
  bind(SessionService).toSelf();
});

export { NextAuthConfig, SessionService };
