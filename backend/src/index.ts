import "reflect-metadata";
import { buildSchema } from "type-graphql";
import UserResolver from "./resolver/UserResolver";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

console.log("hello world");
const start = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });
  const server = new ApolloServer({
    schema,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

start();
