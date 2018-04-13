import { BaseSchema } from '../base.schema';

export const ItemSchema = new BaseSchema({
  title: String,
  description: String,
  completed: Boolean,
});