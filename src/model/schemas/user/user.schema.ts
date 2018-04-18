import { BaseSchema } from '../base.schema';
import { ListSchema } from '../list/list.schema';
import { Schema } from 'mongoose';

export const UserSchema = new BaseSchema({
  username: String,
  email: String,
  password: String,
  lists: [ListSchema],
});