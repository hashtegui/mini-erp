import { Entity, Column, PrimaryColumn } from "typeorm";

const uuid = require("uuid");

@Entity({ name: "pcprodut" })
export class Produto {
  @PrimaryColumn()
  private id: string;

  @Column({ unique: true })
  private codprod: number;

  @Column()
  private descricao: string;

  constructor(codprod: number, descricao: string, id?: string) {
    this.codprod = codprod;
    this.descricao = descricao;

    if (id) {
      this.id = id;
    } else {
      this.id = uuid();
    }
  }
}
