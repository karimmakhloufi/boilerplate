import Post from "../entity/Post";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class NewPostInput implements Partial<Post> {
  @Field()
  content: string;
}

@Resolver(Post)
class PostResolver {
  @Query(() => [Post])
  async getAllPosts() {
    return await Post.find();
  }

  @Mutation(() => String)
  async createPost(@Arg("data") newPostData: NewPostInput) {
    await Post.save({ ...newPostData });
    return "Post Created";
  }
}

export default PostResolver;
