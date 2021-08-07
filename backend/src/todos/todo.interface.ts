import { Document, Types } from "mongoose";
import { User } from "../users/user.interface";

// do bcrypt later
export interface Todo {
  user: string; // just the name or email
  task: string;
  completed: boolean;
}

export interface TodoDoc extends Todo, Document {
  _id: Types.ObjectId;
}
