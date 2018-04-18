import { Schema } from 'mongoose';

import { BaseSchema } from '../base.schema';
import { ItemSchema } from '../item/item.schema';

export const ListSchema = new BaseSchema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  items: [{
    type: Schema.Types.ObjectId, ref: 'List',
  }],
});