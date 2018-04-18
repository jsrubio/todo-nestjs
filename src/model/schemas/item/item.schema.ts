import { Schema } from 'mongoose';

import { BaseSchema } from '../base.schema';

export const ItemSchema = new BaseSchema({
  list: Schema.Types.ObjectId,
  title: String,
  description: String,
  completed: Boolean,
});