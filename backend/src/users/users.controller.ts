import { Controller } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("user")
export class UsersController {
  constructor(private readonly userService: UsersService) {} // private readonly authService: AuthService // private readonly usersService: UsersService,
}
