import { Model } from "mongoose";
import { CreateUserDto } from "./user.dto";
import { User, UserDoc } from "./user.interface";
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<UserDoc>);
    findOneByName(name: string): Promise<User>;
    createOne(createUserDto: CreateUserDto): Promise<User>;
}
