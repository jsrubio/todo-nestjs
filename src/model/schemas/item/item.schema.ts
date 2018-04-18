import { BaseSchema } from '../base.schema';
import { Schema } from 'mongoose';

export const ItemSchema = new BaseSchema({
  list: { type: Schema.Types.ObjectId, ref: 'List' },
  title: String,
  description: String,
  completed: Boolean,
});