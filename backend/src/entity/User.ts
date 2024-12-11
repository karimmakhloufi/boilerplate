import { Field, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field()
  email: string;
}

export default User;
