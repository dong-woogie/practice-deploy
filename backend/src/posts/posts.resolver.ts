import { CreatePostInput, CreatePostOutput } from './dtos/create-post.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { getRepository } from 'typeorm';
import { Post } from './entities/post.entity';

@Resolver((of) => Post)
export class PostsResolver {
  @Query((returns) => [Post])
  async getPosts() {
    // const postRepo = getRepository(Post);
    // const posts = await postRepo.find();
    // return posts;
    return [];
  }

  // @Mutation((returns) => CreatePostOutput)
  // async createPost(
  //   @Args('input') createPostInput: CreatePostInput,
  // ): Promise<CreatePostOutput> {
  //   const post = new Post();
  //   const postRepo = getRepository(Post);

  //   post.content = createPostInput.content;

  //   const newPost = await postRepo.save(post);
  //   return newPost;
  // }
}
