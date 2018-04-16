import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ModelModule } from './model/model.module';
import { UsersModule } from './users/users.module';
import { ListsModule } from './lists/lists.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ModelModule,
    UsersModule,
    ListsModule,
    ItemsModule,
  ],
  controllers: [
    AppController,
  ],
  components: [],
})
export class AppModule {}
