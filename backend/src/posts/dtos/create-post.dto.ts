import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';

@InputType()
export class CreatePostInput {
  @Field((type) => String)
  content: string;
}

@ObjectType()
export class CreatePostOutput extends Post {}
