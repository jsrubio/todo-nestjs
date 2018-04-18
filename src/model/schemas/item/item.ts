import { Document, Schema } from 'mongoose';

export interface Item extends Document {
  list: Schema.Types.ObjectId,
  title: string;
  description: string;
  completed: boolean;
}
