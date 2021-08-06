import { Document, Types } from "mongoose";
export interface User {
    email: string;
    username: string;
    password: string;
}
export interface UserDoc extends User, Document {
    _id: Types.ObjectId;
}
