import Post from "../entity/Post";
import { Query, Resolver } from "type-graphql";

@Resolver(Post)
class PostResolver {
  @Query(() => [Post])
  async getAllPosts() {
    return [{ content: "tést" }];
  }
}

export default PostResolver;
