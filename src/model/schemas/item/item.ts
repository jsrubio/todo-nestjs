import { Document } from 'mongoose';

export interface Item extends Document {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}
