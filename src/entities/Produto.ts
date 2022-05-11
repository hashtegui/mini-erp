import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "pcprodut" })
export class Produto {
  @PrimaryGeneratedColumn("increment")
  private codprod: number;

  @Column()
  private descricao: string;

  @Column({
    unique: true,
    nullable: true,
    type: "bigint",
    comment: "Código de barras do produto",
  })
  private codigoDeBarras: string;

  constructor(descricao: string, codigodDeBarras: string) {
    this.descricao = descricao;
    this.codigoDeBarras = codigodDeBarras;
  }
}
