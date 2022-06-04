import { Controller, Get, Param, Version } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Version('1')
  @Get(':id')
  findOneV1(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
