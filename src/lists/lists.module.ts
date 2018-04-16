import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListSchema } from '../model/schemas/list/list.schema';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'List', schema: ListSchema },
    ]),
  ],
  controllers: [
    ListsController,
  ],
  components: [
    ListsService,
  ],
})
export class ListsModule {}
