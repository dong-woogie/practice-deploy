import { Query, Resolver } from '@nestjs/graphql';
import { getRepository } from 'typeorm';
import { User } from './entities/user.entity';

@Resolver((of) => User)
export class UsersResolver {
  @Query((returns) => Boolean)
  isUser() {
    return true;
  }

  // @Query((returns) => Boolean)
  // async getUsers() {
  //   const userRepo = getRepository(User);
  //   const users = await userRepo.find();
  //   console.log(users);

  //   return true;
  // }
}
