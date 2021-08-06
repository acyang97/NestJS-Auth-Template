import { Document, Types } from "mongoose";

// do bcrypt later
export interface User {
  name: string;
  password: string;
}

export interface UserDoc extends User, Document {
  _id: Types.ObjectId;
}
