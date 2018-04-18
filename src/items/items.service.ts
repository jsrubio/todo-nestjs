import { Component, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Item } from '../model/schemas/item/item';
import { ItemSchema } from '../model/schemas/item/item.schema';
import { ItemDto } from './item.dto';

@Component()
export class ItemsService {

  constructor(@InjectModel(ItemSchema) private readonly itemModel: Model<Item>) { }

  async create(item: ItemDto): Promise<Item> {
    const createdItem = new this.itemModel({ ...item, completed: false });
    return await createdItem.save();
  }

  async get(id: string): Promise<Item> {
    const item = await this.itemModel.findOne({ _id: id }).exec();
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  async update(id: string, item: ItemDto): Promise<Item> {
    return await this.itemModel.findOneAndUpdate({ _id: id}, item).exec();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.deleteOne({ _id: id }).exec();
  }
}
