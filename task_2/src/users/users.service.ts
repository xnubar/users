import { Injectable } from '@nestjs/common';
import { users } from './users.storage';

@Injectable()
export class UsersService {
  findOne(id: number) {
    return users.find((user) => user.id === id);
  }
}
