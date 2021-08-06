import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { UserSchema } from "./user.model";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  controllers: [UsersController],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersModule {}
