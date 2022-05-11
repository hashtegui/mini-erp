import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "pcprodut" })
export class Produto {
  @PrimaryGeneratedColumn("increment")
  codprod!: number;

  @Column()
  descricao!: string;

  @Column({
    name: "codauxiliar",
    unique: true,
    nullable: true,
    type: "bigint",
    comment: "Código de barras do produto",
  })
  codigoDeBarras!: string;
}
