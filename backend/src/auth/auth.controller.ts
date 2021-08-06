import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { CreateUserDto, LoginUserDto } from "src/users/user.dto";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post("register")
  public async register(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.createOne(createUserDto);
      return this.authService.login({
        email: user.email,
        password: createUserDto.password,
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // @UseGuards(LocalAuthGuard)
  @Post("login")
  public async login(@Body() loginUserDto: LoginUserDto) {
    // check for password next time
    console.log("called login");
    return this.authService.login(loginUserDto);
  }

  // test protected route
  @UseGuards(JwtAuthGuard)
  @Get("profile")
  public async getProfile(@Request() req) {
    return req.user;
  }
}
