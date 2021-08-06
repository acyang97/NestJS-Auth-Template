import { CreateUserDto, LoginUserDto } from "src/users/user.dto";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
    getProfile(): Promise<string>;
}
