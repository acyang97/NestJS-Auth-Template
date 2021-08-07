import * as mongoose from "mongoose";

export const TodoSchema = new mongoose.Schema({
  user: { type: String, required: true },
  task: { type: String, required: true },
  completed: { type: Boolean, required: true },
});
