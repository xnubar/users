import { Injectable } from '@nestjs/common';
import { users } from '../../users.storage';

@Injectable()
export class UsersServiceV2 {
  findOne(id: number) {
    return users.find((user) => user.id === id);
  }
}
