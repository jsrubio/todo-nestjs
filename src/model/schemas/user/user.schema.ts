import { BaseSchema } from '../base.schema';
import { ListSchema } from '../list/list.schema';

export const UserSchema = new BaseSchema({
  username: String,
  email: String,
  password: String,
  lists: [ListSchema],
});