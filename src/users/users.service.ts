import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ListSchema } from 'model/schemas/list/list.schema';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';

import { List } from '../model/schemas/list/list';
import { User } from '../model/schemas/user/user';
import { UserSchema } from '../model/schemas/user/user.schema';
import { UserDto } from './user.dto';

@Component()
export class UsersService {

  constructor(
    @InjectModel(UserSchema) private readonly userModel: Model<User>,
  ) { }

  async create(user: UserDto): Promise<User> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async get(id: string): Promise<User> {
    const List = mongoose.model('List', ListSchema);
    return await this.userModel.findOne({ _id: id })
      .populate('lists')
      .exec();
  }

  async update(id: string, user: UserDto): Promise<User> {
    await this.userModel.findOneAndUpdate({ _id: id }, user).exec();
    return this.get(id);
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.deleteOne({ _id: id }).exec();
  }
}
