import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TodoController } from "./todo.controller";
import { TodoSchema } from "./todo.model";
import { TodoService } from "./todo.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Todo", schema: TodoSchema }])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
