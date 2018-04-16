import { BaseSchema } from '../base.schema';
import { Schema } from 'mongoose';

export const ItemSchema = new BaseSchema({
  listId: Schema.Types.ObjectId,
  title: String,
  description: String,
  completed: Boolean,
});