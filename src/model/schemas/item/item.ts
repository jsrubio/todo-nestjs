import { Document, Schema } from 'mongoose';

export interface Item extends Document {
  readonly listId: Schema.Types.ObjectId;
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}
