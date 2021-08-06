import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.interface";
import { LoginUserDto } from "src/users/user.dto";
import * as bcrypt from "bcrypt";

// job of retrieving a user and veryfying the password
// create a validateuser method for this
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  // in a real application, we use bcrypt
  async validateUser(name: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByName(name);
    const isMatch = await bcrypt.compare(password, user.password.toString());
    if (isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.usersService.findOneByName(loginUserDto.username);
    if (!user) {
      throw new Error("User does not exist");
    }
    const isMatch = await bcrypt.compare(
      loginUserDto.password,
      user.password.toString()
    );
    if (!isMatch) {
      throw new Error("Invalid Password");
    }

    const payload = { username: user.name };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
