import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ItemSchema } from '../model/schemas/item/item.schema';
import { ListSchema } from '../model/schemas/list/list.schema';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Item', schema: ItemSchema },
    ]),
  ],
  controllers: [
    ItemsController,
  ],
  components: [
    ItemsService,
  ],
})
export class ItemsModule {}
