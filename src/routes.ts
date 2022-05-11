import { Router } from "express";
import { PostGresDataSource } from "./app-data-source";
import { Produto } from "./entities/Produto";
import { ProdutoRepository } from "./repository/implementations/ProdutoRepository";

const router = Router();

router.post("/produtos", async (req, res) => {
  const produto = req.body as Produto;
  const produtoRepository = new ProdutoRepository(PostGresDataSource.getRepository(Produto));

  const produtoSalvo = await produtoRepository.save(produto);

});

export { router };
