import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [],
  providers: [UsersResolver],
  exports: [],
})
export class UsersModule {}
