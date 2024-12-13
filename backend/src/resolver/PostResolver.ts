import { dataSource } from "../config/db";
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
  async searchPosts(@Arg("keyword") keyword: String) {
    const sql = `SELECT * FROM post WHERE unaccent(post.content) ILIKE unaccent($1)`;
    const result = await dataSource.query(sql, [`%${keyword}%`]);
    return result;
  }

  @Mutation(() => String)
  async createPost(@Arg("data") newPostData: NewPostInput) {
    await Post.save({ ...newPostData });
    return "Post Created";
  }
}

export default PostResolver;
