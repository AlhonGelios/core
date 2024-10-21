import { injectable } from "inversify";
import { SessionService } from "../next-auth/server";

@injectable()
export class ContextFactory {
  constructor(private sessionService: SessionService) {}

  createContext = async () => {
    const session = await this.sessionService.get();

    return {
      session,
    };
  };
}
