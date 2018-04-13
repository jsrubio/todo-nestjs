import { Document, Schema } from 'mongoose';

import { Item } from '../item/item';

export interface List extends Document {
  readonly userId: Schema.Types.ObjectId;
  readonly title: string;
  readonly items: [Item];
}
