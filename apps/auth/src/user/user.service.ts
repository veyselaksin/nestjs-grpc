import { Injectable } from '@nestjs/common';
import { CreateUserRequest, User } from '@app/common';

import * as UserData from './data/user.json';
import { Observable } from 'rxjs';
import { JsonDB } from '@app/common/utils/utils';

@Injectable()
export class UserService {
  private readonly users: User[] = UserData;

  create(request: CreateUserRequest): Observable<User> {
    const conn:JsonDB = new JsonDB("./data/user.json")
    const data = conn.read()
    data.push({
      ...request,
      id: randomUUID(),
      subscribed: false,
      socialMedia: request.socialMedia
    })
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  delete(id: string){
    return `This action removes a #${id} user`;
  }
}
