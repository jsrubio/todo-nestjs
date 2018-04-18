import { Document, Schema } from 'mongoose';

export interface List extends Document {
  readonly user: Schema.Types.ObjectId;
  readonly title: string;
  readonly items: [{
    type: Schema.Types.ObjectId, ref: 'Item',
  }];
}
