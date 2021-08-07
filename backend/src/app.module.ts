import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { TodoModule } from "./todos/todo.module";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TodoModule,
    MongooseModule.forRoot(
      "mongodb+srv://admin:admin@cluster0.qggw1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
