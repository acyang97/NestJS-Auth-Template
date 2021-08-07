import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CreateTodoDto } from "./todo.dto";
import { TodoService } from "./todo.service";

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {} // private readonly authService: AuthService // private readonly usersService: UsersService,

  @UseGuards(JwtAuthGuard)
  @Post("create")
  public async createTodo(
    @Request() req,
    @Body() createTodoDto: CreateTodoDto
  ) {
    return this.todoService.createTodo(req.user, createTodoDto);
  }
}
