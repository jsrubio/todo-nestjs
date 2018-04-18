import { Document, Schema } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly lists: [{
    type: Schema.Types.ObjectId, ref: 'List',
  }];
}
