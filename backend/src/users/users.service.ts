import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./user.dto";
import { User, UserDoc } from "./user.interface";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel("User") private readonly userModel: Model<UserDoc>
  ) {}

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }

  public async findOneByName(name: string): Promise<User> {
    return this.userModel
      .findOne({
        name,
      })
      .lean()
      .exec();
  }

  public async createOne(createUserDto: CreateUserDto): Promise<User> {
    if (await this.findOneByName(createUserDto.username)) {
      throw new Error("user already exist");
    }
    const newUser = new this.userModel({
      email: createUserDto.email,
      name: createUserDto.username,
      password: createUserDto.password,
    });
    newUser.password = await bcrypt.hash(createUserDto.password.toString(), 10);

    await newUser.save();
    return newUser;
  }
}
