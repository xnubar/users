import { Injectable } from '@nestjs/common';
import { users } from '../../users.storage';

@Injectable()
export class UsersServiceV1 {
  findOne(id: number) {
    const user = users.find((user) => user.id === id);
    return {
      id: user.id,
      name: user.name || null,
    };
  }
}
