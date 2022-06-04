import { Injectable } from '@nestjs/common';
import { users } from '../../users.storage';

@Injectable()
export class UsersServiceV2 {
  findOne(id: number) {
    const response = users.find((user) => user.id === id);
    let user;
    if (response.name) {
      const [firstName, lastName] = response.name.split(' ');
      delete response.name;
      user = { ...response, firstName, lastName };
    } else {
      user = response;
    }
    return user;
  }
}
