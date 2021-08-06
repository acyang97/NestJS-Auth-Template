import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

// Implementing our Passport local authentication strategy.
// Create a file called
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  // the constructor that can have the options or smt.
  constructor(private readonly authService: AuthService) {
    super();
  }

  // For each strategy, Passport will call the verify function
  // (implemented with the validate() method in @nestjs/passport)
  // using an appropriate strategy-specific set of parameters.
  // the validate method to override
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
