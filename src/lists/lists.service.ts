import { Component, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Item } from '../model/schemas/item/item';
import { ItemSchema } from '../model/schemas/item/item.schema';
import { List } from '../model/schemas/list/list';
import { ListSchema } from '../model/schemas/list/list.schema';
import { ListDto } from './list.dto';

@Component()
export class ListsService {

  constructor(
    @InjectModel(ListSchema) private readonly listModel: Model<List>,
    @InjectModel(ItemSchema) private readonly itemModel: Model<Item>,
  ) { }

  async create(list: ListDto): Promise<List> {
    const createdList = new this.listModel(list);
    return await createdList.save();
  }

  async get(id: string): Promise<List> {
    const list = await this.listModel.findOne({ _id: id }).exec();
    if (!list) {
      throw new NotFoundException();
    }
    list.items = await this.itemModel.find({ list: list._id }).exec();
    return list;
  }

  async update(id: string, list: ListDto): Promise<List> {
    await this.listModel.findOneAndUpdate({ _id: id }, list).exec();
    return this.get(id);
  }

  async delete(id: string): Promise<List> {
    return await this.listModel.deleteOne({ _id: id }).exec();
  }
}
