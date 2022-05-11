import { Repository } from "typeorm";
import { Produto } from "../../entities/Produto";
import { IProdutoRepository } from "../IProdutoRepository";

export class ProdutoRepository implements IProdutoRepository {
  constructor(private produtoRepository: Repository<Produto>) {
    this.produtoRepository = produtoRepository;
  }

  get(id: string): Promise<Produto> {
    throw new Error("Method not implemented.");
  }
  async save(produto: Produto): Promise<void> {
    await this.produtoRepository.save(produto);
  }
  findByCodigo(codigo: number): Promise<Produto> {
    throw new Error("Method not implemented.");
  }
}
