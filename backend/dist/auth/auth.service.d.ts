import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from "src/users/user.dto";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(loginUserDto: LoginUserDto): Promise<{
        token: string;
    }>;
}
