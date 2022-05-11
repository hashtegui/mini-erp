import { DataSource } from "typeorm";

const PostGresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "orm",
  entities: ["./entities/*.ts"],
  synchronize: true,
});

PostGresDataSource.initialize()
  .then(() => {
    console.log("DataSource initialized");
  })
  .catch((err) => console.log(err));
