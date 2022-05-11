import { PostGresDataSource } from "../app-data-source";
import { Produto } from "../entities/Produto";
import { ProdutoRepository } from "../repository/implementations/ProdutoRepository";

export class ProdutoService {

  constructor(private produtoRepository: ProdutoRepository) {
    this.produtoRepository = produtoRepository
  }

  salvar(produto: Produto) {
    this.produtoRepository.save(produto);
  }
}
