import { DataSource } from "typeorm";
import { Produto } from "./entities/Produto";

const PostGresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "orm",
  entities: [Produto],
  synchronize: true,
  logging: true,
});

PostGresDataSource.initialize()
  .then(() => {
    console.log("DataSource initialized");
  })
  .catch((err) => console.log(err));

export { PostGresDataSource };
