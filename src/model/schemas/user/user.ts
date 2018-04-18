import { Document, Schema } from 'mongoose';

import { List } from '../list/list';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  lists: List[];
}
