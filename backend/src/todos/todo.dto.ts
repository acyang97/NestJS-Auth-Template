import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  task: string;

  @IsBoolean()
  completed: boolean;
}
