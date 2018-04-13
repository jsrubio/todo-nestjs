import { Document, Schema } from 'mongoose';

import { Item } from '../item/item';

export interface List extends Document {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly lists: [List];
}
