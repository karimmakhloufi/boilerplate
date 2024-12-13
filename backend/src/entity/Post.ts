import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Post {
  @Field()
  content: string;
}

export default Post;
