import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ListSchema } from '../model/schemas/list/list.schema';
import { UserSchema } from '../model/schemas/user/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'List', schema: ListSchema },
    ]),
  ],
  controllers: [
    UsersController,
  ],
  components: [
    UsersService,
  ],
})
export class UsersModule {}
