import { Document } from 'mongoose';
import { List } from '../list/list';

export interface User extends Document {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly lists: [List];
}
