import { Schema } from 'mongoose';

import { BaseSchema } from '../base.schema';
import { ItemSchema } from '../item/item.schema';

export const ListSchema = new BaseSchema({
  userId: Schema.Types.ObjectId,
  title: String,
  items: [ItemSchema],
});