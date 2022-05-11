import { Produto } from "../../entities/Produto";
import { IProdutoRepository } from "../IProdutoRepository";

export class ProdutoRepository implements IProdutoRepository {
    get(id: string): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    save(produto: Produto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findByCodigo(codigo: number): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    

}