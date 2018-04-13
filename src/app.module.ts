import { Module } from '@nestjs/common';
import { ModelModule } from 'model/model.module';

import { AppController } from './app.controller';

@Module({
  imports: [
    ModelModule,
  ],
  controllers: [
    AppController,
  ],
  components: [],
})
export class AppModule {}
