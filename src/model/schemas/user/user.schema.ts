import { Schema } from 'mongoose';

import { BaseSchema } from '../base.schema';

export const UserSchema = new BaseSchema({
  username: String,
  email: String,
  password: String,
  lists: [{
    type: Schema.Types.ObjectId, ref: 'List',
  }],
});