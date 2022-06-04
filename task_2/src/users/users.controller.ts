import { Controller, Get, Param, Version } from '@nestjs/common';
import { UsersServiceV1 } from './v1/services/users.service_v1';
import { UsersServiceV2 } from './v2/services/users.service_v2';

@Controller('users')
export class UsersController {
  constructor(private readonly userServiceV1: UsersServiceV1,
    private readonly userServiceV2: UsersServiceV2,
  ) { }

  @Version('1')
  @Get(':id')
  findOneV1(@Param('id') id: string) {
    return this.userServiceV1.findOne(+id);
  }

  @Version('2')
  @Get(':id')
  findOneV2(@Param('id') id: string) {
    return this.userServiceV2.findOne(+id);
  }
}
