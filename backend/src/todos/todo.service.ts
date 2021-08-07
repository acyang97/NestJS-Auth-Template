import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AuthenticatedUser } from "../users/user.interface";
import { CreateTodoDto } from "./todo.dto";
import { Todo, TodoDoc } from "./todo.interface";

@Injectable()
export class TodoService {
  constructor(
    @InjectModel("Todo") private readonly todoModel: Model<TodoDoc>
  ) {}

  public async createTodo(
    user: AuthenticatedUser,
    createTodoDto: CreateTodoDto
  ) {
    const newTodo = new this.todoModel({
      user: user.username,
      task: createTodoDto.task,
      completed: createTodoDto.completed,
    });
    await newTodo.save();
    return newTodo;
  }
}
