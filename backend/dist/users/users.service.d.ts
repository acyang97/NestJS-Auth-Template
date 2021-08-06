import { Model } from "mongoose";
import { CreateUserDto } from "./user.dto";
import { User, UserDoc } from "./user.interface";
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<UserDoc>);
    findOneByEmail(email: string): Promise<User>;
    createOne(createUserDto: CreateUserDto): Promise<User>;
}
