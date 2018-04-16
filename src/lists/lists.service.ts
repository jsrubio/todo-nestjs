import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { List } from '../model/schemas/list/list';
import { ListSchema } from '../model/schemas/list/list.schema';

@Component()
export class ListsService {

  constructor(@InjectModel(ListSchema) private readonly listModel: Model<List>) { }

  async create(list): Promise<List> {
    const createdList = new this.listModel(list);
    return await createdList.save();
  }

  async get(id: string): Promise<List> {
    return await this.listModel.findOne({ _id: id }).exec();
  }

  async update(list): Promise<List> {
    return await this.listModel.findOneAndUpdate({ _id: list._id }, list).exec();
  }

  async delete(id: string): Promise<List> {
    return await this.listModel.deleteOne({ _id: id }).exec();
  }
}
