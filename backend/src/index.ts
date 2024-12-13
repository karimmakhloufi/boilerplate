import "reflect-metadata";
import "dotenv/config";
import { buildSchema } from "type-graphql";
import PostResolver from "./resolver/PostResolver";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./config/db";

const start = async () => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [PostResolver],
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
