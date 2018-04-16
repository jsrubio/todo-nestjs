import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from '../model/schemas/user/user.schema';
import { Model } from 'mongoose';
import { User } from '../model/schemas/user/user';

@Component()
export class UsersService {

  constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) { }

  async create(user): Promise<User> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async get(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id }).exec();
  }

  async update(user): Promise<User> {
    return await this.userModel.findOneAndUpdate({ _id: user._id }, user).exec();
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.deleteOne({ _id: id }).exec();
  }
}
