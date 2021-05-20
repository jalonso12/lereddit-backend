import { Post } from '../entities/Post';
import { MyContext } from 'src/types';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class PostResolver {
  // GETALL
  @Query(() => [Post])
  getPosts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }

  //GETONE
  @Query(() => Post, { nullable: true })
  getPost(
    @Arg('id', () => Int) _id: number,
    @Ctx() { em }: MyContext
  ): Promise<Post | null> {
    return em.findOne(Post, { _id });
  }

  //CREATE
  @Mutation(() => Post)
  async createPost(
    @Arg('title', () => String) title: String,
    @Ctx() { em }: MyContext
  ): Promise<Post> {
    const post = em.create(Post, { title });
    await em.persistAndFlush(post);
    return post;
  }
}
