import { Document, Schema } from 'mongoose';

import { Item } from '../item/item';

export interface List extends Document {
  user: Schema.Types.ObjectId;
  title: string;
  items: Item[];
}
