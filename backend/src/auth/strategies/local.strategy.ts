import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

// Implementing our Passport local authentication strategy.
// Create a file called
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  //https://stackoverflow.com/questions/18138992/use-email-with-passport-local-previous-help-not-working
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: "email",
      passwordField: "password",
    });
  }

  // For each strategy, Passport will call the verify function
  // (implemented with the validate() method in @nestjs/passport)
  // using an appropriate strategy-specific set of parameters.
  // the validate method to override
  async validate(email: string, password: string): Promise<any> {
    // const email = username;
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
