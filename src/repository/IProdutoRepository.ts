import { Produto } from "../entities/Produto";

export interface IProdutoRepository {
    get(id: string): Promise<Produto>;
    save(produto: Produto): Promise<void>;
    findByCodigo(codigo: number): Promise<Produto>;

}