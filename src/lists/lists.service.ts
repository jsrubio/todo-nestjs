import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { List } from '../model/schemas/list/list';
import { ListSchema } from '../model/schemas/list/list.schema';
import { ListDto } from './list.dto';

@Component()
export class ListsService {

  constructor(
    @InjectModel(ListSchema) private readonly listModel: Model<List>,
  ) { }

  async create(list: ListDto): Promise<List> {
    const createdList = new this.listModel(list);
    return await createdList.save();
  }

  async get(id: string): Promise<List> {
    return await this.listModel.findOne({ _id: id })
      .populate({
        path: 'items',
        model: 'Item',
      })
      .exec();
  }

  async update(id: string, list: ListDto): Promise<List> {
    await this.listModel.findOneAndUpdate({ _id: id }, list).exec();
    return this.get(id);
  }

  async delete(id: string): Promise<List> {
    return await this.listModel.deleteOne({ _id: id }).exec();
  }
}
