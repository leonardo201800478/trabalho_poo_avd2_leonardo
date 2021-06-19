import { getCustomRepository } from 'typeorm'
import { DespesasRepository } from '../repositories/DespesasRepository'

interface IDespesasCreate {
  responsaveis_id: string;
  local_compra: string;
  data_compra: Date;
  valor: number;
}

interface IDespesasUpdate {
  id: string;
  responsaveis_id: string;
  local_compra: string;
  data_compra: Date;
  valor: number;
}

interface IDespesasShow {
  id: string
}

class DespesasServices {
  async create({ responsaveis_id, local_compra, data_compra, valor }: IDespesasCreate) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = despesasRepository.create({
      responsaveis_id,
      local_compra,
      data_compra,
      valor
    })

    await despesasRepository.save(despesas)

    return despesas
  }
  async index() {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = await despesasRepository.find({
      relations: ['responsaveis']
    })

    return despesas
  }

  async show({ id }: IDespesasShow) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = await despesasRepository.findOne(id, {
      relations: ['responsaveis']
    })

    return despesas
  }

  async delete({ id }: IDespesasShow) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = await despesasRepository.findOne({ id })

    if (!despesas) {
      throw new Error('ID da despesa não encontrada!!!')
    }

    return await despesasRepository.delete({ id })
  }

  async update({ id, responsaveis_id, local_compra, data_compra, valor }: IDespesasUpdate) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    let despesasD = await despesasRepository.findOne({ id })

    if (!despesasD) {
      throw new Error('ID da despesa não encontrada!!!')
    }

    const despesasUpdated = await despesasRepository.update(id, {
      responsaveis_id,
      local_compra,
      data_compra,
      valor
    })

    despesasD = await despesasRepository.findOne(id)

    return despesasD
  }

}

export { DespesasServices }