import User from "../entity/User";
import { Query, Resolver } from "type-graphql";

@Resolver(User)
class UserResolver {
  @Query(() => [User])
  async getAllUsers() {
    return [{ email: "user@email.com" }];
  }
}

export default UserResolver;
