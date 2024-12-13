import { DataSource } from "typeorm";
import Post from "../entity/Post";

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: process.env.POSTGRES_PASSWORD,
  database: "postgres",
  synchronize: true,
  logging: ["error", "query"],
  entities: [Post],
});
