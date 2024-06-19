import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import {
  UserServiceController,
  CreateUserRequest,
  FindUserByIdRequest,
  Empty,
  FindAllUsersResponse, User, Pagination, UserServiceControllerMethods,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController{
  constructor(private readonly userService: UserService) {}

  createUser(request:CreateUserRequest): Promise<User> | Observable<User> | User {
    return undefined;
  }

  findAllUsers(request: Empty): Promise<FindAllUsersResponse> | Observable<FindAllUsersResponse> | FindAllUsersResponse {
    return undefined;
  }

  findUserById(request: FindUserByIdRequest): Promise<User> | Observable<User> | User {
    return undefined;
  }

  updateUser(request: User): Promise<User> | Observable<User> | User {
    return undefined;
  }

  deleteUser(request: FindUserByIdRequest): Promise<Empty> | Observable<Empty> | Empty {
    return this.userService.delete(request.id);
  }

  queryUser(request: Observable<Pagination>): Observable<FindAllUsersResponse> {
    return undefined;
  }

}
