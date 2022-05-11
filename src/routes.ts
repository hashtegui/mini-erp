import { Router } from "express";
import { PostGresDataSource } from "./app-data-source";
import { Produto } from "./entities/Produto";
import { ProdutoRepository } from "./repository/implementations/ProdutoRepository";

const router = Router();

router.get("/teste", (req, res) => {
  const prodRepository = PostGresDataSource.getRepository(Produto);
  const produto = new Produto("Produto 1", "7894689231212");
  new ProdutoRepository(prodRepository)
    .save(produto)
    .then(() => {
      console.log("Salvo com sucesso!");
    })
    .catch((err) => {
      console.log(err);
    });

  res.json({ message: "Hello World" });
});

export { router };
