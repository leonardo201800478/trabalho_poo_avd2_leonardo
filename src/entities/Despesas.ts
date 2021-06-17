//Tabela de despesas

import { Entity, PrimaryColumn, CreateDateColumn, Column, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm'

import { v4 as uuid } from 'uuid'

import { Responsavel } from './Responsavel'

@Entity('despesas')
class Despesas {

  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'responsaveis_id' })
  @ManyToOne(() => Responsavel)
  responsavel: Responsavel;

  @Column()
  responsaveis_id: string;

  @Column()
  local_compra: string;

  @Column()
  data_compra: Date;

  @Column()
  valor: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Despesas }