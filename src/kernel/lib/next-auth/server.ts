import { ContainerModule } from "inversify";
import { SessionService } from "./_session-service";
import { NextAuthConfig } from "./_next-auth-config";

export const NextAuthModule = new ContainerModule((bind) => {
  bind(NextAuthConfig).toSelf();
  bind(SessionService).toSelf();
});

export { NextAuthConfig, SessionService };
