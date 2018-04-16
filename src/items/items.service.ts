import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from '../model/schemas/item/item';
import { ItemSchema } from '../model/schemas/item/item.schema';

@Component()
export class ItemsService {

  constructor(@InjectModel(ItemSchema) private readonly itemModel: Model<Item>) { }

  async create(item): Promise<Item> {
    const createdItem = new this.itemModel(item);
    return await createdItem.save();
  }

  async get(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id }).exec();
  }

  async update(item): Promise<Item> {
    return await this.itemModel.findOneAndUpdate({ _id: item._id }, item).exec();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.deleteOne({ _id: id }).exec();
  }
}
