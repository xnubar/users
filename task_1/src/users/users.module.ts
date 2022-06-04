import { Module } from '@nestjs/common';
import { UsersServiceV1 } from './v1/services/users.service_v1';
import { UsersController } from './users.controller';
import { UsersServiceV2 } from './v2/services/users.service_v2';
@Module({
  controllers: [UsersController],
  providers: [UsersServiceV1, UsersServiceV2],
})
export class UsersModule {}
