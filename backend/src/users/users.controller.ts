import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { LocalAuthGuard } from "src/auth/guards/local-auth.guard";
import { CreateUserDto, LoginUserDto } from "./user.dto";
import { User } from "./user.interface";
import { UsersService } from "./users.service";

@Controller("user")
export class UsersController {
  constructor(private readonly userService: UsersService) {} // private readonly authService: AuthService // private readonly usersService: UsersService,

  // @UseGuards(LocalAuthGuard)
  // @Post("register")
  // public async register(@Body() createUserDto: CreateUserDto) {
  //   if (await this.usersService.findOneByName(createUserDto.name)) {
  //     throw new Error("User already exist");
  //   }
  //   try {
  //     const user = await this.usersService.createOne(createUserDto);
  //     await this.authService.login(user);
  //   } catch (err) {
  //     throw new Error(err.message);
  //   }

  //   // return this.authService.login(req.user);
  // }

  // @UseGuards(LocalAuthGuard)
  // @Post("login")
  // public async login(@Body() loginUserDto: LoginUserDto) {
  //   // check for password next time
  //   const user = await this.usersService.findOneByName(loginUserDto.name);
  //   return this.authService.login(user);
  // }

  // // test
  // @UseGuards(JwtAuthGuard)
  // @Get("profile")
  // public async getProfile(@Request() req) {
  //   return req.user;
  // }
}
