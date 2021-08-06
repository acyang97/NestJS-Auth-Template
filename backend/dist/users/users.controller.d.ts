import { User } from "./user.interface";
import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getOneByName(name: string): Promise<User>;
}
